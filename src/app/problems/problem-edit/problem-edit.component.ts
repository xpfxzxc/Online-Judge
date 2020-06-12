import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  MatChipInputEvent,
  MatAutocompleteSelectedEvent,
} from "@angular/material";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
} from "@angular/forms";
import { Subject } from "rxjs";
import { startWith, map, takeUntil, finalize } from "rxjs/operators";

import { TitleService } from "src/app/services/title.service";
import { Tag } from "src/app/tags/tag.model";
import {
  InsertProblemGQL,
  DeleteProblemGQL,
  UpdateProblemGQL,
  UploadTestSetGQL,
} from "src/app/generated/graphql";
import { AlertService } from "src/app/services/alert.service";
import { ProblemEditData } from "./problem-edit-data.model";
import { Sample } from "../sample.model";

@Component({
  selector: "oj-problem-edit",
  templateUrl: "./problem-edit.component.html",
  styleUrls: ["./problem-edit.component.scss"],
})
export class ProblemEditComponent implements OnInit {
  deleting = false;
  id: number;
  problemForm: FormGroup;
  saving = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tagFormControl = new FormControl("");
  tags: Tag[] = [];
  filteredTags = this.tagFormControl.valueChanges.pipe(
    startWith(null),
    map((value: string | null) =>
      value ? this._filterTag(value) : this._restTags.slice()
    )
  );
  uploading = false;
  timeLimit: number;
  memoryLimit: number;

  @ViewChild("tagInput", { static: false }) tagInput: ElementRef<
    HTMLInputElement
  >;

  private _restTags: Tag[];
  private _unsubscribeSubject = new Subject<void>();
  private _uploadedFile: File;

  constructor(
    private _titleService: TitleService,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _insertProblemGQL: InsertProblemGQL,
    private _deleteProblemGQL: DeleteProblemGQL,
    private _updateProblemGQL: UpdateProblemGQL,
    private _uploadTestSetGQL: UploadTestSetGQL,
    private _alertService: AlertService,
    private _router: Router
  ) {}

  addSample() {
    this.samples.push(
      this._fb.group({
        input: "",
        output: "",
        explanation: "",
      })
    );
  }

  addTag(event: MatChipInputEvent) {
    const { input, value } = event;
    const tagInRestTagsIndex = this._restTags.findIndex(
      (tag) => tag.name.toLowerCase() === value.toLowerCase()
    );

    if (tagInRestTagsIndex !== -1) {
      this.tags.push(this._restTags[tagInRestTagsIndex]);
      this.problemForm.controls["tagIds"].setValue(
        this._extractTagIds(this.tags)
      );
      this._restTags.splice(tagInRestTagsIndex, 1);
      input.value = "";
      this.tagFormControl.setValue(null);
    }
  }

  delete() {
    if (confirm("确定删除?")) {
      this.deleting = true;

      this._deleteProblemGQL
        .mutate({
          id: this.id,
        })
        .pipe(
          takeUntil(this._unsubscribeSubject),
          finalize(() => {
            this.deleting = false;
          })
        )
        .subscribe(({ data, errors }) => {
          if (data) {
            this._router.navigateByUrl("/problems");
          }

          if (errors) {
            this._alertService.error(errors[0].message);
          }
        });
    }
  }

  isNew() {
    return this.id === 0;
  }

  ngOnInit() {
    this._titleService.setTitle("编辑题目");
    this.id = +this._route.snapshot.paramMap.get("id");

    this._route.data.subscribe((data: { problemEditData: ProblemEditData }) => {
      const p = data.problemEditData.problem;
      const pTag = data.problemEditData.problem.tags;
      const allTags = data.problemEditData.tags;
      const samplesFormControls = (JSON.parse(p.samples) as Sample[]).map(
        (sample) =>
          this._fb.group({
            input: sample.input,
            output: sample.output,
            explanation: sample.explanation,
          })
      );

      this._restTags = allTags.filter(
        (tag) => !pTag.find((t) => t.id === tag.id)
      );
      this.tags = p.tags;
      this.problemForm = this._fb.group({
        id: [{ value: p.id, disabled: p.id === 0 }],
        title: [p.title, [Validators.required]],
        background: [p.background],
        description: [p.description, [Validators.required]],
        inputFormat: [p.inputFormat, [Validators.required]],
        outputFormat: [p.outputFormat, [Validators.required]],
        samples: this._fb.array(samplesFormControls),
        note: [p.note],
        tagIds: [p.tags.map((tag) => tag.id)],
        difficulty: [
          p.difficulty,
          [Validators.required, Validators.min(1), Validators.max(10)],
        ],
        status: [
          p.status,
          [
            Validators.required,
            Validators.pattern(/^private|public|for-contest$/),
          ],
        ],
      });

      this.timeLimit = data.problemEditData.problem.timeLimit;
      this.memoryLimit = data.problemEditData.problem.memoryLimit;
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeSubject.next();
    this._unsubscribeSubject.complete();
  }

  onFileChange(files: File[]) {
    this._uploadedFile = files.length > 0 ? files[0] : null;
    console.log(files);
  }

  removeSample(index: number) {
    this.samples.removeAt(index);
  }

  removeTag(tag: Tag): void {
    this.tags = this.tags.filter((tag2) => tag2.id !== tag.id);
    this.problemForm.controls["tagIds"].setValue(
      this._extractTagIds(this.tags)
    );
    this._restTags.push(tag);
  }

  get samples() {
    return this.problemForm.get("samples") as FormArray;
  }

  save() {
    if (this.problemForm.invalid) {
      return;
    }

    this.saving = true;

    const value = this.problemForm.value;

    if (this.isNew()) {
      this._insertProblemGQL
        .mutate({
          title: value.title,
          background: value.background,
          description: value.description,
          input_format: value.inputFormat,
          output_format: value.outputFormat,
          samples: JSON.stringify(value.samples),
          note: value.note,
          difficulty: value.difficulty,
          problem_tags: (value.tagIds as []).map((id) => ({ tag_id: id })),
          status: value.status,
        })
        .pipe(
          takeUntil(this._unsubscribeSubject),
          finalize(() => {
            this.saving = false;
          })
        )
        .subscribe(({ data, errors }) => {
          if (data) {
            const problemId = data.insert_problem.returning[0].id;

            this._router.navigate(["/problems", problemId]);
          }

          if (errors) {
            this._alertService.error(errors[0].message);
          }
        });
    } else {
      this._updateProblemGQL
        .mutate({
          id: value.id,
          title: value.title,
          background: value.background,
          description: value.description,
          input_format: value.inputFormat,
          output_format: value.outputFormat,
          samples: JSON.stringify(value.samples),
          note: value.note,
          difficulty: value.difficulty,
          status: value.status,
        })
        .pipe(
          takeUntil(this._unsubscribeSubject),
          finalize(() => {
            this.saving = false;
          })
        )
        .subscribe(({ data, errors }) => {
          if (data) {
            const problemId = data.update_problem.returning[0].id;

            this._router.navigate(["/problems", problemId]);
          }

          if (errors) {
            this._alertService.error(errors[0].message);
          }
        });
    }
  }

  tagSelected(event: MatAutocompleteSelectedEvent): void {
    const tagName = event.option.value;
    const tagInRestTagsIndex = this._restTags.findIndex(
      (tag) => tag.name === tagName
    );

    this.tags.push(this._restTags[tagInRestTagsIndex]);
    this.problemForm.controls["tagIds"].setValue(
      this._extractTagIds(this.tags)
    );
    this._restTags.splice(tagInRestTagsIndex, 1);
    this.tagInput.nativeElement.value = "";
    this.tagFormControl.setValue(null);
  }

  async upload() {
    if (!this._uploadedFile) {
      return;
    }

    this.uploading = true;

    const base64str = await this._toBase64(this._uploadedFile);
    this._uploadTestSetGQL
      .mutate({
        base64str,
        problem_id: this.id,
      })
      .pipe(
        takeUntil(this._unsubscribeSubject),
        finalize(() => {
          this.uploading = false;
        })
      )
      .subscribe(({ data, errors }) => {
        if (data) {
          this.timeLimit = data.upload_test_set.time_limit;
          this.memoryLimit = data.upload_test_set.memory_limit;
          this._alertService.success("测试集上传成功");
        }

        if (errors) {
          this._alertService.userInputError(errors[0].extensions.invalidArgs);
        }
      });
  }

  private _extractTagIds(tags: Tag[]) {
    return this.tags.map((tag) => tag.id);
  }

  private _filterTag(value: string) {
    const filteredValue = value.toLowerCase();

    return this._restTags.filter((tag) =>
      tag.name.toLowerCase().includes(filteredValue)
    );
  }

  private _toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.toString());
      reader.onerror = (error) => reject(error);
    });
  }
}

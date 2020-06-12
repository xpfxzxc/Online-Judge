import { Tag } from "src/app/tags/tag.model";
import { Sample } from "../sample.model";

export interface ProblemDetailData {
  id: number;
  title: string;
  background: string;
  description: string;
  difficulty: number;
  status: "private" | "public" | "for-contest";
  inputFormat: string;
  outputFormat: string;
  note: string;
  tags: Tag[];
  samples: Sample[];
  acceptedCount: number;
  positiveCount: number;
  mySubmissionCount: number;
  timeLimit: number;
  memoryLimit: number;
  author: {
    id: number;
    name: string;
  };
}

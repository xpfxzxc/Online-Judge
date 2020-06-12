import { Tag } from "src/app/tags/tag.model";

export interface ProblemEditData {
  problem: {
    id: number;
    title: string;
    background: string;
    description: string;
    difficulty: number;
    status: "private" | "public" | "for-contest";
    inputFormat: string;
    outputFormat: string;
    timeLimit: number;
    memoryLimit: number;
    note: string;
    tags: Tag[];
    samples: string;
  };
  tags: Tag[];
}

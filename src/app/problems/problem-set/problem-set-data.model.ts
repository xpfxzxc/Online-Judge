import { Tag } from "src/app/tags/tag.model";

export interface ProblemSetData {
  totalCount: number;
  problems: [
    {
      id: number;
      title: string;
      tags: Tag[];
      positiveCount: number;
      negativeCount: number;
      acceptedCount: number;
      submissionCount: number;
      difficulty: number;
    }
  ];
}

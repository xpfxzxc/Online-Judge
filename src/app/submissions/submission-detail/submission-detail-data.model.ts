export interface SubmissionDetailData {
  id: string;
  status: string;
  testPoints: [
    {
      status: string;
      score: number;
      timeUsage: number;
      memoryUsage: number;
    }
  ];
  code: {
    lang: string;
    content: string;
  };
  user: {
    id: number;
    name: string;
  };
  problem: {
    id: number;
    title: string;
  };
  submittedAt: string;
  score: number;
  timeUsage: number;
  memoryUsage: number;
}

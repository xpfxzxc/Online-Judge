export interface SubmissionsData {
  totalCount: number;
  submissions: [
    {
      id: string;
      problem: {
        id: number;
        title: string;
      };
      user: {
        id: number;
        name: number;
      };
      status: string;
      score: number;
      timeUsage: number;
      memoryUsage: number;
      lang: string;
      submittedAt: string;
    }
  ];
}

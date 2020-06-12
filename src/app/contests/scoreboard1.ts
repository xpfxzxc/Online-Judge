export const SCOREBOARD1 = [
  {
    rank: 1,
    user: {
      id: 1,
      name: "shootrgy"
    },
    totalScore: 300,
    lastSubmittedAt: Date.now() + 3000,
    allLastSubmissions: [
      {
        num: 1,
        score: 100,
        submittedAt: Date.now() + 1000
      },
      {
        num: 2,
        score: 100,
        submittedAt: Date.now() + 3000
      },
      {
        num: 3,
        score: 100,
        submittedAt: Date.now() + 2000
      }
    ]
  },
  {
    rank: 2,
    user: {
      id: 2,
      name: "ivoysi"
    },
    totalScore: 300,
    lastSubmittedAt: Date.now() + 5000,
    allLastSubmissions: [
      {
        num: 1,
        score: 100,
        submittedAt: Date.now() + 1000
      },
      {
        num: 2,
        score: 100,
        submittedAt: Date.now() + 5000
      },
      {
        num: 3,
        score: 100,
        submittedAt: Date.now() + 2000
      }
    ]
  },
  {
    rank: 3,
    user: {
      id: 3,
      name: "zjq_0101"
    },
    totalScore: 100,
    lastSubmittedAt: Date.now() + 360000,
    allLastSubmissions: [
      null,
      {
        num: 2,
        score: 100,
        submittedAt: Date.now() + 360000
      },
      null
    ]
  },
  {
    rank: 4,
    user: {
      id: 4,
      name: "shawn-185"
    },
    totalScore: 0,
    lastSubmittedAt: null,
    allLastSubmissions: [null, null, null]
  }
];

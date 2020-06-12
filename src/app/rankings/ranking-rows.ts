export let RANKINGROWS = [];

let previous = 500;

for (let i = 1; i <= 20; i++) {
  const current = previous - ~~(Math.random() * 20) - 1;

  RANKINGROWS.push({
    ranking: i,
    user: {
      name: `user${i}`
    },
    acceptedCount: current,
    submissionCount: current + ~~(Math.random() * 300)
  });

  previous = current;
}

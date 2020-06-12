export const CONTESTS = [];

const DURATION = [30, 60, 90, 120, 150, 180, 210, 240];

for (let i = 1; i <= 10; i++) {
  const startingTime = Date.now() - (i - 2) * (1000 * 7 * 24 * 3600);

  CONTESTS.push({
    id: i,
    title: `Online Judge 每周比赛 ${11 - i}`,
    participantCount: ~~(Math.random() * 50),
    startingTime,
    endTime:
      startingTime + DURATION[~~(Math.random() * DURATION.length)] * 60000
  });
}

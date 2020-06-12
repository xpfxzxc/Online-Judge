export const SUBMISSION1 = {
  status: "Accepted",
  language: "C++",
  score: 100,
  timeUsage: 35,
  memoryUsage: 1024 * 1024 + 1234,
  submittedAt: Date.now(),
  testPoints: [
    {
      status: "Accepted",
      score: 20,
      timeUsage: 7,
      memoryUsage: 1024 * 1024 + 1234
    },
    {
      status: "Accepted",
      score: 20,
      timeUsage: 7,
      memoryUsage: 1024 * 1024 + 1234
    },
    {
      status: "Accepted",
      score: 20,
      timeUsage: 7,
      memoryUsage: 1024 * 1024 + 1234
    },
    {
      status: "Accepted",
      score: 20,
      timeUsage: 7,
      memoryUsage: 1024 * 1024 + 1234
    },
    {
      status: "Accepted",
      score: 20,
      timeUsage: 7,
      memoryUsage: 1024 * 1024 + 1234
    }
  ],
  issue: null,
  problem: {
    id: 1,
    title: "A + B Problem"
  },
  user: {
    id: 1,
    name: "	ElviagoesWest"
  },
  code: `#include <iostream>
using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    cout << a + b;
}`
};

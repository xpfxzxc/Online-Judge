import { PROBLEMS } from "./problems";

export const PROBLEM1 = {
  ...PROBLEMS[0],
  id: 1,
  memoryLimit: 256,
  timeLimit: 1000,
  title: "A + B Problem",
  background: "for beginners，特设此题，^_^",
  description: "输入两个整数 $a,b$，输出它们的和（$|a|,|b|\\leq 10^9$）",
  inputFormat: "两个自然数 x 和 y（$0 \\leq x,y \\leq 32767$）",
  outputFormat: "一个数，即 x 和 y 的和",
  samples: [
    {
      input: "1 2",
      output: "3",
      explanation: "因为根据数学计算：$1 + 2 = 3$"
    }
  ],
  hint: `### C++ 代码
\`\`\`cpp
#include <iostream>

using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    cout << a + b;
}
\`\`\``
};

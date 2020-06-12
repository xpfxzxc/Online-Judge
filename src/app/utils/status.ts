export function isSuccess(status: string) {
  return status === "Accepted";
}

export function isWarn(status: string) {
  return status === "Pending" || status === "Judging" || status === "Waiting";
}

export function isError(status: string) {
  return (
    status === "Wrong Answer" ||
    status === "Runtime Error" ||
    status === "Time Exceeded" ||
    status === "Memory Exceeded"
  );
}

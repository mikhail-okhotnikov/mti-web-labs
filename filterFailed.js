export function filterFailed(data, passScore) {
  const failedNames = [];

  for (const student of data) {
    if (student.score < passScore) {
      failedNames.push(student.name);
    }
  }

  return failedNames;
}
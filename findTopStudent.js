export function findTopStudent(data) {
  if (data.length === 0) {
    return null;
  }

  let topStudent = data[0];

  for (const student of data) {
    if (student.score > topStudent.score) {
      topStudent = student;
    }
  }

  return topStudent.name;
}
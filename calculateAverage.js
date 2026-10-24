export function calculateAverage(data) {
    if (data.length === 0) {
        return 0;
    }
    let sum = 0;

    for (const student of data) {
        sum = sum + student.score;
    }
 
    return sum / data.length;
}
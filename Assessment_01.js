var scores = [92,82,45,67,81,9,56,67,58,27,19,100,24,77,63];

function calculateGrades(scores) {
  console.log("Student Grades Report");
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];
    var grade;

    if (score >= 90 && score <= 100) {
      grade = 'A';
    } else if (score >= 80 && score < 90) {
      grade = 'B';
    } else if (score >= 70 && score < 80) {
      grade = 'C';
    } else if (score >= 60 && score < 70) {
      grade = 'D';
    } else {
      grade = 'F';
    }

    console.log(`Student ${i + 1} -- Score: ${score} | Grade: ${grade}`);
  }
}

calculateGrades(scores);


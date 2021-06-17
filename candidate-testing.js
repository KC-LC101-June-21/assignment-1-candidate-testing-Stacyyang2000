const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let candidateAnswer='';
let correctAnswer=["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers=[];
let question=[
  "Who was the first American woman in space?",
  "True or false: 5 kilometer == 5000 meters?",
  "(5 + 3)/2 * 10 = ?",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2",
  "What is the minimum crew size for the ISS?"
  ];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName=input.question("What's the candidate name? ");
console.log("Hello "+candidateName+"\n");
}

function askQuestion() {
  for(let i=0;i<questions.length;i++) {
    candidateAnswer=input.question(question[i]);
    candidateAnswers.push(candidateAnswer)
    console.log("Your Answer: "+ candidateAnswers[i] +"\n"+ "Correct Answer: "+correctAnswer[i]+"\n");
  }
  return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {
let grade=0;
for(let i=0;i < correctAnswers;i++){
  if(candidateAnswers[i].toLowercase()===correctAnswer[i].toLowercase()){
    grade++;
  }
}
let score=(grade/correctAnswers.length)*100;
let status
if (score<80){
status="FAILED"
} else {
  status="PASSED"
}
console.log(`>>> Overall Grade: ${score}% (${grade} of 5 responses correct) <<<
>>> Status: ${status} <<<`)
  // return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

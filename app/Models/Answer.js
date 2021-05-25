export class Answer{
  constructor(incorrectAnswers, correctAnswer){
    this.incorrectAnswers = incorrectAnswers
    this.correctAnswer = correctAnswer
  }

  get answerTemplate(){
    let answers = ''
    this.incorrectAnswers.forEach(a => 
      answers += `<button onclick="app.questionsController.incorrectAnswer()" class="btn btn-success m-2">${a}</button>`  
    )
    answers += `<button onclick="app.questionsController.correctAnswer()" class="btn btn-success m-2">${this.correctAnswer}</button>`
    return /*html*/ `
    <div>${answers}</div>
    `
  }
}
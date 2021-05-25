export class Answer{
  constructor(incorrectAnswers, correctAnswer){
    this.incorrectAnswers = incorrectAnswers
    this.correctAnswer = correctAnswer
  }

  get answerTemplate(){
    let answers = ''
    this.incorrectAnswers.forEach(a => 
      answers += `<button class="btn btn-danger m-2">${a}</button>`  
    )
    answers += `<button onclick"app.questionController.checkAnswer()" class="btn btn-success m-2">${this.correctAnswer}</button>`
    return /*html*/ `
    <div>${answers}</div>
    `
  }
}
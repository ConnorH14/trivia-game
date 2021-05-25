export class Question{
  constructor(data){
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }

  get questionTemplate(){
    return /*html*/ `
    <div class="row">
      <div class="col-12">
        <h3>${this.question}</h3>
        <h4>${this.difficulty}</h4>
      </div>
    </div>
    `
  }
}
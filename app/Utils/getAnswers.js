import { ProxyState } from "../AppState.js"
import { Answer } from "../Models/Answer.js"

export function getAnswers(){

  ProxyState.questions.forEach(q => 
    ProxyState.answers.push(new Answer(q.incorrectAnswers, q.correctAnswer)) 
  )
  ProxyState.answers = ProxyState.answers
  console.log(ProxyState.answers)
}
import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { getAnswers } from "../Utils/getAnswers.js"

class QuestionsService{
  async getQuestions(){
    let req = await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple')
    let data = await req.json()

    ProxyState.questions = data.results.map(q => new Question(q))
    getAnswers()
    
  }
  
}

export const questionsApi = new QuestionsService()
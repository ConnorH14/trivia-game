import { ProxyState } from "../AppState.js";
import { questionsApi } from "../Services/QuestionsService.js";
import { getAnswers } from "../Utils/getAnswers.js"


function drawQuestions(){
  let template = ''
  let doc = document.getElementById('app')

  if(ProxyState.questions.length >= 1 && ProxyState.answers.length >= 1){
    template += ProxyState.questions[ProxyState.currentQuestion].questionTemplate
    template += ProxyState.answers[ProxyState.currentQuestion].answerTemplate

    template += `<button onclick="app.questionsController.nextQuestion()">Next</button>`
  }

  doc.innerHTML = template
}

export class QuestionsController{
  constructor(){
    ProxyState.on('questions', drawQuestions)
    ProxyState.on('answers', drawQuestions)
    this.getQuestions()
    drawQuestions()
  }

  getQuestions(){
    try{
      questionsApi.getQuestions()
    }catch(error){
      alert(error.message)
    }
  }

  nextQuestion(){
    if(ProxyState.currentQuestion < ProxyState.questions.length - 1){
      ProxyState.currentQuestion++
      drawQuestions()
    }else if(ProxyState.currentQuestion >= ProxyState.questions.length - 1){
      alert('no more questions')
    }
  }

  checkAnswer(){
    
  }
}
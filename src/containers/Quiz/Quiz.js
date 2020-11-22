import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'


class Quiz extends Component {
    state = {
        currentQuestion: 0,
        answerState: null,
        isFinished: false,
        results: {},
        quiz: [
            {
                question: 'Что такое Parrilla?',
                id: 0,
                rightAnswerId: 1,
                answers: [
                    {text: 'Аргентинский гриль', id: 1},
                    {text: 'Мясо приготовленное на гриле', id: 2},
                    {text: 'Хоспер', id: 3},
                    {text: 'Хоспер', id: 4},
                ]
            },
            {
                question: 'В какой стране виноград выращивают выше всего в горах?',
                id: 1,
                rightAnswerId: 2,
                answers: [
                    {text: 'Чили', id: 1},
                    {text: 'Аргентина', id: 2},
                    {text: 'Австрия', id: 3},
                    {text: 'Греция', id: 4},
                ]
            },
        ],
    }
    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const activeQuiz = this.state.quiz[this.state.currentQuestion]
        const results = this.state.results
        if (activeQuiz.rightAnswerId === answerId) {
            if (!results[activeQuiz.id]) {
                results[activeQuiz.id] = 'success'
            }
            this.setState({answerState: {[answerId]: 'success'}, results})
            const timeout = window.setTimeout(() => {

                if (this.isQuizFinished()) {
                    this.setState({isFinished: true})
                } else {
                    this.setState({
                        currentQuestion: this.state.currentQuestion + 1,
                        answerState: null,
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[activeQuiz.id] = 'error'
            this.setState({answerState: {[answerId]: 'error'}, results})
        }

    }

    isQuizFinished() {
        return this.state.currentQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            currentQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {},
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {this.state.isFinished ? <FinishedQuiz results={this.state.results}
                                                           quiz={this.state.quiz}
                                                           onRetry={this.retryHandler}
                        />
                        :
                        <ActiveQuiz answers={this.state.quiz[this.state.currentQuestion].answers}
                                    question={this.state.quiz[this.state.currentQuestion].question}
                                    onAnswerClick={this.onAnswerClickHandler}
                                    quizLength={this.state.quiz.length}
                                    currentQuestion={this.state.currentQuestion + 1}
                                    answerState={this.state.answerState}
                        />

                    }
                </div>
            </div>
        )
    }
}

export default Quiz
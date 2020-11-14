import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>1.</strong>&nbsp;
                    {props.question}
                </span>
                <small>{props.currentQuestion} из {props.quizLength}</small>
            </p>
            <AnswerList answers={props.answers}
                        onAnswerClick={props.onAnswerClick}
                        answerState={props.answerState}
            />
        </div>
    )
}
export default ActiveQuiz
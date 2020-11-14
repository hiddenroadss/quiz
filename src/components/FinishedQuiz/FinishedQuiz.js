import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = () => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    How are you?
                    <i className={'fa fa-times'} />
                </li>
                <li>
                    <strong>1.</strong>
                    How are you?
                    <i className={'fa fa-check'} />
                </li>
            </ul>
            <p>Правильно 4 из 10</p>
            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz
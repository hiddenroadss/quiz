import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';

import Quiz from './containers/Quiz/Quiz'
import Auth from './containers/Auth/Auth'
import QuizList from './containers/QuizList/QuizList'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import Layout from './hoc/Layout/Layout'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                    <Route path={'/auth'} component={Auth}  />
                    <Route path={'/quiz-creator'} component={QuizCreator}  />
                    <Route path={'/quiz/:id'} component={Quiz}  />
                    <Route path={'/'} component={QuizList}  />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;

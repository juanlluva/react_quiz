import { combineReducers } from 'redux';
import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, INIT_QUESTIONS, RESET } from './actions';

const score = (state = 0, action = {}) => {
    switch (action.type) {
        case SUBMIT:
            let score = 0;
            action.payload.questions.map((question) => {
                if (question.userAnswer === question.answer) {
                    score++;
                }
            })
            return score;
        case RESET:
            return 0;
        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch (action.type) {
        case SUBMIT:
            return true;
        case RESET:
            return false;
        default:
            return state;
    }
}

function currentQuestion(state = 0, action = {}) {
    switch (action.type) {
        case CHANGE_QUESTION:
            return action.payload.index;
        case RESET:
            return 0;
        default:
            return state;
    }
}

function questions(state = [], action = {}) {
    switch (action.type) {
        case RESET:
            return [];
        case INIT_QUESTIONS:
            let newQuestions = JSON.parse(JSON.stringify(action.payload.questions));
            return newQuestions;
        case QUESTION_ANSWER:
            return state.map((question, i) => {
                return {
                    ...question,
                    userAnswer: action.payload.index === i ? action.payload.answer : question.userAnswer
                };
            });
        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));

export default GlobalState;

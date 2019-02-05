import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import NavBar from "./NavBar"
import Result from "./Result";
import Timer from './Timer';
import Loader from './Loader';
import { questionAnswer, changeQuestion, submit, initQuestions, reset } from './redux/actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.loadNewQuizzes = this.loadNewQuizzes.bind(this);
    this.onButtonPressed = this.onButtonPressed.bind(this);
    this.onQuestionAnswer = this.onQuestionAnswer.bind(this);
  }

  onButtonPressed(buttonType) {
    switch (buttonType) {
      case 'previousBut':
        this.props.dispatch(changeQuestion(this.props.currentQuestion - 1))
        break;
      case 'nextBut':
        this.props.dispatch(changeQuestion(this.props.currentQuestion + 1))
        break;
      case 'submitBut':
        this.props.dispatch(submit(this.props.questions))
        break;
      case 'resetBut':
        this.props.dispatch(reset())
        this.loadNewQuizzes()
        break;
      default:
        break;
    }
  }

  onQuestionAnswer(answer) {
    this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
  }

  loadNewQuizzes() {
    let quizzes = []
    fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=d4d596910885ba5cefe1')
      .then(results => {
        return results.json();
      })
      .then(data => {
        data.map((item) => {
          if (item.question) {
            quizzes.push(item);
          }
        })
        this.props.dispatch(initQuestions(quizzes))
      })
  }

  componentDidMount() {
    this.loadNewQuizzes();
  }

  render() {
    if (!this.props.finished) {
      // console.log(this.props.questions)
      return (
        <div className="App">
          <NavBar />
          {this.props.questions.length > 0 ? (
            <div className="Frame">
              <div className="SubFrame">
                <Timer onButtonPressed={this.onButtonPressed} />
                <Game
                  question={this.props.questions[this.props.currentQuestion]}
                  index={this.props.currentQuestion}
                  tipsList={this.props.questions[this.props.currentQuestion].tips.map((tip) => <li>{tip}</li>)}
                  onQuestionAnswer= {this.onQuestionAnswer}
                  extreme={this.props.questions.length - 1}
                  finished={this.props.finished}
                  onButtonPressed={this.onButtonPressed}
                />
                <p className= "Creds">Created by JLL & AM</p>
              </div>
            </div>
          ) : (
              <Loader />
            )}
        </div>
      );
    } else {
      return (
        <div className="App">
          <NavBar />
          <div className="Frame">
            <div className="SubFrame">
              <Result score={this.props.score} onButtonPressed={this.onButtonPressed} />
            </div>
          </div>
        </div>
      );
    }

  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

// export default App;
export default connect(mapStateToProps)(App);

import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'
import RegisterContext from './context/RegisterContext'

// Replace your code here
class App extends Component {
  state = {
    inputName: '',
    meetingMsg: 'Arts and Culture',
    isEmpty: false,
    valle: '',
  }

  onClickChangeName = valueInp => {
    this.setState({inputName: valueInp})
  }

  onClickMeetingName = (valueMsg, valueMsg1) => {
    this.setState({meetingMsg: valueMsg, valle: valueMsg1})
    // console.log(valueMsg)
  }

  goToHomeRoute = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSetDefaultValues = () => {
    this.setState({
      inputName: '',
      meetingMsg: 'Arts and Culture',
      isEmpty: false,
    })
  }

  onChangeEmpty = () => {
    this.setState({isEmpty: true})
  }

  render() {
    const {inputName, meetingMsg, isEmpty, valle} = this.state
    return (
      <RegisterContext.Provider
        value={{
          inputName,
          meetingMsg,
          isEmpty,
          valle,
          onClickChangeName: this.onClickChangeName,
          onClickMeetingName: this.onClickMeetingName,
          goToHomeRoute: this.goToHomeRoute,
          onChangeEmpty: this.onChangeEmpty,
          onSetDefaultValues: this.onSetDefaultValues,
        }}
      >
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </RegisterContext.Provider>
    )
  }
}

export default App

import React, { Component } from 'react';
import './App.css';

import EntryContent from './entry';
import DisplayContent from './display';

class App extends Component {

  constructor() {
    let fieldvalue, swipeindate,swipeoutdate,swipeInTimeHours,swipeInTimeMinutes,startTime,stayTime;
    let emparray = [], empentry = [];
    super();
    this.state = {
      employees: [],
      entrytimes: []
    }
    this.updateEntry = this.updateEntry.bind(this);
    this.changeState = this.changeState.bind(this);
    this.changeTime = this.changeTime.bind(this);
  }

  changeTime(){
    console.log("hello lover boy")
    //calculating the hours of stay in office

    let outTimeHours = new Date().getHours();
    let outTimeMinutes = new Date().getMinutes();
    let endTime = parseInt(outTimeHours.toString()+outTimeMinutes.toString())
    
    this.stayTime = (endTime - this.startTime);
    //difference time 
    console.log("You stayed for "+ ((this.stayTime)/100)+" hours")
  }

  updateEntry() {

    console.log("this is update entery")
    //pushing the employee details to employees array present in state
    this.emparray = this.state.employees;
    this.emparray.push(this.fieldvalue);

    //creating the time entry on click of the button
    this.swipeindate = new Date();
    this.swipeintime = this.swipeindate.getHours();
    this.swipeInTimeMinutes = this.swipeindate.getMinutes();
    this.startTime = parseInt(this.swipeintime.toString()+ this.swipeInTimeMinutes.toString());
    this.empentry = this.state.entrytimes;
    this.empentry.push(this.swipeindate.toLocaleString());

    this.setState({
      employees: this.emparray,
      entrytimes: this.empentry
    })

    //code for enabling the swipeout button
    // setTimeout(function () {
    //  document.getElementById("swipeout").removeAttribute("disabled")
    // }, 60000 * 0.5)

  }

  changeState(event) {
    this.fieldvalue = event.target.value;
  }

  render() {

    return (

      <div className="App">

        <div className="App-header">

          <header>TIME ENTRY PORTAL</header>

        </div>

        <div className="content">

          <h3><b>Welcome My Dear Friend!!</b></h3>

          <div className="entrycontent">

            <EntryContent changeEntry={this.changeTime} changeValue={this.changeState} entries={this.state.employees} setEntry={this.updateEntry} />

          </div>

          <div className="displaycontent">

            <DisplayContent empnames={this.state.employees} empentries={this.state.entrytimes} />

          </div>

        </div>

        <div className="footer">

          <footer>&copy; reserved by David Billa, Catch If You Can</footer>

        </div>

      </div>
    );
  }
}

export default App;

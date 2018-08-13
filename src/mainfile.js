import React,{Component} from 'react';
import EntryContent from './entry';
import DisplayContent from './display';
import { WSAEINTR, DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

class MainFile extends Component{
    constructor() {
        let fieldvalue, swipeindate,swipeInTimeHours,swipeoutdate, swipeInTimeMinutes, startTime, stayTime;
        let emparray = [], empentry = [], empexit=[];
        super();
        this.state = {
          entry: {
            employees: [],
            entrytimes: []
          },
          exit:{
            employees: [],
            exittimes: []
          },
          stay:{
              employees:[],
              staytimes:[]
          }
        }
        this.updateEntry = this.updateEntry.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeTime = this.changeTime.bind(this);
      }
    
      changeTime() {
        //calculating the hours of stay in office
    
        let outTimeHours = new Date().getHours();
        let outTimeMinutes = new Date().getMinutes();
        let endTime = parseInt(outTimeHours.toString() + outTimeMinutes.toString())
    
        this.stayTime = ((endTime - this.startTime)/100);
        //difference time 
        console.log("You stayed for " + this.stayTime + " hours")

        //storing the time of leaving
        this.empexit = this.state.exit.exittimes;
        let outTime = new Date().toLocaleString();

        this.empexit.push(outTime);

        this.setState({
            exit:{
                exittimes:this.empexit
            }
        }) 
        console.log(this.state.exit.exittimes) 
                
      }
    
      updateEntry() {
        //pushing the employee details to employees array present in state
        this.emparray = this.state.entry.employees;
        this.emparray.push(this.fieldvalue);
    
        //creating the time entry on click of the button
        this.swipeindate = new Date();
        this.swipeintime = this.swipeindate.getHours();
        this.swipeInTimeMinutes = this.swipeindate.getMinutes();
        this.startTime = parseInt(this.swipeintime.toString() + this.swipeInTimeMinutes.toString());
        
        this.empentry = this.state.entry.entrytimes;
        this.empentry.push(this.swipeindate.toLocaleString());
    
        this.setState({
          entry:{
            employees: this.emparray,
            entrytimes: this.empentry
          }
        })
    
        //code for enabling the swipeout button
        // setTimeout(function () {
        //  document.getElementById("swipeout").removeAttribute("disabled")
        // }, 60000 * 0.5)
    
      }
    
      changeState(event) {
        this.fieldvalue = event.target.value;
        /*if(this.fieldvalue){
            document.getElementById("swipein").removeAttribute("disabled");
        }*/
      }
    
    render(){
        return(
            <div className="App">

        <div className="App-header">

          <header>TIME ENTRY PORTAL</header>

        </div>

        <div className="content">

          <h3><b>Welcome My Dear Friend!!</b></h3>

          <div className="entrycontent">

            <EntryContent changeEntry={this.changeTime} changeValue={this.changeState} entries={this.state.entry.employees} setEntry={this.updateEntry} />

          </div>

          <div className="displaycontent">

            <DisplayContent empnames={this.state.entry.employees} empentries={this.state.entry.entrytimes} />

          </div>

        </div>

        <div className="footer">

          <footer>&copy; reserved by David Billa, Catch If You Can</footer>

        </div>

      </div>
        );
    }
}

export default MainFile;
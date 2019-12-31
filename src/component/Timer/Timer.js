import React from 'react'
import './Timer.css'
 
const msTimer = ms =>{
    const msSecond = 1000
    const msMinute = msSecond * 60
    const msHour =msMinute * 60
    const hours= Math.floor(ms / msHour)
    const restHours= ms % msHour
    const minutes = Math.floor(restHours / msMinute)
    const restMinutes = restHours % msMinute
    const seconds = Math.floor(restMinutes / msSecond)
    return String(hours).padStart(2 ,'0') +':'+String(minutes).padStart(2 ,'0')+':'+String(seconds).padStart(2 ,'0') 
}
const Timer =({ms}) =>{
    
     return(
    <div className="time-container">
        <div className='time-inner-container'>
            <div className="affiche-time">
               {msTimer(ms)}
            </div>
            <div className="time-item">
                <div className="affiche-tine-item">Hours</div>
                <div className="affiche-tine-item">Minutes</div>
                <div className="affiche-tine-item">Seconds</div>
            </div>
        </div>
        </div>    
  )  
}

// fonction de cronometer
class Time extends React.Component{
    constructor(props){
        super(props)
        this.state={
            times:0
        }
        setInterval(()=>{
       this.setState({
           times:this.state.times+1000
       })


        },1000
        )
    }
  render(){
  return <Timer ms={this.state.times}/>
  }
    
}

export default Time
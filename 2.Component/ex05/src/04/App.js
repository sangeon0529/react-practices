import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [date,setDate] = useState(new Date)
    const [ticks,setTicks] = useState(0)
    
    const getCurrentClockTime = () => {
        setDate(new Date())
    };

    useEffect(() => {
        const i = ticks
        setTimeout(function(){
           setTicks(i+1)
            getCurrentClockTime();
        },1000)
        
    },[getCurrentClockTime]);

        

    // useEffect(() => {
    //     const i = ticks
    //     setInterval(function(){
    //        setTicks(i+1)
    //         getCurrentClockTime();
    //     },1000)
        
    // },[]);

    return (
            <div>
            <span>{ticks}</span>
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={date.getHours()}
                minutes={('0'+date.getMinutes()).slice(-2)}
                seconds={('0'+date.getSeconds()).slice(-2)}
                />
                </div>
    );

    
}
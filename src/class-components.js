import React, { Component } from "react";
export default class Calendar extends Component{
    getDate(){
        const dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',]
        const monthNames= ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];
        const WeekDay=dayNames[data.getDay()]
        const day=date.getDate()
        const month=monthNames[date.getMonth]
        const year=date.getFullYear()+543
        return  `วัน${WeekDay}ที่${day}${month}${year}`

    }
    render(){
        return <div>{this.getDate()}</div>
    }
    
}
import React from 'react'

function chImg(){
    if(this.props.temp>=33){
        <img src="../images/summer.jpg"/> 
    }
    else if((this.props.temp<33)&&(this.props.temp>=25)){
        <img src="../images/spring.jpg"/> 
    }
    else if((this.props.temp<25)&&(this.props.temp>=10)){
        <img src="../images/autumn.jpg"/> 
    }
    else if(this.props.temp<10){
        <img src="../images/winter.jpg"/> 
    }
           
}

export default class PicComp extends React.Component{
    render(){
        return(<div>{
            chImg()
        }
        </div>)
    }
}
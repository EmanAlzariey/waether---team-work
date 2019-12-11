import React from 'react'

function chImg(){
    if(this.props.t>=33){
        return(
        
            <div>
          <img src="../images/summer.jpg"/> 
            </div>) 
    }
    else if((this.props.t<33)&&(this.props.t>=25)){  
        return(
        
        <div>
      <img src="../images/summer.jpg"/> 
        </div>) 
    }
    else if((this.props.t<25)&&(this.props.t>=10)){
        return(
        
            <div>
          <img src="../images/summer.jpg"/> 
            </div>) 
    }
    else if(this.props.t<10){
        
        return(
        
            <div>
          <img src="../images/summer.jpg"/> 
            </div>) 
    }
           
}

export default class PicComp extends React.Component{
    render(){
        return(
        chImg()
        )
    }
}
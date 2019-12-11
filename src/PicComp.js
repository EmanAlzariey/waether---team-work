import React from 'react'

function chImg(){
    if(parseInt(this.props.t)>=33){
        return(
        
            
            <img src="../images/summer.jpg"/> 
            ) 
    }
    else if((parseInt(this.props.t)<33)&&(parseInt(this.props.t)>=25)){  
        return(
        
            
            <img src="../images/summer.jpg"/> 
            ) 
    }
    else if((parseInt(this.props.t)<25)&&(parseInt(this.props.t)>=10)){
        return(
        
            
            <img src="../images/summer.jpg"/> 
            ) 
    }
    else if(parseInt(this.props.t)<10){
        
        return(
        
            
          <img src="../images/summer.jpg"/> 
          ) 
    }
           
}

export default class PicComp extends React.Component{
    render(){
        return(
            <div>{
        chImg()}
        </div>
        )
    }
}
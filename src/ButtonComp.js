import React from 'react'



export default class ButtonComp extends React.Component{
    render(){
        return(
        <div>
            <button name='sanaa' onClick={this.props.fetchsanaa}>Sana'a</button>
            <button name='aden' onClick={this.props.fetchaden}>Aden</button>
            <button name='baghdad' onClick={this.props.fetchbagh}>Baghdad</button>
            <button name='cairo' onClick={this.props.fetchcar}>Cairo</button>
        </div>
        )
    }
}
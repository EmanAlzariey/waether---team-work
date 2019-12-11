import React from 'react'



export default class ButtonComp extends React.Component{
    render(){
        return(
        <div>
            <button name='sanaa' onClick={this.props.fetchBtn}>Sana'a</button>
            <button name='aden' onClick={this.props.fetchBtn}>Aden</button>
            <button name='baghdad' onClick={this.props.fetchBtn}>Baghdad</button>
            <button name='cairo' onClick={this.props.fetchBtn}>Cairo</button>
        </div>
        )
    }
}
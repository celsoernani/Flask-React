import React from 'react';


export default class BotaoGol extends React.Component{

handleclick(event){
    event.preventDefault();
    this.props.marcarGol();
}

    render(){
        return (
            <button onClick={this.handleclick.bind(this)}>  GOL ! </button>
        );
    }
}
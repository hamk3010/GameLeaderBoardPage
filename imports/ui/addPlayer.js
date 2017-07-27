import React from 'react';
import {Players} from './../api/players.js';



export default class AddPlayer extends React.Component{

    handleSubmit(e){
        //here e is referencing our form
        let playerName= e.target.playerName.value;

        e.preventDefault();
        if(playerName){
            e.target.playerName.value= '';// this will empty the textField
             Players.insert({
                 name: playerName,
                 score: 0 //make sure to bind in order to call this
                 //on an object
             });

        }
    }

    render(){
        return(
            <div className = "item">
                {/* BIND PART IS SUPER IMPORTANT */}
                <form className= "form" onSubmit ={this.handleSubmit.bind(this) } >
                    <input className= "form__input" type= "text" name ="playerName" placeholder="Player name"/>
                    <button className= "button">Add Players</button>
                </form>
            </div>
        );
    }

}

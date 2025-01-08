import React,{Component} from "react";

export default class Button extends Component{
    showAlert(msg){
        alert(msg);
    }


    onClickButtonOK = () => {
        this.showAlert("Hellooooooooo");
    }

    render(){
        return (
            <button onClick={this.onClickButtonOK}>OK</button>
        )
    }

}
import React from 'react';



export class SubmitButton extends React.Component{

    render() {
        console.log(this.props.disableButton)
        return(
    <div>
        {this.props.type} <input type = "button" value = "submit" onClick={this.props.onSubmit} disabled={this.props.disableButton}></input><br></br>
    </div>
        )
    }
}


    export default SubmitButton;

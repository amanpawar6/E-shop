import React from 'react';

export class UserForm extends React.Component{

    render(){
        return(
            <div>
                {this.props.type}: <input type = {this.props.type} name = {this.props.nameField} onChange = {this.props.handleChange}></input>
            </div>
        );
    }
}


export default UserForm;
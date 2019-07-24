import React from 'react';
import './App.css';
import './Headermain.css';
import Select from "react-dropdown-select";
import BodyWork from './Bodywork';

const list = [{
    name: 'Clothes'
},
{
    name: 'Shoes'
},
{
    name: 'Electronics'
}]

export class headermain extends React.Component {
    constructor() {
        super();
        this.state = {
            Name : ''
        }
        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onChange = (values) => {
        console.log(values);
        this.props.getOption(values[0]);
    }

    onClick(){
        console.log('aman');
    }
    
    handleChange(evt){
        if(evt.target.Name === 'Name'){
        this.setState({
            Name: evt.target.Value
        });
    }console.log(this.state.name);
}

    render() {
        return (
            <div>
                <header className="header">
                    <Select
                        options={list}
                        searchBy='name'
                        onChange={(values) => this.onChange(values)}
                        color='#0074D9'
                        labelField='name'
                    />
                    <input type= 'button' name= 'Sort' Value = 'Sort' onClick = {this.props.sortedArr}></input>
                </header>
                <p onClick = {this.onClick}>Aman</p>
                <BodyWork nameField = {'Name'} handleChange = {this.handleChange}/>
                </div>
        );
    }

}

export default headermain;
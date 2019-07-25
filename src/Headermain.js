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
    }

    onChange = (values) => {
        this.props.getOption(values[0]);
    }

    onClick = () => {
        console.log('aman');
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
                    <input type= 'button' name= 'Sort' Value = 'Sort' onClick = {this.props.sortArr}></input>
                </header>
                <p onClick = {this.onClick}>Aman</p>
                </div>
        );
    }
}

export default headermain;
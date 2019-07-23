import React from 'react';
import './App.css';
import clothes from './Clothes';
import './Headermain.css';
import BodyWork from './Bodywork';
import Select from "react-dropdown-select";

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
                </header>
            </div>
        );
    }

}

export default headermain;
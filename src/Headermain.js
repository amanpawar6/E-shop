import React from 'react';
import './App.css';
import clothes from './Clothes';
import './Headermain.css';
import BodyWork from './Bodywork';

export class headermain extends React.Component {
    constructor() {
        super();

    }
    
    render() {
        return (
            <div>
                <header className="header">
                    Menu : <input list="Menu" name="menu"></input>
                    <datalist id="Menu">
                        <option value="Shoes"></option>
                        <option value="Electronics"></option>
                        <option value="Cases"></option>
                    </datalist>
                    <br></br>
                    {/* <div>
                        <p>{this.props.name}</p>
                        <input type="button" value="Submit" onClick = {this.props.arrRender}></input>
                    </div> */}
                    <a></a>
                </header>
                </div>
        );
    }

}

export default headermain;
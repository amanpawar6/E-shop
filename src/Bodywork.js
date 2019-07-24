import React from 'react';
import './Bodywork.css';

export class BodyWork extends React.Component {
    render() {
        return (
            <div>
                <div>
                Name: <input type = 'text' Name ={this.nameField} onChange={this.props.handleChange}></input>
                </div>
                {this.props.selectedItemArr && this.props.selectedItemArr.map(function(item, index){
                    return (
                        <div className="Cards">
                            <img src = {item.img} />
                            <h1>Item: {item.name}</h1>
                            <h2>Price: {item.price}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BodyWork;
import React from 'react';
import './App.css';
import Headermain from './Headermain';
import BodyWork from './Bodywork';

const Clothes = [{
    item: 1,
    name: 'Shirt',
    price: 32
},
{
    item: 2,
    name: 'pant',
    price: 40
},
{
    item: 3,
    name: 't-shirt',
    price: 40
},
{
    item: 4,
    name: 'Lower',
    price: 40
}
];

export class Filemain extends React.Component {
    constructor() {
        super();
        this.state={
            selectedOption: '',
            selectedItemArr: []
        }
        this.getOption = this.getOption.bind(this);
    }

    // renderArr(){
    //     for(let i=1; i > arr.length; i++){
    //         return arr[i];
    //     }
    // }
    
    getOption(option){
        console.log('>>>>>', option);
        if(option){
            if(option.name === 'Clothes'){
                this.setState({
                    selectedOption: option.name,
                    selectedItemArr: Clothes
                })
            }
        }    
    }

    render() {

        return (
            <div>
                <div>
                    <Headermain getOption = {this.getOption} />
                    <BodyWork selectedItemArr={this.state.selectedItemArr} />
                </div>
                {/* <div>
                    <BodyWork />
                </div> */}
            </div>
        );
    }
}

export default Filemain;
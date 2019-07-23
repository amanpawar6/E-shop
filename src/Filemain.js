import React from 'react';
import './App.css';
import Headermain from './Headermain';
import BodyWork from './Bodywork';

var Clothes = [{
    item: 1,
    name: 'Shirt',
    Size: 32
},
{
    item: 2,
    name: 'pant',
    Size: 40
},
{
    item: 3,
    name: 't-shirt',
    Size: 40
},
{
    item: 4,
    name: 'Lower',
    Size: 40
}
];

export class Filemain extends React.Component {
    constructor() {
        super();
        // this.state={
        //     item : null,
        //     name : '',
        //     Size : null
        // }
        // this.renderArr = this.renderArr.bind(this);
    }

    // renderArr(){
    //     for(let i=1; i > arr.length; i++){
    //         return arr[i];
    //     }
    // }  

    render() {

        return (
            <div>
                <div>
                    <Headermain />
                    <BodyWork arrRender={this.Clothes} />
                </div>
                {/* <div>
                    <BodyWork />
                </div> */}
            </div>
        );
    }
}

export default Filemain;
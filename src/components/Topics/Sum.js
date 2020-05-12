import React, { Component } from 'react';


class Sum extends Component{
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }


handleChange(value){
    this.setState({
        number1: value
    })
}

handleChange2(value){
    this.setState({
        number2: value
    })
}

resultSum(){
    let sum = Number(this.state.number1) + Number(this.state.number2);
    this.setState({
        sum: sum
    })

}

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4> Sum </h4>

                <input className='inputLine'
                onChange={ (e) => this.handleChange(e.target.value)}
                ></input>

                <input className='inputLine'
                onChange={ (e) => this.handleChange2(e.target.value)}
                ></input>

                <button className='confirmationButton'
                onClick={ () => this.resultSum()}>
                    Results
                </button>

        <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}


export default Sum;
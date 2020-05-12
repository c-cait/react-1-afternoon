import React, { Component } from 'react';


class Palindrome extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    handleInput(value){
        this.setState({
            userInput: value
        })
    }

    solveProblem(){
        let backward = this.state.userInput.split('').reverse().join('')
        let answer;
        if(this.state.userInput === backward){
            answer = 'true'
        } else{
            answer = 'false'
        }
        this.setState({palindrome: answer})
    }

    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4> Palindrome</h4>

                <input className='inputLine'
                onChange={ (e) => this.handleInput(e.target.value)}
                />

                <button className='confirmationButton'
                onClick= { () => this.solveProblem()}>
                    Results
                </button>

                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>

            </div>
        )
    }
}

export default Palindrome;
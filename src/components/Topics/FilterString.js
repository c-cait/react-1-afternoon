import React, { Component } from 'react';



class FilterStrings extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray: ['cait', 'tau', 'limeade', 'pani puri', 'kabob', 'sheesh kabob', 'pani' ],
            userInput: '',
            filteredArray: []
        }
    }

    handleInput(value){
        this.setState({
            userInput: value
        })
    }

    solveArray(){
        let arr = this.state.unFilteredArray.filter(element => {
            if(element.includes(this.state.userInput)){
                return element 
            }
            
        })
        console.log(arr)
        this.setState({filteredArray: arr})
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4> Filter String </h4>

                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>

                <input className='inputLine'
                onChange= { (e) => this.handleInput(e.target.value)}/>

                <button className='confirmationButton'
                onClick= {() => this.solveArray()}
                >Results</button>

                <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterStrings;
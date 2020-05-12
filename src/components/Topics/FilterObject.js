import React, { Component } from 'react';


class FilterObjects extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: 'caitlin',
                    age: 22,
                    food: 'pasta',
                    team: 'Cowboys',
                    hobby: 'hiking'
                },
                {
                    name: 'jc',
                    color: 'green',
                    food: 'cake',
                    team: 'Giants'
                },
                {
                    name: 'tausif',
                    color: 'blue',
                    age: 25,
                    food: 'pizza',
                    team: 'Cowboys',
                    location: 'california'
                },
                {
                    job: 'mom',
                    color: 'blue',
                    hobby: 'shopping',
                    location: 'north carolina'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleInput(value){
        this.setState({
            userInput: value
        })
    }

    
    solveObject(){
        const {unFilteredArray, userInput} = this.state
        let arr = unFilteredArray.filter(obj => {
            if(obj[userInput] !== undefined){
                return obj
            }
        })
        // for(let i = 0; i < unFilteredArray.length; i++){
        //     if(unFilteredArray[i][userInput] !== undefined){
        //        arr.push(unFilteredArray[i])
        //     }
        // }
        console.log(arr)
        this.setState({filteredArray: arr})
    }


    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4> Filter Object</h4>

                <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray)}</span>

                <input className='inputLine'
                onChange={ (e) => this.handleInput(e.target.value)}/>

                <button className='confirmationButton'
                onClick = { () => this.solveObject()}
                >Results</button>
                
            <span className='resultsBox filterObjectRB'> Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}


export default FilterObjects;
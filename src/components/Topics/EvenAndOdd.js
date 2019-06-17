import React, {Component} from 'react'; 

export default class EvenAndOdd extends Component {
    constructor() {
        super(); 
        this.state = {
        evenArray: [], 
        oddArray: [], 
        userInput: ''
        }
    }

    updateUser(val)
    {
        this.setState({userInput: val}); 
    }

    updateEvensAndOdds(userInput)
    {
        let arr = userInput.split(','); 
        let evens = []; 
        let odds = []; 

        for(let i = 0; i < arr.length; i++)
        {
            if(arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10)); 
            }
            else {
                odds.push(parseInt(arr[i], 10))
            }
        }
        this.setState({evenArray: evens, oddArray: odds}); 
    }
    render () {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <input className='inputLine' onChange={(e) => this.updateUser(e.target.value)}></input>
                <button className='confirmationButton' onclick={(e) => this.updateEvensAndOdds(this.state.userInput)}>Split</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray) }</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}
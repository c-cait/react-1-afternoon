import React, { Component } from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';
import EvenAndOdd from './components/Topics/EvenAndOdd';
import FilterObjects from './components/Topics/FilterObject';
import FilterStrings from './components/Topics/FilterString';
import Palindrome from './components/Topics/Palindrome';
import Sum from './components/Topics/Sum';

class App extends Component {
  render() {
    return (
    <div>
      < TopicBrowser />
      < EvenAndOdd />
      < FilterObjects />
      < FilterStrings />
      < Palindrome />
      < Sum />
    </div>
    )
  }
}

export default App;

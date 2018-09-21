import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



upsertAuthor({
    firstName: "Aaron",
lastName: "Colbert",
card1: "Card1",
card2: "Card2",

card3:"Card3"
  })

function upsertAuthor(authorData) {
    $.post("/api/users", authorData)
     
  }
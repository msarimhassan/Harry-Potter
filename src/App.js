import React from 'react';
import Game from './components/game.js';
import Header from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './components/App.css';


function App() {
    return (
        <div>

            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> 
          <Header/>
            <Game/>
        </div>
    );
}

export default App;

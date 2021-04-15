import {Fragment} from 'react';
import ShowPokedex from './components/ShowPokedex';
import HeaderBar from './components/HeaderBar';
import './App.css';

function App() {
    return (
        <>
            <header className='App-header'>
                <HeaderBar />
            </header>
            <body>
                <h3>Create your pokemon Party</h3>
                <ShowPokedex />
            </body>
        </>
    );
}

export default App;

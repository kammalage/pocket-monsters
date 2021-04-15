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
                <ShowPokedex />
            </body>
        </>
    );
}

export default App;

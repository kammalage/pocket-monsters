import {Fragment} from 'react';
import ShowPokedex from './components/ShowPokedex';
import HeaderBar from './components/HeaderBar';
import './App.css';

function App() {
    return (
        <>
            <HeaderBar />
            <ShowPokedex />
        </>
    );
}

export default App;

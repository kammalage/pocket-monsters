import ShowPokedex from './components/ShowPokedex';
import HeaderBar from './components/HeaderBar';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <HeaderBar />
            </header>
            <body>
                <h3>Create your pokemon Party</h3>
                <ShowPokedex />
            </body>
        </div>
    );
}

export default App;

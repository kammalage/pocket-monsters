import ShowPokedex from './components/ShowPokedex';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Pocket Monsters</h1>
                <h3>Create your pokemon Party</h3>
                <ShowPokedex />
            </header>
        </div>
    );
}

export default App;

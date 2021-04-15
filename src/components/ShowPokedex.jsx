import { Fragment, useState, useEffect } from 'react';

function ShowPokedex() {
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        getPokedex();
    }, []);

    async function getPokedex() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const retrievedPokemon = await res.json();

        setPokedex(() => {
            return retrievedPokemon.results;
        });
    }

    function renderPokedex() {
        return (
            <>
                <ul>
                    {pokedex.map((pokemon) => {
                        return <li>{pokemon.name}</li>;
                    })}
                </ul>
            </>
        );
    }

    return renderPokedex();
}

export default ShowPokedex;

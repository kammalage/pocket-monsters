import { useState, useEffect } from 'react';
import {List, ListItem, ListItemText, makeStyles} from '@material-ui/core';

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

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: '360px',
            backgroundColor: theme.palette.background.paper,
        },
    }));


    function RenderPokedex() {
        const classes = useStyles();

        return (
            <div className={classes.root}>
                <List>
                    {pokedex.map((pokemon, index) => {
                        return (
                            <ListItem divider button>
                                <ListItemText primary={(index + 1) + ' ' + pokemon.name} />
                            </ListItem>);
                    })}
                </List>
            </div>
        );
    }

    return RenderPokedex();
}

export default ShowPokedex;

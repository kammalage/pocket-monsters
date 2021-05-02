import { useState, useEffect } from 'react';
import {List, ListItem, ListItemText, makeStyles} from '@material-ui/core';

function ShowPokedex() {
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        getPokedexTest();
    }, []);

    async function getPokedexTest() {
        const res = await fetch('http://localhost:8080/pokedex');
        const retreivedPokemon = await res.json();

        setPokedex(() => {
            return retreivedPokemon;
        })
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
                            <ListItem key={index} divider button>
                                <ListItemText primary={(index + 1) + ' ' + pokemon.pokemon_species.name} />
                            </ListItem>);
                    })}
                </List>
            </div>
        );
    }

    return RenderPokedex();
}

export default ShowPokedex;

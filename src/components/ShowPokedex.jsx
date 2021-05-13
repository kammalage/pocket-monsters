import { useState, useEffect } from 'react';
import {Drawer, List, ListItem, ListItemText, makeStyles} from '@material-ui/core';

function ShowPokedex() {
    const [pokedex, setPokedex] = useState([]);
    // test
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
        List: {
            width: '500px',
        },
        toolbar: theme.mixins.toolbar,
    }));


    function RenderPokedex() {
        const classes = useStyles();

        return (
                <Drawer variant="permanent" anchor="left">
                    <div className={classes.toolbar} />
                    <List className={classes.List}>
                        {pokedex.map((pokemon, index) => {
                            return (
                                <ListItem key={index} divider button>
                                    <ListItemText primary={(index + 1) + ' ' + pokemon.pokemon_species.name} />
                                </ListItem>);
                        })}
                    </List>
                </Drawer>
        );
    }

    return RenderPokedex();
}

export default ShowPokedex;

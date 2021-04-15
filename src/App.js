import ShowPokedex from './components/ShowPokedex';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

function App() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));

    const classes = useStyles();

    return (
        <div className='App'>
            <header className='App-header'>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            edge='start'
                            className={classes.menuButton}
                            color='inherit'
                            aria-label='menu'>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' className={classes.title}>
                            Pocket Monsters
                        </Typography>
                        <Button color='inherit'>Login</Button>
                    </Toolbar>
                </AppBar>
            </header>
            <body>
                <h3>Create your pokemon Party</h3>
                <ShowPokedex />
            </body>
        </div>
    );
}

export default App;

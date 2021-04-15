import {React, Fragment} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function HeaderBar() {
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

    return(
        <>
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
        </>
    )
}

export default HeaderBar;
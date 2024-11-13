import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../sc-logo.png';
import CloseIcon from '@mui/icons-material/Close';
import TaskList from '../tasks/TaskList';
import AddTask from '../tasks/AddTask';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    position: 'relative',
    variants: [
        {
            props: ({ open }) => open,
            style: {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginRight: 0,
            },
        },
    ],
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginRight: drawerWidth,
            },
        },
    ],
}));

export default function PersistentDrawerRight() {
    const [open, setOpen] = React.useState(true);
    let showToggleButton;
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    if (open) {
        showToggleButton = (
            <IconButton
                disableRipple
                color="inherit"
                aria-label="open drawer"
                edge="end"
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '2rem',
                    color: '#6e6f70',
                }}
                onClick={handleDrawerClose}>
                <CloseIcon />
            </IconButton>
        );
    } else {
        showToggleButton = (
            <IconButton
                disableRipple
                color="inherit"
                aria-label="open drawer"
                edge="end"
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '2rem',
                    color: '#6e6f70',
                }}
                onClick={handleDrawerOpen}>
                <MenuIcon />
            </IconButton>
        );
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ bgcolor: '#fff', boxShadow: 'none' }}>
                {showToggleButton}
            </AppBar>
            <Main
                open={open}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '40vw',
                    textAlign: 'right',
                }}>
                <div className="flex flex-col justify-center items-center">
                    <img src={logo} alt="sc-logo" width="20%" className="mb-4" />
                    <h1 className="App-header font-sans">SC Note Taking App</h1>
                </div>
                <AddTask />
            </Main>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}>
                <div className="p-4">
                    <h4 className="text-2xl font-sans font-bold mb-8">Note list:</h4>
                    <TaskList />
                </div>
            </Drawer>
        </Box>
    );
}

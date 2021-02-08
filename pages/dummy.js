import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ListSubheader from '@material-ui/core/ListSubheader';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    nestednested: {
        paddingLeft: theme.spacing(8),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        paddingLeft: theme.spacing(20),
        paddingRight: theme.spacing(20),
        paddingTop: theme.spacing(10),
        textAlign: "justify",
    },
}));

export default function Dummy() {
    const classes = useStyles();

    // control collapsable states
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);

    const handleClick1 = () => { setOpen1(!open1); };
    const handleClick2 = () => { setOpen2(!open2); };
    const handleClick3 = () => { setOpen3(!open3); };
    const handleClick4 = () => { setOpen4(!open4); };


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Machine Learning - Land Brasil
            </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List dense
                    //   component="nav"
                    //   aria-labelledby="nested-list-subheader"
                    //   className={classes.root}
                    >
                        {/* Introducao */}
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Bem vindo" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="O que é Machine Learning" />
                        </ListItem>

                        {/* Objetivos */}
                        <ListItem button onClick={handleClick1}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Objetivos" />
                            {open1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open1} timeout="auto" unmountOnExit>
                            <List dense component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Regressão" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Classificação" />
                                </ListItem>
                            </List>
                        </Collapse>

                        {/* Tipos de aprendizado */}
                        <ListItem button onClick={handleClick2}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Tipos de aprendizado" />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List dense component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Aprendizado supervisionado" />
                                </ListItem>
                                <List dense component="div" disablePadding>
                                <ListItem button className={classes.nestednested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Regressão Linear" />
                                </ListItem>
                                <ListItem button className={classes.nestednested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Perceptron" />
                                </ListItem>
                                </List>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Aprendizado não-supervisionado" />
                                </ListItem>
                                <List dense component="div" disablePadding>
                                <ListItem button className={classes.nestednested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="kNN" />
                                </ListItem>
                                </List>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Aprendizado por reforço" />
                                </ListItem>
                            </List>
                        </Collapse>


                        {/* Redes Neurais */}
                        <ListItem button onClick={handleClick3}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Redes Neurais" />
                            {open3 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open3} timeout="auto" unmountOnExit>
                            <List dense component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="O que são redes neurais" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Teorema da aproximação universal" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Sua primeira rede neural" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Funçao de ativação" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Funçao de custo" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Perceptron de multiplas camadas" />
                                </ListItem>
                            </List>
                        </Collapse>


                        {/* Tópicos Avançados */}
                        <ListItem button onClick={handleClick4}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Tópicos Avançados" />
                            {open4 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open4} timeout="auto" unmountOnExit>
                            <List dense component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Tópico Avançado 01" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Tópico Avançado 02" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Tópico Avançado 03" />
                                </ListItem>
                            </List>
                        </Collapse>
                        {/* O que vem em seguida */}
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="O que vem em seguida" />
                        </ListItem>

                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <Typography  variant="h2" gutterBottom>
                    Bem vindo!
          </Typography>
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
          </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
            </main>
        </div>
    );
}

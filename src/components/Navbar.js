import React  from 'react';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import { AppBar, Box, Toolbar, Typography, Grid, IconButton, Drawer, Divider, Button } from '@mui/material'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import {Link} from 'react-router-dom'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import '../styles/HeaderStyles.css'
import { useState } from 'react';


const MyNavbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const handleDrawerToggle = ()=>{
        setMobileOpen(!mobileOpen);
    }
    const drawer = (
        <>
        <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}> 
        <Typography color={"black"}  component={"div"} sx={{flexGrow:1 , my:2}}> 
                    <LocalHospitalIcon/>
                    My Hospital</Typography>
                    <Divider color='black'/>
                    <ul className='mobile-navigation'>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Contact</Link>
                        </li>
                    </ul>
                    <Box sx={{display:{xs:'block', sm:'none'} ,flexGrow:1, textAlign:'right'}}>
                    <ul className='navigation-sign'>
                        <li>
                            <Button variant='contained' color='error' component={Link} to={"/"}>
                                Sign In
                            </Button>
                        </li>
                        <li>
                            <Button variant='contained' component={Link} to={"/"}>
                                Sign Up
                            </Button>
                        </li>
                    </ul>
                </Box>
        </Box>
        </>
    )
    return (
        <>
        <Box>
            <AppBar component={'nav'} sx={{bgcolor:'black'}}>
                <Toolbar>
                <Grid container alignItems="center">
                <Grid item xs={1} display="flex" alignItems="center">
                    <Box >
                    <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2 ,display:{sm:'none'},
                }}
                onClick={handleDrawerToggle}
                >
                        <MenuSharpIcon/>
                    </IconButton>
                    </Box>
                    </Grid>
                    <Grid item xs={3} display="flex" alignItems="left">
                    <Box>
                <Typography color={"white"} variant='h6' component={"div"} sx={{flexGrow:1, textAlign:'left' , marginLeft:'16px',}}> 
                    <LocalHospitalIcon/>
                    My Hospital</Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={4} display="flex" justifyContent="center">
                <Box sx={ { display:{xs:'none' , sm:'block' , lg:'block'}}}>
                    <ul className='navigation-menu'>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Contact</Link>
                        </li>
                    </ul>
                </Box>
                </Grid>
                <Grid item xs={4} display="flex" justifyContent="flex-end">
                <Box sx={{display:{xs:'none', sm:'block'} ,flexGrow:1, textAlign:'right'}}>
                    <ul className='navigation-sign'>
                        <li>
                            <Button variant='contained' color='error' component={Link} to={"/"}>
                                Sign In
                            </Button>
                        </li>
                        <li>
                            <Button variant='contained' component={Link} to={"/"}>
                                Sign Up
                            </Button>
                        </li>
                    </ul>
                </Box>
                </Grid>
                </Grid>
                </Toolbar>
            </AppBar>
            <Box component={"nav"}>
                <Drawer variant='temporary' 
                open={mobileOpen} 
                onClose={handleDrawerToggle}
                sx={{display:{xs:'block', sm:'none'} , 
                "& .MuiDrawer-paper":{
                    boxSizing:'border-box',
                    width:'300px',
                }}}>
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar/>
        </Box>
        </>
    );
}


export default MyNavbar;

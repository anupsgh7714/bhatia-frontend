import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


const drawerWidth = 240;
const navItems = [
    // {linkName: 'Home', to: "/"},
    {linkName: 'Products', to: "/products"},
    //  {linkName: 'About', to: "/about"},
     {linkName: 'Contact', to: "/contact"},
     {linkName: 'Sign Up', to: "/signup"},
     {linkName: 'Sign In', to: "/signin"},
    ];

export default function DrawerAppBar(props) {
  const { window } = props;
  {console.log(window, props);}
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        BhatiaElectrical
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.linkName} disablePadding>
            <ListItemButton component={NavLink} to={item.to} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.linkName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' ,mb:10, }
    } >
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor: "#000 !important" }} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={NavLink} to={"/"} 
            sx={{ flexGrow: 1,color:"white", display: { xs: 'block', sm: 'block' }, ml:{xs:0 ,md:20}, textAlign:{xs: "center", md:"start"} , textDecoration:"none"}}
          >
            BhatiaElectrical
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' }, mr:{md:10 ,lg:20} }}>
            {navItems.map((item) => (
              <Button component={NavLink} to={item.to} key={item.linkName} sx={{ color: '#fff', margin: {md:"0 1rem"} }}>
                {item.linkName}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
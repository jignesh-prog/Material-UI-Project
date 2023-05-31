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
import Tooltip from '@mui/material/Tooltip/Tooltip';
import {Avatar,Menu,MenuItem}from '@mui/material';
import { useNavigate} from 'react-router-dom';
import { Outlet } from 'react-router-dom';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export  function Dashbord(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
       Kusol
      </Typography>
      <Divider />
      <List>
          <ListItem sx={{display:'block',textAlign:'center'}}>
              <ListItemButton sx={{textAlign:'center'}} onClick={() => navigate('Features')} color='inherit'>
                 <ListItemText primary='Features' />
              </ListItemButton>
              <ListItemButton sx={{textAlign:'center'}}  onClick={() => navigate('Contact')} color='inherit'>
                 <ListItemText primary="Contact" />
             </ListItemButton>
              <ListItemButton sx={{textAlign:'center'}} onClick={() => navigate('Information')} color='inherit'>
                 <ListItemText primary="Information" />
             </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{marginRight:'75px', display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
        <Box sx={{marginRight:'25px', display: { xs: 'none', sm: 'block' },justifyContent:'space-around',fontSize:'large'}}>
              <Button sx={{justifyContent:'space-around'}} onClick={() => navigate('Features')} color='inherit'>Features</Button>
              <Button sx={{justifyContent:'space-around'}} onClick={() => navigate('Registration')} color='inherit'>Registration</Button>
              <Button sx={{justifyContent:'space-around'}} onClick={() => navigate('Information')} color='inherit'>Information</Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
       
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
            component="div"
            sx={{marginRight:'200px', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Kusol
          </Typography>
          </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet/>
      </Box>
    </Box>
  );
}

export default  Dashbord







          
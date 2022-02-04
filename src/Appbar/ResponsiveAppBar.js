import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { NavLink } from 'react-router-dom';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const pages = [{ name: 'Projects', link: '/Projects' },
{ name: 'Blogs', link: '/Blogs' },
{ name: 'Catch Up', link: '/CatchUp' }];

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const linkedin = "https://www.linkedin.com/in/pragati-prashant-bagul/";
  const github = "https://github.com/PragatiBagul";

  const githubLink = () =>
  {
    window.location.href = github;
  }
  const linkedinLink = () =>
  {
    window.location.href = linkedin;
  }
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const emailLink = () =>
  {
    const email = "bagulpragati15@gmail.com";
    console.log(email);
    navigator.clipboard.writeText(email);
    handleClick();
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <NavLink to='/'  style={{textDecoration:'none',color:'white'}} style={{textDecoration:'none'}}>
            Pragati Bagul
            </NavLink>
            </Typography>
            
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <NavLink to={page.link}><Typography textAlign="center">{page.name}</Typography></NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <NavLink to='/'  style={{textDecoration:'none',color:'white'}}>Pragati Bagul</NavLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink to={page.link}>
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button></NavLink>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" color="inherit">
              <Badge>
                <EmailIcon onClick={ emailLink }/>
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge>
                <GitHubIcon onClick={ githubLink}/>
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge>
                <LinkedInIcon onClick={linkedinLink}/>
              </Badge>
            </IconButton>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Email Copied!
              </Alert>
            </Snackbar>
          </Box>
        </Toolbar>
      </Container>
      </AppBar>
  );
};
export default ResponsiveAppBar;

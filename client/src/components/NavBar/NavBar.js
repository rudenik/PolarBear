import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { NavLink, Link } from "react-router-dom";
>>>>>>> dev

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2667FF',
    },
    secondary: {
      main: '#2667FF'
    }
  }
});



const styles = (theme) => ({
  root: {
    flexGrow: 1,

  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };
  handleChange = event => {
    this.setState({ auth: event.target.checked });
    console.log(event);
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
    console.log(event);
  };

  handleClose = (event) => {
    this.setState({ anchorEl: null});
    this.open=false;
    console.log(event.target.id)
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static" >
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">

              </IconButton>
              <Typography variant="title" color="inherit" className={classes.grow}>
                Polar Bear
          </Typography>
<<<<<<< HEAD
          <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
          <MenuIcon />
          </IconButton>
          <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                <MenuItem id="Home"  onClick={this.handleClose}>
                  <Link to="/">Home</Link></MenuItem>

                  <MenuItem id="layout"  onClick={this.handleClose}>
                  <Link to="/layout">layout</Link></MenuItem>

                  <MenuItem id="chat"  onClick={this.handleClose}>
                  <Link to="/chat">Chat</Link></MenuItem>

                  <MenuItem id="event"  onClick={this.handleClose}>
                  <Link to="/event">Event</Link></MenuItem>

                  <MenuItem id="signup"  onClick={this.handleClose}>
                  <Link to="/signup">signup</Link></MenuItem>

                  <MenuItem id="youraccount"  onClick={this.handleClose}>
                  <Link to="/youraccount">Your Account</Link></MenuItem>

                  <MenuItem id="match"  onClick={this.handleClose}>
                  <Link to="/match">match</Link></MenuItem>
                  <MenuItem id="usermatches"  onClick={this.handleClose}>
                  <Link to="/usermatches">User Matches</Link></MenuItem>
=======
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <NavLink to="/">
                  <MenuItem id="Home" onClick={this.handleClose}>
                    Home</MenuItem></NavLink>
                <NavLink to="/layout">
                  <MenuItem id="layout" onClick={this.handleClose}>
                    layout</MenuItem></NavLink>
                  <NavLink to="/chat">
                    <MenuItem id="chat" onClose={this.handleClose} onClick={this.handleChange}>
                      Chat</MenuItem></NavLink>
                  <NavLink to="/event">
                    <MenuItem id="event" onClick={this.handleClose}>
                      Event</MenuItem></NavLink>

                  <NavLink to="/signup">
                    <MenuItem id="signup" onClick={this.handleClose}>
                      signup</MenuItem></NavLink>

                  <NavLink to="/youraccount">
                    <MenuItem id="youraccount" onClick={this.handleClose}>
                      Your Account</MenuItem></NavLink>
                  <NavLink to="/match">
                    <MenuItem id="match" onClick={this.handleClose}>
                      match</MenuItem></NavLink>
                  <NavLink to="/usermatches">
                    <MenuItem id="usermatches" onClick={this.handleClose}>
                      User Matches</MenuItem></NavLink>
>>>>>>> dev
                </Menu>
        </Toolbar>
      </AppBar>
    </div>
    </MuiThemeProvider>
        );
      }
      }
MenuAppBar.propTypes = {
          classes: PropTypes.object.isRequired,
      };
      
      export default withStyles(styles)(MenuAppBar);

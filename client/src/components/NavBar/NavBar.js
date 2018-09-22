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

const theme = createMuiTheme({
  palette: {
    primary:  {
        main: '#2667FF',
    }, 
    secondary: {
        main: 'rgb(30, 122, 158)'
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
    this.setState({ anchorEl: null });
    console.log(event.target.id)
  };

 render(){
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
                <MenuItem id="profile"  onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem id="chat" onClick={this.handleClose}>Chat</MenuItem>
                  <MenuItem id="match" onClick={this.handleClose}>Matching</MenuItem>
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
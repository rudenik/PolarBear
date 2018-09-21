import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import "./NavBar.css";

import { createMuiTheme } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#2667FF',
    }
    },
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
  primary: {
    color: theme.palette.primary.main,
  }
});

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };
  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

 render(){
  const { classes } = this.props;
  const { auth, anchorEl } = this.state;
  const open = Boolean(anchorEl); 
  return (
    <div className={classes.root} style={{"background-color": "#2667FF" }}>
      <AppBar position="static" theme={theme}>
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
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}
MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['primary'])
};

export default withStyles(styles)(MenuAppBar);
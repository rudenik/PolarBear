import React, { Component } from 'react';
import "./header.css";

class Header extends Component {
    render () {
        return (
            <div className="row center-align match__header">
                <div className='col s2'> 
                    Pic
                </div>
                <div className='col s8 center-align match__title'>
                    Polar Bear
                </div>
                <div className='col s2 center-align'>
                <i className="fa fa-navicon" aria-hidden="true"></i>
                </div>
            </div>

        )
    }
}

export default Header;
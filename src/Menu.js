/*
 * Copyright (c) 2018 - 2018,  C19, all rights reserved.
 *
 * This software is licensed under under GPL-3.0-only or GPL-3.0-or-later, https://opensource.org/licenses/GPL-3.0
 */

import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component{

    render(){
        return(
            <nav>
                <ul className="Menu">
                    {
                        this.props.items.map( (item, i ) => {
                            return( <MenuItem key={i} href={item.href} text={item.title}/> );
                        })
                    }
                </ul>
            </nav>

        );
    }
}

class MenuItem extends Component{

    render(){
        return(
            <li className="MenuItem">
                <a className="MenuItemLink" href={this.props.href} >{this.props.text}</a>
            </li>
        );
    }
}

export default Menu;
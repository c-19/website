/*
 * Copyright (c) 2018 - 2018,  C19, all rights reserved.
 *
 * This software is licensed under under GPL-3.0-only or GPL-3.0-or-later, https://opensource.org/licenses/GPL-3.0
 */

import React, { Component } from 'react';
import './Section.css';

class Section extends Component{
    render(){
        return(
            <section id={this.props.title} >
                <h2>{this.props.title}</h2>
                <div className="section-content">{this.props.children}</div>
            </section>
        );
    }
}

export default Section;
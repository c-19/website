/*
 * Copyright (c) 2018 - 2018,  C19, all rights reserved.
 *
 * This software is licensed under under GPL-3.0-only or GPL-3.0-or-later, https://opensource.org/licenses/GPL-3.0
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';


it('Menu contains the expected menuitems.', () => {
  const div = document.createElement('div');
  const items = [{
    href: "#apple",
      title: "Apple"
  },]
  ReactDOM.render(<Menu items={items}/>, div);

  expect( div.innerHTML ).toEqual( expect.stringContaining( items[0].href ) );
  expect( div.innerHTML ).toEqual( expect.stringContaining( items[0].title ) );

  ReactDOM.unmountComponentAtNode(div);
});

it('Menu renders an empty list if no items provided.', () => {
    const div = document.createElement('div');
    const items = []
    ReactDOM.render(<Menu items={items}/>, div);

    expect( div.outerHTML ).toEqual( expect.stringContaining( "<ul" ) );
    expect( div.outerHTML ).not.toEqual( expect.stringContaining( "<li" ) );

    ReactDOM.unmountComponentAtNode(div);
});

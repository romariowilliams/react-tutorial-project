import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    <header>
      <div className="logo">
      myLOGO
      </div>

      <nav>
        <ul>
          <li>
              <a href="#">Home</a>
          </li>
          <li>
              <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>


    </header>
    );
  }
}

export default Header;

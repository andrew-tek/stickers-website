import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  render() {
    return (
    <div>
        <ul className="nav nav-pills nav-justified">
          <li className="active"><Link to="/">Our Favorites</Link></li>
          <li><Link to="/Spongebob">Spongebob</Link></li>
          <li><Link to="/AdventureTime">Adventure Time</Link></li>
        </ul>

      </div>
    )
  }
}

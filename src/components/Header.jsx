import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <h1>Hacker News Clone</h1>
      <div className="nav-link">
        <NavLink to="/top" className="active">
          Top Stories
        </NavLink>
        <NavLink to="/new" className="active">
          Latest Stories
        </NavLink>
        <NavLink to="/best" className="active">
          Best Stories
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Header;
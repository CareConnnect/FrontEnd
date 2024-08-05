import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import introLogo from '../assets/img/introLogo.png';
import userIcon from '../assets/img/userIcon.svg';
import { display } from '@mui/system';

function Header({ auth = true }) {
  return (
    <div style={styles.headerStyle}>
      <Link to="/">
        <img style={styles.logoStyle} src={introLogo} alt="intro logo" />
      </Link>
      {auth && (
        <div>
          <img src={userIcon} alt="user icon" width="23" height="23" />
        </div>
      )}
    </div>
  );
}

const styles = {
  headerStyle: {
    backgroundColor: '#F4F4F4',
    width: '100%',
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
    justifyContent: 'space-between',
  },
  logoStyle: {
    width: '114px',
    height: '48px',
  },
};

export default Header;

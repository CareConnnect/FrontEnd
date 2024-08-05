import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import introLogo from '../assets/img/introLogo.png';
import mainLogo from '../assets/img/mainLogo.png';

import LoadingBar from '../components/LoadingBar';
import Button from '../components/Button';
import Login from './Login';
import { UseContext } from '../provider/useContext';

function Main() {
  const context = useContext(UseContext);
  const { userMode, setUserMode } = context;
  console.log('context', context);
  const [mode, setMode] = useState('intro');

  useEffect(() => {
    console.log('userMode:', userMode);
  }, [userMode]);

  useEffect(() => {
    const modeTimer = setTimeout(() => {
      setMode('main');
    }, 3000);

    setUserMode('');

    return () => {
      clearTimeout(modeTimer);
    };
  }, []);

  const IntroRender = () => {
    return (
      <>
        <LoadingBar />
        <div style={styles.wrap}>
          <img style={styles.introLogo} src={introLogo} alt="intro logo" />
        </div>
      </>
    );
  };

  const MainRender = () => {
    return (
      <div style={styles.wrap}>
        <img style={styles.mainLogo} src={mainLogo} alt="main logo" />
        <h1 style={styles.titleText}>환영합니다!</h1>
        <h3 style={styles.subTitleText}>
          로그인할 사용자 유형을 선택해 주세요
        </h3>
        <div style={styles.buttonContainer}>
          <Link to="/login/elderly">
            <Button
              backgroundColor="#32D0A1"
              color="#fff"
              text="어르신 로그인"
              mode="elderly"
            />
          </Link>
          <Link to="/login/family">
            <Button
              backgroundColor="#FF7B7B"
              color="#fff"
              text="가족 로그인"
              mode="family"
            />
          </Link>
        </div>
      </div>
    );
  };

  const ModePage = () => {
    return (
      (mode === 'intro' && <IntroRender />) ||
      (mode === 'main' && <MainRender />)
    );
  };

  return <ModePage />;
}

const styles = {
  wrap: {
    maxWidth: '375px',
    width: '100%',
    minHeight: '667px',
    backgroundColor: '#eeeeee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  introLogo: {
    maxWidth: '100%',
    height: 'auto',
  },
  mainLogo: { width: '148px', height: '132px', marginBottom: '10px' },
  titleText: { fontSize: '32px', fontWeight: 'bold' },
  subTitleText: { fontWeight: 500, fontSize: '14px' },
  buttonContainer: { marginTop: '10px' },
};

export default Main;

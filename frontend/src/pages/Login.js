import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import mainLogo from '../assets/img/mainLogo.png';
import { handleChangeInput } from '../utils/uilts';
import { UseContext } from '../provider/useContext';

function Login() {
  const navigate = useNavigate();
  const { type } = useParams();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const context = useContext(UseContext);
  const { userMode, setUserMode } = context;

  useEffect(() => {
    console.log('userMode:', userMode);
  }, [userMode]);

  const handleChangeInput = (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, '');

    if (value.length > 3 && value.length <= 7) {
      value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 7) {
      value =
        value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7);
    }

    setPhoneNumber(value);
  };

  const handleClickLogin = () => {
    //!번호, 이메일, 비밀번호 validation
  };

  const handleClickJoin = () => {
    navigate('/join');
  };

  return (
    <div style={styles.wrap}>
      <div style={styles.innerWrap}>
        <img style={styles.mainLogo} src={mainLogo} alt="main logo" />
        <div style={styles.loginInputWrap}>
          <input
            style={styles.inputStyle}
            type="text"
            name="phoneNumber"
            placeholder={type === 'elderly' ? '전화번호' : '이메일'}
            maxLength={type === 'elderly' && 13}
            onChange={type === 'elderly' && handleChangeInput}
            value={type === 'elderly' ? phoneNumber : email}
          />
          <input
            style={styles.inputStyle}
            type="text"
            name="phoneNumber"
            placeholder="비밀번호"
          />
          <button style={styles.loginButton} onClick={handleClickLogin}>
            로그인
          </button>
          <div style={styles.checkWrap}>
            <label style={{ color: '#707070', fontSize: '12px' }}>
              <input
                style={styles.checkbox}
                type="checkbox"
                name="saveEmail"
                defaultChecked={false}
              />
              {type === 'elderly' ? '전화번호 저장' : '이메일 저장'}
            </label>
            <span
              style={{ color: '#707070', fontSize: '12px', cursor: 'pointer' }}
              onClick={handleClickJoin}
            >
              회원가입
            </span>
          </div>
          <button style={styles.kakaoLoginButton}>카카오톡 로그인</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    maxWidth: '375px',
    width: '100%',
    minHeight: '667px',
    backgroundColor: '#eeeeee',
    display: 'flex',
    justifyContent: 'center', // 가로 가운데 정렬
    alignItems: 'center', // 세로 가운데 정렬
    display: 'flex',
    flexDirection: 'column',
  },
  innerWrap: {
    display: 'flex',
    width: '228px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px',
  },
  mainLogo: { width: '148px', height: '132px', marginBottom: '10px' },
  loginInputWrap: {},
  inputStyle: {
    width: '100%',
    height: '31px',
    paddingLeft: '5px',
    borderRadius: '5px',
    border: '1px solid #D9D9D9',
    fontSize: '14px',
    marginBottom: '10px',
  },
  checkWrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#707070',
  },
  checkbox: { verticalAlign: '-4px', marginRight: '5px' },
  loginButton: {
    backgroundColor: '#707070',
    width: '100%',
    height: '31px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#fff',
    marginBottom: '10px',
  },
  kakaoLoginButton: {
    backgroundColor: '#FAE31B',
    width: '100%',
    height: '31px',
    marginTop: '54px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#000',
    marginBottom: '10px',
  },
};

export default Login;

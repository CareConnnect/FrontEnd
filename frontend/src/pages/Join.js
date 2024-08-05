import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';

import Header from '../components/Header';
import trashIcon from '../assets/img/trashIcon.svg';
import Button from '../components/Button';

function Join() {
  const [isOpen, setIsOpen] = useState(false);
  const [detailedAddress, setDetailedAddress] = useState('');

  const [userInfo, setUserInfo] = useState({
    userPhoneId: '',
    password: '',
    confirmPassword: '',
    userName: '', //name
    email: '',
    address: '',
    profilePhote: '',
    nickname: '',
    selfIntroduction: '',
    familyPhoneNubmer: [{ name: '', phoneId: '' }], //가족 추가
  });

  const themeObj = {
    bgColor: '#ffffff',
    pageBgColor: '#ffffff',
    postcodeTextColor: '#C05850',
    emphTextColor: '#222222',
  };

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  //주소 검색
  const completeHandler = (data) => {
    const { address, zonecode } = data;

    setUserInfo({ ...userInfo, address: address });
  };

  const closeHandler = (state) => {
    if (state === 'FORCE_CLOSE') {
      setIsOpen(false);
    } else if (state === 'COMPLETE_CLOSE') {
      setIsOpen(false);
    }
  };

  const toggleHandler = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };

  const inputChangeHandler = (event) => {
    setDetailedAddress(event.target.value);
  };

  //파일선택
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserInfo({ ...userInfo, profilePhote: reader.result });
      console.log('reader', file);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={styles.wrap}>
      <Header />
      <div style={styles.innerWrap}>
        <h1 style={styles.titleText}>회원가입</h1>
        <div>
          <label>
            <div style={{ ...styles.labelTextStyle, color: '#FF3535' }}>
              이름(필수)
            </div>
            <input
              style={styles.inputStyle}
              type="text"
              placeholder="이름 입력"
              name="userName"
              onChange={onHandleInputChange}
              value={userInfo.userName}
            />
          </label>
        </div>
        <div>
          <label>
            <div style={{ ...styles.labelTextStyle, color: '#FF3535' }}>
              전화번호(필수)
            </div>
            <div style={{ display: 'flex' }}>
              <input
                style={styles.inputStyle}
                type="text"
                placeholder="숫자 11자리 입력"
              />
              {/* <button style={styles.formButton}>인증번호 요청</button> */}
            </div>
          </label>
        </div>
        {/* <input
          style={styles.inputStyle}
          type="text"
          placeholder="인증번호 입력"
          disabled
        /> */}
        <div>
          <label>
            <div style={{ ...styles.labelTextStyle, color: '#FF3535' }}>
              비밀번호(필수)
            </div>
            <input
              style={styles.inputStyle}
              type="password"
              placeholder="비밀번호 입력"
            />
            <input
              style={styles.inputStyle}
              type="password"
              placeholder="비밀번호 재입력"
            />
          </label>
        </div>
        <div>
          <label>
            <div style={{ ...styles.labelTextStyle, color: '#FF3535' }}>
              주소(필수)
            </div>
            <div style={{ display: 'flex' }}>
              <input
                style={styles.inputFlexStyle}
                type="text"
                disabled
                value={userInfo?.address}
              />
              <button style={styles.formButton} onClick={toggleHandler}>
                검색
              </button>
            </div>
          </label>
        </div>
        {isOpen && (
          <div>
            <DaumPostcode
              theme={themeObj}
              style={styles.postCodeStyle}
              onComplete={completeHandler}
              onClose={closeHandler}
            />
          </div>
        )}
        <input
          style={styles.inputStyle}
          type="text"
          placeholder="상세 주소 입력"
          value={detailedAddress}
          onChange={inputChangeHandler}
        />
        <div>
          <label>
            <div style={styles.labelTextStyle}>닉네임(선택)</div>
            <div style={{ display: 'flex' }}>
              <input
                style={styles.inputStyle}
                type="text"
                placeholder="닉네임 입력"
                name="nickname"
                onChange={onHandleInputChange}
              />
              {/* <button style={styles.formButton}>중복 확인</button> */}
            </div>
          </label>
        </div>
        <div>
          <label>
            <div style={styles.labelTextStyle}>프로필(선택)</div>
            <div style={{ display: 'flex' }}>
              <input
                accept="image/*"
                type="file"
                style={{
                  ...styles.formButton,
                  padding: 0,
                  overflow: 'hidden',
                  border: 0,
                  height: 'auto',
                  marginBottom: '10px',
                }}
                placeholder="파일 선택"
                onClick={handleImageUpload}
              />
            </div>
          </label>
        </div>
        <div>
          <label>
            <div style={styles.labelTextStyle}>자기소개(선택)</div>
            <textarea
              style={{
                ...styles.inputStyle,
                height: '100px',
                resize: 'none',
                overflow: 'hidden',
              }}
              name="selfIntroduction"
              type="text"
              onChange={onHandleInputChange}
            />
          </label>
          <div
            style={{
              width: '291px',
              fontSize: '10px',
              marginTop: '-10px',
              textAlign: 'right',
            }}
          >
            <span>{}/50</span>
          </div>
        </div>
        <div>
          <div>
            <div>
              <label>
                <div style={{ ...styles.labelTextStyle, color: '#FF3535' }}>
                  가족 전화번호(필수)
                </div>
                <input
                  style={styles.inputStyle}
                  type="text"
                  placeholder="숫자 11자리 입력"
                />
              </label>
              <img
                src={trashIcon}
                alt="trash icon"
                width="15px"
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <button style={{ ...styles.formButton }}>가족 추가</button>
          </div>
        </div>
      </div>
      <Button
        backgroundColor="#FF7B7B"
        color="#ffffff"
        text="회원가입 완료"
        size="small"
      />
    </div>
  );
}

const styles = {
  wrap: {
    maxWidth: '375px',
    width: '100%',
    minHeight: '667px',
    borderLeft: '1px solid #f4f4f4',
    borderRight: '1px solid #f4f4f4',
    display: 'flex',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  innerWrap: {
    display: 'flex',
    width: '300px',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '10px',
    textAlign: 'left',
  },
  titleText: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginTop: '30px',
    marginBottom: '30px',
  },
  labelTextStyle: { marginBottom: '10px', fontSize: '14px' },
  inputStyle: {
    width: '100%',
    height: '31px',
    paddingLeft: '5px',
    border: '1px solid #D9D9D9',
    fontSize: '14px',
    marginBottom: '10px',
  },
  inputFlexStyle: {
    height: '31px',
    paddingLeft: '5px',
    border: '1px solid #D9D9D9',
    fontSize: '14px',
    marginRight: '10px',
    flex: 1,
  },
  inputButtonWrap: { display: 'flex' },
  formButton: {
    height: '31px',
    border: 'none',
    backgroundColor: '#707070',
    color: '#ffffff',
    cursor: 'pointer',
  },
  postCodeStyle: {
    width: '100%',
    height: '480px',
  },
};

export default Join;

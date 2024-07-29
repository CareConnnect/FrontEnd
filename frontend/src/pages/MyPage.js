import React from 'react';
import Header from '../components/Header';

import sampleProfile from '../assets/img/sampleProfile.png';

function MyPage() {
  return (
    <div style={styles.wrap}>
      <Header />
      <div style={styles.profileImageWrap}>
        <div>
          <img style={styles.profileImage} src={sampleProfile} width="122" />
        </div>
      </div>
      <div style={styles.innerWrap}>
        <dl>
          <div style={styles.profileSection}>
            <dt style={styles.profileTitle}>어르신 연락처</dt>
            <dd style={styles.profileContent}>김00</dd>
            <dd style={styles.profileContent}>010-1111-1111</dd>
          </div>
          <div style={styles.profileSection}>
            <dt style={styles.profileTitle}>가족 연락처</dt>
            <div style={styles.profileSubCon}>
              <dd style={styles.profileContent}>김00</dd>
              <dd style={styles.profileContent}>010-1111-1111</dd>
            </div>
            <div>
              <dd style={styles.profileContent}>김00</dd>
              <dd style={styles.profileContent}>010-1111-1111</dd>
            </div>
          </div>
          <div style={styles.profileSection}>
            <dt style={styles.profileTitle}>주소</dt>
            <dd style={styles.profileContent}>
              경기도 남양주시 화도읍 경춘로2347번길
            </dd>
            <dd style={styles.profileContent}>
              경기도 남양주시 화도읍 경춘로2347번길
            </dd>
          </div>
          <div style={styles.profileSection}>
            <dt style={styles.profileTitle}>자기소개</dt>
            <dd style={styles.profileContent}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </dd>
          </div>
        </dl>
      </div>
      <button style={styles.editUser}>회원정보 수정</button>
      <button style={styles.deleteUser}>회원 탈퇴</button>
    </div>
  );
}

const styles = {
  wrap: {
    maxWidth: '375px',
    width: '100%',
    minHeight: '667px',
    // backgroundColor: 'skyblue',
    display: 'flex',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #F4F4F4',
  },
  innerWrap: {
    display: 'flex',
    width: '355px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '100px',
  },
  profileImageWrap: {
    width: '100%',
    height: '170px',
    backgroundColor: '#33D0A1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    border: '2px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
  },
  profileSection: {
    padding: '10px',
    borderBottom: '1px solid #dddddd',
  },
  profileTitle: {
    fontSize: '14px',
    marginBottom: '10px',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  profileSubCon: {
    borderBottom: '1.5px dotted #dddddd',
    marginTop: '10px',
    marginBottom: '10px',
    // textAlign: 'center',
  },
  profileContent: {
    fontSize: '14px',
    marginBottom: '10px',
    textAlign: 'left',
  },
  editUser: {
    width: '131px',
    height: '35px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#707070',
    color: '#fff',
  },
  deleteUser: {
    width: '131px',
    height: '35px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#FF7B7B',
    color: '#fff',
  },
};

export default MyPage;

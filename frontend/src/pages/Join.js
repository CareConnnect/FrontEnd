import React from 'react';
import Header from '../components/Header';

import trashIcon from '../assets/img/trashIcon.svg';

function Join() {
  return (
    <div style={styles.wrap}>
      <Header />
      <div style={styles.innerWrap}>
        <h1>회원가입</h1>
        <div>
          <label>
            이름(필수)
            <input type="text" placeholder="이름입력" />
          </label>
        </div>
        <div>
          <div>
            <label>
              전화번호(필수)
              <input
                type="text"
                placeholder="휴대전화 번호(숫자 11자리만 입력해 주세요)"
              />
              <button>인증번호 요청</button>
            </label>
          </div>
          <input type="text" placeholder="인증번호를 입력해 주세요" />
        </div>
        <div>
          <label>
            비밀번호(필수)
            <input type="password" placeholder="비밀번호 입력" />
            <input type="password" placeholder="비밀번호 재입력" />
          </label>
        </div>
        <div>
          <div>
            <label>
              주소(필수)
              <input type="text" placeholder="예) 연희동 132, 도산대로 33" />
              <button>검색</button>
            </label>
          </div>
          <input type="text" placeholder="상세 주소 입력" />
        </div>
        <div>
          <div>
            <label>
              닉네임(선택)
              <input type="text" placeholder="닉네임 입력" />
              <button>중복 확인</button>
            </label>
          </div>
        </div>
        <div>
          <div>
            <label>
              프로필(선택)
              <input type="text" />
              <button>파일 선택</button>
            </label>
          </div>
        </div>
        <div>
          <label>
            자기소개(선택)
            <input type="text" />
          </label>
          <span>0/50</span>
        </div>
        <div>
          <div>
            <div>
              <label>
                가족 전화번호(필수)
                <input
                  type="text"
                  placeholder="휴대전화 번호(숫자 11자리만 입력해 주세요)"
                />
                <button>인증번호 요청</button>
              </label>
            </div>
            <input type="text" placeholder="인증번호를 입력해 주세요" />
          </div>
          {/* 추가 연락처 */}
          <div>
            <div>
              <input
                type="text"
                placeholder="휴대전화 번호(숫자 11자리만 입력해 주세요)"
              />
              <button>인증번호 요청</button>
            </div>
            <input type="text" placeholder="인증번호를 입력해 주세요" />
            <img src={trashIcon} alt="trash icon" width="20px" />
          </div>
          <button>가족 추가</button>
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
    backgroundColor: 'skyblue',
    display: 'flex',
    alignItems: 'center',
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
};

export default Join;

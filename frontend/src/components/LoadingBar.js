import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function LoadingBar() {
  return (
    <div style={styles.wrap}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <CircularProgress
          sx={{
            color: '#FFB6C1', // 연한 분홍색
            thickness: 20, // 로딩 바 두께
          }}
        />
      </Box>
    </div>
  );
}

const styles = {
  wrap: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '90%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    // backgroundColor: 'rgba(0,0,0,.9)',
  },
  text: {
    marginTop: '16px', // 로딩 바와의 간격 조절
    color: '#fff',
  },
};

export default LoadingBar;

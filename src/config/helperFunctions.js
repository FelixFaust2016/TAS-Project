import React from 'react';

import { useLoading, TailSpin } from '@agney/react-loading';


const loadingBar = (state) => {
  // console.log("hey loading");
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    loaderProps: {
      valueText: 'Fetching video from the Great Internet',
      style: { margin: '0 auto', color: "#49A834", width: "100px" }
    },
    indicator: <TailSpin width="60" />,
  });

  return { containerProps, indicatorEl }
}

const ninVerificationModalStyles = () => {

  const customStylesRes = {
    overlay: {
      backgroundColor: "#8D988E"
    },
    content: {
      top: '50%',
      left: '50vw',
      right: 'auto',
      // bottom: 'auto',
      backgroundColor: "#ffffff",
      borderColor: "transparent",
      borderRadius: "10px",
      width: '30rem',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: '80vw',
      overFlow: 'hidden',
      marginRight: '-50%',
      zIndex: "10",
      transform: 'translate(-50%, -50%)'
    },
  }

  const customStylesPay = {
    // overlay: {
    //   backgroundColor: "#8D988E"
    // },
    content: {
      top: '20rem',
      left: '50vw',
      right: 'auto',
      // bottom: 'auto',
      backgroundColor: "#ffffff",
      borderColor: "transparent",
      borderRadius: "5px",
      width: '30rem',
      height: '13rem',
      maxHeight: 'auto',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: '80vw',
      // overFlow: 'hidden',
      padding: '20px' ,
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0 4px 8px 0 rgb(60,180,113)',
    },
  }
  return { customStylesRes, customStylesPay }
}


module.exports = {
  loadingBar,
  ninVerificationModalStyles
}
import React, { useEffect, useState, useRef } from 'react';

const TextRunning = () => {
  return (
    <marquee behavior="scroll" direction="left" className="text-lg">
      <span className="mr-5">⚪ Selamat datang di Honda Maju Pondok Gede ⚪ Call Center 24H Maju Motor Group: 0811 - 9001 - 9000 ⚪ Kunjungi dan follow kami di  www.majumotorgroup.com IG : Maju Motor Group FB : Maju Motor</span>
    </marquee>
  );
};

export default TextRunning;

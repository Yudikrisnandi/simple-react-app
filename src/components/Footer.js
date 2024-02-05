import React from 'react';
import RunningText from './RunningText'

const text = `⚪ Selamat datang di Honda Maju Pondok Gede ⚪ Call Center 24H Maju Motor Group: 0811 - 9001 - 9000 ⚪ Kunjungi dan follow kami di  www.majumotorgroup.com IG : Maju Motor Group FB : Maju Motor`

function Footer() {
  return (
    <footer className="w-full h-16 bg-indigo-950 text-white font-bold flex items-center justify-center overflow-hidden">
      <RunningText text={text}/>
    </footer>
  );
}

export default Footer;

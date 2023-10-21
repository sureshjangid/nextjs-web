import React from "react";
import styles from "./footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={'containers'}>
<div>&copy; Jangid Shabh All rights reserved</div>
      <div className={'social'}>
        <Image src="/1.png" width={15} height={15} className={'icon'} alt="Lama Dev Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={'icon'} alt="Lama Dev" />
        <Image src="/3.png" width={15} height={15} className={'icon'} alt="Lama Dev" />
        <Image src="/4.png" width={15} height={15} className={'icon'} alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;
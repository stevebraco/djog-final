import React from "react";
import { FaSnapchatGhost } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function IconSocial({colorStyle}) {
  const COLORS = ["icon-footer", "icon-info"];
  const iconColor = COLORS.includes(colorStyle) ? colorStyle : COLORS[0];

  return (
    <div className="wrapper-social">
      <a
        href="https://www.snapchat.com/add/djog7"
        target="_blank"
        rel="noreferrer noopener"
        className={`wrapper-social__${iconColor}`}
      >
        <FaSnapchatGhost />
      </a>
      <a
        href="https://www.instagram.com/djogtherapy"
        target="_blank"
        rel="noreferrer noopener"
        className={`wrapper-social__${iconColor}`}
      >
        <AiFillInstagram/>
      </a>
    </div>
  );
}


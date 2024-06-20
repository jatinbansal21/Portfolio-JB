"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaFreeCodeCamp,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/jatinbansal21",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/jatinbansal21",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
  {
    icon: <FaFreeCodeCamp />,
    path: "",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

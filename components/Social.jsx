import Link from 'next/link';

import {FaGithub, FaLinkedinIn, FaGlobe} from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/siri-n-shetty'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/siri-n-shetty/'},
    {icon: <IoMdMail />, path: 'mailto:sirishetty.narendra@gmail.com'},
    {icon: <FaGlobe />, path: 'https://siri123blog.wordpress.com/'},
    {icon: <SiLeetcode />, path: 'https://leetcode.com/u/siri_n_shetty/'},
    {icon: <SiCodeforces />, path: 'https://codeforces.com/profile/siri-n-shetty/'},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
        return (
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
        );
      })}
    </div>
  );
};

export default Social

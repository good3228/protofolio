import React from "react";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/chunlee2022/" target="view_frame">
        <div>
          <BsLinkedin></BsLinkedin>
        </div>
      </a>

      <div>
        <a href="https://www.instagram.com/sr.jim_lee/" target="view_frame">
          <BsInstagram></BsInstagram>
        </a>
      </div>
      {/* <div>
        <a target="view_window">
          <BsFacebook></BsFacebook>
        </a>
      </div> */}
    </div>
  );
};

export default SocialMedia;

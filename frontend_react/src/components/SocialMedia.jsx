import React from "react";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin></BsLinkedin>
      </div>
      <div>
        <BsInstagram></BsInstagram>
      </div>
      <div>
        <BsFacebook></BsFacebook>
      </div>
    </div>
  );
};

export default SocialMedia;

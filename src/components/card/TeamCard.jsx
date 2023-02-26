import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const TeamCard = (props) => {
  return (
    <>
      <div className="card-team">
        <div className="media-wrapper position-relative">
          <Image src={props.image} fill />
        </div>
        <h4>{props.name}</h4>
        <h5>{props.position}</h5>
        <div dangerouslySetInnerHTML={{ __html: props.description }}>
          
        </div>
        <div className="social d-flex gap-2">
          <FaFacebookSquare />
          <FaInstagram />
          <FaTwitterSquare />
        </div>
      </div>
    </>
  );
};

export default TeamCard;

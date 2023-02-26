import React from "react";
import Link from "next/link";
import { RiCupLine } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";

const ServiceCard = (props) => {
  return (
    <>
      <div className="card-service">
        <div className="position-relative">
          <div className="cup d-flex justify-content-between">
            <RiCupLine />
            <h5>{props.number}</h5>
          </div>
          <h4>{props.title}</h4>
          <p>{props.short_description}</p>
          <div className="d-flex gap-2">
            <Link href={`/services/${props.slug}`} className="stretched-link">
              {" "}
              Read More
            </Link>
            <BiRightArrowAlt />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;

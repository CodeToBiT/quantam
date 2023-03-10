import React from "react";
import Image from "next/image";

const TestimonialCard = (props) => {
  return (
    <>
      <div className="card-testimonial">
        <div className="background">
          <div className="row  gap-5 align-items-center ">
            <div className="col-md-4">
              <div className="media-wrapper position-relative">
                <Image src={props.image} fill alt="loading" />
              </div>
            </div>
            <div className="col-md-7">
              <div dangerouslySetInnerHTML={{__html: props.description}}>
             
              </div>
              <h3>{props.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;

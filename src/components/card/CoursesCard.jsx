import React from "react";
import Image from "next/image";
import Link from "next/link";
const CoursesCard = (props) => {
  return (
    <>
      <div className="card-course position-relative">
        <div className="row">
          <div className="col-4">
            <div className="media-wrapper position-relative">
              <Image src={props.image} fill />
            </div>
          </div>
          <div className="col-8">
            <h4>{props.name}</h4>
            <p>
            {props.description}
            </p>

            <Link href={`/courses/${props.slug}`} className="btn btn-secondary stretched-link text-white">
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesCard;

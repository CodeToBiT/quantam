import React from "react";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { AiOutlineTags } from "react-icons/ai";
import Link from "next/link";

const BlogCard = (props) => {
  return (
    <>
      <div className="card-blog">
        <div className="position-relative">
          <div className="media-wrapper position-relative">
            <Image src={props.image} fill />
          </div>
          <div className="info d-flex gap-4 align-items-end">
            <div className="date">
              <h2>
                09 <br /> July
              </h2>
            </div>
            <div className="name d-flex justify-content-between align-items-center gap-2">
              <BiUser />
              <p>{props.created_by}</p>
            </div>
            <div className="group d-flex justify-content-between align-items-center gap-2">
              <AiOutlineTags />
              <p>{props.title}</p>
            </div>
          </div>
          <p>{props.description}</p>
          <Link
            href={`/blogs/${props.slug}`}
            className="btn ms-3 btn-outline-primary text-black stretched-link"
          >
            View More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;

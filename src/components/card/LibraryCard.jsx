import React from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const LibraryCard = (props) => {
  return (
    <>
      <section className="card-library">
        <div className="media-wrapper position-relative">
          <Image src={props.image} fill alt="loading" />
        </div>

        <h2>Loving Kitchen 2</h2>
        <div className="d-flex justify-content-center w-100">
          <button className="btn btn-secondary py-2 px-3 text-white">
            Download
          </button>
        </div>
        <a
          data-fancybox="gallery"
          data-src={props.file}
          download={props.file}
          data-download-src={props.file}
          className="stretched-link"
        ></a>
      </section>
    </>
  );
};

export default LibraryCard;

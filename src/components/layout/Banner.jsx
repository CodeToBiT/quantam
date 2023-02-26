import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="banner-background d-flex align-items-center">
              <div className="media-wrapper position-relative">
                <Image src="/images/bannerimg.png" fill priority="false" />
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 col-xs-12 m-auto">
            <h2>20+ Years Of Experience</h2>
            <h1>Meet Our Experts & Get Better Result &Success</h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <Link
              href="#"
              className="btn btn-secondary text-white mt-3 px-4 py-2"
            >
              View more
            </Link>
          </div>
        </div>
        <div className="overlay-top">
          <Image src="/images/bannerdots.png" width={119} height={53} />
        </div>
        <div className="overlay-bottom">
          <Image src="/images/bannerdots.png" width={119} height={53} />
        </div>
      </section>
    </>
  );
};

export default Banner;

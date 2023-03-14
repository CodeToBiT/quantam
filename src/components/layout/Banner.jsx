import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Banner = () => {
  const [settings, setSettings] = useState([]);
  const fetchSettings = () => {
    fetch("https://admin.quantumleap.edu.np/api/settings")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSettings(data);
      });
  };

  useEffect(() => {
    fetchSettings();
  }, []);
  return (
    <>
      <section className="banner">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="banner-background d-flex align-items-center">
              <div className="media-wrapper position-relative">
                <Image
                  src={settings && settings.data?.banner_image}
                  fill
                  priority="false"
                  alt="loading"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 col-xs-12 m-auto">
            <h2>{settings && settings.data?.banner_slogan}</h2>
            <h1>{settings && settings.data?.banner_title}</h1>
            <p>{settings && settings.data?.banner_description}</p>
            {settings && settings.data?.banner_link ? (
              <Link
                href={settings.data?.banner_link}
                className="btn btn-secondary text-white mt-3 px-4 py-2"
              >
                View more
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="overlay-top">
          <Image
            src="/images/bannerdots.png"
            width={119}
            height={53}
            alt="loading"
          />
        </div>
        <div className="overlay-bottom">
          <Image
            src="/images/bannerdots.png"
            width={119}
            height={53}
            alt="loading"
          />
        </div>
      </section>
    </>
  );
};

export default Banner;

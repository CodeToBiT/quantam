import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneSquareAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  const [settings, setSettings] = useState([]);
  const [countries, setCountries] = useState([]);
  const [pages, setPages] = useState([]);
  const fetchSettings = () => {
    fetch("https://admin.quantumleap.edu.np/api/settings")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSettings(data);
      });
  };
  const fetchCountries = () => {
    fetch("https://admin.quantumleap.edu.np/api/countries")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      });
  };
  const fetchPages = () => {
    fetch("https://admin.quantumleap.edu.np/api/pages")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPages(data);
      });
  };
  useEffect(() => {
    fetchSettings();

    fetchCountries();
    fetchPages();
  }, []);
  return (
    <>
      <footer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 mb-4">
              <div className="media-wrapper position-relative">
                <Image src="/images/logo.png" fill></Image>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio, aliquam est! rerum inventore animi at iusto totam
                sunt accusamus quia
              </p>
              <div className="phone d-flex align-items-center gap-3">
                <FaPhoneSquareAlt />
                <p>+977 9876543210</p>
              </div>
              <div className="email d-flex align-items-center gap-3">
                <FaEnvelope />
                <p>example@example.com</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 ">
              <div className="row">
                <div className="col-md-4 col-6 mb-4">
                  <h3>Quick Links</h3>
                  <ul className="links">
                    <li className="nav-link">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="nav-link">
                      <Link href="/">About</Link>
                    </li>
                    <li className="nav-link">
                      <Link href="/">Services</Link>
                    </li>
                    <li className="nav-link">
                      <Link href="/">Country</Link>
                    </li>
                    <li className="nav-link">
                      <Link href="/">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-4">
                  <h3>Countries</h3>
                  <ul className="links">
                    {countries &&
                      countries.data?.slice(0, 5).map((data, key) => {
                        return (
                          <li className="nav-link" key={key}>
                            <Link href={`/countries/${data.slug}`}>
                              {data.name}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-4">
                  <h3>Company</h3>
                  <ul className="links">
                    <li className="nav-link">
                      <Link href="/faqs">FAQs</Link>{" "}
                    </li>
                    <li className="nav-link">
                      <Link href="/teams">Teams</Link>{" "}
                    </li>
                    {pages &&
                      pages.data?.slice(0, 2).map((data, key) => {
                        return (
                          <li className="nav-link" key={key}>
                            <Link href={`/${data.slug}`}>{data.title}</Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <div className="social d-flex gap-3">
              <h6>Follow on: </h6>
              <FaFacebookSquare />
              <FaInstagram />
              <FaTwitterSquare />
            </div>
          </div>
        </div>
        <div className="overlay">
          <Image
            src="/images/footerdot.png"
            width={110}
            height={98}
            alt=""
            sizes="(max-height: 125px)"
            priority="false"
          />
        </div>
        <div className="d-flex justify-content-end">
          <div className="background"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

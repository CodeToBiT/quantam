import React from "react";
import Container from "react-bootstrap/Container";
import Head from "next/head";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavigationBar = () => {
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
  }, [settings]);
  const isImage = settings && settings.data?.site_main_logo;

  const isIcon = settings && settings.data?.fav_icon;

  let favIcon;

  if (isIcon) {
    favIcon = (
      <link rel="shortcut icon" href={settings && settings.data?.fav_icon} />
    );
  } else {
    favIcon = <link rel="shortcut icon" href="/images/logo.png" />;
  }

  let mainLogo;
  let footerLogo;
  if (isImage) {
    mainLogo = (
      <Image
        src={settings && settings.data?.site_main_logo}
        alt="loading"
        fill
      />
    );
  } else {
    mainLogo = <Image src="/images/logo.png" alt="loading" fill />;
  }
  return (
    <>
      <Head>{favIcon}</Head>
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/" expand="lg">
              <div className="media-wrapper position-relative">{mainLogo}</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto gap-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/courses">Courses</Nav.Link>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
                <Nav.Link href="/countries">Countries</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              <Link
                href="/elibrary "
                className="btn apply btn-secondary text-white"
              >
                e-Library
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default NavigationBar;

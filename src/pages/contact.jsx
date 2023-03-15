import React from "react";
import Head from "next/head";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa";
import { Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { Suspense } from "react";

import { useState } from "react";
import axios from "axios";

const url = "https://admin.quantumleap.edu.np/api/";

const initialState = {
  full_name: "",
  email: "",
  phone: "",
  message: "",
};
export async function getServerSideProps() {
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      settings,
    },
  };
}

const Contact = ({ settings }) => {
  const [formData, setFormData] = useState(initialState);
  const [success, setSuccess] = useState("");
  const { full_name, email, phone, message } = formData;
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://admin.quantumleap.edu.np/api/inquiries", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setSuccess(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <Head>
      <title>Contact - Quantumleap</title>
    </Head>
      <main>
        <section className="contact ">
          <div className="container">
            <div className="row align-items-center justify-content-around">
              <div className="col-md-5">
                <h3>Contact Us</h3>
                <h1>Get In Touch With Us</h1>
                <p>{settings && settings.data.contact_section_description}</p>
                <div className="contact-info">
                  <div className="location d-flex gap-4 align-items-start mt-4">
                    <IoHomeOutline />
                    <div>
                      <h4>Our Location</h4>
                      <p>{settings && settings.data.site_location}</p>
                    </div>
                  </div>
                  <div className="phone d-flex gap-4 align-items-start mt-4">
                    <HiOutlinePhone />
                    <div>
                      <h4>Phone Number</h4>
                      <p>{settings && settings.data.site_contact}</p>
                    </div>
                  </div>
                  <div className="email d-flex gap-4 align-items-start mt-4">
                    <FaRegEnvelope />
                    <div>
                      <h4>Email Address</h4>
                      <p>{settings && settings.data.site_email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-form">
                  <div className="text-secondary heading-3 my-2 ">
                    {success}
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <FloatingLabel label="Your Name">
                        <Form.Control
                          type="text"
                          placeholder="name"
                          name="full_name"
                          value={full_name}
                          onChange={onInputChange}
                          required
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <FloatingLabel label="Email address">
                        <Form.Control
                          type="email"
                          placeholder="email"
                          name="email"
                          value={email}
                          onChange={onInputChange}
                          required
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <FloatingLabel label="Phone Number">
                        <Form.Control
                          type="text"
                          placeholder="phone"
                          name="phone"
                          value={phone}
                          onChange={onInputChange}
                          required
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <FloatingLabel label="Message">
                        <Form.Control
                          as="textarea"
                          placeholder="message"
                          name="message"
                          value={message}
                          onChange={onInputChange}
                          required
                        />
                      </FloatingLabel>
                    </Form.Group>

                    <Button
                      variant="secondary"
                      type="submit"
                      onClick={handleSubmit}
                      className="text-white w-100 py-2 heading-6"
                    >
                      Send Message
                    </Button>
                  </Form>
                  <div className="overlay-bottom">
                    <Image
                      src="/images/contactdots.png"
                      width={55}
                      height={65}
                      alt="loading"
                    />
                  </div>
                  <div className="overlay-top">
                    <Image
                      src="/images/contactdots.png"
                      width={55}
                      height={65}
                      alt="loading"
                    />
                  </div>
                  <div className="overlay-fan">
                    <Image
                      src="/images/contactfan.png"
                      width={83}
                      height={79}
                      alt="loading"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;

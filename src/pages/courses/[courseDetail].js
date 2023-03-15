import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiRightArrowCircle } from "react-icons/bi";
import BlogCard from "@/src/components/card/BlogCard";
import CountryCard from "@/src/components/card/CountryCard";

const url = "https://admin.quantumleap.edu.np/api/";

export async function getServerSideProps() {
  const responseBlogs = await fetch([url, "blogs"].join(""));
  const blogs = await responseBlogs.json();
  const responseCourses = await fetch([url, "courses"].join(""));
  const courses = await responseCourses.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      blogs,
      courses,
      settings,
    },
  };
}

const CourseDetail = ({ blogs, courses, settings }) => {
  const router = useRouter();
  const courseDetail = router.query.courseDetail;
  const [course, setCourse] = useState([]);

  useEffect(() => {
    courses &&
      courses.data.map((item) => {
        if (item.slug == courseDetail) {
          setCourse(item);
        }
      });
  }, [courses]);
  let current_url;

  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
    <Head>
      <title>{service && service.name} - Quantumleap</title>
    </Head>
      <main>
        <section className="single-landing">
          <div className="container">
            <div className="background row align-items-center">
              <div className="row">
                <div className="col-md-7">
                  <div className="media-wrapper position-relative">
                    <Image src={course && course.image} fill alt="loading"/>
                  </div>
                </div>
                <div className="col-md-5 py-3">
                  <h1>{course && course.name}</h1>
                  <p>{course && course.short_description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="single-main">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-7">
                <div
                  dangerouslySetInnerHTML={{
                    __html: course && course.description,
                  }}
                ></div>
              </div>
              <div className="col-md-4">
                <div className="sidebar">
                  <div className="media-wrapper position-relative">
                    <Image src="/images/single.png" fill alt="loading"/>
                  </div>
                  <Link href="/blogs">
                    Related Post <BiRightArrowCircle />
                  </Link>
                  {courses &&
                    courses.data.slice(0, 4).map((data, key) => {
                      return (
                        <div className="card-related" key={key}>
                          <div className="row">
                            <div className="col-5">
                              <div className="media-wrapper position-relative">
                                <Image src={data.image} fill alt="loading"/>
                              </div>
                            </div>
                            <div className="col-7">
                              <h4>{data.name}</h4>
                              <p>{data.short_description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="single-more">
          <div className="container">
            <div className="intro ">
              <h2>Explore Our Latest Blogs</h2>
            </div>
            <div className="row">
              {blogs &&
                blogs.data.slice(0, 3).map((data, key) => {
                  return (
                    <div className="col-md-4 col-sm-12" key={key}>
                      <BlogCard
                        title={data.title}
                        image={data.image}
                        description={data.short_description}
                        created_by={data.created_by}
                        slug={data.slug}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

      
      </main>
    </>
  );
};

export default CourseDetail;

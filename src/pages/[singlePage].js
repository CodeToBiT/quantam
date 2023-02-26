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
  const responseCountries = await fetch([url, "countries"].join(""));
  const countries = await responseCountries.json();
  const responsePages = await fetch([url, "pages"].join(""));
  const pages = await responsePages.json();
  const responseServices = await fetch([url, "services"].join(""));
  const services = await responseServices.json();

  return {
    props: {
      blogs,
      pages,
      services,
    },
  };
}

const serviceDetail = ({ blogs, services, pages }) => {
  const router = useRouter();

  const singlePage = router.query.singlePage;
  const [single, setSingle] = useState();

  useEffect(() => {
    pages &&
      pages.data.map((item) => {
        if (item.slug == singlePage) {
          setSingle(item);
        }
      });
  }, [pages]);

  return (
    <>
      <main>
        {/* <section className="single-landing">
          <div className="container">
            <div className="background row align-items-center">
              <div className="row">
                <div className="col-md-7">
                  <div className="media-wrapper position-relative">
                    <Image src={
                      single && single.image ? single.image : "/images/logo.png"
                    } fill />
                  </div>
                </div>
                <div className="col-md-5 py-3">
                 
                  <p>{single && single.short_description}</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="single-main">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-7">
              <h1>{single && single.title}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: single && single.description,
                  }}
                ></div>
              </div>
              <div className="col-md-4">
                <div className="sidebar mt-0">
                  <div className="media-wrapper position-relative">
                    <Image src="/images/single.png" fill />
                  </div>
                  <Link href="/blogs">
                    Related Post <BiRightArrowCircle />
                  </Link>
                  {services &&
                    services.data.slice(0, 4).map((data, key) => {
                      return (
                        <div className="card-related">
                          <div className="row">
                            <div className="col-5">
                              <div className="media-wrapper position-relative">
                                <Image src={data.image} fill />
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

export default serviceDetail;

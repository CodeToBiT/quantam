import Link from "next/link";
import Image from "next/image";
import Banner from "../components/layout/Banner";
import PartnerSlider from "../components/slider/PartnerSlider";
import ServiceCard from "../components/card/ServiceCard";
import CountryCard from "../components/card/CountryCard";
import CoursesCard from "../components/card/CoursesCard";
import TestimonailSlider from "../components/slider/TestimonailSlider";
import BlogCard from "../components/card/BlogCard";
import { GiPlainCircle } from "react-icons/gi";

const url = "https://admin.quantumleap.edu.np/api/";
export async function getServerSideProps() {
  const responseCountries = await fetch([url, "countries"].join(""));
  const countries = await responseCountries.json();
  const responseBlogs = await fetch([url, "blogs"].join(""));
  const blogs = await responseBlogs.json();
  const responseCourses = await fetch([url, "courses"].join(""));
  const courses = await responseCourses.json();

  const responseServices = await fetch([url, "services"].join(""));
  const services = await responseServices.json();
  const responseAchievements = await fetch([url, "achievements"].join(""));
  const achievements = await responseAchievements.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      countries,
      blogs,
      courses,
      achievements,
      services,
      settings,
    },
  };
}

export default function Home({
  countries,
  blogs,
  courses,
  achievements,
  services,
  settings,
}) {
  return (
    <>
      <main>
        <Banner />

        <section className="home-universities my-5">
          <div className="container">
            <div className="intro my-5 text-center">
              <h2>OUR PARTNER UNIVERISTIES</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-10 col-sm-12">
                <PartnerSlider />
              </div>
            </div>
          </div>
        </section>

        <section className="home-services">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 col-sm-12">
                <div className="intro">
                  <h3>{settings && settings.data.service_section_title}</h3>
                  <h2>
                    {settings && settings.data.service_section_description}
                  </h2>
                  <Link
                    href="/services"
                    className="btn btn-secondary text-white px-4 py-2 mt-2"
                  >
                    View More
                  </Link>
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="row">
                  {services &&
                    services.data.slice(0, 4).map((data, key) => {
                      return (
                        <div className="col-md-6" key={key}>
                          <ServiceCard
                            title={data.title}
                            short_description={data.short_description}
                            slug={data.slug}
                            number={key + 1}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-countries">
          <div className="container">
            <div className="intro text-center">
              <h3>COUNTRY</h3>
              <h2>{settings && settings.data.country_section_title}</h2>
              <p>{settings && settings.data.country_section_description}</p>
            </div>
            <div className="row">
              {countries &&
                countries.data.slice(0, 3).map((data, key) => {
                  return (
                    <div className="col-md-4 col-sm-12" key={key}>
                      <CountryCard
                        name={data.name}
                        image={data.image}
                        flag_image={data.flag_image}
                        description={data.short_description}
                        slug={data.slug}
                      />
                    </div>
                  );
                })}
            </div>
            <div className="d-flex justify-content-center">
              <Link
                href="/countries"
                className="btn btn-secondary btn-outline-primary mt-4 text-white br-12 px-4 py-2"
              >
                View More
              </Link>
            </div>
          </div>
          <div className="overlay"></div>
        </section>

        <section className="home-about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-12">
                <h3>About Quantum Services</h3>
                <h2>Providing Right & Solid Plan To Customers.</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Distinctio, aliquam est! rerum inventore animi at iusto totam
                  sunt accusamus quia
                </p>
                <div className="row">
                  {achievements &&
                    achievements.data.slice(0, 4).map((data, key) => {
                      return (
                        <div className="col-6" key={key}>
                          <div className="home-about-badge">
                            <Image
                              src={data.image}
                              width={64}
                              height={65}
                              alt=""
                              sizes="(max-height: 932px)"
                              priority="false"
                            />
                            <h4>{data.number}</h4>
                            <h5>{data.title}</h5>
                          </div>
                        </div>
                      );
                    })}
                  {/* 
                  <div className="col-6">
                    <div className="home-about-badge">
                      <Image
                        src="/images/badge.png"
                        width={64}
                        height={65}
                        alt=""
                        sizes="(max-height: 932px)"
                        priority="false"
                      />
                      <h4>10+</h4>
                      <h5>Countries Covered</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="home-about-badge">
                      <Image
                        src="/images/badge.png"
                        width={64}
                        height={65}
                        alt=""
                        sizes="(max-height: 932px)"
                        priority="false"
                      />
                      <h4>10+</h4>
                      <h5>Countries Covered</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="home-about-badge">
                      <Image
                        src="/images/badge.png"
                        width={64}
                        height={65}
                        alt=""
                        sizes="(max-height: 932px)"
                        priority="false"
                      />
                      <h4>10+</h4>
                      <h5>Countries Covered</h5>
                    </div>
                  </div> */}
                </div>

                <Link href="/about" className="btn btn-secondary text-white ">
                  Learn More
                </Link>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="d-flex justify-content-end">
                  <div className="experience">
                    <h6>30</h6>
                    <p>Years of Experience</p>
                    <div className="d-flex gap-3 justify-content-center">
                      <GiPlainCircle />
                      <GiPlainCircle />
                      <GiPlainCircle />
                    </div>
                  </div>
                </div>
                <div className="media-wrapper position-relative">
                  <Image
                    src="/images/homeabout.png"
                    alt=""
                    priority="false"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-courses">
          <div className="container">
            <div className="intro text-center">
              <h3>Available Courses</h3>
              <h2>{settings && settings.data.course_section_title}</h2>
              <p>{settings && settings.data.course_section_description}</p>
            </div>
            <div className="row ">
              {courses &&
                courses.data.slice(0, 4).map((data, key) => {
                  return (
                    <div className="col-md-6 col-sm-12" key={key}>
                      <CoursesCard
                        name={data.name}
                        image={data.image}
                        description={data.short_description}
                        slug={data.slug}
                      />
                    </div>
                  );
                })}
            </div>
            <div className="d-flex justify-content-center my-4">
              <Link
                href="/courses"
                className="btn btn-secondary text-white px-3 py-2 mt-2"
              >
                View All
              </Link>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <div className="intro text-center">
              <h3>Testimonial</h3>
              <h2>What our Clients Say To Us</h2>
            </div>

            <div className="main row align-items-center">
              <div className="row justify-content-center my-auto">
                <div className="col-md-9 col-sm-12 mx-auto ">
                  <TestimonailSlider />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-blogs">
          <div className="container">
            <div className="intro text-center">
              <h3>Blogs</h3>
              <h2>Latest News and Blogs</h2>
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
            <div className="d-flex justify-content-center">
              <Link
                href="/blogs"
                className="btn btn-secondary btn-outline-primary mt-4 text-white br-12 px-4 py-2"
              >
                View More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

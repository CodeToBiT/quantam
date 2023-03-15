import React from "react";
import Head from "next/head";
import Image from "next/image";
import TeamCard from "../components/card/TeamCard";
import TestimonailSlider from "../components/slider/TestimonailSlider";
const url = "https://admin.quantumleap.edu.np/api/";
export async function getServerSideProps() {
  const responseOurteams = await fetch([url, "ourteams"].join(""));
  const ourteams = await responseOurteams.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();
  const responsePages = await fetch([url, "pages"].join(""));
  const pages = await responsePages.json();
  const responseAchievements = await fetch([url, "achievements"].join(""));
  const achievements = await responseAchievements.json();

  return {
    props: {
      ourteams,
      settings,
      achievements,
      pages,
    },
  };
}
const About = ({ ourteams, achievements, settings, pages }) => {
  return (
    <>
      <Head>
        <title>About - Quantumleap</title>
      </Head>
      <main>
        <section className="about-info">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-12">
                {pages &&
                  pages.data.map((data, key) => {
                    if (data.id == "5") {
                      return (
                        <div key={key}>
                          <h3>About Quantum Services</h3>
                          <h2>{data.title}</h2>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          ></div>
                        </div>
                      );
                    }
                  })}
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
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="frame">
                  <div className="media-wrapper position-relative">
                    {pages &&
                      pages.data.map((data, key) => {
                        if (data.id == "5") {
                          return (
                            <Image
                              src={data.image}
                              fill
                              key={key}
                              alt="loading"
                            />
                          );
                        }
                      })}
                  </div>
                  <div className="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-ceo">
          <div className="container">
            <div className="row shadow align-items-center">
              <div className="col-md-6 col-sm-12">
                <div className="media-wrapper position-relative mx-auto">
                  {pages &&
                    pages.data.map((data, key) => {
                      if (data.id == "6") {
                        return <Image src={data.image} fill alt="loading" key={key}/>;
                      }
                    })}
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                {pages &&
                  pages.data.map((data, key) => {
                    if (data.id == "6") {
                      return (
                        <div key={key}>
                          <h2>{data.title}</h2>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          ></div>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </section>
        <section className="about-teams">
          <div className="container">
            <div className="intro text-center">
              <h3>OUR TEAM</h3>
              <h2>Meet Our Dedicated Team</h2>
            </div>
            <div className="row">
              {ourteams &&
                ourteams.data.slice(0, 4).map((data, key) => {
                  return (
                    <div className="col-md-3" key={key}>
                      <TeamCard
                        clsa="col-md-3"
                        name={data.name}
                        position={data.position}
                        image={data.image}
                        description={data.description}
                        key={key}
                      />
                    </div>
                  );
                })}
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
      </main>
    </>
  );
};

export default About;

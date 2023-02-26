import React from "react";
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

  return {
    props: {
      ourteams,
      settings,
      pages,
    },
  };
}
const about = ({ ourteams, settings, pages }) => {
  return (
    <>
      <main>
        <section className="about-info">
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

                <div className="d-flex gap-3">
                  <Image
                    src="/images/badge.png"
                    width={64}
                    height={65}
                    alt=""
                    sizes="(max-height: 932px)"
                    priority="false"
                  />
                  <div>
                    <h4>200+ Awards WInners</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                      omnis inventore quod maxime officiis.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <Image
                    src="/images/badge.png"
                    width={64}
                    height={65}
                    alt=""
                    sizes="(max-height: 932px)"
                    priority="false"
                  />

                  <div>
                    <h4>10+ Countries</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                      omnis inventore quod maxime officiis.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <Image
                    src="/images/badge.png"
                    width={64}
                    height={65}
                    alt=""
                    sizes="(max-height: 932px)"
                    priority="false"
                  />

                  <div>
                    <h4>5000+ Students</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                      omnis inventore quod maxime officiis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="frame">
                  <div className="media-wrapper position-relative">
                    <Image src="/images/aboutinfo.png" fill />
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
                  <Image src="/images/ceo.png" fill />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                {pages &&
                  pages.data.map((data, key) => {
                    if (data.id == "6") {
                      return (
                        <>
                          <h2>{data.title}</h2>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          ></div>
                        </>
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

export default about;

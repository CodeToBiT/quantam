import React from "react";
import Link from "next/link";
import ServiceCard from "@/src/components/card/ServiceCard";
const url = "https://admin.quantumleap.edu.np/api/";
export async function getServerSideProps() {
  const responseServices = await fetch([url, "services"].join(""));
  const services = await responseServices.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      services,
      settings,
    },
  };
}

const index = ({ services, settings }) => {
  return (
    <>
      <main>
        <section className="services">
          <div className="container">
            <div className="intro">
              <h3>{settings && settings.data.service_section_title}</h3>
              <h2>Services We Provide</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio, aliquam
              </p>
            </div>

            <div className="row">
              {services &&
                services.data.map((data, key) => {
                  return (
                    <div className="col-md-4" key={key}>
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
        </section>
      </main>
    </>
  );
};

export default index;

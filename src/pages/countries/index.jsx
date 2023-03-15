import React from "react";
import Head from "next/head";
import CountryCard from "@/src/components/card/CountryCard";
import Link from "next/link";

const url = "https://admin.quantumleap.edu.np/api/";
export async function getServerSideProps() {
    const responseCountries = await fetch([url, "countries"].join(""));
    const countries = await responseCountries.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      countries,
      settings,
    },
  };
}

const index = ({countries, settings}) => {
  return (
    <>
    <Head>
        <title>{settings && settings.data.countries_seo_title}</title>
        <meta
          name="description"
          content={settings && settings.data.countries_seo_description}
        />
        <meta
          name="keywords"
          content={settings && settings.data.countries_seo_keywords}
        />
      </Head>
      <main>
        <section className="countries">
          <div className="container">
            <div className="intro text-center">
              <h3>COUNTRY</h3>
              <h2>{settings && settings.data.country_section_title}</h2>
              <p>{settings && settings.data.country_section_description}</p>
            </div>
            <div className="row">
              {countries &&
                countries.data.map((data, key) => {
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
          </div>
          <div className="overlay"></div>
        </section>
      </main>
    </>
  );
};

export default index;

import Image from "next/image";
import Head from "next/head";
import TeamCard from "../components/card/TeamCard";

import { useEffect } from "react";
const url = "https://admin.quantumleap.edu.np/api/";

export async function getServerSideProps() {
  const responseOurteams = await fetch([url, "ourteams"].join(""));
  const ourteams = await responseOurteams.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      ourteams,
      settings,
    },
  };
}

const Teams = ({ ourteams, settings }) => {
  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
      <Head>
        <title>Our teams - Quantumleap</title>
      </Head>
      <main>
        <section className="teams">
          <div className="container">
            <div className="teams-intro my-5 text-center">
              <h1>Our Team</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    settings && settings.data?.ourteam_section_description,
                }}
                className="text-center"
              ></div>
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
      </main>
    </>
  );
};

export default Teams;

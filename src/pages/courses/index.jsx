import React from "react";
import CoursesCard from "@/src/components/card/CoursesCard";
import Link from "next/link";

const url = "https://admin.quantumleap.edu.np/api/";
export async function getServerSideProps() {
  const responseCourses = await fetch([url, "courses"].join(""));
  const courses = await responseCourses.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      courses,
      settings,
    },
  };
}

const index = ({ courses, settings }) => {
  return (
    <>
      <main>
        <section className="courses">
          <div className="container">
            <div className="intro text-center">
              <h3>Available Courses</h3>
             
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
          </div>
        </section>
      </main>
    </>
  );
};

export default index;

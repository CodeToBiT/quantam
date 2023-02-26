import React from "react";
import BlogCard from "@/src/components/card/BlogCard";
import Link from "next/link";

const url = "https://admin.quantumleap.edu.np/api/";
export async function getServerSideProps() {
  const responseBlogs = await fetch([url, "blogs"].join(""));
  const blogs = await responseBlogs.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      blogs,
      settings,
    },
  };
}

const index = ({ blogs, settings }) => {
  return (
    <>
      <main>
        <section className="blogs">
          <div className="container">
            <div className="intro text-center">
              <h2>Latest News and Blogs</h2>
              <p>
                Choose your next study destination!! We provide the guidelines
                on selecting the universities in the various destinations.
              </p>
            </div>
            <div className="row">
              {blogs &&
                blogs.data.map((data, key) => {
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

export default index;

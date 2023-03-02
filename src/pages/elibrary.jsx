import React from "react";
import LibraryCard from "../components/card/LibraryCard";
const url = "https://admin.quantumleap.edu.np/api/";

export async function getServerSideProps() {
  const responseBooks = await fetch([url, "books"].join(""));
  const books = await responseBooks.json();

  return {
    props: {
      books,
    },
  };
}

const Elibrary = ({ books }) => {
  return (
    <>
      <main>
        <section className="elibrary">
          <div className="container">
            <div className="intro">
              <h1>e-library</h1>
              <p>Varieties of books to choose from our library</p>
            </div>
            <div className="row">
              {books &&
                books.data.map((data, key) => {
                  return (
                    <div className="col-md-3" key={key}>
                      <LibraryCard image={data.image} file={data.file} />
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

export default Elibrary;

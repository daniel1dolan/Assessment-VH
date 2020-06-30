import React from "react";

export default function componentName() {
  return (
    <>
      <div className="d-flex flex-column sticky-bottom">
        <footer className="footer text-center">
          <div>
            WeatherBox
            <span> &copy; 2020 daniel.</span>
          </div>
          <div className="ml-auto">
            <span>Powered by </span>
            React, Bootstrap, Knex, Node, and PostgreSQL
          </div>
        </footer>
      </div>
    </>
  );
}

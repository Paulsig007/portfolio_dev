import React from "react";
// import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="text-center">
      <h2 className="loadText typeWriter">Welcome, please enjoy your stay</h2>
      <div className="loading">
        <i></i>
      </div>
      {/* <ReactLoading
        className="reactLoading"
        type="cylon"
        color="#fcad37"
        height={300}
        width={150}
      /> */}
    </div>
  );
}

import React from "react";
import jazzyPic from "../assets/Jazzy face.png";
import RevisedFetch from "./RevisedFetch";
const Products = () => {

  return (
    <>
      <main className="my-5 row">
        {/* div-1 */}
        <div className=" d-none d-lg-block col-lg-3">
          <img src={jazzyPic} alt="jazzy-pic" className="w-100 h-100" />
        </div>
        {/* div -2 */}
        <div className="col-lg-9">
          <RevisedFetch/>
           
          </div>
        
      </main>
    </>
  );
};

export default Products;

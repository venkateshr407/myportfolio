import React from "react";
import Loader from "../../Loader";
import Infotext from "../Infotext";
import { Banner } from "./Banner/Banner";
// import { Categories } from "./Categories/Categories";
import { Featured } from "./Featured/Featured";
// import { Landing } from "./Landing/Landing";

export const Gallary = (props) => {
  if (props.isLoadingGallary) return <Loader />;
  return (
    <>
      {/* <Landing data={props.galleryData}/> */}
      <Banner bannerData={props.galleryData} />
      <Infotext />
      <Featured featuredData={props.galleryData} />
      {/* <Categories categoriesData={props.galleryData} /> */}
    </>
  );
};

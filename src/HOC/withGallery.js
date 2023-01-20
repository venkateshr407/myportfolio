import React from "react";
import useSWR from "swr";
import axios from "axios";


const withGallery = (WrapperComponent) => {
    return (props) => {
      const fetcher = (url) => axios.get(url).then((res) => res.data);
      const { data, error, isLoading } = useSWR(
        "https://apis-madhuram.onrender.com/api/gallery",
        fetcher
      );
      return (
        <WrapperComponent {...props} galleryData={data?.[0]} isLoadingGallary={isLoading} error={error} />
      );
    };
  };




export default withGallery;

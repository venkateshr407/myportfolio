import React from "react";
import useSWR from "swr";
import axios from "axios";

const withMadhuram = (WrapperComponent) => {
  return () => {
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    const { data, error, isLoading } = useSWR(
      "https://apis-madhuram.onrender.com/api/portfolio",
      fetcher
    );
    return (
      <WrapperComponent data={data?.[0]} isLoading={isLoading} error={error} />
    );
  };
};

export default withMadhuram;

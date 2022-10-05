import React from "react";
import Card from "./Card";
import SeriesData from "./SeriesData";

const Amazon = () => {
    return (
        <Card
          key={SeriesData[5].key}
          series_img={SeriesData[5].series_img}
          series_cat={SeriesData[5].series_cat}
          series_title={SeriesData[5].series_title}
          series_link={SeriesData[5].series_link}
        />
      )
}

export default Amazon;
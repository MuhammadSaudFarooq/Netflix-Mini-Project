import React from "react";
import Card from "./Card";
import SeriesData from "./SeriesData";

const Netflix = () => {
    return (
        
        <Card
            key={SeriesData[0].key}
            series_img={SeriesData[0].series_img}
            series_cat={SeriesData[0].series_cat}
            series_title={SeriesData[0].series_title}
            series_link={SeriesData[0].series_link}
        />
    )
}

export default Netflix;
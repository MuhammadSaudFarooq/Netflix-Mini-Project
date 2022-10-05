import React from "react";
import Amazon from "./Amazon";
import Netflix from "./Netflix";
import Card from "./Card";
import SeriesData from "./SeriesData";

// Throgh simple function
// function getSeriesData(val) {
//   return (
//     <Card
//       series_img={val.series_img}
//       series_cat={val.series_cat}
//       series_title={val.series_title}
//       series_link={val.series_link}
//     />
//   )
// }

// if and else condition

// const favSeriesText = "netflix";
// const FavSeries = () => {
//   if (favSeriesText === "netflix") {
//     return <Netflix />
//   }
//   else if (favSeriesText === 'amazon') {
//     return <Amazon />
//   }
//   else {
//     return <h1>No series found</h1>
//   }
// }


function App() {
  return (
    <div className="main_container">
      <h1 className="main_heading">List of Netflix Series</h1>
      <div className="cards">
        {/* Custom attribute */}
        {/* {SeriesData.map(getSeriesData)} */}
        {/* Use fat arrow function */}
        {SeriesData.map((val) => {
          console.log(val)
          return (
            <Card
              key={val.key}
              series_img={val.series_img}
              series_cat={val.series_cat}
              series_title={val.series_title}
              series_link={val.series_link}
            />
          )
        })}

        {/* <FavSeries /> */}
        {/* Ternary operator */}
        {/* { (favSeriesText === "netflix") ? <Netflix /> : <Amazon /> } */}

        {/* <Card
          series_img={process.env.PUBLIC_URL + '/img/peaky_blinders.jpg'}
          series_cat="A Netflix Original Series"
          series_title="Peaky Blinders"
          series_link="https://www.netflix.com/pk/title/80002479"
        />
        <Card
          series_img={process.env.PUBLIC_URL + '/img/witcher.jpg'}
          series_cat="A Netflix Original Series"
          series_title="The Witcher"
          series_link="https://www.netflix.com/pk/title/80189685"
        />
        <Card
          series_img={process.env.PUBLIC_URL + '/img/money_heist.jpg'}
          series_cat="A Netflix Original Series"
          series_title="Money Heist"
          series_link="https://www.netflix.com/pk/title/80192098"
        />
        <Card
          series_img={process.env.PUBLIC_URL + '/img/dark.jpg'}
          series_cat="A Netflix Original Series"
          series_title="DARK"
          series_link="https://www.netflix.com/pk/title/80100172"
        /> */}
      </div>
    </div>
  );
}

export default App;
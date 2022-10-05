import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img src={props.series_img} alt="Title Image" className="card_img" />
            <div className="card_info">
                <span className="card_category">{props.series_cat}</span>
                <h3 className="card_title">{props.series_title}</h3>
                <a href={props.series_link} target="_blank" className="link_btn">
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    )
}

export default Card;
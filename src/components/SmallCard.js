import React from "react";

const SmallCard = (props) => {
  return (
    <div>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div className="card-grid">
          <div className="card-content">
            <div className="card-img">
              <img src={props.image} alt={props.alt} />
            </div>
            <div className="card-title">{props.title}</div>
            <div className="card-description">{props.description}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SmallCard;

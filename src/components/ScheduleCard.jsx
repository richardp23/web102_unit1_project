import React from "react";

const ScheduleCard = (props) => {
  return (
    <div className={"team-card"}>
      <h2>
        Week {props.week}{" "}
        <span style={{ fontWeight: "normal" }}>({props.date})</span>
      </h2>
      <img
        className={"team-logo"}
        src={"/src/assets/logos/" + props.logo + ".svg"}
        alt={props.logo + " Logo"}
      />
      <h3>Bills {props.name}</h3>
      <p>Season Record: {props.record}</p>
      {hasPlayedStatus(props.hasPlayed, props.link, props.score)}
    </div>
  );
};

const hasPlayedStatus = (hasPlayed, link, score) => {
  if (hasPlayed === true) {
    return (
      <>
        <p>Final: {score}</p>
        <a href={link}>
          <button className="button-24" role="button">View Recap</button>
        </a>
      </>
    );
  } else {
    return (
      <a href={link}>
        <button className="button-24" role="button">Buy Tickets</button>
      </a>
    );
  }
};

export default ScheduleCard;

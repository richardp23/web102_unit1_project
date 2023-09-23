import React from "react";

import ScheduleCard from "./ScheduleCard.jsx";

const Schedule = () => {
  return (
    <div className={"schedule-container"}>
      <ScheduleCard
        week={"1"}
        date={"09/11"}
        logo={"NYJ"}
        name={"at New York Jets"}
        record={"1-1"}
        hasPlayed={true}
        score={"16-22 (Loss)"}
        link={
          "https://www.buffalobills.com/game-day/2023/reg-week1/bills-at-jets/"
        }
      />
      <ScheduleCard
        week={"2"}
        date={"09/17"}
        logo={"LV"}
        name={"vs. Las Vegas Raiders"}
        record={"1-1"}
        hasPlayed={true}
        score={"10-38 (Win)"}
        link={
          "https://www.buffalobills.com/game-day/2023/reg-week2/raiders-at-bills/"
        }
      />
      <ScheduleCard
        week={"3"}
        date={"09/24"}
        logo={"WAS"}
        name={"at Washington Commanders"}
        record={"2-0"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/event/15005E9CD1445E21?wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_AWAY_BILLS_COMMANDERS&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_AWAY_BILLS_COMMANDERS"
        }
      />
      <ScheduleCard
        week={"4"}
        date={"10/01"}
        logo={"MIA"}
        name={"vs. Miami Dolphins"}
        record={"2-0"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/buffalo-bills-vs-miami-dolphins-orchard-park-new-york/event/00005E9495C31AE5?brand=bills&artistid=805905&wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_BILLS_DOLPHINS&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_BILLS_DOLPHINS"
        }
      />
      <ScheduleCard
        week={"5"}
        date={"10/08"}
        logo={"JAX"}
        name={"vs. Jacksonville Jaguars"}
        record={"1-1"}
        hasPlayed={false}
        link={
          "https://shp.csharmony.epsilon.com/pages/NFL_US/2023_London_ROI/?ck="
        }
      />
      <ScheduleCard
        week={"6"}
        date={"10/15"}
        logo={"NYG"}
        name={"vs. New York Giants"}
        record={"1-2"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/buffalo-bills-vs-new-york-giants-orchard-park-new-york/event/00005E9495F61AEF?brand=bills&artistid=805905&wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_BILLS_GIANTS&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_BILLS_GIANTS"
        }
      />
      <ScheduleCard
        week={"7"}
        date={"10/22"}
        logo={"NE"}
        name={"at New England Patriots"}
        record={"0-2"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/event/01005E99D37E4E9C?wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_AWAY_BILLS_PATRIOTS&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_AWAY_BILLS_PATRIOTS"
        }
      />
      <ScheduleCard
        week={"8"}
        date={"10/26"}
        logo={"TB"}
        name={"vs. Tampa Bay Buccaneers"}
        record={"2-0"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/buffalo-bills-vs-tampa-bay-buccaneers-orchard-park-new-york/event/00005E9496031AF5?brand=bills&artistid=805905&wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_BILLS_BUCS&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_BILLS_BUCS"
        }
      />
      <ScheduleCard
        week={"9"}
        logo={"CIN"}
        date={"11/05"}
        name={"at Cincinatti Bengals"}
        record={"0-2"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/event/16005E9BE1847080?wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_AWAY_BILLS_BENGALS&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_AWAY_BILLS_BENGALS"
        }
      />
      <ScheduleCard
        week={"10"}
        logo={"DEN"}
        date={"11/13"}
        name={"vs. Denver Broncos"}
        record={"0-2"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/buffalo-bills-vs-denver-broncos-orchard-park-new-york/event/00005E9495B71AD6?brand=bills&artistid=805905&wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_BILLS_BRONCOS&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_BILLS_BRONCOS"
        }
      />
      <ScheduleCard
        week={"11"}
        logo={"NYJ"}
        date={"11/19"}
        name={"vs. New York Jets"}
        record={"1-1"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/buffalo-bills-vs-new-york-jets-orchard-park-new-york/event/00005E9495FA1AF1?brand=bills&artistid=805905&wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_BILLS_JETS&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_BILLS_JETS"
        }
      />
      <ScheduleCard
        week={"12"}
        logo={"PHI"}
        date={"11/26"}
        name={"at Philidelphia Eagles"}
        record={"2-0"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/event/02005E98CF128FA8?wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_AWAY_BILLS_EAGLES&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_AWAY_BILLS_EAGLES"
        }
      />
      <ScheduleCard
        week={"13"}
        logo={"BUF"}
        date={"11/27-12/09"}
        name={"Bye Week"}
        record={"1-1"}
        hasPlayed={false}
        link={"https://www.buffalobills.com/tickets/"}
      />
      <ScheduleCard
        week={"14"}
        logo={"KC"}
        date={"12/10"}
        name={"at Kansas City Chiefs"}
        record={"1-1"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/event/06005E8EB1EB346F?wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_AWAY_BILLS_CHIEFS&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_AWAY_BILLS_CHIEFS"
        }
      />
      <ScheduleCard
        week={"15"}
        logo={"DAL"}
        date={"12/17"}
        name={"vs. Dallas Cowboys"}
        record={"2-0"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/buffalo-bills-vs-dallas-cowboys-orchard-park-new-york/event/00005E9495881AD1?brand=bills&artistid=805905&wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_BILLS_COWBOYS&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_BILLS_COWBOYS"
        }
      />
      <ScheduleCard
        week={"16"}
        logo={"LAC"}
        date={"12/23"}
        name={"at Los Angeles Chargers"}
        record={"0-2"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/event/0A005E94DE314A7E?wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_AWAY_BILLS_CHARGERS&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_AWAY_BILLS_CHARGERS"
        }
      />
      <ScheduleCard
        week={"17"}
        date={"12/31"}
        logo={"NE"}
        name={"at New England Patriots"}
        record={"0-2"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/buffalo-bills-vs-new-england-patriots-orchard-park-new-york/event/00005E9495C71AEA?brand=bills&artistid=805905&landing=s&wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_BILLS_PATRIOTS&utm_source=bills&utm_medium=schedule_page&utm_campaign=soft_landing&utm_content=SCHED_PG_LINK_BILLS_PATRIOTS"
        }
      />
      <ScheduleCard
        week={"18"}
        date={"TBD"}
        logo={"MIA"}
        name={"vs. Miami Dolphins"}
        record={"2-0"}
        hasPlayed={false}
        link={
          "https://www.ticketmaster.com/event/0D005E959733D40E?wt.mc_id=NFL_TEAM_BUF_SCHED_PG_LINK_AWAY_BILLS_DOLPHINS&utm_source=bills&utm_medium=schedule_page&utm_campaign=comingled_landing&utm_content=SCHED_PG_LINK_AWAY_BILLS_DOLPHINS"
        }
      />
    </div>
  );
};

export default Schedule;

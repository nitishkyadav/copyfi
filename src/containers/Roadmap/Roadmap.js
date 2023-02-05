import { Fragment } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import classes from "./Roadmap.module.css";

export default function Roadmap() {
  const white = "white";
  return (
    <Fragment>
      <div className={classes.desktopTimeline} id="roadmap">
        <h1>Roadmap</h1>
        <Timeline
          sx={{ maxWidth: "950px", margin: "0 auto" }}
          position="alternate"
        >
          <TimelineItem marginTop="5rem">
            <TimelineOppositeContent
              sx={{ marginTop: "10px", color: "#EC5B29", fontSize: "1.5rem" }}
            >
              Phase 1
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* <TimelineDot /> */}
              <TimelineConnector
                sx={{ backgroundColor: "grey", width: "5px" }}
              />
            </TimelineSeparator>
            <TimelineContent color={white}>
              <div className={`${classes.phase1} ${classes.phases}`}>
                <ul>
                  <li>- Website and Whitepaper Development</li>
                  <li>- Setting up Socials</li>
                  <li>- Organic Community Growth</li>
                  <li>- Contract Audit and KYC</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ marginTop: "10px", color: "#EC5B29", fontSize: "1.5rem" }}
            >
              Phase 2
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* <TimelineDot /> */}
              <TimelineConnector
                sx={{ backgroundColor: "grey", width: "5px" }}
              />
            </TimelineSeparator>
            <TimelineContent color={white}>
              <div className={`${classes.phase2} ${classes.phases}`}>
                <ul>
                  <li>- Seed Sale</li>
                  <li>- Establishing Partnership</li>
                  <li>- Presale Marketing</li>
                  <li>- Presale on Pinksale</li>
                  <li>- Pre-Launch Marketing</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ marginTop: "10px", color: "#EC5B29", fontSize: "1.5rem" }}
            >
              Phase 3
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* <TimelineDot /> */}
              <TimelineConnector
                sx={{ backgroundColor: "grey", width: "5px" }}
              />
            </TimelineSeparator>
            <TimelineContent color={white}>
              <div className={`${classes.phase3} ${classes.phases}`}>
                <ul>
                  <li>- Airdrop Bot Launch</li>
                  <li>- Portfolio Tracker</li>
                  <li>- Double Your Money(DYM) Event</li>
                  <li>- CG & CMC Listing</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ marginTop: "10px", color: "#EC5B29", fontSize: "1.5rem" }}
            >
              Phase 4
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* <TimelineDot /> */}
              <TimelineConnector
                sx={{ backgroundColor: "grey", width: "5px" }}
              />
            </TimelineSeparator>
            <TimelineContent color={white}>
              <div className={`${classes.phase4} ${classes.phases}`}>
                <ul>
                  <li>- Setting up Partnerships</li>
                  <li>- Copy Trade Bot Launch</li>
                  <li>- Arbitrage Bot Launch</li>
                  <li>- Incubation and Marketing Services</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ marginTop: "10px", color: "#EC5B29", fontSize: "1.5rem" }}
            >
              Phase 5
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                sx={{ backgroundColor: "grey", width: "5px" }}
              />
            </TimelineSeparator>
            <TimelineContent color={white}>
              <div className={`${classes.phase5} ${classes.phases}`}>
                <ul>
                  <li>- CEX Listing</li>
                  <li>- Setting up Physical Space for Work</li>
                  <li>- Team Expansion</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

      <Fragment>
        <div className={classes.mobileTimeline}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector
                sx={{
                  backgroundColor: "grey",
                  width: "5px",
                  alignContent: "left",
                }}
              />
            </TimelineSeparator>
          </TimelineItem>

          {/* <Timeline position="right">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector
                  sx={{
                    backgroundColor: "grey",
                    width: "5px",
                    alignContent: "left",
                  }}
                />
              </TimelineSeparator>
              <TimelineContent color={white}>
                <div className={`${classes.phase} ${classes.phases}`}>
                  <ul>
                    <li>- CEX Listing</li>
                    <li>- Setting up Physical Space for Work</li>
                    <li>- Team Expansion</li>
                  </ul>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline> */}
        </div>
      </Fragment>
    </Fragment>
  );
}

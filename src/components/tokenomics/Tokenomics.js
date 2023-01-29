import { Fragment } from "react";
import classes from "./Tokenomics.module.css";

const Tokenomics = () => {
  return (
    <Fragment>
      {/* <div className={classes.tokenomicsContainer}> */}
      <div className={classes.heading}>
        <h1>$CFY Tokenomics</h1>
      </div>

      <div className={classes.tokenomics}>
        <div
          className={`${classes.totalSupplyContainer} ${classes.subContainer}`}
        >
          <div className={classes.totalSupplyDetail}>
            Fixed Supply of <span>1B $CFY</span>
          </div>
          <div className={classes.totalSupplyBar} data-toggle="false"></div>
        </div>

        <div className={`${classes.presaleContainer} ${classes.subContainer}`}>
          <div className={`${classes.barText} ${classes.presaleDetails}`}>
            <span className={classes.percentShare}>50%</span>
            <br></br>
            <span className={classes.type}>Presale</span>
            <br></br>
            <span className={classes.supply}>500M $CFY</span>
          </div>
          <div className={`${classes.presaleBar} ${classes.bar}`}></div>
        </div>

        <div className={`${classes.lpContainer} ${classes.subContainer}`}>
          <div className={classes.barText}>
            <span className={classes.percentShare}>25%</span>
            <br></br>
            <span className={classes.type}>Liquidity Pool</span>
            <br></br>
            <span className={classes.supply}>250M $CFY</span>
          </div>
          <div className={`${classes.lpBar} ${classes.bar}`}></div>
        </div>

        <div
          className={`${classes.privateSaleContainer} ${classes.subContainer}`}
        >
          <div className={classes.barText}>
            <span className={classes.percentShare}>10%</span>
            <br></br>
            <span className={classes.type}>Private</span>
            <br></br>
            <span className={classes.supply}>100M $CFY</span>
          </div>
          <div className={`${classes.privateSaleBar} ${classes.bar}`}></div>
        </div>

        <div className={`${classes.reserveContainer} ${classes.subContainer}`}>
          <div className={classes.barText}>
            <span className={classes.percentShare}>5%</span>
            <br></br>
            <span className={classes.type}>Reserves and Development</span>
            <br></br>
            <span className={classes.supply}>50M $CFY</span>
          </div>
          <div className={`${classes.reserveBar} ${classes.bar}`}></div>
        </div>

        <div className={`${classes.cexContainer} ${classes.subContainer}`}>
          <div className={classes.barText}>
            <span className={classes.percentShare}>5%</span>
            <br></br>
            <span className={classes.type}>CEX Listing</span>
            <br></br>
            <span className={classes.supply}>50M $CFY</span>
          </div>
          <div className={`${classes.cexBar} ${classes.bar}`}></div>
        </div>

        <div
          className={`${classes.marketingContainer} ${classes.subContainer}`}
        >
          <div className={classes.barText}>
            <span className={classes.percentShare}>5%</span>
            <br></br>
            <span className={classes.type}>Marketing</span>
            <br></br>
            <span className={classes.supply}>50M $CFY</span>
          </div>
          <div className={`${classes.marketingBar} ${classes.bar}`}></div>
        </div>
      </div>
      {/* </div> */}
    </Fragment>
  );
};

export default Tokenomics;

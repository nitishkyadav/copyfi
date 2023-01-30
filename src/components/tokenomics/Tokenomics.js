import { Fragment } from "react";
import classes from "./Tokenomics.module.css";

const Tokenomics = () => {
  return (
    <Fragment>
      <Fragment>
        {/* <div className={classes.tokenomicsContainer}> */}
        {/* <div className={classes.heading}>
        <h1>$CFY Tokenomics</h1>
      </div> */}

        <div className={classes.tokenomics}>
          <div className={`${classes.totalSupplyContainer}`}>
            <div className={classes.totalSupplyDetail}>
              Fixed Supply of <span>1B $CFY</span>
            </div>
            <div className={classes.totalSupplyBar} data-toggle="false"></div>
          </div>

          <div
            className={`${classes.presaleContainer} ${classes.subContainer}`}
          >
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

          <div
            className={`${classes.reserveContainer} ${classes.subContainer}`}
          >
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
      {/* /* Mobile First Design */}
      <Fragment>
        <div className={classes.tokenomicsFlexContainer}>
          <div className={classes.tokenomicsHeadingFlex}>
            <h1>$SHM Tokenomics</h1>
          </div>
          <div className={classes.tokenomicsDetail}>
            <h3>
              Fixed Supply of <span>1B $SHM</span>
            </h3>
          </div>
          <div className={classes.flexBars}>
            <div className={classes.totalSupplyBar_flex}></div>
            <div className={classes.otherBars}>
              <div className={classes.presale_flex}>
                <div
                  className={`${classes.presaleBar_flex} ${classes.bars_flex}`}
                ></div>
                <div
                  className={`${classes.presaleSupply_flex} ${classes.supplyText_flex}`}
                >
                  50% <span>Presale</span>
                </div>
              </div>
              <div className={classes.lp_flex}>
                <div
                  className={`${classes.lpBar_flex} ${classes.bars_flex}`}
                ></div>
                <div
                  className={`${classes.lpSupply_flex} ${classes.supplyText_flex}`}
                >
                  25% <span>Liquidity</span>
                </div>
              </div>
              <div className={classes.private_flex}>
                <div
                  className={`${classes.privateBar_flex} ${classes.bars_flex}`}
                ></div>
                <div
                  className={`${classes.privateSupply_flex} ${classes.supplyText_flex}`}
                >
                  10% <span>Private</span>
                </div>
              </div>
              <div className={classes.research_flex}>
                <div
                  className={`${classes.researchBar_flex} ${classes.bars_flex}`}
                ></div>
                <div
                  className={`${classes.researchSupply_flex} ${classes.supplyText_flex}`}
                >
                  5% <span>Research</span>
                </div>
              </div>
              <div className={classes.cex_flex}>
                <div
                  className={`${classes.cexBar_flex} ${classes.bars_flex}`}
                ></div>
                <div
                  className={`${classes.cexSupply_flex} ${classes.supplyText_flex}`}
                >
                  5% <span>CEX</span>
                </div>
              </div>
              <div className={classes.marketing_flex}>
                <div
                  className={`${classes.marketingBar_flex} ${classes.bars_flex}`}
                ></div>
                <div
                  className={`${classes.marketingSupply_flex} ${classes.supplyText_flex}`}
                >
                  5% <span>Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Tokenomics;

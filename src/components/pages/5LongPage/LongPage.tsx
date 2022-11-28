import s from "./LongPage.module.css";
import robot from "../../../images/page5/robot.png";
import Button from "../../reusable/Button/Button";
import cube from "../../../images/page5/cube.png";
import chart from "../../../images/page5/chart.png";
import shield from "../../../images/page5/shield.png";
import binance from "../../../images/page5/binance.png"
import metamask from "../../../images/page5/metamask.png"
import kraken from "../../../images/page5/kraken.png"
import coinbase from "../../../images/page5/coinbase.png"
import gateio from "../../../images/page5/gateio.png"
import arrowRight from "../../../images/arrow-right.png"


const LongPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.subwrap}>
        <div className={s.poweredBy}>
          <div className={s.PBtext}>
            <h3 className={s.h3PB}>Powered by AI</h3>
            <div className={s.paragraphText}>
              <p className={s.pPB1}>
                AI has been in the DNA of our company from the very beginning.
                As cryptocurrencies are based on blockchain technology, AI can
                work in tandem with blockchain to solve many of the problems.{" "}
              </p>
              <p className={s.pPB2}>
                We use artificial intelligence algorithms to predict price
                trends on popular crypto markets. It is compatible with various
                cryptocurrency exchanges.
              </p>
            </div>
            <Button>Join Us</Button>
          </div>
          <img className={s.robotIMG} src={robot} alt="" />
        </div>
        <div className={s.animationalPartDiv}>
          <div className={s.aniWrapper}>
            <img src={cube} alt="cube pic" className={s.IMG} />
            <div className={s.textsPart}>
              <h3 className={s.titleText}>
                Track your crypto earnings like a pro, with a user-friendly and
                reliable portfolio tracker.
              </h3>
              <p className={s.pText}>
                Cointrack.ai is the most trusted place to monitor and analyze
                your cryptocurrency portfolio and calculate your taxes. You can
                keep track of your profits, losses and portfolio valuation with
                our easy to use platform.
              </p>
            </div>
          </div>
          <div className={s.aniWrapper}>
            <img src={chart} alt="chart" className={s.IMG} />
            <div className={s.textsPart}>
              <h3 className={s.titleText}>
                Review your crypto portfolio and get valuable insights
              </h3>
              <p className={s.pText}>
                We designed and built a streamlined crypto exchange platform for
                newcomers and experts alike. Cointrack.ai also supports DeFi
                assets on multiple chains. You can discover the world of
                decentralized finance
              </p>
            </div>
          </div>
          <div className={s.aniWrapper}>
            <img src={shield} alt="shield" className={s.IMG}/>
            <div className={s.textsPart}>
              <h3 className={s.titleText}>
                We offer industry leading protection for your crypto
              </h3>
              <p className={s.pText}>
                When choosing an exchange, trust matters.Protecting the safety
                and security of your funds, accounts and identity is of the
                utmost importance for us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.cashflow}>
        <div className={s.cf}>
          <h5>500K</h5>
          <p>Users</p>
        </div>
        <div className={s.cf}>
          <h5>$16B</h5>
          <p className={s.cfP}>Transaction volume tracked</p>
        </div>
        <div className={s.cf}>
          <h5>$900M</h5>
          <p className={s.cfP}>Capital losses claimed</p>
        </div>
      </div>
      <div className={s.manageCrypto}>
          <h3 className={s.mcTitle}>Manage All Your Crypto and Defi Assets Automatically</h3>
          <p className={s.mcText}>Just select and connect your exchange account  or wallet to start using CoinTrack.ai</p>
          <div className={s.cards}>
            <div className={`${s.card}`}>
              <img className={s.logoIMG} src={binance} alt="binance" />
              <div className={s.bitCards}>
                <h5>Binance</h5>
                <p>Connect <img src={arrowRight} alt="arrow"/> </p>
              </div>
            </div>
            <div className={`${s.card}`}>
              <img className={s.logoIMG} src={metamask} alt="metamask" />
              <div className={s.bitCards}>
                <h5>Metamask</h5>
                <p>Connect <img src={arrowRight} alt="arrow"/> </p>
              </div>
            </div>
            <div className={`${s.card}`}>
              <img className={s.logoIMG} src={kraken} alt="kreken" />
              <div className={s.bitCards}>
                <h5>Kraken</h5>
                <p>Connect <img src={arrowRight} alt="arrow"/> </p>
              </div>
            </div>
            <div className={`${s.card}`}>
              <img className={s.logoIMG} src={coinbase} alt="coinbase" />
              <div className={s.bitCards}>
                <h5>Coinbase</h5>
                <p>Connect <img src={arrowRight} alt="arrow"/> </p>
              </div>
            </div>
            <div className={`${s.card}`}>
              <img className={s.logoIMG} src={gateio} alt="gate.io" />
              <div className={s.bitCards}>
                <h5>Gate.io</h5>
                <p>Connect <img src={arrowRight} alt="arrow"/> </p>
              </div>
            </div>
          </div>
          <h4 className={s.or}>or</h4>
          <Button>Add Manually</Button>
          <h4 className={s.trial}>5 days trial period</h4>
      </div>
    </div>
  );
};

export default LongPage;
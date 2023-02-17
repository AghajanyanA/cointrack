import s from './Footer.module.css'
import logo from '../../../images/logo.png'

const Footer = () => {

    return <footer className={s.footer}>
        <div className={s.links}>
            <div>
                <a href='#' className={`${s.firstLink}`}>Company</a>
                <a href='#'>Pricing</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms of Use</a>
                <a href='#'>Refund Policy</a>
            </div>
            <div>
                <a href='#' className={`${s.firstLink}`}>Platform</a>
                <a href='#'>Crypto Portfolio Tracker</a>
                <a href='#'>Crypto Futures Tracker</a>
                <a href='#'>Cryptocurrency Live Prices</a>
                <a href='#'>Support</a>
            </div>
            <div>
                <a href='#' className={`${s.firstLink}`}>Integrations</a>
                <a href='#'>Binance</a>
                <a href='#'>Metamask</a>
                <a href='#'>Kraken</a>
                <a href='#'>Coinbase</a>
                <a href='#'>Gate</a>
                </div>
            <div>
                <a href='#' className={`${s.firstLink}`}>Socials</a>
                <a href='#'>Facebook</a>
                <a href='#'>Twitter</a>
                <a href='#'>LinkedIn</a>
                <a href='#'>Telegram</a>
            </div>
            <div>
                <img src={logo} alt="logo" className={s.logo} />
                <p className={s.outro}>Just a few minutes to see the whole picture of your portfolio. Connect all in one place and use CoinTrack.ai for your crypto purposes.</p>
            </div>
        </div>
    </footer>
}

export default Footer
import s from './header.module.css'
import logo from '../../../images/logo.png'
import Button from '../../reusable/Button/Button';
import { useState } from 'react';

const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false)
    const toggleClassname = () => {
        setBurgerOpen(prevState => !prevState)
    }

    return <div className={s.wrap}>
        <div className={`${s.menu} ${burgerOpen && s.open}`} onClick={toggleClassname} >
            <div className={s.menu_hamburger} />
        </div>

        <a href="/"><img className={s.logo} src={logo} alt="logo" /></a>
        <nav className={s.navs}>
            <a href="/">Home</a>
            <a href="/">Pricing</a>
            <a href="/">Portfolio</a>
            <a href="/">Futures</a>
        </nav>
        <a className={s.signIn} href="#">Sign in</a>
        <div className={s.button}>
            <Button>Start a Free Trial </Button>
        </div>
        <div className={`${s.dropDownWindow} ${burgerOpen && s.menuOpen} `}>

        </div>
    </div>
}
 
export default Header;
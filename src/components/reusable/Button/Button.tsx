import s from './button.module.css'

type ButtonProps = {
    children: string
}

const Button = (props: ButtonProps) => {
    const {children} = props

    return ( 
        <button className={s.button}>{children}</button>
    );
}
 
export default Button;
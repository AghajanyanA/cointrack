import s from './Reviews.module.css'

type ReviewsProps = {
    img: string
    name: string
    text: string
}

const Reviews = ({img, name, text}: ReviewsProps) => {
    return <div className={s.card}>
        <img src={img} alt="avatar" />
        <h5 className={s.name}>{name}</h5>
        <p className={s.text}>{text}</p>
    </div>
}

export default Reviews
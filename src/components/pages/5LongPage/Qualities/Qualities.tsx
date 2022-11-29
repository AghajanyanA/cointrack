import s from './Qualities.module.css'

type QualiiesProps = {
    img: string
    h3: string
    p: string
}

const Qualiies = ({img, h3, p}:QualiiesProps) => {
    return <div className={s.aniWrapper}>
    <img src={img} alt="cube pic" className={s.IMG} />
    <div className={s.textsPart}>
      <h3 className={s.titleText}>{
        h3
      }
      </h3>
      <p className={s.pText}>
        {
            p
        }
      </p>
    </div>
  </div>
}

export default Qualiies
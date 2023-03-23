import s from './Title.module.scss'

export const Title = ({title}) => {
    return <div className={s.title}><h2>{title}</h2></div>;
}
import Botao from '../Botao'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'
export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolhar um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto="Comecar!" />
        </div>
    )
}
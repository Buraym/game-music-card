import "../styles/Card.css"
import { useState, useRef } from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import CancelIcon from '@material-ui/icons/Cancel';
import { useEffect } from "react";

function Card(props) {

    const [opcao, setOpcao] = useState(true)
    const [play, setPlay] = useState(true)
    const [duration, setDuration] = useState(0)
    const [tempoAtual, setTempoAtual] = useState(0)
    const [adicionar, setAdicionar] = useState(false)

    const AudioPlayer = useRef()
    const ProgressBar = useRef()
    const AnimationRef = useRef()

    useEffect(() => {
        const seconds = Math.floor(AudioPlayer.current.duration)
        setDuration(seconds)
        ProgressBar.current.max = seconds;
    }, [AudioPlayer?.current?.loadedmetadata, AudioPlayer?.current?.readyState])

    const CalculateTime = (secs) => {
        const minutes = Math.floor(secs/60);
        const returnedMinutes = minutes < 10 ? minutes : minutes
        const seconds = Math.floor(secs%60)
        const returnedSeconds = seconds < 10 ? seconds : seconds
        return returnedMinutes + ":" + returnedSeconds
    }

    function PlayPause(){
        const prevValue = play;
        setPlay(!prevValue)
        if(!prevValue){
            AudioPlayer.current.play();
        } else {
            AudioPlayer.current.pause();
        }
    }

    function ChangeRange(){
        AudioPlayer.current.currentTime = ProgressBar.current.value
        ProgressBar.current.style.setProperty('--seek-before-width', '${ProgressBar.current.value / duration * 100}%')
        setTempoAtual(ProgressBar.current.value)
    }

    function Delete(lista, index){
        delete lista[index]
    }

    return (
        <>
            {
                opcao ?
                    <div className="card">
                        <div className="card-imagem-caixa">
                            <img className="card-imagem" src={props.imagem} alt="imagem do jogo"/>
                        </div>
                        <div className="card-conteudo"> 
                            <label className="card-nome">{props.nome}</label>                                
                            <div className="card-musica">
                                <audio ref={AudioPlayer} src={props.audio} preload="metadata" />
                                <div className="card-musica-botoes">
                                    <FastRewindIcon />
                                    { play ? <PlayArrowIcon onClick={PlayPause}/> : <StopIcon onClick={PlayPause}/> }
                                    <FastForwardIcon />
                                </div>
                                <div className="card-musica-caixa">
                                    <label className="card-musica-tempo">{CalculateTime(tempoAtual)}</label>
                                    <input className="card-musica-slider" type="range" defaultValue="0" ref={ProgressBar} onChange={ChangeRange}/>
                                </div>
                            </div>
                            <button className="card-botao-opcoes" onClick={()=>{setOpcao(!opcao)}}></button>
                        </div>
                    </div>
                :
                    <div className="card">
                        <div className="card-imagem-caixa">
                            <img className="card-imagem" src={props.imagem} alt="imagem do jogo"/>
                        </div>
                        <div className="card-conteudo">
                            <div className="card-texto">
                                <label>{props.autor}</label>
                            </div>
                            <div className="card-texto">
                                <label>{props.copyright}</label>
                            </div>
                            <button className="card-botao-opcoes" onClick={()=>{setOpcao(!opcao)}}></button>
                        </div>
                    </div>
            }
        </>
    );
}

export default Card;
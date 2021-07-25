import "../styles/Card.css"
import { useState } from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import CancelIcon from '@material-ui/icons/Cancel';

function Card(props) {

    const [opcao, setOpcao] = useState(true)
    const [play, setPlay] = useState(true)
    const [adicionar, setAdicionar] = useState(false)

    function PlayPause(){
        setPlay(!play)
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
                                <audio src={props.audio} preload="metadata" />
                                <div className="card-musica-botoes">
                                    <FastRewindIcon />
                                    { play ? <PlayArrowIcon onClick={PlayPause}/> : <StopIcon onClick={PlayPause}/> }
                                    <FastForwardIcon />
                                </div>
                                <div className="card-musica-caixa">
                                    <label className="card-musica-tempo">0:00</label>
                                    <input className="card-musica-slider" type="range"/>
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
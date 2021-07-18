import "../styles/Card.css"
import { useState } from "react";
/*import BackspaceIcon from '@material-ui/icons/Backspace';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';*/

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
//import LoopIcon from '@material-ui/icons/Loop';

function Card(props) {

    const [opcao, setOpcao] = useState(true)
    const [play, setPlay] = useState(true)

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
                                {/*
                                    <audio controls>
                                        <source src="" type="audio/mpeg"/>
                                        <source src="" type="audio/mpeg"/>
                                    </audio>
                                */}
                                <div className="card-music">
                                    <FastRewindIcon />
                                    {
                                        play ?
                                            <PlayArrowIcon onClick={() => (setPlay(!play))}/>
                                        :
                                            <StopIcon onClick={() => (setPlay(!play))}/>
                                    }
                                    <FastForwardIcon />
                                </div>
                                <button className="card-botao-opcoes" onClick={()=>{setOpcao(!opcao)}}></button>
                            </div>

                        </div>
                    
                    :
                        <div className="card">
                            <button className="card-botao-opcoes"></button>
                        </div>
                }
        </>
    );
}

export default Card;
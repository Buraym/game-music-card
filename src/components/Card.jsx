import { useState } from "react";
import BackspaceIcon from '@material-ui/icons/Backspace';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import LoopIcon from '@material-ui/icons/Loop';

function Card(props) {

    const [opcao, setOpcao] = useState(false)
    const [play, setPlay] = useState(false)

    return (
        <>

                {
                    opcao ?
                        <div className="card">
                            <img className="card-imagem"src={props.imagem}/>
                            <label className="card-nome">{props.nome}</label>
                            <div className="card-music">
                                <FastRewindIcon />
                                <PlayArrowIcon />
                                <FastForwardIcon />
                            </div>
                            <button className="card-botao-opcoes"></button>
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
import "../styles/Home.css"
import { useState } from "react";
import Card from '../components/Card'
import Foto1 from "../assets/Assassin's creed Odyssey/Assassins_Creed_Odyssey_2018_Game_Poster_medium.jpg"
//import Foto2 from "../assets/Halo 5 Guardians/halo-5-guardians-logo-1920x1080-7564e67a4b0e4a098adf71ed57992113.jpg"
import Foto3 from "../assets/Outer Worlds/tow-logo-2560x1440-1.jpg"
/*import Foto4 from "../assets/Spiderman PS4/at5FXY.jpg"
import Foto5 from "../assets/Titanfall 2/wp1924934.jpg"
import Foto6 from "../assets/Zelda Breath of the Wild/710944.jpg"*/
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';

function Teste() {

    const [opcao, setOpcao] = useState(true)
    const [play, setPlay] = useState(true)

    /*var musiclist = [
        {
            imagem:Foto1,
            nome:"Assassin's Creed Odyssey"
        },
        {
            imagem:Foto2,
            nome:"Halo 5 Guardians"
        },
        {
            imagem:Foto3,
            nome:"Outer Worlds"
        },
        {
            imagem:Foto4,
            nome:"Spiderman PS4"
        },
        {
            imagem:Foto5,
            nome:"Titanfall 2"
        },
        {
            imagem:Foto6,
            nome:"Zelda Breath of the Wild"
        },
    ]*/

    return (
        <div>
            <audio src="" preload="metadata" />
                <FastRewindIcon />
                {
                    play ?
                        <PlayArrowIcon onClick={() => (setPlay(!play))}/>
                    :
                        <StopIcon onClick={() => (setPlay(!play))}/>
                }
                <FastForwardIcon />
                <label>0:00</label>
                <input type="range"/>
        </div>  
    );
}

export default Teste;
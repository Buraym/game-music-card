import "../styles/Home.css"
import Card from '../components/Card'
import Foto1 from "../assets/Assassin's creed Odyssey/Assassins_Creed_Odyssey_2018_Game_Poster_medium.jpg"
import Foto2 from "../assets/Halo 5 Guardians/halo-5-guardians-logo-1920x1080-7564e67a4b0e4a098adf71ed57992113.jpg"
import Foto3 from "../assets/Outer Worlds/tow-logo-2560x1440-1.jpg"
import Foto4 from "../assets/Spiderman PS4/at5FXY.jpg"
import Foto5 from "../assets/Titanfall 2/wp1924934.jpg"
import Foto6 from "../assets/Zelda Breath of the Wild/710944.jpg"
import { useState } from "react"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ImageIcon from '@material-ui/icons/Image';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Home() {

    const [item, setItem] = useState(0)
    const [imagem, setImagem] = useState("")
    const [nome, setNome] = useState("")
    const [musica, setMusica] = useState("")

    var musiclist = [
        {
            imagem:Foto1,
            nome:"Legend of The Eagle Bearer",
            autor:"The Flight",
            copyright:"Assassin's Creed Odyssey: Legend of the Eagle Bearer (Main Theme) | Music by The Flight"
        },
        {
            imagem:Foto2,
            nome:"The Trials",
            autor:"Kazuma Jinnouchi",
            copyright:"Halo 5: Guardians © Microsoft Corporation"
        },
        {
            imagem:Foto3,
            nome:"Hope ( Menu Theme )",
            autor:"Justin E. Bell",
            copyright:"℗ 2019 Obsidian Entertainment under exclusive license to Take-Two Interactive Software, Inc."
        },
        {
            imagem:Foto4,
            nome:"Spiderman PS4",
            autor:"John Paesano (Original Version)",
            copyright:"Marvel's Super-Man (PS4) Original full Main (Menu)"
        },
        {
            imagem:Foto5,
            nome:"Titanfall 2 Main Theme Song",
            autor:"Stephen Barton",
            copyright:"Titanfall 2 Soundtrack - Main Theme Song"
        },
        {
            imagem:Foto6,
            nome:"Zelda Breath of the Wild",
            autor:"Manaka Kataoka, Yasuaki Iwata, Hajime Wakai",
            copyright:"The Legend of Zelda: Breath of the Wild"
        }
    ]

    return (
        <div className="tela">
            {/*
                musiclist.map(element => {
                    return(<Card imagem={element.imagem} nome={element.nome}/>);
                })
            */}
            <div className="carrosel-card">
                <ChevronLeftIcon onClick={()=>{
                    if(item > 0){
                        setItem(item - 1)
                    }
                }}/>
                {
                    (item == ((musiclist.length))) ?
                        <div className="card">
                            <div className="card-imagem-caixa">
                                <div className="card-imagem"></div>
                            </div>
                            <div className="card-conteudo"> 
                                <input className="card-nome-selecionar"/>
                                <div>                    
                                    <ImageIcon className="card-imagem-selecionar"/>
                                    <MusicNoteIcon className="card-musica-selecionar"/>
                                </div>
                                <AddCircleIcon className="card-adicionar"/>
                            </div>
                        </div>
                    :
                        <Card imagem={musiclist[item].imagem} nome={musiclist[item].nome} autor={musiclist[item].autor} copyright={musiclist[item].copyright}/>
                }
                <ChevronRightIcon onClick={()=>{
                    if(item < ((musiclist.length))){
                        (setItem(item + 1))
                    }
                }}/>
            </div>
        </div>  
    );
}

export default Home;
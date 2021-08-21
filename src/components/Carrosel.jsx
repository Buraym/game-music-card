import Card from "./Card.jsx";
import "../styles/Carrossel.css"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ImageIcon from '@material-ui/icons/Image';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useState } from "react"

function Carrosel(props){

    const [item, setItem] = useState(0)
    const [imagem, setImagem] = useState("")
    const [nome, setNome] = useState("")
    const [musica, setMusica] = useState("")

    return(
        <div className="carrosel-card">
            <ChevronLeftIcon onClick={()=>{
                if(item > 0){
                    setItem(item - 1)
                }
            }}/>
            {
                (item == ((props.musiclist.length))) ?
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
                    <Card imagem={props.musiclist[item].imagem} nome={props.musiclist[item].nome} autor={props.musiclist[item].autor} copyright={props.musiclist[item].copyright}/>
            }
            <ChevronRightIcon onClick={()=>{
                if(item < ((props.musiclist.length))){
                    (setItem(item + 1))
                }
            }}/>
        </div>
    )
}

export default Carrosel;
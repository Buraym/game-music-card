import "../styles/Home.css"
import Card from '../components/Card'
import Foto1 from "../assets/Assassin's creed Odyssey/Assassins_Creed_Odyssey_2018_Game_Poster_medium.jpg"
import Foto2 from "../assets/Halo 5 Guardians/halo-5-guardians-logo-1920x1080-7564e67a4b0e4a098adf71ed57992113.jpg"
import Foto3 from "../assets/Outer Worlds/tow-logo-2560x1440-1.jpg"
import Foto4 from "../assets/Spiderman PS4/at5FXY.jpg"
import Foto5 from "../assets/Titanfall 2/wp1924934.jpg"
import Foto6 from "../assets/Zelda Breath of the Wild/710944.jpg"

function Teste() {

    var musiclist = [
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
    ]

    return (
        <div className="tela">
            <Card imagem={Foto1} nome="Assassin's Creed Odyssey"/>
            <Card imagem={Foto3} nome="Outer Worlds"/>
        </div>  
    );
}

export default Teste;
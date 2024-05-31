import Card from "../Card/Card.jsx";
import "./CardList.css";
import cardImg1 from "../../assets/code.png";
import cardImg2 from "../../assets/brush.png";
import cardImg3 from "../../assets/js-logo.png";
import cardImg4 from "../../assets/person.png";


export const CardList = ()=>{
    const cardsData = [
        {title:"HTML" , img:cardImg1},
        {title:"CSS" , img:cardImg2},
        {title:"Javascript" , img:cardImg3},
        {title:"Accesibility", img:cardImg4}
    ]
    return(
        <div className="card-list">
            {cardsData.map((card, index)=>(
                <Card key={index} title={card.title} cardImg={card.img}/>)
            )}
        </div>
    );   
};

export default CardList;
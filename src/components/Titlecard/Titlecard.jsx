import React from 'react'
import "./Titlecard.css"
import cards_data from '../../assets/netflix_react_assets/assets/cards/Cards_data'

export const Titlecard = () => {
  return (
   <div className="titlecard">
    <h2>popular on netflix</h2>
    <div className="card-list">
        {cards_data.map((card,index)=>{
             return <div className="card" key={index} >
                <img src={card.image} alt="" />
                <p>{card.name}</p>
             </div>
        })}
    </div>
   </div>
  )
}
export default Titlecard

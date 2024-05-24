import '../CSS/PlantCard.css'
import AddToCart from './AddToCart.jsx';
import { useState } from 'react';


const PlantCard = ({ name, price, imageUrl }) => {

    return (
        <div className='wrapper'>
            <img src={imageUrl} width={200} height={250} alt={name} title={name} />
            <h3 className='name'> {name}</h3>
            <p className='price' >£{price.toFixed(2)}</p>
            <AddToCart />
        </div>
    )
}

export default PlantCard;   
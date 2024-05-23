import itemsData from '../itemsData.json';

function PlantCard() {
    
        itemsData.map((item) => (
            <div className='card'> key={item.id}
                <h1> {item.name}   </h1>
                <h3> {item.price.toFixed(2)} </h3>
                <img className="img" src={item.imageURL} alt="Broken Pic Link :-( " />
            </div>
        ))
    }

    // return (
    //     <div className='card'>
    //         <h1> {name}   </h1>
    //         <h3> {price.toFixed(2)} </h3>
    //         <img className="img" src={imageURL} alt="Broken Pic Link :-( " />
    //     </div>
    // );
//}

export default PlantCard;
import PlantCard from "../Components/PlantCard";
import itemsData from "../itemsData.json";

export default function Shop() {
    return (
        <div>
            {itemsData.map((item) =>
                    <div className='card'>
                        <PlantCard
                            name={item.name}
                            price={item.price}
                            imageURL={item.imageUrl}
                        />
                    </div>
            )}     
        </div>
    )
}

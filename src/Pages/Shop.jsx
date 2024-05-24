import '../App.css';
import PlantCard from '../Components/PlantCard';
import itemsData from '../itemsData.json';


const Shop = () => {
    return (
        <div className='display'>
        <>
            <h1 className='header'> Our plants </h1>
            <div className='items-grid'>
                {itemsData.map(( item ) =>(
                    <PlantCard {...item} />
                    ))
                }
            </div>
        </>
        </div>
    )

}
export default Shop;
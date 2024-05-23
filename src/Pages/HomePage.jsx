import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <div className="container">
                <div className="box1">
                <h1 className="header1" >  Bring Your Home to Life </h1>
                <h2 className="sub-head"><p> Elevate your living space with a touch of nature.</p>
                <p> We offer a range of easy-care houseplants.</p></h2>
                </div>
                <div className="box1">
                <button className='button'><Link to="./Shop">Browse Available Plants</Link> </button>
                </div>
                    <div className="box2"> <img className="img" src="https://user-images.githubusercontent.com/118732445/203775030-f6d39588-6b73-42eb-a396-d50098078501.jpg" />
                </div>
            </div>
        </div>
    )
}
import { useState } from "react";

const AddToCart = () => {
    const [selected, setSelected] = useState("Add to Cart");
    const [butClass, setButClass] = useState("add-to-cart");

    function select() {
        if ({ selected } == "Add to Cart") {
            setSelected("In Cart");
            setButClass("in-cart");
        } else {
            setSelected("Add To Cart");
            setButClass("add-to-cart");
        }
    }
    return (
        <div>
            <button className={butClass}>{selected}</button>
        </div>
    )
}
export default AddToCart;
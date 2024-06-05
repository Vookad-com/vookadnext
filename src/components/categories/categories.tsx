import HeadingL from "../heading";
import Orange from "../orange";
import Cat_Card from "../card";
import chicken_i from "./assets/chicken.png"
import bev_i from "./assets/bottle.png"
import fries_i from "./assets/fries.png"
const Categories = () =>{
    return (
        <section>
            <div className="container max-w-screen-lg m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-5">
                    <HeadingL>Our <Orange>Best Delivered</Orange> <br />
                        Categories</HeadingL>
                    <p>
                        It&apos;s not just about bringing you you good food from restaurants, we deliver you experiences.
                    </p>
                </div>
                <div className="grid grid-cols-3 justify-around max-w-screen-md m-auto">
                    <Cat_Card text="Masala Chicken" img={chicken_i}></Cat_Card>
                    <Cat_Card text="Soft Beverages" img={bev_i}></Cat_Card>
                    <Cat_Card text="French Fries" img={fries_i}></Cat_Card>
                </div>
            </div>
        </section>
    )
}

export default Categories;
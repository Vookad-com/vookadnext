import HeadingL from "../heading"
import Orange from "../orange"

import meal_i from "./assets/meal.png";
import popcorn_i from "./assets/popcorn.png";
import packet_i from "./assets/packet.png";
import Cat_Card2 from "./card";
export default function Service(){
    return (
        <section style={{
            backgroundColor: "#F6F2EF"
        }} className="w-full">
            <div className="container">
                <div className="text-center">
                    <HeadingL>How We Serve <Orange>Serve</Orange> You</HeadingL>
                </div>
                <div className="grid grid-cols-3 gap-4 justify-around max-w-screen-md m-auto">
                    <Cat_Card2 description="100% environment friendly packaging" text="Automated Packaging" img={packet_i}></Cat_Card2>
                    <Cat_Card2 description="We deliver the best experiences" text="We deliver the best experiences" img={meal_i}></Cat_Card2>
                    <Cat_Card2 description="Promise to deliver within 30mins" text="Serve hot Appetite" img={popcorn_i}></Cat_Card2>
                </div>
            </div>
        </section>
    )
}
import React from "react";
import Tabs from "./intro/Tabs";
import AdviceGen from "./advice_gen/advice_gen";

const TwoColLayout = () => {
    return (
        <section className="two_col_container">
            <Tabs>
        <div label="Travel">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vel cum dolorum ratione in debitis nam quis. Quia quas, corrupti earum ab sit eos sunt repellendus! Molestias provident harum, distinctio nobis beatae dolor non nam voluptas facilis incidunt, iure omnis vel corporis delectus similique, officiis exercitationem mollitia quae totam placeat.
        </div>
        <div label="Diverse Destinations">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam consequatur, incidunt, facere porro odit eaque debitis aperiam atque veritatis cumque sapiente quos et autem numquam nulla inventore consequuntur tenetur quaerat! Aliquid unde harum consequuntur tenetur quos deserunt distinctio. Porro quae blanditiis quidem excepturi. Veniam iusto numquam amet blanditiis accusantium.
        </div>
        <div label="Personal Guide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid expedita odio explicabo enim sed nisi ea provident assumenda ipsum iste rem obcaecati molestiae, quod soluta commodi at tempora blanditiis repellendus impedit? Molestiae atque impedit debitis numquam totam labore necessitatibus fuga libero, quo fugit aspernatur exercitationem ad deleniti soluta veritatis?
        </div>
      </Tabs>
            <AdviceGen />
        </section>
    )
}

export default TwoColLayout;
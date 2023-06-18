import { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {};

        fetchRecipes();
    });

    const recipeItems = recipes.map((recipe, i) => <RecipeItem key={i} />);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "lightblue",
                margin: "1rem 0",
                padding: "2rem",
                gap: "1rem"
            }}
        >
            <h2>Recipe List</h2>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    gap: "15px"
                }}
            >
                {recipeItems}
            </div>
        </div>
    );
};

export default RecipeList;

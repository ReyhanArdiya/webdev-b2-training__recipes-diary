import { useState } from "react";
import Recipe from "./models/Recipe";
import {
    // collection, addDoc,
    doc,
    setDoc
} from "firebase/firestore";
import { db } from "./firebase";

const RecipeForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [type, setType] = useState("Breakfast");
    const [minutes, setMinutes] = useState(0);
    const [vegetarian, setVegetarian] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");

    const onSubmitHandler = async e => {
        e.preventDefault();

        const newRecipe = new Recipe(
            name,
            description,
            author,
            type,
            minutes,
            vegetarian,
            favorite,
            ingredients.split(";"),
            steps.split(";")
        );

        // const recipesCollection = collection(db, "recipes");
        // const newRecipeReference = doc(recipesCollection);
        const newRecipeReference = doc(db, "recipes", newRecipe.name);

        try {
            // await addDoc(recipesCollection, { ...newRecipe });
            await setDoc(newRecipeReference, { ...newRecipe });
            alert("Your recipe has been added!");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <section>
            <h2>Write Your Recipe!</h2>

            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="recipeName">Recipe Name</label>
                    <input
                        type="text"
                        id="recipeName"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="recipeDescription">Recipe Description</label>
                    <textarea
                        id="recipeDescription"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="Type">Type</label>
                    <select
                        id="type"
                        value={type}
                        onChange={e => setType(e.target.value)}
                    >
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input
                        type="number"
                        id="minutes"
                        value={minutes}
                        onChange={e => setMinutes(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="vegetarian">Vegetarian</label>
                    <input
                        type="checkbox"
                        id="vegetarian"
                        value={vegetarian}
                        onChange={() => setVegetarian(prev => !prev)}
                    />
                </div>
                <div>
                    <label htmlFor="favorite">Favorite</label>
                    <input
                        type="checkbox"
                        id="favorite"
                        value={favorite}
                        onChange={() => setFavorite(prev => !prev)}
                    />
                </div>
                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="Steps">Steps</label>
                    <textarea
                        id="Steps"
                        value={steps}
                        onChange={e => setSteps(e.target.value)}
                    />
                </div>

                <button type="submit">Add Recipe</button>
            </form>
        </section>
    );
};

export default RecipeForm;

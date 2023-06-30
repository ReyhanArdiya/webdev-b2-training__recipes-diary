import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    onSnapshot,
    orderBy,
    query,
    where
} from "firebase/firestore";
import { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";
import { db } from "./firebase";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    // useEffect(() => {
    //     const fetchRecipes = async () => {
    //         const recipesCollection = collection(db, "recipes");
    //         // const tongsengAyamDoc = doc(db, "recipes", "Tongseng Ayam");

    //         // const docSnapshot = await getDoc(tongsengAyamDoc);
    //         // console.log(docSnapshot.ref === tongsengAyamDoc);

    //         // setRecipes([res.data()]);

    //         // const res = await getDocs(recipesCollection);

    //         const indomieQuery = query(
    //             recipesCollection,
    //             where("minutes", "==", 20),
    //             orderBy("name", "asc")
    //         );
    //         const res = await getDocs(indomieQuery);

    //         // const favoriteLunch = query(
    //         //     recipesCollection,
    //         //     where("favorite", "==", true),
    //         //     where("category.type", "==", "dinner")
    //         // );
    //         // const res = await getDocs(favoriteLunch);

    //         // const bakingPowderRecipesQuery = query(
    //         //     recipesCollection,
    //         //     where("ingredients", "array-contains", "Ayam")
    //         // );
    //         // const res = await getDocs(bakingPowderRecipesQuery);

    //         setRecipes(res.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    //     };

    //     fetchRecipes();
    // }, []);

    useEffect(() => {
        const recipesCollection = collection(db, "recipes");
        // const twentyMinutesRecipes = query(
        //     recipesCollection,
        //     where("minutes", "==", 20),
        //     orderBy("name", "asc")
        // );

        const callback = async snapshot => {
            setRecipes(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };

        const errorCallback = err => {
            console.log(err);
        };

        const unsubscribe = onSnapshot(
            // Reference/Query,
            recipesCollection,
            // Callback
            callback,
            // Error Callback
            errorCallback
        );

        return unsubscribe;
    }, []);

    const recipeItems = recipes.map((recipe, i) => (
        <RecipeItem
            key={i}
            author={recipe.author}
            description={recipe.description}
            name={recipe.name}
            imagePath={recipe.photoPath || ""}
            id={recipe.id}
            minutes={recipe.minutes}
        />
    ));

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

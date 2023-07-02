import { useEffect, useState } from "react";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import UserArea from "./UserArea";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const callback = user => {
            // user = User || null
            setUser(user);
        };

        const errorHandler = err => console.error(err);

        const unsub = onAuthStateChanged(auth, callback, errorHandler);

        return () => unsub;
    }, []);

    return (
        <main>
            <h1>Recipes Diary</h1>
            <UserArea user={user} />
            {/* {user ? (
                <>
                    <RecipeForm />
                    <RecipeList />
                </>
            ) : null} */}
            <RecipeForm />
            <RecipeList />
        </main>
    );
}

export default App;

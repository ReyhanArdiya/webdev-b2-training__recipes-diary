import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";

function App() {
    // TODO get user and hide recipe area if no user
    // const [user, setUser] = useState(null);

    return (
        <main>
            <h1>Recipes Diary</h1>
            <RecipeForm />
            <RecipeList />
        </main>
    );
}

export default App;

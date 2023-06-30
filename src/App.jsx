import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import UserArea from "./UserArea";

function App() {
    // TODO get user and hide recipe area if no user
    // const [user, setUser] = useState(null);

    return (
        <main>
            <h1>Recipes Diary</h1>
            <UserArea />
            <RecipeForm />
            <RecipeList />
        </main>
    );
}

export default App;

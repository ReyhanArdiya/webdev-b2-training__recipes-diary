export default class Recipe {
    constructor(
        name,
        description,
        author,
        type,
        minutes,
        vegetarian = false,
        favorite = false,
        ingredients,
        steps,
        photoPath = "",
        userId = ""
    ) {
        this.photoPath = photoPath;
        this.name = name;
        this.description = description;
        this.author = author;
        this.category = {
            type,
            vegetarian
        };
        this.minutes = minutes;
        this.favorite = favorite;
        this.ingredients = ingredients;
        this.steps = steps;
        this.userId = userId;
    }
}

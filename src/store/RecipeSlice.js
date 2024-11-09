
import { createSlice } from '@reduxjs/toolkit';

const initialRecipes = [
    {
        id: 1,
        name: "Sprouts",
        steps: [
            "Soak beans overnight in water",
            "Rinse beans thoroughly",
            "Place beans in a sprouting tray or jar",
            "Rinse and drain twice daily",
            "Harvest sprouts after 3-5 days",
        ],
        image: "/images/sprouts.jpg",

    },
    {
        id: 2,
        name: "Rasgulla",
        steps: [
            "Boil milk and add lemon juice to curdle",
            "Strain to get chenna, rinse under water, and knead into a dough",
            "Form small balls from the dough",
            "Prepare sugar syrup by boiling water and sugar",
            "Add chenna balls to boiling syrup and cook until they double in size",
            "Cool and serve Rasgulla in syrup",
        ],
        image: "/images/rosogulla.jpg",

    },
    {
        id: 3,
        name: "Chicken Curry",
        steps: [
            "Marinate chicken with spices and yogurt for 1 hour",
            "Heat oil in a pan and sauté onions until golden",
            "Add tomatoes and cook until oil separates",
            "Add marinated chicken and cook until tender",
            "Garnish with fresh coriander and serve hot",
        ],
        image: "/images/chicken.jpg",
    },
    {
        id: 4,
        name: "Biryani",
        steps: [
            "Marinate chicken with spices, yogurt, and lemon juice for 1 hour",
            "Cook rice until 70% done and set aside",
            "Layer marinated chicken and rice in a pot",
            "Seal the pot with dough and cook on low heat for 20-30 minutes",
            "Garnish with fried onions and serve hot",
        ],
        image: "/images/biryani.jpg",
    },
];

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: initialRecipes,
    reducers: {
        addRecipe: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;

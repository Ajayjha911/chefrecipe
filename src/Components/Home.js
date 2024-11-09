
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Grow } from '@mui/material';
import RecipeCard from './RecipeCard';
import '../App.css'

const Home = () => {
    const recipes = useSelector((state) => state.recipes);
    const navigate = useNavigate();

    return (
        <div className='home-button'>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/add-recipe')}
                style={{ marginBottom: '20px', float: "left" }}
            >
                Add New Recipe
            </Button>
            <Grid container spacing={3}>
                {recipes.map((recipe, index) => (
                    <Grow in={true} style={{ transitionDelay: `${index * 200}ms` }} key={recipe.id}>
                        <Grid item xs={12} sm={6} md={4}>
                            <RecipeCard recipe={recipe} onOpen={(id) => navigate(`/recipe/${id}`)} />
                        </Grid>
                    </Grow>
                ))}
            </Grid>
        </div>
    );
};

export default Home;


import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

const RecipeCard = ({ recipe, onOpen }) => (
    <Card elevation={3} style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <CardMedia
            component="img"
            height="140"
            image={recipe.image || "https://via.placeholder.com/150"}
            alt={recipe.name}
        />
        <CardContent>
            <Typography variant="h5" gutterBottom>
                {recipe.name}
            </Typography>
        </CardContent>
        <CardActions>
            <Button
                onClick={() => onOpen(recipe.id)}
                variant="contained"
                color="primary"
                style={{ margin: '0 auto' }}
            >
                View Recipe
            </Button>

        </CardActions>
    </Card>
);

export default RecipeCard;

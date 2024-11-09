import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../store/RecipeSlice';

const AddRecipe = () => {
    const [name, setName] = useState('');
    const [steps, setSteps] = useState('');
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddRecipe = () => {
        const stepArray = steps.split(',').map(step => step.trim());
        const newRecipe = {
            id: Date.now(),
            name,
            steps: stepArray,
            image: image ? URL.createObjectURL(image) : ''
        };
        dispatch(addRecipe(newRecipe));
        navigate('/');
    };

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: 2,
                backgroundColor: '#f5f5f5'
            }}
        >
            <Paper elevation={3} sx={{ maxWidth: 500, width: '100%', padding: 4 }}>
                <Typography variant="h5" component="h1" gutterBottom align="center">
                    Add New Recipe
                </Typography>
                <TextField
                    label="Recipe Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Steps (comma-separated)"
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                />

                <Box sx={{ mt: 2 }}>
                    <Typography variant="body1">Upload Recipe Image</Typography>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {image && (
                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                style={{ maxWidth: '100%', maxHeight: 200 }}
                            />
                        </Box>
                    )}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddRecipe}
                        sx={{ width: '50%' }}
                    >
                        Add Recipe
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default AddRecipe;

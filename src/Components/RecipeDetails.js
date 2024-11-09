import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Card, CardContent, Box, LinearProgress, Slide, CardMedia } from '@mui/material';

const RecipeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = useSelector((state) => state?.recipes?.find(r => r?.id === parseInt(id)));
    const [currentStep, setCurrentStep] = useState(0);
    const timerRef = useRef(null);

    const startAutoNext = useCallback(() => {
        setCurrentStep((prev) => Math.min(prev + 1, recipe?.steps?.length - 1));
    }, [recipe?.steps?.length]);

    useEffect(() => {
        if (currentStep < recipe?.steps?.length - 1) {
            timerRef.current = setTimeout(startAutoNext, 3000);
        }

        return () => clearTimeout(timerRef.current);
    }, [currentStep, startAutoNext]);

    const stopTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const prevStep = () => {
        stopTimer();
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const nextStep = () => {
        stopTimer();
        setCurrentStep((prev) => Math.min(prev + 1, recipe?.steps?.length - 1));
    };

    return (
        recipe ? (
            <Box sx={{ maxWidth: 600, margin: 'auto', mt: 5, textAlign: 'center', alignItems: 'center' }}>
                <Typography variant="h4" gutterBottom>{recipe?.name}</Typography>

                <CardMedia
                    component="img"
                    height="140"
                    image={recipe?.image || "https://via.placeholder.com/150"}
                    alt={recipe?.name}
                    sx={{ mb: 2 }}
                />

                <Box sx={{ width: '100%', mb: 2 }}>
                    <LinearProgress variant="determinate" value={(currentStep / (recipe?.steps?.length - 1)) * 100} />
                    <Typography variant="body2">{`Step ${currentStep + 1} of ${recipe?.steps?.length}`}</Typography>
                </Box>

                <Slide direction="left" in mountOnEnter unmountOnExit>
                    <Card elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                        <CardContent>
                            <Typography variant="h5">Step {currentStep + 1}</Typography>
                            <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                                {recipe.steps[currentStep]}
                            </Typography>
                        </CardContent>
                    </Card>
                </Slide>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        sx={{ transform: currentStep === 0 ? 'scale(1)' : 'scale(1.05)', transition: 'transform 0.2s' }}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={nextStep}
                        disabled={currentStep === recipe?.steps?.length - 1}
                        sx={{ transform: currentStep === recipe?.steps?.length - 1 ? 'scale(1)' : 'scale(1.05)', transition: 'transform 0.2s' }}
                    >
                        Next
                    </Button>
                </Box>

                <Button
                    variant="contained"
                    color="secondary"
                    onClick={stopTimer}
                    sx={{ mt: 2 }}
                >
                    Stop
                </Button>

                <Button
                    onClick={() => navigate('/')}
                    variant="text"
                    color="secondary"
                    sx={{ mt: 4, color: 'text.secondary' }}
                >
                    Back to Recipes
                </Button>
            </Box>
        ) : (
            <div style={{ textAlign: "center" }}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate('/')}
                >
                    Go To Home Page
                </Button>
                <div style={{ marginTop: "24px" }}>
                    <Typography fontSize={24} color='red'>Recipe not found!</Typography>
                </div>
            </div>
        )
    );
};

export default RecipeDetail;

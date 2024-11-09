import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';
import Home from './Components/Home';
import RecipeDetail from './Components/RecipeDetails';
import AddRecipe from './Components/AddRecipe';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div style={{ paddingBottom: '60px', paddingTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
          </Routes>

        </div>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

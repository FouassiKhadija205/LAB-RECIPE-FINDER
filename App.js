import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import "./index.css";

const APP_KEY = "e73a8f7941f943a98392e0a8b3e4a5d6"; // Your API Key

function App() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        if (query === "") return;

        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.results || []);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center mb-6">Recipe Finder</h1>
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search for a recipe..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border p-2 rounded-l-lg"
                />
                <button
                    onClick={fetchRecipes}
                    className="bg-blue-500 text-white p-2 rounded-r-lg"
                >
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}

export default App;








// import React from "react";

// function RecipeCard({ recipe }) {
//     return (
//         <div className="bg-white rounded-lg shadow-md p-4">
//             <img
//                 src={recipe.image}
//                 alt={recipe.title}
//                 className="w-full h-48 object-cover rounded-md"
//             />
//             <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
//         </div>
//     );
// }

// export default RecipeCard;




// 3. index.js

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );



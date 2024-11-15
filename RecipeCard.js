import React from "react";

function RecipeCard({ recipe }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
        </div>
    );
}

export default RecipeCard;

  
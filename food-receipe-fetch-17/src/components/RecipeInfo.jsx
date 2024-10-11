



import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function RecipeInfo() {

    const [item, setItem] = useState()
    const [vId, setVId] = useState("");

    const { MealId } = useParams();

    const mealIdInfo = async () => {
        if (MealId !== "") {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`);
                const data = await response.json();
                console.log(data.meals[0]);

                setItem(data.meals[0]);

                const url = data.meals[0].strYoutube;
                if (url) {
                    const str = url.split("v=");
                    setVId(str[1]);
                }



            } catch (error) {
                console.error('Error fetching meal:', error);
            }
        }
    };

    useEffect(() => {
        mealIdInfo();
    }, []);



    return (
        <>
            {
                (!item) ? "" :
                    <div className="content">
                        <img src={item.strMealThumb} alt="" />
                        <div className="inner-content">
                            <h1>{item.strMeal}</h1>
                            <h2>{item.strArea} Food</h2>
                            <h3>Category {item.strCategory}</h3>
                        </div>

                        <div className="recipe-details">
                            <div className="ingredients">
                                <h2>Ingredients</h2><br />
                                <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
                                <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
                                <h4>{item.strIngredient3}:{item.strMeasure3}</h4>

                            </div>
                            <div className="instructions">
                                <h2>Instructions</h2><br />
                                <h4>{item.strInstructions}</h4>
                            </div>
                        </div>
                        <div className="video">
                            <iframe width="
                        100%" height="515" title="recipeVideo"

                                // embed is written manually
                                src={`https://www.youtube.com/embed/${vId}`}>
                            </iframe>




                        </div>

                    </div>
            }
        </>
    )
}

export default RecipeInfo;

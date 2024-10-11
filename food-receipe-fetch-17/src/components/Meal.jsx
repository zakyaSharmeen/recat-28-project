


import React, { useEffect, useState } from 'react';
import MealsItem from './MealsItem';
import RecipeIndex from './RecipeIndex';

function Meal() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

    const [item, setItem] = useState([]);
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");


    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setItem(data.meals);
            setShow(true);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data when the component mounts
    }, []);

    const setIndex = async (alpha) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
            const data = await response.json();
            setItem(data.meals);
            setShow(true);
        } catch (error) {
            console.error(error);
        }
    };

    const seachRecipe = async (evt) => {
        if (evt.key === "Enter") {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
                const data = await response.json();
                setItem(data.meals);
                setShow(true);
            } catch (error) {
                console.error(error);
            }
        }
    };
    


    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search Your Food Recipe</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4>
                </div>
                <div className="searchBox">
                <input type="search" className="search-bar" onChange={e => setSearch(e.target.value)} onKeyPress={seachRecipe}/>
                </div>
                <div className="container">
                    {show ? <MealsItem props={item} /> : "Not found"}
                </div>
                <div className="indexContainer">
                    <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
                </div>
            </div>
        </>
    );
}

export default Meal;

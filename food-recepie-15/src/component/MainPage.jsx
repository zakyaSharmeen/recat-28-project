


import React, { useState, useEffect } from 'react';
import MealCards from './MealCards';

function MainPage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('cake'); // Default search term
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error handling state

    // Function to fetch meals based on the search term
    const myFun = async () => {
        setLoading(true); // Set loading to true when fetching
        setError(null); // Reset previous errors

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await response.json();

            if (jsonData.meals) {
                  // console.log(jsonData.meals);

       // console.log(jsonData.meals);
                setData(jsonData.meals); // Update data if meals found
            } else {
                setData([]); // If no meals are found, set empty data
                setError('No results found. Please try another search.'); // Show error message
            }
        } catch (err) {
            setError('An error occurred while fetching the data.'); // Handle any errors
        } 
            setLoading(false); // Set loading to false when done
        
    };

    // Fetch default data when the component mounts
    useEffect(() => {
        myFun();
    }, []);

    // Handle changes to search input
    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <h1 className='head'>FOOD RECIPE APP</h1>
            <div className="container">
                <div className="searchBar">
                    <input 
                        type="text" 
                        value={search} 
                        onChange={handleInput} 
                        placeholder='Search any food items'
                    />
                    <button onClick={myFun}>Search</button>
                </div>

                {loading && <p>Loading...</p>} 
                {error && <p style={{ color: 'red' }}>{error}</p>} 

                <MealCards details={data} />
            </div>
        </div>
    );
}

export default MainPage;

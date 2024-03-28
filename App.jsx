import SearchBar from './SearchBar' 
import React, {useState, useEffect} from 'react';
import Foodlist from './Details'

function Food () {
    const [foodItems, setFoodItems] = useState([])
    const fetcFood = async () => {
      try {
    const response = await fetch ('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    if (!res.ok) {
        throw new Error ('Error', error)
    }
    const data = await response.json()
    setFoodItems(data.meals || [])
  }
    catch(error) {
    console.error('Error', error);
    
  }
  }

  return (
    <div>
     <FoodList foodItems = {fetchItems} />
     <SearchBar onSearch = {fetchFood}  />
    </div>
  )
}

export default App

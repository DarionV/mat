import React from 'react'

function FoodList ({foodItems}) {
return (
           <ul>
            
            {foodItems.map((foodItem) => (
            <li key ={foodItem.id}> {foodItem.name} </li>
            ))}
            
            </ul>
)
}

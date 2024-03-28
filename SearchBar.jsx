import React, {useState} from 'react'

function SearchBar() {
    const [inputValue, setInputValue] = useState ("")

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

return (

    <div>
        <form onSubmit = {handleSubmit}>
            <label> Food item
            <input
             type= "text"
              placeholder="search"
               value={inputValue}
                 onChange = {handleChange} />
    </label>
    
    <button type="submit"> Sök</button> 
</form>
</div>

)
}
export default SearchBar;
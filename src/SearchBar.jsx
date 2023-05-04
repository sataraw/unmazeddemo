import React, {useState} from 'react'

const SearchBar = ({disabled}) => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        if (searchInput.length > 0) {
            return 0;
        }
    };
    

    return <div className='SearchBarContainer'> 
    <input 
    className='SearchBar'
    type='search' 
    placeholder='Search here'
    onChange={handleChange} 
    value={searchInput}
    disabled={disabled}
    /> 
    </div>
};
export default SearchBar;
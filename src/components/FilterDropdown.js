import React from 'react';

const FilterDropdown = ({ filterType, onChange }) => {
    return (
        
        <select value={filterType} onChange={onChange}>
            {/* Cards can be of two types ['burner', "subscription"]* , 
            "All" field is added as default to show all the cards irrespective of the card's type*/}
            <option value="">All</option>
            <option value="burner">Burner</option>
            <option value="subscription">Subscription</option>
        </select>
    );
};

export default FilterDropdown;

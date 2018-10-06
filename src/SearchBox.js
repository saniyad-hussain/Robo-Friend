import React from 'react';

const SearchBox = ({Searchfiled,SearchChange})=>{
	return(
		<input type='search' 
		placeholder = 'Search Robots'
		onChange = {SearchChange}
		/>
		 
	)
}
export default SearchBox;
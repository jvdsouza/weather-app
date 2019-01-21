import React from 'react';

const Search = ({onInputChange, onButtonSubmit}) => {
  return(
    <div>
      <input type='text' onChange={onInputChange} />
      <button onClick={onButtonSubmit}>Get Weather</button>
    </div>
  );
}

export default Search;

import { React} from 'react';

import './Search.css';


const Search = () => {
  return (
    <div className='ezm__search'>
      <input
        type="text"
        placeholder="Search..."
        onMouseOver={(e) => { e.target.style.backgroundColor = 'rgba(48, 48, 48, 0.8)' }}
        onMouseOut={(e) => { e.target.style.backgroundColor = '#3c3c3c' }}
      />
      
    </div>
  )
}

export default Search
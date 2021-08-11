import React from 'react';

const Searchbox =({ searchfield, searchChange })=>{
    return (
        <div className="input-secction">
            <input type="text" id="input" placeholder="Find your robofriend" onChange={searchChange}/>
        </div>
    )
}
export default Searchbox;

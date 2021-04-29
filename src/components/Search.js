import React, { useState } from 'react'

function Search({search}) {

    const [text, setText] = useState('')

    const onSearch = (q) => {
        setText(q)
        search(q)
    }

    return (
        <div>
            <form className='form-inline'>
                <div className="input-group  mr-sm-2">
                    <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fas fa-search"></i></div>
                    </div>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Search"
                    autoFocus
                    onChange={(e) => onSearch(e.target.value)}
                    value={text}
                    />
                </div>
            </form>
        </div>
    )
}

export default Search

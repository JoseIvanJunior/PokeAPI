import React from 'react'

import './global.css'

export default function Pagination({ ToNextPage, ToPrevPage }) {
    return (
        <div>
            {ToPrevPage && <button className="button-prevNext" onClick={ToPrevPage}>Prev</button>}
            {ToNextPage && <button className="button-prevNext" onClick={ToNextPage}>Next</button>}
        </div>
    )
}


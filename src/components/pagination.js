import React, {useState} from "react";
import {Link } from "gatsby"

function Pagination(props){
    const [currentPage, setCurrentPage] = useState(props.currentPage)
    const [numPages, setNumPages] = useState(props.numPages)
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/films" : "/films/" + (currentPage - 1).toString()
    const nextPage = "/films/" + (currentPage + 1).toString()
    console.log(prevPage)
    console.log(nextPage)
    return(
<nav class="pagination is-right" role="navigation" aria-label="pagination">
            {!isFirst && ( <Link to={prevPage} rel="prev" class="pagination-previous">
          ← Previous Page
        </Link>)}
        {!isLast && (
        <Link to={nextPage} rel="next" class="pagination-next">
          Next Page →
        </Link>
      )}
      <ul class="pagination-list">
          {Array.from({ length: numPages }, (_, i) => (
        <li><Link class="pagination-link" key={`pagination-number${i + 1}`} to={`/films/${i === 0 ? " " : i + 1}`}>
          {i + 1}
        </Link></li>
      ))}
</ul>
</nav>
    )
}

export default Pagination
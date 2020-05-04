import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { count, pageSize, activePage, onPageChange} = props;
  const pagesCount = Math.ceil(count / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => {
          let listStyle = "page-item";
          if (page === activePage) {
            listStyle += " active";
          }
          return (
            <li key={page} className={listStyle}>
              <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;

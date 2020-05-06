import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

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
            <li key={page} className={listStyle} >
              <a data-testid={"page-" + page} className="page-link" onClick={() => onPageChange(page)}>{page}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
    count: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    activePage: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;

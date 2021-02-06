import React from 'react';
import Pagination from "@material-ui/lab/Pagination";
import { paginator } from "./Paginator.module.scss"

export const Paginator = ({
  count,
  currentPage,
  filteredProducts,
  handleClick,
}) =>
  filteredProducts.length > 10 && (
    <Pagination
      className={paginator}
      count={count}
      page={currentPage}
      onChange={handleClick}
      variant="outlined"
      color="primary"
    />
  );

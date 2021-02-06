import React from 'react';
import { useState, useEffect, useMemo } from "react";
import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { Paginator } from "./components/Paginator/Paginator";
import { TotalProductsCounter } from "./components/TotalProductsCounter/TotalProductsCounter";

const PRODUCTS_PER_PAGE = 10;
const App = () => {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterQuery, setFilterQuery] = useState("");

  const filteredProducts = useMemo(() =>
      products.filter(({ productName }) =>
        productName.toLowerCase().includes(filterQuery.toLowerCase())
      ),
    [filterQuery, products]
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/traa/apiplp/master/db.json"
      );
      res.json().then(data => setProducts(data.pageItems));
    };

    fetchProducts();
  }, []);

  const chosenProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [currentPage, filteredProducts]);

  const countOfPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handleClickPaginator = (_, value) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const handleClickForm = ({ target: { value } }) => {
    setFilterQuery(value.toLowerCase());
    setCurrentPage(1);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <SearchForm
        filterQuery={filterQuery}
        handleSubmit={handleSubmitForm}
        handleClick={handleClickForm}
      />
      <TotalProductsCounter totalProducts={filteredProducts} />
      <ProductsList chosenProducts={chosenProducts} />
      <Paginator
        currentPage={currentPage}
        count={countOfPages}
        filteredProducts={filteredProducts}
        handleClick={handleClickPaginator}
      />
    </>
  );
};

export default App;

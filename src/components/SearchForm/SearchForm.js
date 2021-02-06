import React from 'react';
import styles from "./SearchForm.module.scss"
import TextField from "@material-ui/core/TextField";

export const SearchForm = ({ filterQuery, handleSubmit, handleClick }) => {
  return (
    <form className={styles.search_form} noValidate onSubmit={handleSubmit} >
      <TextField
        className={styles.search_input}
        id="outlined-basic"
        value={filterQuery}
        placeholder="Search..."
        onChange={handleClick}
        variant="outlined"
      />
    </form>
  );
};

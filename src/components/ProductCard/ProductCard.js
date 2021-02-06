import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./ProductCard.module.scss";


export const ProductCard = ({
  product: { productName, brandName, imageURLs, pdpURL, price },
}) => (
    <div className={styles.card_root}>
      <Paper className={styles.card_paper}>
        <Grid className={styles.card_view} container spacing={2}>
          <Grid item>
            <img className={styles.card_view__image}
              alt={`${productName.toLowerCase()}${productName && ","} ${brandName}`}
              src={imageURLs[0]}
            ></img>
          </Grid>
        <Grid className={styles.card_view__title} item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                <a className={styles.card_view__title_link} href={pdpURL} >
                    {productName}
                  </a>
                </Typography>
                <Typography className={styles.card_view__title_brandName} variant="body2" gutterBottom>
                  {brandName}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

//  The example data is structured as follows:

const tileData = [
  {
    img: "./images/pp1.jpg",
    title: "New Item",
    author: "author",
  },
  {
    img: "./images/pp2.png",
    title: "New Item",
    author: "author",
  },
  {
    img: "./images/pp3.jpg",
    title: "New Item",
    author: "author",
  },
  {
    img: "./images/pp4.jpg",
    title: "New Item",
    author: "author",
  },
  {
    img: "./images/pp5.jpg",
    title: "New Item",
    author: "author",
  },
  {
    img: "./images/pp6.jpg",
    title: "New Item",
    author: "author",
  },
  {
    img: "./images/pp7.png",
    title: "New Item",
    author: "author",
  },
  {
    img: "./images/pp8.png",
    title: "New Item",
    author: "author",
  },
];

const PopulerProduct = () => {
  const classes = useStyles();
  return (
    <Wrapper className="my-5">
      <h1 className="text-center my-5">Our Populer Collections</h1>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>
                    <ShoppingBasketIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Wrapper>
  );
};

export default PopulerProduct;
const Wrapper = styled.div`
  overflow: hidden;
`;

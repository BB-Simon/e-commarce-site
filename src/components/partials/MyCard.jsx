import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 5px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  shoppingCart: {
    color: "#e79cc2",
  },
  loveColor: {
    color: red[100],
  },
}));

const MyCard = ({
  title,
  date,
  img,
  imgTitle,
  description,
  moreIcon,
  headerToggle,
}) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        {headerToggle ? (
          <CardHeader action={moreIcon} title={title} subheader={date} />
        ) : (
          ""
        )}
        <CardMedia className={classes.media} image={img} title={imgTitle} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon className={classes.loveColor} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon className={classes.loveColor} />
          </IconButton>
          <IconButton className={clsx(classes.expand)}>
            <ShoppingBasketIcon className={classes.shoppingCart} />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default MyCard;

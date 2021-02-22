import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {
  Card,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));
const cards = [
  {
    id: 1,
    img: '',
    name: 'Le Binh',
    bio: '',
    email: 'lebinh190998@gmail.com',
    github: ''
  },
  {
    id: 2,
    img: '',
    name: 'Steven Nguyen',
    bio: '',
    email: '',
    github: ''
  },
  {
    id: 3,
    img: '',
    name: 'The Duy',
    bio: '',
    email: '',
    github: ''
  },
  {
    id: 4,
    img: '',
    name: 'Hanh Nguyen',
    bio: '',
    email: '',
    github: ''
  }
];

const Results = ({ className, team, ...rest }) => {
  const classes = useStyles();

  return (
    <React.Fragment
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={6} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.img}
                  title={card.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                  <Typography>
                    {card.bio}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <img alt="Github" src="/static/github.svg" />
                  </Button>
                  <Button size="small" color="primary">
                    <img alt="Email" src="/static/email.svg" />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  team: PropTypes.array.isRequired
};

export default Results;

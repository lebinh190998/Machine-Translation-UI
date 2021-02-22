import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import MainPage from 'src/components/MainPage';
import Results from './Results';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [team] = useState(data);

  return (
    <MainPage
      className={classes.root}
      title="team"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Results team={team} />
        </Box>
      </Container>
    </MainPage>
  );
};

export default CustomerListView;

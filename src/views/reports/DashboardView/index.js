import React from "react";
import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import MainPage from 'src/components/MainPage';
import Budget from './Budget';
import TasksProgress from './TasksProgress';
import TotalTeam from './TotalTeam';
import TotalProfit from './TotalProfit';
import PdfContainer from './PdfContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <MainPage
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false} minHeight="100%">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalTeam />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalProfit />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={6}
          >
            <PdfContainer />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={6}
          >
            Translated Ver
          </Grid>
        </Grid>
      </Container>
    </MainPage>
  );
};

export default Dashboard;

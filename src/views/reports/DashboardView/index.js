import React, {useState} from "react";
import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import MainPage from 'src/components/MainPage';
import Output from './Output';
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
  const [img, setImg] = useState({})

  const saveImg = (img) => {
    if(img){
      setImg(img);
    }
  }

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
            <TotalTeam />
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
            <PdfContainer saveImg={saveImg} />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={6}
          >
            {img && <Output img={img}/>}
          </Grid>
        </Grid>
      </Container>
    </MainPage>
  );
};

export default Dashboard;

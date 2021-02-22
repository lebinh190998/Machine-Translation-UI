import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import { DropzoneArea } from 'material-ui-dropzone';
import {
  Container,
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@material-ui/core';
import MainPage from 'src/components/MainPage';
import Budget from './Budget';
import TasksProgress from './TasksProgress';
import TotalTeam from './TotalTeam';
import TotalProfit from './TotalProfit';
import TrafficByDevice from './TrafficByDevice';
import pdf from './VinBigdata.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
  const [numPages, setNumPages] = useState(null);
  const [files, setFiles] = useState([]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleChange(files) {
    if (files.length > 0) {
      console.log(files[0].path);
    }
    console.log(pdf);
    setFiles(files);
  }
  return (
    <MainPage
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
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
            <Card>
              <CardHeader title="Upload PDF" />
              <Divider />
              <CardContent>
                <DropzoneArea
                  onChange={handleChange}
                />
                {
                /* eslint operator-linebreak: ["error", "after"] */
                files.length > 0 &&
                (
                <Document
                  file="./VinBigdata.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                  ))}
                </Document>
                )
                }
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={6}
          >
            <TrafficByDevice />
          </Grid>
        </Grid>
      </Container>
    </MainPage>
  );
};

export default Dashboard;

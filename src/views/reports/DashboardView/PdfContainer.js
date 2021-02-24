import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const PdfContainer = ({ className, ...rest }) => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  const [initial, setInitial] = useState({});
  
  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(data => console.log(data));
  })

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if ( file.type !== "application/pdf") {
      console.error( file.name, "is not a pdf file.");
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setFiles([reader.result]);
      };
      reader.onerror = (error) => {
        console.log('Error: ', error);
      };
    }
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
      style={{ minHeight: '60vw' }}
    >
      <CardHeader title="Upload PDF" />
      <Divider />
      <CardContent style={{ height: "100%", width: "100%" }}>
        <input type="file" id="pdf-upload" onChange={handleChange} />
        <hr />
        {files.length > 0 && <iframe style={{ overflow: "hidden", height: "100%", width: "100%" }} height="100%" width="100%" title="pdf" src={files[0]} />}
      </CardContent>
    </Card>
  );
};

PdfContainer.propTypes = {
  className: PropTypes.string
};

export default PdfContainer;

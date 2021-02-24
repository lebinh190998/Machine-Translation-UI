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

const PdfContainer = ({ saveImg, className, ...rest }) => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFiles([reader.result]);
      saveImg(files[0])
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
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

import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const Output = ({ img, className, ...rest }) => {
  const classes = useStyles();

  const handleClick = (e) => {
    // fetch(`/api/${img}`).then(res => 
    //   res.json().then(data => {
    //     console.log(data);
    //   })
    // );
    fetch(`/api/${img}`).then(res => 
      res.json().then(data => {
        console.log(data);
      })
    );
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
        <Button size="small" color="primary" onClick={handleClick}>Extract</Button>
        <hr />
      </CardContent>
    </Card>
  );
};

Output.propTypes = {
  className: PropTypes.string
};

export default Output;

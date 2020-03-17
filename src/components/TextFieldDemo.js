import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      // margin: theme.spacing(2),
      width: 300,
    },
  },
}));

export function TextFieldDemo() {
  const classes = useStyles();
  console.log(classes.root);
  return <TextField className={classes.root} id="standard-basic" label="Enter something" />;
}

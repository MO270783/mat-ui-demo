import React, { useState } from 'react';
import { Container, TextField, Button, Grid, makeStyles } from '@material-ui/core';
import { SelectHostComponent, SelectProcessComponent } from './SelectDemo';
import { ArchiveBar } from './Archive';

const log = obj => console.log(obj);

const useStyles = makeStyles({
  textField: {
    marginTop: '6px',
    minWidth: 200,
  },
});

export function Form() {
  const classes = useStyles();
  const hostNameRef = React.useRef(null);
  const processRef = React.useRef(null);
  const archiveRef = React.useRef({});
  const patternRef = React.useRef();

  const onClick = () => {
    console.log('Button clicked');
    log(hostNameRef);
    log(processRef);
    log(archiveRef);
    log(patternRef);
  };

  return (
    <Container maxWidth="md">
      <Grid container direction="column">
        <Grid item container xs={12} justify="space-around">
          <SelectHostComponent hostRef={hostNameRef} />
          <SelectProcessComponent processRef={processRef} />
          <TextField inputRef={patternRef} id="standard-basic" label="Standard" className={classes.textField} />
        </Grid>

        <Grid item container xs={12} justify="space-around">
          <ArchiveBar archiveRef={archiveRef} />
        </Grid>

        <Grid item justify="space-around" xs={12}>
          <Button size="large" onClick={onClick} variant="contained" color="primary">
            Find Hosts
          </Button>
          <Button size="large" variant="contained" color="primary">
            Grep
          </Button>
          <Button size="large" variant="contained" color="primary">
            Reset
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { FormControl, FormHelperText, Select, MenuItem, makeStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { DummyData } from '../dummy-data/DummyData';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    maxWidth: 300,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function SelectHostComponent({ hostRef }) {
  const classes = useStyles();
  const [hostnames, setHostNames] = useState([]);
  const [selectedHostNames, setSelectedHostNames] = useState([]);

  useEffect(() => setHostNames(DummyData.HostNames), []);

  const onInputChange = evt => {
    setSelectedHostNames(evt.target.value);
    hostRef.current = evt.target.value;
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="hostInput">Select hosts</InputLabel>
      <Select
        labelId="hostInput"
        id="hosts"
        input={<Input />}
        multiple
        value={selectedHostNames}
        onChange={onInputChange}
        MenuProps={MenuProps}
      >
        {hostnames.map(hostname => (
          <MenuItem key={`${hostname.name} ${hostname.region}`} value={hostname}>
            {hostname.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export function SelectProcessComponent({ processRef }) {
  const classes = useStyles();
  const [processes, setProcesses] = useState([]);
  const [selectedProcesses, setSelectedProcesses] = useState([]);

  useEffect(() => setProcesses(DummyData.ProcessNames), []);

  const onInputChange = evt => {
    setSelectedProcesses(evt.target.value);
    processRef.current = evt.target.value;
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="processInput">Select Process</InputLabel>
      <Select
        labelId="processInput"
        id="processes"
        input={<Input />}
        multiple
        value={selectedProcesses}
        onChange={onInputChange}
        MenuProps={MenuProps}
      >
        {processes.map(process => (
          <MenuItem key={`${process.name} `} value={process}>
            {process.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

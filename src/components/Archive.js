import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Switch, FormControlLabel, Grid } from '@material-ui/core';

export function ArchiveBar({ archiveRef }) {
  const [state, setState] = useState({
    fromDate: null,
    toDate: null,
    searchInArchive: false,
  });

  const handleChange = (value, type) => {
    setState(prevState => ({
      ...prevState,
      [type]: value,
    }));

    archiveRef.current[type] = value;
    console.log(archiveRef);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker value={state.fromDate} onChange={date => handleChange(date, 'fromDate')} />

        <DatePicker value={state.toDate} onChange={date => handleChange(date, 'toDate')} />
      </MuiPickersUtilsProvider>

      <FormControlLabel
        control={
          <Switch
            color="primary"
            checked={state.searchInArchive}
            onChange={evt => handleChange(evt.target.checked, 'searchInArchive')}
          />
        }
        label="Search only in archived"
      />
    </>
  );
}

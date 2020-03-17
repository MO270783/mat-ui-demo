import React from 'react';
import { Switch, FormControlLabel } from '@material-ui/core';

export function SwitchDemo() {
  const [state, setState] = React.useState(false);

  const handleChange = evt => {
    setState(evt.target.checked);
  };

  // return <Switch color="primary" checked={state} onChange={handleChange} />;

  return (
    <FormControlLabel
      control={<Switch color="primary" checked={state} onChange={handleChange} />}
      label="Search only in archived"
    />
  );
}

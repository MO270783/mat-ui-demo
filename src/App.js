import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SelectDemo } from './components/SelectDemo';
import { DateSelector } from './components/DateSelector';
import { SwitchDemo } from './components/SwitchDemo';
import { TextFieldDemo } from './components/TextFieldDemo';
import { Form } from './components/Form';
import { CenteredGrid } from './components/gridDemo/CenteredGrid';
import { SimpleContainer } from './components/SimpleContainer';
import { SpacingGrid } from './components/gridDemo/SpacingGrid';
import { FullWidthGrid } from './components/gridDemo/FullWidthGrid';
import { AsyncDemoComponent } from './components/AsyncDemo';
import { ListDemo } from './components/ListDemo';
import { NestedListDemo, FileListItem, GrepDisplay, HostNameItem } from './components/NestedListDemo';

const useStyles = makeStyles({
  hello: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    padding: '7px 17px',
  },
  hello1: {
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  hello3: {
    padding: '0 19px',
  },

  contained: {
    color: 'pink',
  },

  label: {
    width: '30%',
  },
  outline: {
    border: '2px solid',
  },
});

// function buttonDemo() {
//   const classes = useStyles();
//   return (
//     <Button
//       variant="outlined"
//       classes={{ outlined: classes.outline }}
//       color="primary"
//       // classes={{ root: classes.hello, contained: classes.contained, label: classes.label }}
//     >
//       Hook
//     </Button>
//   );
// }

const res = [
  {
    fileName: 'file1',
    grepResult: ['line 1 matching', 'line2 matching'],
  },
  {
    fileName: 'file2',
    grepResult: ['line 1 matching', 'line2 matching'],
  },
  {
    fileName: 'file3',
    grepResult: ['line 1 matching', 'line2 matching'],
  },
];

function App() {
  // return <SelectDemo />;
  // return <DateSelector />;
  // return <SwitchDemo />;
  // return <TextFieldDemo />;
  return (
    <>
      <NestedListDemo />
      {/* <HostNameItem hostName="hostName" result={res} /> */}
      {/* <AsyncDemoComponent /> */}
      {/* <CssBaseline />
      <Form /> */}
    </>
  );
  // return <CenteredGrid />;
  // return <SimpleContainer />;
  // return <SpacingGrid />;

  // return <FullWidthGrid />;
}
export default App;

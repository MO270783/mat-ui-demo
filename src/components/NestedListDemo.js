import {
  List,
  ListItemText,
  ListItem,
  ListSubheader,
  Container,
  Divider,
  TextareaAutosize,
  TextField,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';

const results = [
  {
    processName: 'process1',
    hostName: 'hostName',
    region: 'NYK',
    result: [
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
    ],
  },
  {
    processName: 'process1',
    hostName: 'hostName2',
    region: 'TKY',
    result: [
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
    ],
  },
];

const useListStyles = makeStyles({
  root: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export function NestedListDemo() {
  return (
    <Container maxWidth="md">
      <List>
        {results.map(res => {
          const { hostName, result } = res;
          return <HostNameItem hostName={hostName} result={result} />;
        })}
      </List>
    </Container>
  );
}

export function HostNameItem({ hostName, result }) {
  const styles = useListStyles();
  return (
    <ListItem className={styles.root}>
      <Typography variant="h4" gutterBottom color="primary">
        {hostName}
      </Typography>
      <List style={{ width: '100%' }}>
        {result.map(res => {
          const { fileName, grepResult } = res;
          return <FileListItem fileName={fileName} grepResult={grepResult} />;
        })}
      </List>
    </ListItem>
  );
}
export function FileListItem({ fileName, grepResult }) {
  const styles = useListStyles();
  return (
    <ListItem className={styles.root}>
      <Typography variant="h6" gutterBottom color="primary">
        {fileName}
      </Typography>
      <GrepDisplay grepResult={grepResult} />
    </ListItem>
  );
}

const useStyles = makeStyles({
  root: {
    backgroundColor: '#272c34',
    borderRadius: '4px',
  },
});

export function GrepDisplay({ grepResult }) {
  const styles = useStyles();
  return (
    <>
      <TextField
        inputProps={{
          style: { color: '#a6e22e', fontSize: '1rem', lineHeight: 1.5, fontWeight: 400, borderRadius: '4px' },
        }}
        multiline
        disabled
        className={styles.root}
        value={grepResult.join('\n\n')}
        fullWidth
        variant="outlined"
      />
    </>
  );
}

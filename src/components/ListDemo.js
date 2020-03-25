import { List, ListItemText, ListItem, ListSubheader, Container, Divider } from '@material-ui/core';
import React from 'react';

const demoResults = {
  TKY: ['file1', 'file2'],
  LDN: ['file1', 'file2'],
  NYK: ['file1', 'file2'],
};

const grepResult = {
  hostname1: {
    file1: ['line1 containing pattern', 'line2 containing pattern', 'line3 containing pattern'],
    file2: ['line1 containing pattern', 'line2 containing pattern', 'line3 containing pattern'],
    file3: null,
    file4: ['line1 containing pattern', 'line2 containing pattern', 'line3 containing pattern'],
  },
  hostname2: {
    file1: ['line1 containing pattern', 'line2 containing pattern', 'line3 containing pattern'],
    file2: ['line1 containing pattern', 'line2 containing pattern', 'line3 containing pattern'],
    file3: null,
    file4: ['line1 containing pattern', 'line2 containing pattern', 'line3 containing pattern'],
  },
};

export function GrepListDemo() {
  // return <Container>{Object.entrie}</Container>;
}

export function ListDemo() {
  return (
    <Container maxWidth="md">
      {Object.entries(demoResults).map(entry => {
        const [region, fileList] = entry;
        console.log(region);
        console.log(fileList);
        return <Region key={`${region}${fileList}`} region={region} fileList={fileList} />;
      })}
    </Container>
  );
}

function Region({ region, fileList }) {
  fileList.map(file => console.log(file));
  return (
    <>
      <List>
        <ListSubheader disableGutters>{region}</ListSubheader>
        {fileList.map(file => (
          <ListItem>
            <ListItemText>{file}</ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
}

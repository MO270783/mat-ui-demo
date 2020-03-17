import React from 'react';
import Container from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Paper, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { withStyles, createMuiTheme, MuiThemeProvider, makeStyles, styled } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const defaultExcercises = [
  {
    title: 'BenchPress',
    id: 1,
  },
  {
    title: 'Deadlift',
    id: 2,
  },
];

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

const styles = {
  root: {
    margin: 20,
    padding: 20,
    maxWidth: 400,
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
  },
};

const useStyles = makeStyles({
  button: {
    borderRadius: 1,
    fontWeight: 800,
  },
});

const MyButton = styled(Button)({
  borderRadius: 8,
  // fontWeight: 600,
});

function Excercise({ classes }) {
  const hookClasses = useStyles();
  const [excercises, setExcercises] = React.useState(defaultExcercises);
  const [title, setTitle] = React.useState('');

  const handleChange = evt => setTitle(evt.target.value);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(`title is ${title}`);
    if (title) {
      setExcercises(prevExcercises => [
        ...prevExcercises,
        {
          title,
          id: Date.now(),
        },
      ]);
      setTitle('');
    }
  };

  const handleDelete = id => {
    setExcercises(prevExcercises => prevExcercises.filter(exer => exer.id !== id));
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Paper className={classes.root} style={{}}>
        <Typography variant="h4" align="center" gutterBottom>
          Excercises
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField name="title" label="Excercise" variant="outlined" value={title} onChange={handleChange} />
          <MyButton className={hookClasses.button} type="submit" color="primary" variant="contained">
            Create
          </MyButton>
        </form>
        <List>
          {excercises.map(excer => {
            console.log(excer.title);
            return (
              <ListItem key={excer.id}>
                <ListItemText primary={excer.title} />
                <ListItemSecondaryAction>
                  <IconButton color="primary" onClick={() => handleDelete(excer.id)}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(Excercise);

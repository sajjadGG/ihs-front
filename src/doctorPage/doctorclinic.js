import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import {SimpleMap} from "../components/LocationPicker"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export  function ValidationTextFields() {
  const classes = useStyles();

  return (
    <Container maxwidth="sm">
        <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
          id="standard-textarea"
          label="نام کلینیک"
        />
        </div>
        <div>
        <TextField
          id="standard-multiline-flexible"
          label="ادرس"
          multiline
          rowsMax={4}
        />
        </div>
        <div>
            <SimpleMap/>
        </div>
        <div>
        <Button variant="contained" color="primary">
        ثبت
      </Button>
        </div>
        </form>
    </Container>
  );
}

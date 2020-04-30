import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import {Row} from 'react-bootstrap'
import {SimpleMap , LocationShower} from "../components/LocationPicker"

import Box from '@material-ui/core/Box';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.action.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  root_container: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export  function ClinicForm(props) {
  const classes = useStyles();

  return (
    <Container maxwidth="sm">
        <form className={classes.root_container} noValidate autoComplete="off">
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
        <Button variant="contained" color="primary" onClick={props.handleSubmit}>
        ثبت
      </Button>
      <Button variant="contained" color="secondary" onClick={props.handleCancel}>
        انصراف
      </Button>
        </div>
        </form>
    </Container>
  );
}



export  function Clinic(props) {  
  const classes = useStyles();
  return (
    
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
      {props.data.map((tile) =>(
                    <GridListTile>
                    <LocationShower lng={tile.lng} lat={tile.lat}/>
                    <GridListTileBar
                      title={tile.name}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                      actionIcon={
                        <IconButton>
                          <EditIcon className={classes.title} />
                        </IconButton>
                      }
                    />
                  </GridListTile>
          ))};
      </GridList>
    </div>
  );
  
}


export class DoctorClinic extends React.Component {



    
  constructor(props) {
      super(props);
  
      this.state = {
        //avatar : props.avater ? props.avatar :ProfilePic,
        clinics : props.clinics ? props.clinics : [],
        isAdd : false,
      }

    }
    handleAddClick = (e) => {this.setState({isAdd : !this.state.isAdd})}
    render(){
      const addElement = this.state.isAdd ? <ClinicForm handleCancel={this.handleAddClick}/> : <Button onClick={this.handleAddClick}>+</Button>
        return(
          <Container>
            <Row>
            <Clinic data={this.state.clinics}/>
            </Row>
            <Row>
            {addElement}
            </Row>
          </Container>
        )
    }
  }
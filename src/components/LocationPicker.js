import React, { Component } from 'react'
import Mapir from 'mapir-react-component';
import "./componentStyle.css"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles({
    root: {
      Width: 275,
      Height : 275
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });



const Map = Mapir.setToken({
    transformRequest: (url) => {
        return {
            url: url,
            headers: { 
         'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJmYzM2MTJlM2NiOTM1MzgwZTQxYWFhNmY5M2I5Y2EwMmMyNzYxNWE1M2VhOWNmMTkyNWUzZWU1MTYwMWUwM2U4YThhZTk4ZTkxYzZmMjBmIn0.eyJhdWQiOiI4ODg1IiwianRpIjoiMmZjMzYxMmUzY2I5MzUzODBlNDFhYWE2ZjkzYjljYTAyYzI3NjE1YTUzZWE5Y2YxOTI1ZTNlZTUxNjAxZTAzZThhOGFlOThlOTFjNmYyMGYiLCJpYXQiOjE1ODc5MTYzNDYsIm5iZiI6MTU4NzkxNjM0NiwiZXhwIjoxNTkwNTA4MzQ2LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.rvH3FlSVLAy7NKPePYii7wkySy2Ul1bZ-u0nN4t6OQic2Him6wvak8BVHlIPh_xl4imYeNnsIywNAODxZeFX5PBDMZg6ChwQTA6DOK-VbWXS_Na8vFZ1Ah1RSNsQN_-KZ9_yAkuujDGNxqfHYWRU64Il674hB3pnZZBu3HKbIqoyX0H1vR2O41Bn6tyqq4Vz_MS_tSl0SAlXWeynzuarvNkXceA4xlUJ4VjXWiZUMOSJWQ7jeIcpnEBGws0BPF_-AsdEC3epLm6dZxZIZy_uO_X623DGauAHzyYGwE99A1-LDnr2xs8L-6k0E6__PzXkNLodSscqhaUtzUmbIsXPcA', //Mapir api key
               
         'Mapir-SDK': 'reactjs'
      },
        }
    }
});





export function LocationShower (props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Mapir
                center={[51.420470, 35.729054]}
                Map={Map}
                
            >
                <Mapir.Layer
                    type="symbol"
                    layout={{ "icon-image": "harbor-15" }}>
                </Mapir.Layer>
                <Mapir.Marker
                    coordinates={[51.41, 35.72]}
                    anchor="bottom">
                </Mapir.Marker>
            </Mapir>
        </Card >
    )
}

 
export function LocationPicker (props) {
    /**props should have onClick handler to set location state */
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Mapir
                center={[props.lng, props.lat]}
                Map={Map}
                onClick = {props.handleClick}
                containerStyle={{height: "50vh",width: "50vw"}}
            >
                <Mapir.Layer
                    type="symbol"
                    layout={{ "icon-image": "harbor-15" }}
                    >
                </Mapir.Layer>
                <Mapir.Marker
                    coordinates={[props.lng, props.lat]}
                    anchor="bottom">
                </Mapir.Marker>
            </Mapir>
        </Card >
    )
}



export class SimpleMap extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lng : 51.41,
            lat : 35.72,
        }
    }

    handleClick = (m,e) => {
        console.log(e.lngLat.lng)
        console.log(e.lngLat.lat)
        console.log(m)
        this.setState({lng : e.lngLat.lng , lat : e.lngLat.lat })
      }

      render(){

        return(
        
            <LocationPicker lng={this.state.lng} lat={this.state.lat} handleClick={this.handleClick}/>
        )
    }
}
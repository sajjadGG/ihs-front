import React, { Component } from 'react'
import Mapir from 'mapir-react-component';
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
export default class SimpleMap extends Component {
    render() {
        return (
            <div className="App">
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
            </div >
        )
    }
}
 
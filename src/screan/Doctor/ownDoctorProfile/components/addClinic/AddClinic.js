import React from "react";
import './AddClinic.css';
import {LocationShower,LocationPicker} from "../../../../../components/LocationPicker";

class AddClinic extends React.Component {
    constructor(props) {
        super(props);
        this.state={
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
    render() {
        const {clinics, addClick} = this.props;

        return (
            <div className='container-add-clinic'>
                {/*clinic cards*/}


                <input placeholder='name of clinic' className='clinic-name-input'/>

                <div className='bottom-container'>
                    <div className={this.props.map ? 'map-shower show-map' : 'map-shower hide-map'}>
                        <div className='btn-add-clinic' onClick={addClick}>+</div>

                        {/*<LocationShower lng={this.state.lng} lat={this.state.lat}/>*/}
                        <LocationPicker lng={this.state.lng} lat={this.state.lat} handleClick={this.handleClick}/>
                    </div>
                </div>


            </div>
        );
    }
}

export default AddClinic;
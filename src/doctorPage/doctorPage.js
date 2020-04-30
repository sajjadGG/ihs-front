import React,{Component} from "react";
import './doctorPage.css';
import { withRouter } from "react-router-dom";

class DoctorPage extends Component{

constructor(props) {
        super(props);
        this.state={
        }
    }


render() {
    const {id} = this.props.match.params;

    console.log(id)
    const doctorShowData =JSON.parse(localStorage.getItem('doctors'));
    const showDoctor = doctorShowData.filter(itm=>itm.userId == id)[0];
    console.log('hi beaches')
    console.log(showDoctor);
    return(
        <div className='row'>
        <div className='container container-fluid doctor-profile-page col-md-3'>
                  <div className="card-body">
                  <img class="card-img-top" src={showDoctor.avatar} alt={showDoctor.userfullname} style={{height:'200px' ,width:'200px'}}/>
                    <div className='column-shape fa'>
                        <h1>{showDoctor.userfullname}</h1>
                        <h2>تخصص: {showDoctor.speciality} </h2>
                        <h3>نظام پزشکی: {showDoctor.medicalCouncilId} </h3>
                    </div>
              </div>
              </div>
        <div className='container container-fluid doctor-profile-page col-md-8'>
                  <div className="card-body">
                      <div className='table-program-of-doctor'>
                          <div className="table-title">
                              <h3>Data Table</h3>
                          </div>
                          <table className="table-fill">
                              <thead>
                              <tr>
                                  <th className="text-left">Month</th>
                                  <th className="text-left">Sales</th>
                              </tr>
                              </thead>
                              <tbody className="table-hover">
                              <tr>
                                  <td className="text-left">January</td>
                                  <td className="text-left">$ 50,000.00</td>
                              </tr>
                              <tr>
                                  <td className="text-left">February</td>
                                  <td className="text-left">$ 10,000.00</td>
                              </tr>
                              <tr>
                                  <td className="text-left">March</td>
                                  <td className="text-left">$ 85,000.00</td>
                              </tr>
                              <tr>
                                  <td className="text-left">April</td>
                                  <td className="text-left">$ 56,000.00</td>
                              </tr>
                              <tr>
                                  <td className="text-left">May</td>
                                  <td className="text-left">$ 98,000.00</td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                 </div>

              </div>
          </div>
        );
    }

}

export default withRouter(DoctorPage);
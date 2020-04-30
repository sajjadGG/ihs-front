import React from "react";
import doctor from "../imagesTest/docotr.png";
import {getuserData , putuserData} from '../../api/apiFunction';
import './profileStyle.css'

class SideProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          name:props.username,
            email:this.props.email?this.props.email:'',
            fullName:this.props.fullname,
            edit:false,

        };
        this.onChaneName =this.onChaneName.bind(this);
        this.onChangeFullName =this.onChangeFullName.bind(this);
        this.onChangeEmail =this.onChangeEmail.bind(this);
        this.onChaneOkBtn =this.onChaneOkBtn.bind(this);
    }

    async componentDidMount(){
        console.log("didMount!!!");
        const dataUser = await getuserData({username : this.state.name})
        console.log(dataUser);
        this.setState({
            "fullName" : dataUser.full_name,
            "email" : dataUser.email
        }); 
    }
    onChaneName(newName){
        this.setState({
            name:newName.target.value,
        })
    }
    onChangeFullName(newFullname){
        this.setState({
            fullName:newFullname.target.value,
        })
    }
    onChangeEmail(email){
        this.setState({
            email:email.target.value,
        })
    }
    async onChaneOkBtn(){
        const dataUser = await putuserData({username : this.state.name , 
            first_name : this.state.fullName.split()[0],
            last_name : this.state.fullName.split()[1]?this.state.fullName.split()[1] : "",
            email : this.state.email})
        this.setState({
            edit:!this.state.edit,
        })
    }

    render() {
        // console.log('rr',props)
        const {username,avatar} = this.props;
        const showEditableInput =
            <div className='column-shape '>
            <input value={this.state.name} onChange={this.onChaneName}/>
            </div>;
        const showEmailInpiu =
            <div className='column-shape'>
                <input value={this.state.email} onChange={this.onChangeEmail}/>
            </div>;
        const showFullNameInput =
            <div className='column-shape'>
                <input value={this.state.fullName} onChange={this.onChangeFullName}/>
            </div>;

        const showsubmitBtn =
            <button onClick={this.onChaneOkBtn} style={{width:'80%'}}>تایید</button>;

        return (
            <div className='col-md-4' style={{margin: '15px 0'}}>
                <div className="login-box card full-height shadow-profile" style={{width: "18rem"}}>
                    {/*<img className="card-img-top" src={doctor} alt={name}/>*/}
                    <img className="card-img-top" src={avatar} alt={username}/>
                    <div className="card-body">
                        {/*<h5 className="card-title">{title}</h5>*/}
                        {/*<p className="card-text">{text}</p>*/}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        <i className="fa fa-edit" onClick={()=>{
                            this.setState({
                                edit:!this.state.edit
                            })
                        }}>
                        </i>
                        <div className='container container-info-profile column-shape'>
                            <label>نام کاربری</label>
                            {/*todo:check error if user name exist*/}
                            {/*<div className='row'>*/}
                            {/*    {this.state.edit?*/}
                            {/*            showEditableInput*/}
                            {/*        :this.state.name}</div> */}
                            <div className='row'>
                                {this.state.name}</div>
                        </div>
                        </li>
                        <li className="list-group-item user-name">
                            <div className='container container-info-profile column-shape'>
                                <label>نام و نام خانوداگی</label>
                                <div className='row'>
                                    {this.state.edit?
                                        showFullNameInput
                                        :this.state.fullName}</div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className='container container-info-profile column-shape'>
                                <label>ایمیل</label>
                                <div className='row'>
                                    {this.state.edit?
                                        showEmailInpiu
                                        :this.state.email}</div>
                            </div>
                        </li>
                    </ul>
                    <div className="card-body align-content-sm-stretch">
                        {/*<a href="#" className="card-link">Card link</a>*/}
                        {/*<a href="#" className="card-link">Another link</a>*/}
                        {this.state.edit?showsubmitBtn:null}
                    </div>
                </div>
            </div>

        )
    }
}

export default SideProfile;
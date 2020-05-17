import {Helper} from './urlApi';
import axios from 'axios';
import {getToken} from "../functions/saveDataLocalStorage/localStorageFunction";

export const signUp = async ({username,password,firstName='',lastName='',email='',userType})=>{
    console.log('hiiiiii');
const registertionData = await axios.post(Helper.registerUrl,{
    username:username,
    password:password,
    email:email,
    first_name:firstName,
    last_name:lastName,
    userType:userType,
    });

//     let formdata1 = new FormData();
//     formdata1.append("username", username);
//     formdata1.append("password", password);
//     let requestOptions = {
//     method: 'POST',
//     body: formdata1,
//     redirect: 'follow'
//     };

//   const registertionData =   await fetch(Helper.registerUrl, requestOptions)
//     .then(response => response.json())
//     .catch(error => console.log('error', error));
return registertionData;
};
// export const login = async ({username,password,email,full_name})=>{
//     const siginData = await axios.post(Helper.authorizationUrl,{
//         username:username,
//         password:password,
//         email:email,
//         full_name:full_name,
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     return siginData;
// }

export const login = async ({username , password , email , full_name}) =>{
    let formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
    let requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    let data = await fetch(Helper.authorizationUrl, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
    return data
};


export const getuserData = async({username})=>{
    let myHeaders = new Headers();
    myHeaders.append("Authorization",Helper.authtype + JSON.parse(localStorage.getItem('token')));

    let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    let data = await fetch(Helper.registerUrl+username+"/", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
    return data
}

export const putuserData = async({username,first_name , last_name , email})=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",Helper.authtype + JSON.parse(localStorage.getItem('token')));
    var formdata = new FormData();
    formdata.append("first_name", first_name);
    formdata.append("last_name", last_name);
    formdata.append("email", email);
    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    let data = await fetch(Helper.registerUrl+username+"/", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
    return data
}
export const addFollower = async({followee,token})=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",Helper.authtype + token);

    var formdata = new FormData();
    formdata.append("followee", followee);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body : formdata,
    redirect: 'follow'
    };

    let data = await fetch(Helper.followUserUrl, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
    return data;
};

export const getMessage = async({sender , receiver})=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",Helper.authtype + JSON.parse(localStorage.getItem('token')));


    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    let data = await fetch(Helper.messageUrl+"?sender="+sender+"&"+"receiver="+receiver, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
    return data;
}

export const postMessage = async({sender , receiver,text})=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",Helper.authtype + JSON.parse(localStorage.getItem('token')));

    var formdata = new FormData();
    formdata.append("sender", sender);
    formdata.append("receiver", receiver);
    formdata.append("text", text);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body : formdata,
    redirect: 'follow'
    };

    let data = await fetch(Helper.messageUrl, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
    return data;
};

//get friend of user
//    http://demo-ihs.herokuapp.com/api/follower/?follower=john
export const getFrindes = async ({followe})=>{
    const token = await getToken();

    const req=axios.get(Helper.following+followe,{
        headers:{
            Authorization:Helper.authtype+token,
        },
    });
    const result = await req;
    if(result.statusText.toLowerCase()==='ok'){
        console.log(result.data);
        return result.data;
    }
};

//searchUsers

export const searchUser=async ({id})=>{
    const token = await getToken();
    const req = axios.get(Helper.getUsers+id,{
        headers:{Authorization:Helper.authtype+token}
    });
    const res = await req;
    if(res.statusText.toLowerCase()==='ok'){
        console.log(res);
        return res.data;
    }
};



export const postClinic = async({name , description,address , city, longitude,latitude})=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",Helper.authtype + JSON.parse(localStorage.getItem('token')));

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("address", address);
    formdata.append("city", city);
    formdata.append("longitude", longitude);
    formdata.append("latitude", latitude);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body : formdata,
    redirect: 'follow'
    };

    let data = await fetch(Helper.createClinic, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
    return data;
}


export const getAppointment = async({doctor , speciality,startTime , endTime})=>{
    console.log("here!!!")
    var myHeaders = new Headers();
    myHeaders.append("Authorization",Helper.authtype + await getToken());

 
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    console.log(doctor)
    console.log(speciality)
    console.log(startTime)
    console.log(endTime)

    let data = await fetch(Helper.appointment+`?${doctor ? `doctor=${doctor}&` : ""}${speciality ? `speciality=${speciality}&` : "" }${startTime ? `startTime=${startTime}&` : ""}${endTime?`endTime=${endTime}`:""}`.replace(/&$/, ''), requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
        return data

    
    
}

export const getMyAppointment = async({name })=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",Helper.authtype + localStorage.getItem('token'));
    console.log("innnnnnnnnnn")
    console.log(name)
 
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    let data = await fetch(Helper.appointment+`?name=${name}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
    return data;
}



export const postReview = async({reviewer , reviewee,text , rating, appointment})=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",Helper.authtype + JSON.parse(localStorage.getItem('token')));

    var formdata = new FormData();
    formdata.append("reviewer", reviewer);
    formdata.append("reviewee", reviewee);
    formdata.append("text", text);
    formdata.append("rating", rating);
    formdata.append("appointment", appointment);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body : formdata,
    redirect: 'follow'
    };

    let data = await fetch(Helper.reviews, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
    return data;
}

export const putAppointment = async({appointmentId , status})=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",Helper.appointment + JSON.parse(localStorage.getItem('token')));

    var formdata = new FormData();
    formdata.append("status", status);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body : formdata,
    redirect: 'follow'
    };

    let data = await fetch(Helper.appointment +`/${appointmentId}/`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
    return data;
}

import {Helper} from './urlApi';
import axios from 'axios';

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
}


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
export const addFollower = async({followee})=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",Helper.authtype + JSON.parse(localStorage.getItem('token')));

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
}

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
}
// const LOCAL_URL = 'http://localhost:3000/';
// const BASE_URL = 'http://161.202.20.61:5000/';

// let Helper = {
//   authorizationUrl : BASE_URL + 'auth',
//   registerUrl: BASE_URL + 'reguser',
//   newfeedDataUrl: BASE_URL + 'postnewfeed?name=',
//   postDataUrl: BASE_URL + 'post',
//   likePostUrl: BASE_URL + 'likepost',
//   commentPostUrl: BASE_URL + 'postcmt',
//   commentDataUrl: BASE_URL + 'postcmt?postID=',
//   getUserUrl: BASE_URL + 'user?name=',
//   getUserPostUrl: BASE_URL + 'post?name=',
//   followUserUrl: BASE_URL + 'flwuser',
//   unfollowUserUrl: BASE_URL + 'unflwuser',
//   avatarUploadUrl: BASE_URL + 'userimg',
//   localURL: LOCAL_URL,
// }

// export default Helper

const LOCAL_URL = 'http://localhost:3000/';
const BASE_URL = 'http://localhost:8000/api/';
const WS_URL = 'ws://'+ window.location.host+ '/ws/'
export const Helper = {
    patientRegister : BASE_URL + 'patients/',
    authorizationUrl : BASE_URL + 'token/',
    registerUrl: BASE_URL + 'users/',
    searchDoctor:BASE_URL + 'doctors/?name=',
    newfeedDataUrl: BASE_URL + 'postnewfeed?name=',
    postDataUrl: BASE_URL + 'post',
    likePostUrl: BASE_URL + 'likepost',
    commentPostUrl: BASE_URL + 'postcmt',
    commentDataUrl: BASE_URL + 'postcmt?postID=',
    getUserUrl: BASE_URL + 'users/?name=',
    getUserPostUrl: BASE_URL + 'post?name=',
    followUserUrl: BASE_URL + 'follower/',
    getfollowerUrl : BASE_URL + 'follower/?follower=',
    unfollowUserUrl: BASE_URL + 'unflwuser',
    avatarUploadUrl: BASE_URL + 'userimg',
    messageUrl : BASE_URL + 'messages/',
    createClinic : BASE_URL + 'clinic/',
    clinicDoctor : BASE_URL + 'clinicdoctor/',
    appointment : BASE_URL + 'appointment/',
    reviews : BASE_URL + 'reviews/',

    chat : WS_URL + 'chat/',
    localURL: LOCAL_URL,
    authtype : 'Token ',
    following:BASE_URL+'follower/?follower=',
    getUsers:BASE_URL+'patients/?name=',
};

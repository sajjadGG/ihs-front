//set login data in localStorage
export const setLoginData= async (input)=>{
    localStorage.removeItem('userData');
    localStorage.setItem('userData',JSON.stringify(input));
};
//get the user data
export const getUserData =async ()=>{
    return JSON.parse(localStorage.getItem('userData')).user;
};

export const getToken=async ()=>{
    return JSON.parse(localStorage.getItem('userData')).token;
};

//set last search doctor info
export const setLastSearchDoctorInfo=async (searchDoctors)=>{
await localStorage.setItem('lastSearchDoctor',JSON.stringify(searchDoctors));
};
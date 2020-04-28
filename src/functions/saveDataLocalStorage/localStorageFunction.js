//set login data in localStorage
export const setLoginData= async (input)=>{
    localStorage.removeItem('userData');
    localStorage.setItem('userData',JSON.stringify(input));
};
//get the user data
export const getUserData =async ()=>{
    return JSON.parse(localStorage.getItem('userData'));
};
'use strict'

saveUserInfo('ken@mitt.ca', 'happymitt');
function saveUserInfo(userName, userPsw){
    localStorage.setItem('userInfo', userName.toLowerCase().trim() + '*' + userPsw);
}

function readUserInfo(){
    return localStorage.getItem('userInfo');
}

function validateUser(userName, userPsw){
    let userInfo = readUserInfo();
    let inputUserInfo = userName.toLowerCase().trim() + '*' + userPsw;
    console.log(userInfo,inputUserInfo);
    return userInfo === inputUserInfo;

}

document.getElementById('formLogin').addEventListener('submit', function(event) {
    const inputUserName = document.querySelector('#inputUserName');
    const inputPsw = document.querySelector('#inputPsw'); 
    console.log('abc');
    if(!validateUser(inputUserName.value, inputPsw.value))
    {
        console.log('password is incorrect!')
        event.preventDefault();
    }
});

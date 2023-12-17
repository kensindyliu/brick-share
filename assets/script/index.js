'use strict'

saveUserInfo('mitt@mitt.ca', 'happymitt');
function saveUserInfo(userName, userPsw){
    localStorage.setItem('userName', userName);
    localStorage.setItem('userPsw', userPsw);
}

function validateUser(userName1, userPsw1){
    let userName2 = localStorage.getItem('userName').toLowerCase().trim();
    let userPsw2 = localStorage.getItem('userPsw');
    userName1 = userName1.toLowerCase().trim();
    return userName1 === userName2 && userPsw1 === userPsw2;
}

const inputUserName = document.querySelector('#inputUserName');
inputUserName.value ='';
const inputPsw = document.querySelector('#inputPsw'); 
inputPsw.value = '';
const chkShowpsw = document.querySelector('#chkShowpsw');
chkShowpsw.checked = false;
const pWrongInfo = document.querySelector('.pWrongInfo');


document.getElementById('formLogin').addEventListener('submit', function(event) {
    if(!validateUser(inputUserName.value, inputPsw.value))
        {
            pWrongInfo.innerHTML = 'Incorrect username or password.';
            pWrongInfo.style.display = 'block';
            event.preventDefault();
        } else {
            window.location.href = 'main.html';
        }
});


chkShowpsw.addEventListener('change', ()=>{
    if(chkShowpsw.checked){
        inputPsw.type = 'text';
    } else {
        inputPsw.type = 'password';
    }

})

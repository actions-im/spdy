/*localStorage.setItem("profile",JSON.stringify({
  firstName: "Sergey",
  lastName: "Zelvenskiy"
}));*/


window.myprofile=JSON.parse(localStorage.profile);

//window.parent.postMessage(window.myprofile, 'http://local.macys.com:9000');
window.parent.postMessage(window.myprofile, '*');

//window.parent.setProfile(myprofile);

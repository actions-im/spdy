//window.setProfile=function(profile){window.profile=profile;}
//setTimeout(function(){alert(window.frames[0].myprofile.firstName)},1000);

function receiver(event) {
    window.document.title=event.data.firstName + " " + event.data.lastName
}
window.addEventListener('message', receiver, false);
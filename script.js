const settingsMenu=document.querySelector(".settings-menu");
const btn=document.getElementById("btn");
function settingsMenuToggle(){
   settingsMenu.classList.toggle("settings-menu-height");
}
btn.onclick=function(){
    btn.classList.toggle("dark-btn-on");
    document.body.classList.toggle('dark-theme');
    if(localStorage.getItem("theme")=="light")
    {
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}
if(localStorage.getItem("theme")=="light"){
        document.body.classList.remove("dark-theme");
        btn.classList.remove("dark-btn-on");
    }
else if(localStorage.getItem("theme")=="dark"){
        document.body.classList.add("dark-theme");
        btn.classList.add("dark-btn-on");
    }
else {
    localStorage.setItem("theme","light");
}
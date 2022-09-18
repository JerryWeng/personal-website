let menu = document.getElementById('menu-button');

menu.addEventListener('click', function(){
    let frontpage = document.getElementById('front-page');
    if (frontpage.style.right == "217px"){
        frontpage.style.right = "0px";
    }else{
        frontpage.style.right = "217px";
    }

    let menubar = document.getElementById('menu-bar');
    if (menubar.style.translate == "0px"){
        menubar.style.translate = "217px";
    }else{
        menubar.style.translate = "0px";
    }

    let menuicon = document.getElementById('menu-button');
    if (menuicon.style.right == "237px"){
        menuicon.style.right = "20px";
    }else{
        menuicon.style.right = "237px";
    }

    let about = document.getElementById('about-page');
    if (about.style.right == "217px"){
        about.style.right = "0px";
    }else{
        about.style.right = "217px";
    }

    let projects = document.getElementById('projects-page');
    if (projects.style.right == "217px"){
        projects.style.right = "0px";
    }else{
        projects.style.right = "217px";
    }
})

let theme = document.getElementById('theme');

theme.addEventListener('click', function(){
    let img = document.querySelector("#theme-image");
    let src = img.getAttribute('src');

    if (src === "images/dark-mode.png"){
        img.setAttribute('src', "images/black-light-mode.png");
        // document.getElementById('menu-bar').style.backgroundColor = 'black';
        // document.getElementById('main').style.color = 'black';
    }else{
        img.setAttribute('src', "images/dark-mode.png");
        // document.getElementById('menu-bar').style.backgroundColor = 'white';
        // document.getElementById('main').style.color = 'white';
    }
})
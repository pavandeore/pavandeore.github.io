let main = document.querySelector('.main');
let mainDiv = document.querySelector('.main-div');
let secondDiv = document.querySelector('.second-div');
let thirdDiv = document.querySelector('.third-div');
let socialDiv = document.querySelector('.social-div');
let skillDiv = document.querySelector('.skill-div');
let projectDiv = document.querySelector('.project-div');

let social = document.querySelector('.social');
let skill = document.querySelector('.skill');
let project = document.querySelector('.project');

let homeBtn = document.querySelector('.home-btn');

import ProjectData from './projectData.js'

// initially on page load all secondly
// things should not be visible

secondDiv.style.display="none"
thirdDiv.style.display="none"
socialDiv.style.display="none"
skillDiv.style.display="none"
projectDiv.style.display="none"
homeBtn.style.display="none"

let h2 = document.createElement('h2');
h2.innerText = "Welcome";
h2.setAttribute('class','welcome')
main.appendChild(h2);

setTimeout(()=>{
    mainDiv.style.background = "url('./images/back.jpg')"
    main.removeChild(h2)
    main.appendChild(secondDiv)
    secondDiv.style.display = "block"
    secondDiv.append(thirdDiv);
    thirdDiv.style.display = "flex"
},4000)

social.addEventListener("click",()=>{
    socialDiv.style.display = "block"
    socialDiv.setAttribute('class',' social-from-right')
})

setTimeout(()=>{
    main.appendChild(skillDiv);
    skillDiv.style.display = "flex"
    skillDiv.setAttribute('class','skill-from-bottom')
},6000)

project.addEventListener("click",()=>{
    main.removeChild(secondDiv)
    mainDiv.removeChild(main)
    document.body.removeChild(socialDiv)
    mainDiv.appendChild(homeBtn)
    homeBtn.style.display = "block"
    mainDiv.appendChild(projectDiv)
    projectDiv.style.display = "flex"
    ProjectData.forEach((data)=>{
        let div = document.createElement('div');
        div.innerHTML = 
        `
        <div class="innerContact-div">
        <h2>${data.title}</h2>
        <img src="${data.imageUrl}" class="project-img" />
        <div class="desc">
            ${data.desc}
            <a class="visit" href="${data.visitUrl}" target="_blank">Visit<i class="fa fa-mail-forward"></i></a>
        </div>
        </div>
        `;
        projectDiv.appendChild(div);
    })
})

homeBtn.addEventListener("click",()=>{
    window.location.reload();
})
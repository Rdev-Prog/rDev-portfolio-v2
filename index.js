const backToTopBtn = document.getElementById("back-to-top-btn")

showBackToTopBtn();
function showBackToTopBtn() {
    window.addEventListener("scroll", () => {
        let windowHeight = window.scrollY
        console.log(windowHeight);
        

        if (windowHeight != 0) {
            backToTopBtn.style.display = "block"
            backToTopBtn.style.animation = "backToTopBtn-show 0.2s ease-in 1"
        } else {
            backToTopBtn.style.animation = "backToTopBtn-hide 0.2s ease-in 1"
            
            setTimeout(() => {
                backToTopBtn.style.display = "none"  
            }, 200);
        }
    })
}

const projects = [
    {
        projectImage : "",
        projectTitle : "EduLink Learning Management System",
        projectTechList : ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js", "fa-brands fa-php"]
    },
    {
        projectImage : "",
        projectTitle : "EduLink Learning Management System",
        projectTechList : ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js", "fa-brands fa-php"]
    },
    {
        projectImage : "",
        projectTitle : "EduLink Learning Management System",
        projectTechList : ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js", "fa-brands fa-php"]
    },
    {
        projectImage : "",
        projectTitle : "EduLink Learning Management System",
        projectTechList : ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js", "fa-brands fa-php"]
    },
]

showProjectList()

function showProjectList() {
    for (let projectIndex = 0; projectIndex < projects.length; projectIndex++) {
        // Parent Container
        const projectList = document.getElementById("project-list-con")

        // Child Container (container for all the Content)
        const projectCard = document.createElement("div")
        projectCard.className = "project-box"

        projectList.appendChild(projectCard)

        // Image container
        const projectImageCon = document.createElement("div")
        projectImageCon.className = "project-image-con"

        projectCard.appendChild(projectImageCon)

        // Image source link
        const projectImg = document.createElement("img")
        projectImg.src = projects[projectIndex].projectImage

        projectImageCon.appendChild(projectImg)

        // Project Info Container
        const projectInfoCon = document.createElement("div")
        projectInfoCon.className = "project-info-con"

        projectCard.appendChild(projectInfoCon)

        // Project Title
        const projectTitleText = document.createElement("div")
        projectTitleText.className = "project-title"
        projectTitleText.innerHTML = projects[projectIndex].projectTitle

        projectInfoCon.appendChild(projectTitleText)

        // Project Tech List
        const projectTechListCon = document.createElement("div")
        projectTechListCon.className = "project-tech-con"

        for (let index = 0; index < projects[projectIndex].projectTechList.length; index++) {
            const techItem = document.createElement("i")
            techItem.className = projects[projectIndex].projectTechList[index]

            projectTechListCon.appendChild(techItem)
        }

        projectInfoCon.appendChild(projectTechListCon)

        // Button Container
        const buttonCon = document.createElement("div")
        buttonCon.className = "project-btn-con"

        projectInfoCon.appendChild(buttonCon)

        // Button 1
        const button1 = document.createElement("button")
        button1.innerHTML = "View live demo<i class='fa-solid fa-arrow-up-right-from-square'></i>"

        buttonCon.appendChild(button1)

    }
}

const viewMoreBtn = document.getElementById("view-more-btn")
const projectSection = document.getElementById("project-list-con")
let state = 0;

if(projects.length < 3) {
    viewMoreBtn.style.display = "none"
} else {
    viewMoreBtn.style.display = "flex"
}

viewMoreBtn.addEventListener("click", () => {
    state++

    
    if (state === 1) {
        viewMoreBtn.innerHTML = "See Less <i id='view-more-icon' class='fa-solid fa-angle-down'></i>"
        projectSection.style.height = "fit-content"
        projectSection.style.removeProperty("overflow-y")
        
        document.getElementById("project").style.height = "fit-content"
        document.getElementById("project").style.gridTemplateRows = "10% 80% 10%"
        
        document.getElementById("view-more-icon").style.rotate = "180deg"
    } else if (state === 2) {
        viewMoreBtn.innerHTML = "See More <i id='view-more-icon' class='fa-solid fa-angle-down'></i>"
        state = 0
        projectSection.style.height = "100%"
        projectSection.style.overflowY = "hidden"

        document.getElementById("project").style.height = "100%"

        document.getElementById("view-more-icon").style.rotate = "00deg"
    }

    console.log(state);
    
})


const goToContactBtn = document.getElementById("home-contact-btn")
goToContactBtn.addEventListener("click", () => {
    window.location.href = "index.html#contact"
})

const goToProjectBtn = document.getElementById("home-project-btn")
goToProjectBtn.addEventListener("click", () => {
    window.location.href = "index.html#project"
})

const userName = document.getElementById("name")
const userEmail = document.getElementById("email")
const userMessage = document.getElementById("message")
const submitBtn = document.getElementById("submit-btn")

if (userName.value === "" || userEmail.value === "" || userMessage.value === "") {
    submitBtn.disabled = true
} 

const inputField = document.querySelectorAll(".input-field")
inputField.forEach((input) => {
    input.addEventListener("input", () => {
        
        if (userName.value === "" || userEmail.value === "" || userMessage.value === "" || !userEmail.value.includes("@gmail.com")) {
            submitBtn.disabled = true
        } else {
            submitBtn.disabled = false
        }

    })
})

function sendMail() { 
    let params = { 
        name: userName.value, 
        email: userEmail.value, 
        message: userMessage.value, 
    }; 

    const serviceID = "service_c9m4qqm"; 
    const templateID = "template_zwxtfb8"; 
    
    emailjs.send(serviceID, templateID, params) 
           .then((res) => { 
                // Pop up message
                document.getElementById("pop-up-message").style.display = "flex"
                document.getElementById("pop-up-message").style.animation = "popUpMessage-show 0.2s ease-in 1"
            }) 
            .catch((err) => console.log(err))
} 

document.getElementById("pop-up-message-btn").addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("pop-up-message").style.animation = "popUpMessage-hide 0.2s ease-in 1"
        document.getElementById("pop-up-message").style.display = "none"

        userName.value = ""; 
        userEmail.value = "";
        userMessage.value = "";
    }, 200);
})

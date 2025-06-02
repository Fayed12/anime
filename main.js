// functionalty of otherlinks

let Otherlinks = document.getElementById("Otherlinks");
let menu = document.getElementById("menu");

Otherlinks.addEventListener("click", () => {
    menu.classList.toggle("visible");
})
document.addEventListener('click', function (e) {
    if (!Otherlinks.contains(e.target)) {
        menu.classList.remove("visible");
    }
});

// =================================================================================

// functionalty of otherlinks

let scrollButton = document.getElementById("scrollButton");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollButton.style.opacity = "1";
        scrollButton.style.visibility = "visible"
    } else {
        scrollButton.style.opacity = "0";
        scrollButton.style.visibility = "hidden"
    }
});
scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

// =================================================================================

// functionalty of darkmode button

// variables
let darkmodeptn = document.getElementById("darkmode");
let stylefile = document.getElementById("stylefile");
let icon = document.getElementById("icon")

// darkptn and lightptn theme object
let darkptn = {
    backgroundColor: "black",
    color: "white",
    icon: "fa-solid fa-moon",
    darkclass:"darkmode"
}

let lightptn = {
    backgroundColor: "white",
    color: "black",
    icon: "fa-solid fa-sun",
    darkclass: "darkmode"
}

// get theme from localstorage
let mode = localStorage.getItem("theme");
stylefile.setAttribute("href" , mode)

let icontheme = JSON.parse(localStorage.getItem("iconth")) ;
icon.setAttribute("class", icontheme.icon);
darkmodeptn.style.backgroundColor = icontheme.backgroundColor;
darkmodeptn.style.color = icontheme.color;
document.body.classList.toggle(icontheme.darkclass);

// functions of dark and light mode
function darkmode() {
    icon.setAttribute("class", darkptn.icon);
    darkmodeptn.style.backgroundColor = darkptn.backgroundColor;
    darkmodeptn.style.color = darkptn.color
    stylefile.removeAttribute("href")
    document.body.classList.remove("darkmode")
}
function lightmode() {
    icon.setAttribute("class", lightptn.icon);
    darkmodeptn.style.backgroundColor = lightptn.backgroundColor
    darkmodeptn.style.color = lightptn.color
    stylefile.setAttribute("href", "css/darkmode.css")
    document.body.classList.add("darkmode")
}
// event when press the button
darkmodeptn.addEventListener("click", () => {
    if (icon.classList.contains("fa-moon")) {
        lightmode()
        localStorage.setItem("theme", "css/darkmode.css")
        localStorage.setItem("iconth", JSON.stringify(lightptn) )
    } else {
        darkmode()
        localStorage.setItem("theme", "")
        localStorage.setItem("iconth", JSON.stringify(darkptn))
    }
})

// =================================================================================

// functionalty of events dates

// variables
let daysspan = document.getElementById("days");
let hoursspan = document.getElementById("hours");
let minutesspan = document.getElementById("minutes");
let secondspan = document.getElementById("seconds");

let time =setInterval(() => {
    if (secondspan.textContent > 0) {
        secondspan.textContent = secondspan.textContent - 1;
    } else {
        secondspan.textContent = 59;
        if (minutesspan.textContent > 0) {
            minutesspan.textContent = minutesspan.textContent - 1;
        } else {
            minutesspan.textContent = 59;
            if (hoursspan.textContent > 0) {
                hoursspan.textContent = hoursspan.textContent - 1;
            } else {
                hoursspan.textContent = 23;
                if (daysspan.textContent > 0) {
                    daysspan.textContent = daysspan.textContent - 1;
                } else {
                    alert("the time is end!")
                    clearInterval(time);
                }
            }
        }
    }
}, 1000)

// set the currentyear

let currentyear = document.getElementById("currentyear");
let dateyear = new Date();
currentyear.textContent = (dateyear.getFullYear());

// =================================================================================

// functionalty of Awesome Stats

let spanData = document.querySelectorAll(".spancounter");
function showSpanData() {
    spanData.forEach((ele) => {
        let startValue = parseInt(ele.textContent);
        let endValue = parseInt(ele.getAttribute("data-counetr"));
        let counter = setInterval(() => {
            if (startValue < endValue) {
                startValue++;
                ele.textContent = startValue;
            } else {
                clearInterval(counter);
            }
        }, 90);
    });
}
window.onload = setTimeout(() => {
    showSpanData();
}, 2000);

// =================================================================================

// functionalty of loading

let loading = document.getElementById("loading");

window.onload = function () {
    loading.style.zIndex = "-100"
    loading.style.opacity = "0"
};
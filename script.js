const boot = document.getElementById("boot");
const desktop = document.getElementById("desktop");

window.onload = () => {

    setTimeout(() => {

        // محو کردن صفحه بوت
        boot.style.opacity = "0";

        setTimeout(() => {

            // حذف بوت
            boot.style.display = "none";

            // نمایش دسکتاپ
            desktop.style.display = "flex";

        }, 1000);

    }, 3000);

};

const flexButton =
document.querySelector(".flex-btn");


const flexMenu =
document.getElementById("flexMenu");


flexButton.onclick = () => {

    flexMenu.classList.toggle("active");

};

function updateDevice(){

    let now = new Date();


    document.getElementById("clock").innerHTML =
    now.toLocaleTimeString();


    document.getElementById("date").innerHTML =
    now.toLocaleDateString();



    document.getElementById("network").innerHTML =
    navigator.onLine ? "Online 🟢" : "Offline 🔴";



    document.getElementById("screen").innerHTML =
    screen.width+" x "+screen.height;



    document.getElementById("browser").innerHTML =
    navigator.userAgent.split(" ")[0];

}


setInterval(updateDevice,1000);

updateDevice();

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

// ==========================
// Portfolio Script
// ==========================

// เปิดรูป
function openImage(src) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = src;
}

// ปิดรูป
function closeImage() {
    document.getElementById("popup").style.display = "none";
}

// กด ESC เพื่อปิด
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeImage();
    }
});

// คลิกพื้นหลังเพื่อปิด
const popup = document.getElementById("popup");

if (popup) {
    popup.addEventListener("click", function (e) {
        if (e.target.id === "popup") {
            closeImage();
        }
    });
}

// ==========================
// Animation เวลาเลื่อน
// ==========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});

// ==========================
// ปุ่มกลับด้านบน
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00A8E8";
topBtn.style.color = "white";
topBtn.style.fontSize = "24px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 8px 20px rgba(0,168,232,.35)";
topBtn.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

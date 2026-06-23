/* ====================================
   AOS INITIALIZATION
==================================== */

AOS.init({
    duration: 1000,
    once: true
});

/* ====================================
   MOBILE MENU
==================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a")
    .forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

});

/* ====================================
   BMI CALCULATOR
==================================== */

const bmiBtn = document.getElementById("bmi-btn");

if (bmiBtn) {

    bmiBtn.addEventListener("click", () => {

        const height =
            parseFloat(document.getElementById("height").value);

        const weight =
            parseFloat(document.getElementById("weight").value);

        const result =
            document.getElementById("bmi-result");

        if (!height || !weight) {

            result.innerText =
                "Please enter valid values.";

            return;
        }

        const bmi =
            weight / ((height / 100) * (height / 100));

        let category = "";

        if (bmi < 18.5) {

            category = "Underweight";

        } else if (bmi < 25) {

            category = "Normal";

        } else if (bmi < 30) {

            category = "Overweight";

        } else {

            category = "Obese";
        }

        result.innerText =
            `BMI: ${bmi.toFixed(1)} (${category})`;

    });

}

/* ====================================
   SMOOTH SCROLL
==================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

/* ====================================
   HEADER SHADOW ON SCROLL
==================================== */

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.4)";

    } else {

        header.style.boxShadow = "none";
    }

});

/* ====================================
   CURRENT YEAR
==================================== */

const yearElement =
    document.querySelector(".current-year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}

const trialForm = document.getElementById("trial-form");

if (trialForm) {

    trialForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const formData = new FormData(trialForm);

        const response = await fetch(
            trialForm.action,
            {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            }
        );

        if (response.ok) {

            window.location.href = "thankyou.html";

        } else {

            alert("Something went wrong. Please try again.");

        }

    });

}


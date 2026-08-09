/* =====================================================
   OM RUDRI ESTATES & DEVELOPERS
   FINAL JAVASCRIPT
===================================================== */


/* =====================================================
   WEBSITE LOAD
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "OM RUDRI ESTATES & DEVELOPERS Website Loaded"
    );

    loadSavedLanguage();

    setupSmoothScroll();

    setupWhatsApp();

    setupCallButtons();

    setupGallery();

});



/* =====================================================
   GALLERY
===================================================== */

function openImage(imageSrc) {

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    if (!modal || !modalImage) {
        return;
    }

    modalImage.src = imageSrc;

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}



function closeImage() {

    const modal =
        document.getElementById("imageModal");

    if (!modal) {
        return;
    }

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}



/* =====================================================
   GALLERY CLICK
===================================================== */

function setupGallery() {

    const modal =
        document.getElementById("imageModal");

    if (!modal) {
        return;
    }

    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {

                closeImage();

            }

        }
    );

}



/* =====================================================
   ESC KEY - CLOSE GALLERY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeImage();

        }

    }
);



/* =====================================================
   LANGUAGE DATA
===================================================== */

const translations = {

    en: {

        home: "Home",
        about: "About",
        property: "Property",
        gallery: "Gallery",
        location: "Location",
        contact: "Contact",

        viewProperty: "View Property",
        callNow: "📞 Call Now",
        enquire: "Enquire Now",

        aboutLabel: "ABOUT US",
        propertyLabel: "FEATURED PROPERTY",
        galleryLabel: "PROPERTY GALLERY",
        locationLabel: "LOCATION",
        contactLabel: "CONTACT US"

    },


    mr: {

        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल",
        property: "प्रॉपर्टी",
        gallery: "फोटो गॅलरी",
        location: "लोकेशन",
        contact: "संपर्क",

        viewProperty: "प्रॉपर्टी पहा",
        callNow: "📞 कॉल करा",
        enquire: "चौकशी करा",

        aboutLabel: "आमच्याबद्दल",
        propertyLabel: "उपलब्ध प्रॉपर्टी",
        galleryLabel: "प्रॉपर्टी फोटो",
        locationLabel: "लोकेशन",
        contactLabel: "संपर्क करा"

    },


    hi: {

        home: "होम",
        about: "हमारे बारे में",
        property: "प्रॉपर्टी",
        gallery: "गैलरी",
        location: "लोकेशन",
        contact: "संपर्क",

        viewProperty: "प्रॉपर्टी देखें",
        callNow: "📞 कॉल करें",
        enquire: "पूछताछ करें",

        aboutLabel: "हमारे बारे में",
        propertyLabel: "फीचर्ड प्रॉपर्टी",
        galleryLabel: "प्रॉपर्टी गैलरी",
        locationLabel: "लोकेशन",
        contactLabel: "संपर्क करें"

    }

};



/* =====================================================
   CHANGE LANGUAGE
===================================================== */

function changeLanguage(language) {

    if (!translations[language]) {

        return;

    }


    const text =
        translations[language];


    /* -----------------------------
       NAVIGATION
    ----------------------------- */

    const navLinks =
        document.querySelectorAll(".navbar a");


    if (navLinks.length >= 6) {

        navLinks[0].textContent = text.home;

        navLinks[1].textContent = text.about;

        navLinks[2].textContent = text.property;

        navLinks[3].textContent = text.gallery;

        navLinks[4].textContent = text.location;

        navLinks[5].textContent = text.contact;

    }


    /* -----------------------------
       HERO BUTTONS
    ----------------------------- */

    const heroButtons =
        document.querySelectorAll(
            ".hero-buttons .btn"
        );


    if (heroButtons.length >= 2) {

        heroButtons[0].textContent =
            text.viewProperty;

        heroButtons[1].textContent =
            text.callNow;

    }


    /* -----------------------------
       PROPERTY BUTTON
    ----------------------------- */

    const enquireButton =
        document.querySelector(
            ".property-buttons .primary-btn"
        );


    if (enquireButton) {

        enquireButton.textContent =
            text.enquire;

    }


    /* -----------------------------
       SECTION LABELS
    ----------------------------- */

    const labels =
        document.querySelectorAll(
            ".section-label"
        );


    if (labels.length >= 4) {

        labels[0].textContent =
            text.aboutLabel;

        labels[1].textContent =
            text.propertyLabel;

        labels[2].textContent =
            text.galleryLabel;

        labels[3].textContent =
            text.locationLabel;

        labels[4].textContent =
            text.contactLabel;

    }


    /* -----------------------------
       SAVE LANGUAGE
    ----------------------------- */

    localStorage.setItem(
        "selectedLanguage",
        language
    );


    console.log(
        "Language changed to:",
        language
    );

}



/* =====================================================
   LOAD SAVED LANGUAGE
===================================================== */

function loadSavedLanguage() {

    const savedLanguage =
        localStorage.getItem(
            "selectedLanguage"
        );


    if (savedLanguage &&
        translations[savedLanguage]) {

        changeLanguage(savedLanguage);

    }

}



/* =====================================================
   SMOOTH SCROLL
===================================================== */

function setupSmoothScroll() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (!targetId ||
                    targetId === "#") {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });

}



/* =====================================================
   WHATSAPP
===================================================== */

function setupWhatsApp() {

    const whatsappLinks =
        document.querySelectorAll(
            'a[href*="wa.me"]'
        );


    whatsappLinks.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    console.log(
                        "WhatsApp enquiry clicked"
                    );

                }
            );

        }
    );

}



/* =====================================================
   CALL BUTTONS
===================================================== */

function setupCallButtons() {

    const callLinks =
        document.querySelectorAll(
            'a[href^="tel:"]'
        );


    callLinks.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    console.log(
                        "Call button clicked"
                    );

                }
            );

        }
    );

}



/* =====================================================
   PAGE LOAD EFFECT
===================================================== */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);



/* =====================================================
   MOBILE / GENERAL ERROR CHECK
===================================================== */

window.addEventListener(
    "error",
    function (event) {

        console.warn(
            "Website error:",
            event.message
        );

    }
);

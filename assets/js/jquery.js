let toggleMenu = () => {
    $(".mobile-menu").toggleClass("menu-active")
    $(".mobile-menu").toggleClass("menu-unactive")
    $(".menu-icon").toggleClass("menu-icon-active")
    $(".menu-icon").toggleClass("menu-icon-unactive")
}

let closeMenu = () => {
    $(".mobile-menu").addClass("menu-unactive")
    $(".mobile-menu").removeClass("menu-active")
    $(".menu-icon").toggleClass("menu-icon-active")
    $(".menu-icon").toggleClass("menu-icon-unactive")
}

$(document).ready(() => {

    // MOBILE MENU
    $(".menu-icon").click(() => {
        toggleMenu();
    });
    $(".nav-link").click(() => {
        closeMenu();
    });
    $(".goHome").click(() => {
        urlsw("#home");
    });
    $(".goAbout").click(() => {
        urlsw("#about");
    });
    $(".goTeam").click(() => {
        urlsw("#team");
    });
    $(".goCont").click(() => {
        urlsw("#contacts");
    });

    // HOME CTAS
    $(".home-cta-1").click(() => {
        urlsw("#team");
    });
    $(".home-cta-2").click(() => {
        urlsw("#contacts");
    });

    // TEAM CTAS
    $(".goJuroIG").click(() => {
        url("https://www.instagram.com/juri_gemignani/");
    });
    $(".goJuroDS").click(() => {
        url("https://discordapp.com/channels/@me/770590815088803870/");
    });
    $(".goAlibiIG").click(() => {
        url("https://www.instagram.com/aaalibi_/");
    });
    $(".goAlibiDS").click(() => {
        url("https://discordapp.com/channels/@me/414523952166076419/");
    });

    // CONTACTS
    $(".goMail").click(() => {
        url("");
    });
    $(".goDS").click(() => {
        url("");
    });
    $(".goIG").click(() => {
        url("");
    });
    

});
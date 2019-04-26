// 1.
function ChangeName() {
    if (document.getElementById("index")) {
        document.title = "Webprogramming (LIX019P05) - Index";
    }
    if (document.getElementById("second")) {
        document.title = "Webprogramming (LIX019P05) - Second"
    }
}
ChangeName();

// 2.
function CreateArticle() {
    if (document.title === "Webprogramming (LIX019P05) - Index") {
        var h1 = document.createElement("h1");
        var title = document.createTextNode("This is my second article");
        h1.appendChild(title);

        var p = document.createElement("p");
        var text = document.createTextNode("Nintendo heeft een Commodore 64-overzetting van het klassieke NES-spel Super Mario Bros. offline laten halen, laat de Commodore Computer Club dinsdag via Twitter weten. Een programmeur, die op de website van de Commodore Computer Club bekendstaat als ZeroPaige, deed zeven jaar over de ontwikkeling van het spel. Vier dagen nadat de eindversie online was verschenen, liet Nintendo het spel verwijderen. De Commodore 64-versie van Super Mario Bros. was een kopie van het origineel, dat op het Nintendo Entertainment System (NES) is verschenen. ZeroPaige wist het spel na te bouwen en uit te brengen in een bestand van 109 kB. Op fora werd zijn versie door Commodore 64-gebruikers geprezen. Super Mario Bros. 64 werkte op Commodore 64-hardware (de 8-bitcomputer komt uit 1982), maar ook op emulatoren. Met die programma's kunnen mensen bijvoorbeeld retrospelcomputers nabootsen op hun pc. Nintendo liet de versie van het 33-jarige spel verwijderen van hobbysites en uploaddiensten. Nintendo klaagde websites aan. In 2018 spande Nintendo een rechtszaak aan tegen twee websites die gratis emulatoren en roms aanboden. De sites boden kopieën aan van games die eerder op Nintendo-consoles zijn verschenen, zoals de Super Nintendo, Game Boy en Nintendo 64. Het bedrijf vroeg destijds een schadevergoeding van 150.000 dollar en tot 2 miljoen dollar per inbreuk op de merknaam van Nintendo. Nintendo biedt zelf NES-games aan op de Switch. Games zoals Super Mario Bros. en The Legend of Zelda zijn te spelen als gebruikers een betaald abonnement hebben afgesloten.");
        p.appendChild(text);

        var article = document.createElement("article");
        article.appendChild(h1);
        article.appendChild(p);

        var element = document.getElementsByClassName("col-md-12")[0];
        element.appendChild(article);
    }
}
CreateArticle();

// 3.
function ChangeHref() {
    document.getElementById("Link1").href="https://google.com";
}
ChangeHref();

// 4.
function NewWindow() {
    document.getElementById("Link1").setAttribute('target', '_blank');
}
NewWindow();

// 5.
function ChangeToRed() {
    var x = document.getElementsByClassName("nav-item");
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor="red";
    }
}
ChangeToRed();

// 6.
function JavascriptObject() {
    var schedule = {
        week1: "Week 1:",
        activity1: "Assignment 1",
        week2: "Week 2:",
        activity2: "No lecture",
        week3: "Week 3:",
        activity3: "Assignment 2",
        week4: "Week 4:",
        activity4: "-",
        week5: "Week 5:",
        activity5: "Assignment 3",
        week6: "Week 6:",
        activity6: "-",
        week7: "Week 7:",
        activity7: "Guest Lecture",
        fullschedule : function() {
            return schedule.week1 + "\t" + schedule.activity1 + "\n" + schedule.week2 + "\t" + schedule.activity2
                + "\n" + schedule.week3 + "\t" + schedule.activity3 + "\n" + schedule.week4 + "\t" + schedule.activity4
                + "\n" + schedule.week5 + "\t" + schedule.activity5 + "\n" + schedule.week6 + "\t" + schedule.activity6
                + "\n" + schedule.week7 + "\t" + schedule.activity7;
        }
    };
    if (document.title === "Webprogramming (LIX019P05) - Index") {
        var h1 = document.createElement("h1");
        var title = document.createTextNode("Schedule");
        h1.appendChild(title);

        var p = document.createElement("p");
        var text = document.createTextNode(schedule.fullschedule());
        p.appendChild(text);

        var article = document.createElement("article");
        article.appendChild(h1);
        article.appendChild(p);

        var element = document.getElementsByClassName("col-md-12")[0];
        element.appendChild(article);
    }
}
JavascriptObject();

// 7.
function Sidebar() {
    if (document.title === "Webprogramming (LIX019P05) - Second") {
        document.getElementsByClassName("col-md-12")[0].className = "col-md-8";
        var div = document.createElement("div");
        div.className = "col-md-4";
        var heading = document.createElement("h1");
        var textSidebar = document.createTextNode("Sidebar");
        heading.appendChild(textSidebar);
        div.appendChild(heading);
        document.getElementsByClassName("container")[0].appendChild(div);
    }
}
Sidebar();
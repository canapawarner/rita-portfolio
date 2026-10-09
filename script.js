// Testi italiani e inglesi associati agli attributi data-i18n dell'HTML.
const translations = {
    it: {
        name: "Sono Rita.",
        headline: "Trasformo le idee in progetti attraverso il codice.",
        role: "Programmatrice junior · Sviluppo web, desktop e videogiochi",
        description:
            "Dalla formazione artistica alla programmazione: costruisco applicazioni e interfacce, unendo attenzione visiva e competenze tecniche.",
                // Testo italiano del pulsante che apre il menu.
        exploreSite: "Esplora il sito",
        viewAbout: "Scopri il mio percorso",
        projects: "Progetti",
        // Collegamenti sulle copertine dei progetti.
        downloadLoveball: "Scarica Loveball ↓",
        visitChillroom: "Visita ChillRoom ↗",
        downloadDesktop: "Scarica ChillRoom Desktop ↓",
        // Voci del menu a tutta schermata.
        menuHome: "Home",
        menuWork: "Progetti",
        menuAbout: "Chi sono",
        menuContact: "Contatti",
                // Presentazione personale in italiano.
          // Titolo della schermata e collegamento al PDF.
        about: "Chi sono",
        // Testi dei due collegamenti ai PDF.
        downloadPortfolioItalian: "Scarica portfolio: italiano",
        downloadPortfolioEnglish: "Scarica portfolio: inglese",
        aboutIntro:
            "Sono Rita Ribaudo, programmatrice junior con una formazione artistica. Amo i videogiochi, la lettura, il disegno e i gatti. La musica accompagna la mia quotidianità: esploro generi diversi, ma il rock resta quello in cui mi riconosco di più.",
        aboutPassion:
            "Nella programmazione ho trovato il modo di dare voce alla mia creatività e unire sensibilità visiva e pensiero logico. Mi appassiona trasformare un'idea in qualcosa di concreto, affrontare problemi e costruire soluzioni che siano funzionali e curate anche nell'esperienza di chi le utilizza.",
        education: "Formazione",
        skills: "Competenze",
        contact: "Contatti",
                // Ambiti e descrizioni dei progetti in italiano.
        gameDevelopment: "Sviluppo videogiochi",
        webDevelopment: "Sviluppo web",
        desktopDevelopment: "Sviluppo desktop",
        loveballDescription:
            "Ho sviluppato un gioco arcade in C++ con SFML: movimento della palla e della piattaforma, collisioni, ostacoli, gestione delle vite e condizioni di vittoria e sconfitta.",
        webDescription:
            "Ho costruito una piattaforma web con autenticazione, chat in tempo reale, condivisione di idee e area giochi. Ho lavorato sul backend, sul database e sull'interfaccia in HTML, CSS e JavaScript.",
        desktopDescription:
            "Ho realizzato la versione desktop di ChillRoom in C++ con Qt Widgets, sviluppando interfacce native e collegamenti con il servizio web per messaggi e presenza degli utenti.",
                // Titolo e racconti del percorso personale in italiano.
        // Titoli delle due parti del racconto del progetto.
        developmentTitle: "Sviluppo",
        journeyTitle: "Il mio percorso",
        loveballJourney:
            "Con Loveball ho iniziato a trasformare lo studio del C++ in qualcosa di concreto e giocabile. Sono partita dal movimento di una palla e di una piattaforma, aggiungendo gradualmente regole, ostacoli e dettagli visivi. La mia formazione artistica ha trovato spazio nei colori e nella pixel art; la programmazione mi ha insegnato a costruire il comportamento del gioco, una soluzione alla volta.",
        webJourney:
            "ChillRoom è nato dall'idea di creare uno spazio privato per ritrovarsi con gli amici, parlare e condividere idee e giochi. Partendo da Python e Flask, ho imparato a collegare ciò che l'utente vede ai dati e alle funzionalità che lo fanno funzionare. Portare il progetto online mi ha avvicinata anche agli aspetti pratici di un sito: hosting, dominio e verifica degli account.",
        desktopJourney:
            "Dopo la versione web, ho voluto esplorare come portare ChillRoom in un'applicazione desktop. Con C++ e Qt ho lavorato per ricrearne l'identità visiva e collegarla allo stesso servizio. Questo progetto mi sta insegnando a ragionare sulla coerenza tra interfacce diverse e sulla sincronizzazione di messaggi e presenza, curando anche i piccoli dettagli che rendono un'applicazione piacevole da usare.",
    },

    en: {
        name: "I'm Rita.",
        headline: "I turn ideas into projects through code.",
        role: "Junior developer · Web, desktop and game development",
        description:
            "From an artistic background to programming: I build applications and interfaces, combining visual attention with technical skills.",
                // Testo inglese del pulsante che apre il menu.
        exploreSite: "Explore the site",
        viewAbout: "Discover my journey",
        projects: "Projects",
        // Collegamenti sulle copertine dei progetti in inglese.
        downloadLoveball: "Download Loveball ↓",
        visitChillroom: "Visit ChillRoom ↗",
        downloadDesktop: "Download ChillRoom Desktop ↓",
                // Voci inglesi come nel riferimento.
        menuHome: "Home",
        menuWork: "Work",
        menuAbout: "About",
        menuContact: "Contact",
                // Presentazione personale in inglese.
                // Versione inglese del titolo e del collegamento al PDF.
        about: "About me",
        // Download labels for the two PDF versions.
        downloadPortfolioItalian: "Download portfolio: Italian",
        downloadPortfolioEnglish: "Download portfolio: English",
        aboutIntro:
            "I'm Rita Ribaudo, a junior developer with an artistic background. I love video games, reading, drawing and cats. Music is part of my everyday life: I explore different genres, but rock is the one I connect with most.",
        aboutPassion:
            "Programming gives me a way to express my creativity and bring together visual sensitivity and logical thinking. I enjoy turning ideas into something tangible, solving problems and building solutions that are functional and thoughtfully designed for the people who use them.",
        education: "Education",
        skills: "Skills",
        contact: "Contact",
                // Ambiti e descrizioni dei progetti in inglese.
        gameDevelopment: "Game development",
        webDevelopment: "Web development",
        desktopDevelopment: "Desktop development",
        loveballDescription:
            "I developed an arcade game in C++ with SFML, implementing ball and paddle movement, collisions, obstacles, lives, and win and game-over conditions.",
        webDescription:
            "I built a web platform with authentication, real-time chat, idea sharing and a games area. I worked on the backend, database and interface using HTML, CSS and JavaScript.",
        desktopDescription:
            "I created the desktop version of ChillRoom in C++ with Qt Widgets, developing native interfaces and connections to the web service for messages and user presence.",
                // Titolo e racconti del percorso personale in inglese.
            // Traduzione dei titoli del progetto.
        developmentTitle: "Development",
        journeyTitle: "My journey",
        loveballJourney:
            "With Loveball, I began turning my C++ studies into something tangible and playable. I started with a moving ball and paddle, gradually adding rules, obstacles and visual details. My artistic background shaped the colours and pixel art, while programming taught me to build the game's behaviour one solution at a time.",
        webJourney:
            "ChillRoom began as an idea for a private space where friends could meet, chat and share ideas and games. Using Python and Flask, I learned to connect what users see with the data and features behind it. Taking the project online also introduced me to the practical side of running a website: hosting, domains and account verification.",
        desktopJourney:
            "After building the web version, I wanted to explore bringing ChillRoom to a desktop application. Using C++ and Qt, I worked on recreating its visual identity and connecting it to the same service. This project is teaching me about consistency across interfaces and synchronising messages and user presence, while paying attention to the small details that make an application enjoyable to use.",
    }
};

// La pagina parte sempre in italiano.
let currentLanguage = "it";
const languageButton = document.querySelector("#language-toggle");

// Al clic traduce i testi e aggiorna la lingua del documento.
languageButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "it" ? "en" : "it";

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        element.textContent = translations[currentLanguage][key];
    });

    // Il pulsante indica la lingua verso cui si può passare.
    languageButton.textContent = currentLanguage === "it" ? "EN" : "IT";
    languageButton.setAttribute(
        "aria-label",
        currentLanguage === "it" ? "Switch to English" : "Passa all’italiano"
    );

    document.title = currentLanguage === "it"
        ? "Rita | Portfolio di programmazione"
        : "Rita | Development portfolio";
});

// Chiude il menu dopo aver scelto una sezione.
const navigationMenu = document.querySelector(".navigation-menu");

navigationMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigationMenu.open = false;
    });
});

// Permette di chiudere il menu anche premendo Esc.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigationMenu.open) {
        navigationMenu.open = false;
        navigationMenu.querySelector("summary").focus();
    }
});

/* =========================================================
   GATTO PIXEL — DISEGNO, CAMMINATA E RIPOSO
   ========================================================= */

(() => {
    const canvas = document.querySelector("#pixel-cat");
    const scene = document.querySelector(".arcade-background");

    if (!canvas || !scene) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    /* Impostazioni raccolte qui per modificare facilmente il gatto. */
    const settings = {
        cellSize: 80,
        inactivityDelay: 4000,
        stepDuration: 1500,
        frameDuration: 150,
        color: "#7c5bb5",
        glowColor: "167, 139, 250"
    };

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    /*
     * Ogni # rappresenta un pixel pieno.
     * Ogni punto rappresenta uno spazio trasparente.
     * Il gatto in cammino guarda verso destra.
     */
    /* Silhouette squadrata: orecchie nette, dorso piatto e coda ad angolo. */
    /* Testa avanzata e muso piatto, senza sporgenza del naso. */
    /* Testa compatta di profilo, con un piccolo orecchio e muso piatto. */
    /* Gatto di profilo: coda rialzata, dorso lungo e testa compatta. */
    /* Gatto di profilo con orecchio alto e punta a gradini. */
    const walkingBody = [
        "........................",
        ".##.....................",
        ".##...................#.",
        "..##.................##.",
        "..##...............#####",
        "...###.............#####",
        "....####################",
        "......################..",
        "......################..",
        "......###############...",
        ".......####...#######...",
        ".......####....######..."
    ];
    /* Posa seduta: orecchie, petto, corpo e coda a terra. */
    /* Posa seduta geometrica: testa rettangolare e coda piatta. */
    const sittingBody = [
        "........................",
        "........##...##.........",
        "........##...##.........",
        "........#######.........",
        "........########........",
        "........########........",
        ".........######.........",
        ".........######.........",
        ".........######.........",
        ".........########.......",
        ".........########.......",
        ".........########.......",
        ".........##########.....",
        ".........##########.....",
        ".........##########.....",
        ".........##########.....",
        ".......############.....",
        ".......############.....",
        ".......################.",
        ".......################."
    ];

    /* Le zampe alternano quattro pose durante ogni passo. */
    const legFrames = [
        [[7, 12], [6, 13], [5, 14], [4, 15],
         [11, 12], [11, 13], [12, 14], [13, 15],
         [16, 12], [17, 13], [18, 14], [19, 15],
         [20, 12], [20, 13], [20, 14], [20, 15]],

        [[7, 12], [7, 13], [7, 14], [7, 15],
         [11, 12], [12, 13], [13, 14],
         [16, 12], [16, 13], [16, 14], [16, 15],
         [20, 12], [19, 13], [18, 14]],

        [[7, 12], [8, 13], [9, 14], [10, 15],
         [11, 12], [10, 13], [9, 14], [8, 15],
         [16, 12], [15, 13], [14, 14], [13, 15],
         [20, 12], [21, 13], [22, 14], [23, 15]],

        [[7, 12], [7, 13], [7, 14],
         [11, 12], [11, 13], [11, 14], [11, 15],
         [16, 12], [16, 13], [16, 14],
         [20, 12], [20, 13], [20, 14], [20, 15]]
    ];

    /* Stato iniziale: il gatto è seduto in una casella centrale. */
    let width = 0;
    let height = 0;
    let column = 0;
    let targetColumn = 0;
    let direction = 1;
    let walking = false;
    let stepStarted = 0;
    let lastActivity = -Infinity;
    let animationId = null;

    /*
     * Proietta il centro di una casella sul pavimento.
     * I valori corrispondono al CSS attuale:
     * prospettiva 600px, origine 58%, inclinazione 68°, top 60%.
     */
    function projectCell(cellColumn) {
        const angle = 68 * Math.PI / 180;
        const floorY = settings.cellSize * 1.5;
        const floorWidth = width * 2.5;

        /* Le linee verticali partono dal bordo sinistro della griglia. */
        const centralCell = Math.floor(
            floorWidth / 2 / settings.cellSize
        );

        const floorX =
            (centralCell + cellColumn + 0.5) * settings.cellSize
            - floorWidth / 2;

        const depth = Math.sin(angle) * floorY;
        const scale = 600 / (600 - depth);
        const originY = height * 0.58;

        return {
            x: width / 2 + floorX * scale,
            y: originY + (
                height * 0.6
                + Math.cos(angle) * floorY
                - originY
            ) * scale,
            scale
        };
    }

    /* Adatta il disegno agli schermi normali e ad alta risoluzione. */
    function resizeCanvas() {
        const bounds = scene.getBoundingClientRect();
        const ratio = window.devicePixelRatio || 1;

        width = bounds.width;
        height = bounds.height;

        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);

        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        context.imageSmoothingEnabled = false;

        /* Dopo un ridimensionamento torna in una casella visibile. */
        column = 0;
        targetColumn = 0;
        walking = false;

        requestDraw();
    }

    /* Decide la prossima casella e inverte il percorso ai bordi. */
    function beginStep(time) {
        let nextColumn = column + direction;
        let destination = projectCell(nextColumn);

        if (destination.x < 55 || destination.x > width - 55) {
            direction *= -1;
            nextColumn = column + direction;
            destination = projectCell(nextColumn);
        }

        /* Su uno schermo molto stretto rimane seduto. */
        if (destination.x < 40 || destination.x > width - 40) {
            return;
        }

        targetColumn = nextColumn;
        stepStarted = time;
        walking = true;
    }

    /* Pixel uniti: il profilo resta netto e riconoscibile. */
    function drawPixels(rows, pixelSize) {
        rows.forEach((row, y) => {
            [...row].forEach((pixel, x) => {
                if (pixel === "#") {
                    context.fillRect(
                        x * pixelSize,
                        y * pixelSize,
                        pixelSize,
                        pixelSize
                    );
                }
            });
        });
    }

    /* Piccola luce sul pavimento, presente soltanto in cammino. */
    function drawPawGlow(x, y, time, scale) {
        const pulse = 0.11 + (
            Math.sin(time / settings.frameDuration) + 1
        ) * 0.025;

        context.save();
        context.translate(x, y + 2);
        context.scale(1, 0.25);

        const radius = 26 * scale;
        const glow = context.createRadialGradient(
            0, 0, 0, 0, 0, radius
        );

        glow.addColorStop(
            0,
            `rgba(${settings.glowColor}, ${pulse})`
        );
        glow.addColorStop(
            1,
            `rgba(${settings.glowColor}, 0)`
        );

        context.fillStyle = glow;
        context.fillRect(-radius, -radius, radius * 2, radius * 2);
        context.restore();
    }

    /* Disegna il gatto diritto, senza schiacciarlo sul pavimento. */
    function drawCat(position, time) {
        const pixelSize = Math.max(
            1,
            Math.round(1.5 * position.scale)
        );

        const rows = walking ? walkingBody : sittingBody;
        const spriteHeight = walking ? 16 : 20;
        const spriteWidth = 24 * pixelSize;

        if (walking) {
            drawPawGlow(position.x, position.y, time, position.scale);
        }

        context.save();
        context.translate(
            Math.round(position.x),
            Math.round(position.y)
        );

        /* Specchia la silhouette quando cammina verso sinistra. */
        context.scale(direction, 1);
        context.translate(
            -spriteWidth / 2,
            -spriteHeight * pixelSize
        );

        context.fillStyle = settings.color;
        drawPixels(rows, pixelSize);

        if (walking) {
            const frame = Math.floor(
                (time - stepStarted) / settings.frameDuration
            ) % legFrames.length;

           /* Zampe leggermente più spesse: ogni segmento occupa due pixel in larghezza. */
            legFrames[frame].forEach(([x, y]) => {
                context.fillRect(
                    (x - 0.5) * pixelSize,
                    y * pixelSize,
                    pixelSize * 2,
                    pixelSize
                );
            });
        }

        context.restore();
    }

    /* Aggiorna il passo; al termine si ferma se non c'è attività. */
    function render(time) {
        animationId = null;
        context.clearRect(0, 0, width, height);

        const active =
            !reducedMotion.matches
            && time - lastActivity < settings.inactivityDelay;

        if (!walking && active) {
            beginStep(time);
        }

        let position = projectCell(column);

        if (walking) {
            const progress = Math.min(
                (time - stepStarted) / settings.stepDuration,
                1
            );

            const destination = projectCell(targetColumn);

            position = {
                x: position.x
                    + (destination.x - position.x) * progress,
                y: position.y,
                scale: position.scale
            };

            if (progress === 1) {
                column = targetColumn;
                walking = false;
                position = projectCell(column);

                if (active) {
                    beginStep(time);
                }
            }
        }

        drawCat(position, time);

        /* Quando è seduto, non continua a ridisegnare inutilmente. */
        if (walking || active) {
            requestDraw();
        }
    }

    function requestDraw() {
        if (animationId === null && !document.hidden) {
            animationId = requestAnimationFrame(render);
        }
    }

    /* L'interazione risveglia il gatto; la sola lettura lo lascia seduto. */
    function registerActivity() {
        if (reducedMotion.matches) return;

        lastActivity = performance.now();
        requestDraw();
    }

    ["pointermove", "pointerdown", "scroll", "keydown"].forEach(
        (eventName) => {
            window.addEventListener(eventName, registerActivity, {
                passive: true
            });
        }
    );

    /* Ferma subito il movimento se sono richieste animazioni ridotte. */
    reducedMotion.addEventListener("change", () => {
        walking = false;
        targetColumn = column;
        lastActivity = -Infinity;
        requestDraw();
    });

    /* Non anima una scheda che non è visibile. */
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            if (animationId !== null) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }

            walking = false;
            lastActivity = -Infinity;
        } else {
            requestDraw();
        }
    });

    /* Ricalcola la posizione anche quando cambia l'altezza della home. */
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(scene);
})();

/* =========================================================
   PROGETTI — SELEZIONE DELL'ANTEPRIMA
   ========================================================= */

const projectChoices = document.querySelectorAll(".project-choice");
const projectPreviews = document.querySelectorAll(".project-preview");

/* Il clic seleziona la riga e mostra la relativa anteprima. */
projectChoices.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedProject = button.dataset.project;

        projectChoices.forEach((choice) => {
            const selected = choice === button;

            choice.classList.toggle("is-selected", selected);
            choice.setAttribute("aria-pressed", String(selected));
        });

        projectPreviews.forEach((preview) => {
            preview.hidden = preview.dataset.preview !== selectedProject;
        });
    });
});

/* =========================================================
   SFONDO DELLE SCHERMATE INTERNE — CIRCUITI ARCADE
   ========================================================= */

(() => {
    // Percorsi verticali e diagonali ispirati al riferimento.
    const paths = [
        "M60 0 V110 L110 160 V310 L60 360 V520 L110 570 V800",
        "M180 0 V180 L130 230 V380 L180 430 V610 L230 660 V800",
        "M300 0 V90 L250 140 V260 L300 310 V480 L250 530 V690 L300 740 V800",
        "M420 0 V160 L470 210 V360 L420 410 V560 L470 610 V800",
        "M560 0 V100 L510 150 V300 L560 350 V520 L610 570 V720 L560 770 V800",
        "M700 0 V200 L650 250 V400 L700 450 V620 L650 670 V800",
        "M820 0 V80 L870 130 V280 L820 330 V490 L870 540 V690 L820 740 V800",
        "M960 0 V150 L910 200 V350 L960 400 V570 L1010 620 V800",
        "M1100 0 V100 L1050 150 V310 L1100 360 V510 L1050 560 V710 L1100 760 V800",
        "M1240 0 V180 L1290 230 V380 L1240 430 V600 L1290 650 V800",
        "M1380 0 V90 L1330 140 V290 L1380 340 V500 L1330 550 V700 L1380 750 V800"
    ];

    // Genera prima le linee di fondo, poi i segmenti luminosi.
    const drawPaths = (isLed) => paths.map((path, index) => {
        const color = index % 3 === 0
            ? "circuit-rose"
            : "circuit-lilac";

        const layer = isLed ? "page-circuit-led" : "";

        return `
            <path
                class="${color} ${layer}"
                pathLength="1000"
                d="${path}">
            </path>
        `;
    }).join("");

    // Applica il disegno soltanto alle tre schermate interne.
    document.querySelectorAll(
        ".projects-section, .about-section, .contact-section"
    ).forEach((section) => {
        section.insertAdjacentHTML("afterbegin", `
            <svg class="page-circuit"
                 viewBox="0 0 1440 800"
                 preserveAspectRatio="none"
                 aria-hidden="true"
                 focusable="false">

                <g class="page-circuit-base">
                    ${drawPaths(false)}
                </g>

                <g>
                    ${drawPaths(true)}
                </g>
            </svg>
        `);
    });
})();

/* =========================================================
   NAVIGAZIONE TRA HOME, PROGETTI E CHI SONO
   ========================================================= */

(() => {
    // Associa ogni collegamento alla relativa schermata.
    const screens = {
        "#home": document.querySelector("#home"),
        "#projects": document.querySelector("#projects"),
        "#about": document.querySelector("#about"),
        "#contact": document.querySelector("#contact")
    };

    const menu = document.querySelector(".navigation-menu");

    // Mostra soltanto la schermata richiesta.
    function updateScreen() {
        const destination = screens[window.location.hash]
            ? window.location.hash
            : "#home";

        // Chiude il menu prima di nascondere la Home che lo contiene.
        if (menu) menu.open = false;

        Object.entries(screens).forEach(([address, section]) => {
            section.hidden = address !== destination;
        });

        // Ogni schermata si apre dall'alto.
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }

    // Collega il logo e le voci delle schermate già disponibili.
    // Gestisce i collegamenti alle quattro schermate del sito.
    document.querySelectorAll(
        'a[href="#home"], a[href="#projects"], a[href="#about"], a[href="#contact"]'
    ).forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const destination = link.getAttribute("href");

            // Consente di usare Indietro e Avanti nel browser.
            if (window.location.hash !== destination) {
                window.history.pushState(null, "", destination);
            }

            updateScreen();
        });
    });

    // Gestisce la cronologia e i collegamenti diretti alle schermate.
    window.addEventListener("popstate", updateScreen);
    window.addEventListener("hashchange", updateScreen);

    updateScreen();
})();
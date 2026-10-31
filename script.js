const button = document.querySelector("button");
let clickCount = 0;

const statusText = document.querySelector("#status");
const gameScreen = document.querySelector("#game-screen");
const percentageText = document.querySelector("#percentage");

button.addEventListener("click", function() {
    playGlitchSound();
    gameScreen.classList.remove("shake");
    void gameScreen.offsetWidth;
    gameScreen.classList.add("shake");
    
    clickCount++;
    
    if (clickCount >= 3 && clickCount < 7) {
        button.style.position = "fixed";
        button.style.left = Math.random() * 60 + 20 + "%"
        button.style.top = Math.random() * 60 + 20 + "%"
        button.style.zIndex = "9999";
        button.textContent = "CATCH ME LOL";
    }
    
    if (clickCount >= 7) {
        document.querySelector("#surprise-screen").classList.remove("hidden");
        button.style.display = "none";
    }

    const errors = [
        "ERROR 404: BIRTHDAY PERSON TOO WEIRDO",
        "WARNING: BRAIN CELLS NOT FOUND",
        "FATAL ERROR: TOO MUCH SLAY",
        "SYSTEM CRASHED: GO TOUCH GRASS",
        "ERROR: COMMON SENSE NOT INSTALLED",
        "BIRTHDAY.EXE HAS STOPPED THINKING"
    ];

    const randomIndex = Math.floor(Math.random() * errors.length);

    statusText.textContent = errors[randomIndex];
    document.querySelector("#system-message").textContent =
        "SYSTEM STATUS: GETTING WORSE 💀";
    
});

const loadingBar = document.querySelector(".loading-bar");
const fixButton = document.querySelector(".fix-button-hidden");

let progress = 0;

const loadingInterval = setInterval(function() {
    if (progress < 99) {
        progress++;
        loadingBar.style.width = progress + "%";
        percentageText.textContent = progress + "%";
    } else {
        clearInterval(loadingInterval);

        statusText.textContent = "99% LOADED... WHY NOT 100%?!";
        percentageText.textContent = "99%";
        document.querySelector("#system-message").textContent =
            "ERROR: FINAL BRAIN CELL LOADING...";

        fixButton.classList.remove("fix-button-hidden");
        fixButton.classList.add("fix-button-visible");
    }
}, 40);

const continueButton = document.querySelector("#continue-button");
const emotionalScreen = document.querySelector("#emotional-screen");
const finalButton = document.querySelector("#final-button");
const finalMessage = document.querySelector("#final-message")

continueButton.addEventListener("click", function () {
    gameScreen.classList.add("emotional-mode");
    emotionalScreen.classList.remove("hidden");
    startEmotionalTyping();
    continueButton.style.display = "none";
});
finalButton.addEventListener("click", function() {
    finalMessage.classList.remove("hidden");
    finalButtonContainer.classList.add("hidden");

    const wishElements = finalMessage.querySelectorAll(
        "h2, p, #go-to-universe-button"
    );

    wishElements.forEach(function(element, index) {
        setTimeout(function() {
            element.classList.remove("hidden");
            element.classList.add("reveal");
        }, index * 1500);
    });
}); 

const goToUniverseButton = document.querySelector(
    "#go-to-universe-button"
);
const universeScreen = document.querySelector(
    "#universe-screen"
);
goToUniverseButton.addEventListener("click", function() {
    universeScreen.classList.remove("hidden");
    emotionalScreen.classList.add("hidden");
});

const lofiMusic = document.querySelector("#lofi-music");
const musicButton = document.querySelector("#music-button");

lofiMusic.volume = 0;

musicButton.addEventListener("click", function () {
    if (lofiMusic.paused) {
        lofiMusic.play();
        musicButton.textContent = "PAUSE LO-FI";
    } else {
        lofiMusic.pause();
        musicButton.textContent = "PLAY LO-FI";
    }
});
const enterUniverseButton = document.querySelector(
    "#enter-universe-button"
);

const messagePaperScreen = document.querySelector(
    "#message-paper-screen"
);

enterUniverseButton.addEventListener("click", function() {
    enterUniverseButton.classList.add("portal-activating");

    setTimeout(function() {
        universeScreen.classList.add("screen-fade-out");
    }, 600);

    setTimeout(function() {
        universeScreen.classList.add("hidden");
        universeScreen.classList.remove("screen-fade-out");
        enterUniverseButton.classList.remove("portal-activating");

        messagePaperScreen.classList.remove("hidden");
messagePaperScreen.classList.remove("letter-appearing");

/* Let the magical letter slowly materialize */
void messagePaperScreen.offsetWidth;
messagePaperScreen.classList.add("letter-appearing");

musicButton.classList.remove("hidden");

        setTimeout(function() {
            musicButton.classList.add("music-visible");
        }, 100);

        fadeInMusic();
    }, 1400);
});
    
    const letterElements = messagePaperScreen.querySelectorAll(
    ".message-paper > p, .message-paper > h2"
);

letterElements.forEach(function(element, index) {
    setTimeout(function() {
        element.classList.add("letter-visible");
    }, 1200 + index * 700);
});
    
const emotionalTexts = document.querySelectorAll(
    "#emotional-screen > p"
);

const finalButtonContainer = document.querySelector(
    "#final-button-container"
);

function typeParagraph(element, callback) {
    const message = element.textContent.trim();
    element.textContent = "";

    let letterIndex = 0;

    function typeNextLetter() {
        if (letterIndex < message.length) {
            element.textContent += message[letterIndex];
            letterIndex++;

            setTimeout(typeNextLetter, 45);
        } else if (callback) {
            callback();
        }
    }

    typeNextLetter();
}

function startEmotionalTyping(index = 0) {
    if (index < emotionalTexts.length) {
        const paragraph = emotionalTexts[index];
        
        paragraph.classList.add("typing")
        paragraph.style.opacity = "1";
        
        typeParagraph(paragraph, function() {
            paragraph.classList.remove("typing");
            paragraph.classList.add("typed");
            
            startEmotionalTyping(index + 1);
        });
    } else {
        finalButtonContainer.classList.remove("hidden");
    }
}
function fadeInMusic() {
    lofiMusic.volume = 0;

    lofiMusic.play().then(function() {
        musicButton.textContent = "PAUSE LO-FI";

        let volume = 0;

        const fadeInterval = setInterval(function() {
            volume += 0.02;

            if (volume >= 1) {
                volume = 1;
                clearInterval(fadeInterval);
            }

            lofiMusic.volume = volume;
        }, 100);
    }).catch(function() {
        musicButton.textContent = "PLAY LO-FI";
    });
}

const secretScreen = document.querySelector("#secret-screen");
const secretStarButton = document.querySelector("#secret-star-button");
const secretMessage = document.querySelector("#secret-message");
const secretHint = document.querySelector(".secret-hint");
const secretReturnButton = document.querySelector("#secret-return-button");
const backToUniverseButton = document.querySelector("#back-to-universe-button");

backToUniverseButton.addEventListener("click", function() {
    messagePaperScreen.classList.add("letter-fade-out");

    setTimeout(function() {
        messagePaperScreen.classList.add("hidden");
        messagePaperScreen.classList.remove("letter-fade-out");

        universeScreen.classList.add("hidden");
        secretScreen.classList.remove("hidden");
    }, 4500);
});

secretStarButton.addEventListener("click", function() {
    secretHint.classList.add("hidden");
    secretStarButton.classList.add("star-revealed");

    setTimeout(function() {
        secretStarButton.classList.add("hidden");
        secretMessage.classList.remove("hidden");
        secretMessage.classList.add("secret-revealed");

        setTimeout(function() {
            secretReturnButton.classList.remove("hidden");
        }, 1500);
    }, 900);
});

const endingScreen = document.querySelector("#ending-screen");
const restartUniverseButton = document.querySelector("#restart-universe-button");

secretReturnButton.addEventListener("click", function() {
    secretScreen.classList.add("secret-fade-out");

    setTimeout(function() {
        secretScreen.classList.add("hidden");
        secretScreen.classList.remove("secret-fade-out");

        endingScreen.classList.remove("hidden");
    }, 3000);
    const endingElements = endingScreen.querySelectorAll(
    ".ending-label, .ending-title, .ending-message, .ending-signature, #restart-universe-button"
);

endingElements.forEach(function(element, index) {
    setTimeout(function() {
        element.classList.add("ending-element-reveal");
    }, 800 + index * 1200);
});
});

restartUniverseButton.addEventListener("click", function() {
    endingScreen.classList.add("ending-fade-out");

    setTimeout(function() {
        endingScreen.classList.add("hidden");
        endingScreen.classList.remove("ending-fade-out");

        universeScreen.classList.remove("hidden");
    }, 2500);
});

function playGlitchSound() {
    const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    // SUPER LOUD CARTOON BOOM
    const master = ctx.createGain();
    master.gain.value = 0.8;
    master.connect(ctx.destination);

    // Deep impact
    const boom = ctx.createOscillator();
    const boomGain = ctx.createGain();

    boom.type = "sawtooth";
    boom.frequency.setValueAtTime(180, now);
    boom.frequency.exponentialRampToValueAtTime(28, now + 0.7);

    boomGain.gain.setValueAtTime(0.9, now);
    boomGain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

    boom.connect(boomGain);
    boomGain.connect(master);
    boom.start(now);
    boom.stop(now + 1.1);

    // Instant explosive burst
    const buffer = ctx.createBuffer(
        1,
        Math.floor(ctx.sampleRate * 0.7),
        ctx.sampleRate
    );

    const data = buffer.getChannelData(0);

    for (let i = 0; i < data.length; i++) {
        const fade = Math.pow(1 - i / data.length, 2);
        data[i] = (Math.random() * 2 - 1) * fade;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1800;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(1, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(master);

    noise.start(now);
    noise.stop(now + 0.7);

    // Dramatic rising-to-falling laser explosion
    const laser = ctx.createOscillator();
    const laserGain = ctx.createGain();

    laser.type = "square";
    laser.frequency.setValueAtTime(500, now);
    laser.frequency.exponentialRampToValueAtTime(90, now + 0.45);

    laserGain.gain.setValueAtTime(0.25, now);
    laserGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    laser.connect(laserGain);
    laserGain.connect(master);
    laser.start(now);
    laser.stop(now + 0.45);

    setTimeout(function() {
        ctx.close();
    }, 1500);
}
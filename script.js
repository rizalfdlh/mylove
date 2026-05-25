// =========================================
// STARS
// =========================================

const stars =
document.getElementById('stars');

for(let i = 0; i < 1200; i++){

    const star =
    document.createElement('div');

    star.classList.add('star');

    const size =
    Math.random() * 3;

    star.style.width =
    size + 'px';

    star.style.height =
    size + 'px';

    star.style.top =
    Math.random() * 100 + '%';

    star.style.left =
    Math.random() * 100 + '%';

    star.style.animationDuration =
    (Math.random() * 3 + 2) + 's';

    stars.appendChild(star);

}

// =========================================
// SPACE DUST
// =========================================

const dust =
document.getElementById('spaceDust');

for(let i = 0; i < 250; i++){

    const p =
    document.createElement('div');

    p.classList.add('dust');

    p.style.left =
    Math.random() * 100 + 'vw';

    p.style.top =
    Math.random() * 100 + 'vh';

    p.style.animationDuration =
    (Math.random() * 20 + 10) + 's';

    dust.appendChild(p);

}

// =========================================
// SHOOTING STARS
// =========================================

setInterval(()=>{

    const shooting =
    document.createElement('div');

    shooting.classList.add(
    'shooting-star'
    );

    shooting.style.top =
    Math.random() * 50 + '%';

    shooting.style.left =
    '-200px';

    document.body.appendChild(
    shooting
    );

    setTimeout(()=>{

        shooting.remove();

    },3000);

},1500);

// =========================================
// AUDIO FIX HOSTING
// =========================================

const music =
document.getElementById('music');

const musicBtn =
document.getElementById('musicBtn');

const tapToStart =
document.getElementById('tapToStart');

const startBtn =
document.getElementById('startBtn');

let isPlaying = false;

music.volume = 1;

// UPDATE BUTTON

function updateMusicButton(){

    if(isPlaying){

        musicBtn.innerHTML =
        '⏸ Pause';

        musicBtn.classList.add(
        'active'
        );

    }else{

        musicBtn.innerHTML =
        '▶ Play';

        musicBtn.classList.remove(
        'active'
        );

    }

}

// PLAY MUSIC

async function playMusic(){

    try{

        await music.play();

        isPlaying = true;

    }catch(err){

        console.log(
        'Music blocked'
        );

        isPlaying = false;

    }

    updateMusicButton();

}

// START WEBSITE

async function startGalaxy(){

    await playMusic();

    tapToStart.style.opacity =
    '0';

    setTimeout(()=>{

        tapToStart.style.display =
        'none';

    },500);

}

// ENTER BUTTON

startBtn.addEventListener(

'click',

startGalaxy

);

// MUSIC BUTTON

musicBtn.addEventListener(

'click',

async ()=>{

    if(isPlaying){

        music.pause();

        isPlaying = false;

    }else{

        await playMusic();

    }

    updateMusicButton();

});

// INIT BUTTON

updateMusicButton();

// =========================================
// FLOATING LOVE
// =========================================

setInterval(()=>{

    const love =
    document.createElement('div');

    love.innerHTML = '💖';

    love.classList.add(
    'floating-love'
    );

    love.style.left =
    Math.random() * 100 + 'vw';

    love.style.fontSize =
    (Math.random() * 20 + 15) + 'px';

    document.body.appendChild(
    love
    );

    setTimeout(()=>{

        love.remove();

    },8000);

},700);

// =========================================
// CLICK EFFECT
// =========================================

document.addEventListener(

'click',

(e)=>{

    const emojis =
    ['❤️','✨','💖','🌌','⭐','💕'];

    for(let i = 0; i < 20; i++){

        const particle =
        document.createElement('div');

        particle.classList.add(
        'particle'
        );

        particle.innerHTML =
        emojis[
        Math.floor(
        Math.random() *
        emojis.length
        )
        ];

        particle.style.left =
        e.clientX + 'px';

        particle.style.top =
        e.clientY + 'px';

        particle.style.fontSize =
        (Math.random() * 20 + 15) + 'px';

        particle.style.setProperty(
        '--x',
        (Math.random()-0.5)*300+'px'
        );

        particle.style.setProperty(
        '--y',
        (Math.random()-0.5)*300+'px'
        );

        document.body.appendChild(
        particle
        );

        setTimeout(()=>{

            particle.remove();

        },1500);

    }

});

// =========================================
// PARALLAX
// =========================================

document.addEventListener(

'mousemove',

(e)=>{

    if(window.innerWidth <= 768){

        return;

    }

    const solar =
    document.querySelector(
    '.solar-system'
    );

    const x =
    (window.innerWidth / 2 - e.pageX) / 50;

    const y =
    (window.innerHeight / 2 - e.pageY) / 50;

    solar.style.transform =

    `translate(${x}px, ${y}px)`;

});
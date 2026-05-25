<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
        content="
        width=device-width,
        initial-scale=1.0,
        maximum-scale=1.0,
        user-scalable=no">

    <title>
        Galaxy Love
    </title>

    <link
        rel="stylesheet"
        href="style.css">

</head>

<body>

    <!-- TAP TO START -->

    <div
        id="tapToStart"
        class="tap-to-start">

        <div class="tap-box">

            <h2>
                Welcome [Nama Pasangan Kamu]
            </h2>

            <p>

                Tap button below
                to enter our galaxy 🌌

            </p>

            <button id="startBtn">

                Enter Galaxy

            </button>

        </div>

    </div>

    <!-- GALAXY -->

    <div class="galaxy"></div>

    <!-- STARS -->

    <div id="stars"></div>

    <!-- SPACE DUST -->

    <div id="spaceDust"></div>

    <!-- TITLE -->

    <div class="title">

        <h1>

            To My Love

            <span class="heart">
                ❤️
            </span>

        </h1>

        <p>

            I Love You 3000 🌌

        </p>

    </div>

    <!-- SOLAR SYSTEM -->

    <div class="solar-system">

        <?php

        $images = glob(
            "img/*.{jpg,jpeg,png,webp}",
            GLOB_BRACE
        );

        ?>

        <!-- MAIN SATURN -->

        <?php if (count($images) > 0): ?>

            <div class="saturn">

                <img
                    src="<?= $images[0] ?>"
                    alt="love">

                <div class="ring"></div>

            </div>

        <?php endif; ?>

        <!-- PLANETS -->

        <?php foreach ($images as $index => $img):

            if ($index == 0) continue;

        ?>

            <div class="orbit orbit<?= $index ?>">

                <div class="planet">

                    <img
                        src="<?= $img ?>"
                        alt="love">

                </div>

            </div>

        <?php endforeach; ?>

    </div>

    <!-- MUSIC PLAYER -->

    <div class="music-player">

        <img
            src="img/assets/logo.png"
            alt="music">

        <div class="music-info">

            <h3>

                I Love You 3000

            </h3>

            <p>

                [Nama Pasangan Kamu]

            </p>

        </div>

        <button
            id="musicBtn"
            class="music-btn">

            ▶ Play

        </button>

    </div>

    <!-- LOVE CARD -->

    <div class="love-card">

        <h2>

            ✨ Our Galaxy Love ✨

        </h2>

        <p>

            Even among billions
            of stars,
            I will always orbit
            around you ❤️

        </p>

    </div>

    <!-- AUDIO -->

    <audio
        id="music"
        loop
        playsinline>

        <source
            src="music/iloveu3000.mp3"
            type="audio/mpeg">

    </audio>

    <script src="script.js"></script>

</body>

</html>
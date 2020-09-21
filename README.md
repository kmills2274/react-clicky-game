# react-clicky-game

World Cities Travel Game (react-clicky-game) is a memory game made with React.

**Game Play:**

*The game starts when the page loads. The initial score is set to 0.

*The app renders images to the screen.

*Every time an image is clicked, the images will shuffle in a random order.

*The app keeps track of the player's score. The player's score increases when they click on an image for the first time. The player's score will reset to 0 if they click the same image more than once before clicking on all of the images once.

*The player's score is then reset to '0' and the game will restart.


**app folder structure:**

\/ react-clicky-game

├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── Components
    │   ├── Cards
    │   │       ├── Images
    │   │       ├── Cards.css
    │   │       ├── Cards.js 
    │   │       ├── CardsDisplay.css
    │   │       └── CardsDisplay.js
    │   ├── Container
    │   │       ├── Container.css
    │   │       └── Container.js
    │   ├── Footer
    │   │       ├── Footer.css
    │   │       └── Footer.js
    │   ├── Instructions
    │   │       ├── Instructions.css
    │   │       └── Insructions.js
    │   └── Nav
    │   │       ├── Nav.css
    │   │       └── Nav.js
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    ├── setupTests.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── yarn.lock
    └── README.md

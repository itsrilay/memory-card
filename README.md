<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[![LinkedIn][linkedin-shield]][linkedin-url]
[![project_license][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/itsrilay/pokememory">
    <img src="src/assets/icon.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">PokeMemory</h3>

  <p align="center">
    A memory card game using Pokémon. The goal is to click every card displayed on the screen only once to win. Challenge yourself with 3 difficulty settings and try to succeed!
    <br />
    <br />
    <a href="https://memory-card-d7p.pages.dev/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-overview">Project Overview</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- PROJECT OVERVIEW -->

## Project Overview

![Game Screen Shot][game-screenshot]

**PokeMemory** is a fun and interactive memory card game where you match Pokémon cards without clicking the same card twice. The twist? After every click, the cards reshuffle, adding a unique challenge as you try to remember which Pokémon you’ve already seen. It’s the perfect game for testing your memory, reflexes, and Pokémon knowledge!

**Key Features:**

- **Difficulty Levels**: Play in **Easy**, **Medium**, or **Hard** mode with varying numbers of cards.

- **Pokémon Cards**: Every round is fueled by Pokémon data fetched randomly from PokéAPI, so each session offers a fresh experience with different Pokémon to memorize.

- **Dynamic Gameplay**: The cards reshuffle after each click, making the game progressively harder as you go.

Whether you're a Pokémon fan or just looking for a fun memory challenge, PokeMemory is sure to keep you entertained as you strive to complete each round without making a mistake.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- ![JavaScript][Javascript]
- ![CSS][CSS]
- ![HTML][HTML]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you're ready for the installation process.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/itsrilay/pokememory
   ```
2. **Navigate to the local repository folder**
   ```sh
   cd pokememory
   ```
3. **Install NPM packages**
   ```sh
   npm install
   ```
4. **(Optional) Change Git remote URL**  
   If you're planning to make changes to the project but don't want to accidentally push to the original repository.

   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

5. **Start the app**  
   To start the app, run:

   ```sh
   npm run dev
   ```

6. **Visit**  
   Open a browser and visit http://localhost:5173.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

![Product Screen Shot][product-screenshot]

This is the menu where you select the desired difficulty for the game, which changes the number of cards:

- **Easy** - 6 cards;
- **Medium** - 10 cards;
- **Hard** - 15 cards;

**How to Play:**

- Click Play to start the game.

- Your goal is to click each Pokémon card only once. After each click, the cards will reshuffle, making it harder to remember which cards you've already clicked.

- If you manage to click all the cards without repeating any, you win the game!

Good luck, and challenge yourself with all three difficulty levels!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

This project is distributed under the MIT License - see [LICENSE][license-url] for more details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ruis2003
[license-shield]: https://img.shields.io/github/license/itsrilay/pokememory.svg?style=for-the-badge
[license-url]: https://github.com/itsrilay/pokememory/blob/master/LICENSE
[game-screenshot]: src/assets/game.png
[product-screenshot]: src/assets/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Javascript]: https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[CSS]: https://img.shields.io/badge/CSS-%23264DE4?style=for-the-badge&logo=css&logoColor=white
[HTML]: https://img.shields.io/badge/HTML-%23E44D26?style=for-the-badge&logo=html5&logoColor=white

import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-7", "Unity Dialogue System", "img/projects/unity-dialogue-system/preview.png", `
        <div class="paragraph">
            While making a new project, I needed to use a robust and flexible dialogue system. I first decided to use YarnSpinner, but there were some things, that were not
            included in the base project and other things I wanted to have control of. So I made a dialogue system based on the graph view. It is much better than my animation
            view graph and it is very easy to expand this, add new nodes and etc.
        </div>
        <div class="paragraph center">
            <a href="https://github.com/liftygd/unity-dialogue-graph" target="_blank"><img src="img/projects/git-logo.png" alt="Git badge" /></a>
        </div>
    
        <div class="paragraph">
            Main features :
            <ul>
            <li>Custom editor graph.</li>
            <li>Can be used in any Unity project, does not require any third-party asset or system.</li>
            <li>Very easy to change nodes or add new ones.</li>
            <li>It is able to handle localization.</li>
            <li>Speech bubbles and multiple characters support.</li>
            <li>Dialogue data taken from JSON files.</li>
            </ul>
        </div>
    
        <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/unity-dialogue-system/scr-1.png" alt="UI Screenshot" />
        <img class="pc-screenshot" src="img/projects/unity-dialogue-system/scr-2.png" alt="UI Screenshot" />
        <img class="pc-screenshot" src="img/projects/unity-dialogue-system/scr-3.png" alt="UI Screenshot" />
        <img class="pc-screenshot" src="img/projects/unity-dialogue-system/scr-4.png" alt="UI Screenshot" />
        </div>
        `, "#151411", false, true),

        
    new ProjectData("project-5", "Unity UI Animation Tool", "img/projects/ui-animation-tool/preview.png", `
    <div class="paragraph">
        I needed to use DOTween to animate my ui, but it was really inconvenient. So I made an animation graph system where you can configure animations with types, order, timings and etc.
    </div>
    <div class="paragraph center">
        <a href="https://github.com/liftygd/custom-ui-animation-tools" target="_blank"><img src="img/projects/git-logo.png" alt="Git badge" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Custom editor graph.</li>
        <li>Can be used in any Unity project, although requires DOTween.</li>
        <li>Pretty easy to change or add new animation types.</li>
        </ul>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/ui-animation-tool/scr-1.png" alt="UI Screenshot" />
    <img class="pc-screenshot" src="img/projects/ui-animation-tool/scr-2.png" alt="UI Screenshot" />
    </div>
    `, "#151411"),

    new ProjectData("project-6", "Game Of Bones", "img/projects/game-of-bones/preview.png", `
    <div class="paragraph">
        A small game I decided to make after finishing Sky Settlers. Took about a part-time week to finish.
    </div>
    <div class="paragraph center">
        <a href="https://liftyforever.itch.io/game-of-bones" target="_blank"><img src="img/projects/itch-logo.png" alt="Itch Io badge" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Turn-based combat.</li>
        <li>AI opponent.</li>
        <li>A small dialogue system.</li>
        </ul>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/game-of-bones/scr-1.png" alt="Game Of Bones Screenshot" />
    <img class="pc-screenshot" src="img/projects/game-of-bones/scr-2.png" alt="Game Of Bones Screenshot" />
    <img class="pc-screenshot" src="img/projects/game-of-bones/scr-3.png" alt="Game Of Bones Screenshot" />
    <img class="pc-screenshot" src="img/projects/game-of-bones/scr-4.png" alt="Game Of Bones Screenshot" />
    </div>
    `, "#403828"),    

    new ProjectData("project-1", "Sky Settlers", "img/projects/sky-settlers/sky-settlers-preview.gif", 
    `
    <div class="paragraph">
     <strong>Sky Settlers</strong> is a city building card game in which you build on islands in the sky and encounter different events, disasters and much more. Use different cards, complete quests and unlock new cards as you progress.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/bdhS1eo-_o8" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://store.steampowered.com/app/2494870/Sky_Settlers/" target="_blank"><img src="img/projects/steam-logo.png" alt="Steam badge" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Card game mechanics</li>
        <li>Made a UI Animation Graph for Unity to make the menu and other ui animations. 
            <br> The animations themselves are handled by DOTween and the graph is used to make different type of animations with timings, order and other features.</li>
        <li>Infinite progression</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/sky-settlers/scr-1.png" alt="Sky Settlers Screenshot" />
        <img class="pc-screenshot" src="img/projects/sky-settlers/scr-2.png" alt="Sky Settlers Screenshot" />
        <img class="pc-screenshot" src="img/projects/sky-settlers/scr-3.png" alt="Sky Settlers Screenshot" />
        <img class="pc-screenshot" src="img/projects/sky-settlers/scr-4.png" alt="Sky Settlers Screenshot" />
    </div>
    `, "#5c7687", true, true),

    new ProjectData("project-3", "FPS Roguelike Demo", "img/projects/hunting-season-demo/preview-gif.gif", `
        <div class="paragraph">
            <strong>Hunting Season</strong> is a fast-paced rogue-lite FPS. This game is a combination of first person arena shooters and rogue-likes with items, synergies and many more.
        </div>
        <div class="paragraph center">
            <a href="https://liftyforever.itch.io/hunting-season-demo" target="_blank"><img src="img/projects/itch-logo.png" alt="Itch Io badge" /></a>
        </div>
    
        <div class="paragraph">
            Main features :
            <ul>
            <li>Dungeon generation.</li>
            <li>Roguelike passive item system. They can infinitely stack and synergise with other items.</li>
            <li>FPS Enemy AI.</li>
            </ul>
        </div>
    
        <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/hunting-season-demo/scr-1.gif" alt="Hunting Season Screenshot" />
        <img class="pc-screenshot" src="img/projects/hunting-season-demo/scr-2.gif" alt="Hunting Season Screenshot" />
        </div>
        `, "#563738"),

    new ProjectData("project-2", "Riddles & Sieges", "img/projects/riddles-and-sieges/preview-gif.gif", `
    <div class="paragraph">
        <strong>Riddles & Sieges</strong> is a medieval puzzle game where you have to use different weapons to solve riddles.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dNxH3IDYvT8" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://store.steampowered.com/app/2349950/Riddles_And_Sieges/" target="_blank"><img src="img/projects/steam-logo.png" alt="Steam badge" /></a>
        <a href="https://liftyforever.itch.io/riddles-sieges" target="_blank"><img src="img/projects/itch-logo.png" alt="Itch Io badge" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Had to design a lot of puzzles, which I hadn't done at this scale before.</li>
        <li>Level editor and Steam workshop implementation.</li>
        <li>Steam achievements and cloud saving.</li>
        <li>First Steam release.</li>
        </ul>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/riddles-and-sieges/scr-1.png" alt="Riddles And Sieges Screenshot" />
    <img class="pc-screenshot" src="img/projects/riddles-and-sieges/scr-2.png" alt="Riddles And Sieges Screenshot" />
    <img class="pc-screenshot" src="img/projects/riddles-and-sieges/scr-3.png" alt="Riddles And Sieges Screenshot" />
    <img class="pc-screenshot" src="img/projects/riddles-and-sieges/scr-4.png" alt="Riddles And Sieges Screenshot" />
    </div>
    `, "#9b9585", true, true),

    new ProjectData("project-4", "Dino Escape - Freelance Order", "img/projects/dino-escape/preview.png", `
    <div class="paragraph">
        <strong>Dino Escape</strong> is a project I did as a freelance order. The project was developed in a span of 2-3 weeks.
    </div>
    <div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=com.TacoStudios.DinosaurEscape" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Working with a client.</li>
        <li>Ads integration.</li>
        <li>In-game shop.</li>
        </ul>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/dino-escape/scr-1.png" alt="Dino Escape Screenshot" />
    <img class="pc-screenshot" src="img/projects/dino-escape/scr-2.png" alt="Dino Escape Screenshot" />
    </div>
    `, "#47531c", true),
];
import {
    @Vigilant,
    @TextProperty,
    @ColorProperty,
    @ButtonProperty,
    @SwitchProperty,
    @SelectorProperty,
    Color 
} from 'Vigilance'

@Vigilant("BetterBestiary", "BetterBestiary", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General",
            "Private Island",
            "Hub",
            "Farming Islands",
            "Park",
            "Mining Islands",
            "Spider's Den",
            "End",
            "Crimson Isle",
            "Fishing",
            "Dungeons",
            "Misc"
        ]
        return categories.indexOf(a.name) - categories.indexOf(b.name)
    }
})

class Settings {
    constructor() {
        this.initialize(this)
        this.setCategoryDescription("General", "Author Lakia")
    }

    // General
    @ButtonProperty({
        name: "Discord Server",
        description: "Join if you want to report a bug or want to make a suggestion",
        category: "General",
        subcategory: "General",
        placeholder: "Join"
    })
    MyDiscord() {
        java.awt.Desktop.getDesktop().browse(new java.net.URI(""))
    }
    //Hitbox Master Toggle
    @SwitchProperty({
        name: "Hitbox Master Toggle",
        description: "Master toggle for all hitboxes",
        category: "General",
        subcategory: "Hitboxes"
    })
    hitboxMasterToggle = false;

// Misc
    // Mobs
    @SwitchProperty({
        name: "Headless Horsemen Alerts",
        description: "Alerts you when the headless horsemen spawns",
        category: "Misc",
        subcategory: "Alerts"
    })
    headlessHorsemenAlerts = false;
    // Drop Tracker
    @SwitchProperty({
        name: "Drop Tracker",
        description: "Displays a GUI that tracks rare drops",
        category: "Misc",
        subcategory: "Misc"
    })
    dropTrackerGUI = false;


//Hub
    //Alerts
    //Zombie Villager Alerts    
    @SwitchProperty({
        name: "Zombie Villager Alerts",
        description: "Alerts you when the zombie villager spawns",
        category: "Hub",
        subcategory: "Alerts"
    })
    zombieVillagerAlerts = false;
    //Hitboxes
    // Graveyard Zombie Hitboxes
    @SwitchProperty({
        name: "Graveyard Zombie Hitbox",
        description: "Draws a box around the graveyard zombie",
        category: "Hub",
        subcategory: "Hitboxes"
    })
    graveyardZombieHitboxes = false;
    // Zombie Villager Hitboxes
    @SwitchProperty({
        name: "Zombie Villager Hitbox",
        description: "Draw a box around the zombie villager",
        category: "Hub",
        subcategory: "Hitboxes"
    })
    zombieVillagerHitboxes = false;
    // Crypt Ghoul Hitboxes
    @SwitchProperty({
        name: "Crypt Ghoul Hitbox",
        description: "Draws a box around the crypt ghoul",
        category: "Hub",
        subcategory: "Hitboxes"
    })
    cryptGhoulHitboxes = false;
    // Golden Ghoul Hitboxes
    @SwitchProperty({
        name: "Golden Ghoul Hitbox",
        description: "Draws a box around the golden ghoul",
        category: "Hub",
        subcategory: "Hitboxes"
    })
    goldenGhoulHitboxes = false;
    // Old Wolf Hitboxes
    @SwitchProperty({
        name: "Old Wolf Hitbox",
        description: "Draws a box around the old wolf",
        category: "Hub",
        subcategory: "Hitboxes"
    })
    oldWolfHitboxes = false;

// Farming Islands
    //Hitboxes
    // Sheep
    @SwitchProperty({
        name: "Sheep Hitbox",
        description: "Draws a box around the sheep",
        category: "Farming Islands",
        subcategory: "Hitboxes"
    })
    sheepHitboxes = false;
    // Rabbit
    @SwitchProperty({
        name: "Rabbit Hitbox",
        description: "Draws a box around the rabbit",
        category: "Farming Islands",
        subcategory: "Hitboxes"
    })
    rabbitHitboxes = false;
    // Chicken
    @SwitchProperty({
        name: "Chicken Hitbox",
        description: "Draws a box around the chicken",
        category: "Farming Islands",
        subcategory: "Hitboxes"
    })
    chickenHitboxes = false;
    // Cow
    @SwitchProperty({
        name: "Cow Hitbox",
        description: "Draws a box around the cow",
        category: "Farming Islands",
        subcategory: "Hitboxes"
    })
    cowHitboxes = false;
    // Pig
    @SwitchProperty({
        name: "Pig Hitbox",
        description: "Draws a box around the pig",
        category: "Farming Islands",
        subcategory: "Hitboxes"
    })
    pigHitboxes = false;
    // Mushroom Cow
    @SwitchProperty({
        name: "Mushroom Cow Hitbox",
        description: "Draws a box around the mushroom cow",
        category: "Farming Islands",
        subcategory: "Hitboxes"
    })
    mushroomCowHitboxes = false;

// Dwarven Mines
    //Alerts
    // Powder Ghast Alert
    @SwitchProperty({
        name: "Powder Ghast Alerts",
        description: "Alerts you when the powder ghast spawns",
        category: "Mining Islands",
        subcategory: "Dwarven Mines"
    })
    powderGhastAlerts = false;
    // Golden Goblin Alert
    @SwitchProperty({
        name: "Golden Goblin Alerts",
        description: "Alerts you when the golden goblin spawns",
        category: "Mining Islands",
        subcategory: "Dwarven Mines"
    })
    goldenGoblinAlerts = false;

    //Hitboxes
    // Powder Ghast Hitbox
    @SwitchProperty({
        name: "Powder Ghast Hitbox",
        description: "Draws a box around the powder ghast",
        category: "Mining Islands",
        subcategory: "Dwarven Mines"
    })
    powderGhastHitboxes = false;
    // Golden Goblin Hitbox
    @SwitchProperty({
        name: "Golden Goblin Hitbox",
        description: "Draws a box around the golden goblin",
        category: "Mining Islands",
        subcategory: "Dwarven Mines"
    })
    goldenGoblinHitboxes = false;
    // Diamond Goblin Hitbox
    @SwitchProperty({
        name: "Diamond Goblin Hitbox",
        description: "Draws a box around the diamond goblin",
        category: "Mining Islands",
        subcategory: "Dwarven Mines"
    })
    diamondGoblinHitboxes = false;
    // Ice Walker Hitbox
    @SwitchProperty({
        name: "Ice Walker Hitbox",
        description: "Draws a box around the ice walker",
        category: "Mining Islands",
        subcategory: "Dwarven Mines"
    })
    iceWalkerHitboxes = false;
    // Goblin Hitbox
    @SwitchProperty({
        name: "Goblin Hitbox",
        description: "Draws a box around the goblin",
        category: "Mining Islands",
        subcategory: "Dwarven Mines"
    })
    goblinHitboxes = false;
    // Star Sentry Hitbox
    @SwitchProperty({
        name: "Star Sentry Hitbox",
        description: "Draws a box around the star sentry",
        category: "Mining Islands",
        subcategory: "Dwarven Mines"
    })
    starSentryHitboxes = false;

// Deep Caverns
    //Hitboxes
    // Lapis Zombie Hitbox
    @SwitchProperty({
        name: "Lapis Zombie Hitbox",
        description: "Draws a box around the lapis zombie",
        category: "Mining Islands",
        subcategory: "Deep Caverns"
    })
    lapisZombieHitbox = false;
    // Redstone Pigman Hitbox
    @SwitchProperty({
        name: "Redstone Pigman Hitbox",
        description: "Draws a box around the redstone pigman",
        category: "Mining Islands",
        subcategory: "Deep Caverns"
    })
    redstonePigmanHitbox = false;
    // Emerald Slime Hitbox
    @SwitchProperty({
        name: "Emerald Slime Hitbox",
        description: "Draws a box around the emerald slime",
        category: "Mining Islands",
        subcategory: "Deep Caverns"
    })
    emeraldSlimeHitbox = false;
    // Miner Zombie Hitbox
    @SwitchProperty({
        name: "Miner Zombie Hitbox",
        description: "Draws a box around the miner zombie",
        category: "Mining Islands",
        subcategory: "Deep Caverns"
    })
    minerZombieHitbox = false;
    // Miner Skeleton Hitbox
    @SwitchProperty({
        name: "Miner Skeleton Hitbox",
        description: "Draws a box around the miner skeleton",
        category: "Mining Islands",
        subcategory: "Deep Caverns"
    })
    minerSkeletonHitbox = false;

// Spider's Den
    //Alerts
    @SwitchProperty({
        name: "Arachne Alerts",
        description: "Alerts you when Arachne spawns",
        category: "Spider's Den",
        subcategory: "Alerts"
    })
    arachneAlerts = false;

    //Broodmother Alerts

    //Rain Slime Alerts

    //Toxic Slime Alerts
    //Hitboxes
    // Broodmother Hitbox
    @SwitchProperty({
        name: "Broodmother Hitbox",
        description: "Draws a box around the broodmother",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    broodmotherHitbox = false;
    // Gravel Skeleton Hitbox
    @SwitchProperty({
        name: "Gravel Skeleton Hitbox",
        description: "Draws a box around the gravel skeleton",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    gravelSkeletonHitbox = false;
    //Arachne Hitbox
    @SwitchProperty({
        name: "Arachne Hitbox",
        description: "Draws a box around Arachne",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    arachneHitbox = false;
    //Arachne Keeper Hitbox
    @SwitchProperty({
        name: "Arachne Keeper Hitbox",
        description: "Draws a box around Arachne Keeper",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    arachneKeeperHitbox = false;
    //Arachne Mini Hitbox
    @SwitchProperty({
        name: "Arachne Mini Hitbox",
        description: "Draws a box around Arachne Mini",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    arachneMiniHitbox = false;
    //Silverfish Hitbox
    @SwitchProperty({
        name: "Silverfish Hitbox",
        description: "Draws a box around Silverfish",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    silverfishHitbox = false;
    //Slime Hitbox
    @SwitchProperty({
        name: "Slime Hitbox",
        description: "Draws a box around Slime",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    slimeHitbox = false;
    //Splitter Hitbox
    @SwitchProperty({
        name: "Splitter Hitbox",
        description: "Draws a box around Splitter",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    splitterHitbox = false;
    //Dasher Hitbox
    @SwitchProperty({
        name: "Dasher Hitbox",
        description: "Draws a box around Dasher",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    dasherHitbox = false;
    //Voracious Hitbox
    @SwitchProperty({
        name: "Voracious Hitbox",
        description: "Draws a box around Voracious",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    voraciousHitbox = false;
    //Jockey Hitbox
    @SwitchProperty({
        name: "Jockey Hitbox",
        description: "Draws a box around Jockey",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    jockeyHitbox = false;


//Park

//End

//Crimson Isle
    //Alerts
    @SwitchProperty({
        name: "Vanquisher Alerts",
        description: "Alerts you when the vanquisher spawns",
        category: "Crimson Isle",
        subcategory: "Alerts"
    })
    vanquisherAlerts = false;

    //Dungeons

    // @SwitchProperty({
    //     name: "Show Secrets Clicked",
    //     description: "Draws a box in the clicked chest/wither essence/redstone skull",
    //     category: "Dungeons",
    //     subcategory: "Dungeons"
    // })
    // showSecretsClicked = false;

    // @ColorProperty({
    //     name: "Secrets Click Color",
    //     description: "Changes the highlight color of the secret when you click it",
    //     category: "Dungeons",
    //     subcategory: "Dungeons"
    // })
    // showSecretsClickedColor = Color.GREEN;

    // @ButtonProperty({
    //     name: "Run Splits Location",
    //     description: "Changes The Display Location",
    //     category: "Dungeons",
    //     subcategory: "Dungeons",
    //     placeholder: "Change"
    // })
    // changeRunSplitsDisplay() {
    //     ChatLib.command("runSplitsDisplay", true);
    // }

}

export default new Settings()
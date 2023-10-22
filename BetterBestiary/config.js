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
        // main feature to the right and hidden feature to the left
        //this.addDependency("Move Timer", "Ragnarok Axe Cooldown Timer")
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

    //Nick Hider Toggle
    @SwitchProperty({
        name: "Nick Hider Toggle",
        description: "Hides your name in chat",
        category: "Misc",
        subcategory: "Nick Hider"
    })
    nickHiderToggle = false;
    //Nick Hider
    @TextProperty({
        name: "Nick Hider",
        description: "Changes your name to a random name",
        category: "Misc",
        subcategory: "Nick Hider"
    })
    nickHider = "";
    
    // Mobs
    @SwitchProperty({
        name: "Headless Horsemen Alerts",
        description: "Alerts you when the headless horsemen spawns",
        category: "Hub",
        subcategory: "Alerts"
    })
    headlessHorsemenAlerts = false;

    //Hitbox Master Toggle
    @SwitchProperty({
        name: "Hitbox Master Toggle",
        description: "Master toggle for all hitboxes",
        category: "General",
        subcategory: "Hitboxes"
    })
    hitboxMasterToggle = false;

    @SwitchProperty({
        name: "Vanquisher Alerts",
        description: "Alerts you when the vanquisher spawns",
        category: "Crimson Isle",
        subcategory: "Alerts"
    })
    vanquisherAlerts = false;

    @SwitchProperty({
        name: "Zombie Villager Alerts",
        description: "Alerts you when the zombie villager spawns",
        category: "Hub",
        subcategory: "Alerts"
    })
    zombieVillagerAlerts = false;

    @SwitchProperty({
        name: "Arachne Alerts",
        description: "Alerts you when Arachne spawns",
        category: "Spider's Den",
        subcategory: "Alerts"
    })
    arachneAlerts = false;

    // Dwarven Mines
    // Powder Ghast Alert
    @SwitchProperty({
        name: "Powder Ghast Alerts",
        description: "Alerts you when the powder ghast spawns",
        category: "Mining Islands",
        subcategory: "Dwarven Mines"
    })
    powderGhastAlerts = false;

    // Powder Ghast Hitbox
    @SwitchProperty({
        name: "Powder Ghast Hitbox",
        description: "Draws a box around the powder ghast",
        category: "Mining Islands",
        subcategory: "Dwarven Mines"
    })
    powderGhastHitbox = false;
    // Golden Goblin Alert
    @SwitchProperty({
        name: "Golden Goblin Alerts",
        description: "Alerts you when the golden goblin spawns",
        category: "Mining Islands",
        subcategory: "Dwarven Mines"
    })
    goldenGoblinAlerts = false;
    // Golden Goblin Hitbox
    @SwitchProperty({
        name: "Golden Goblin Hitbox",
        description: "Draws a box around the golden goblin",
        category: "Mining Islands",
        subcategory: "Dwarven Mines"
    })
    goldenGoblinHitbox = false;


    // Deep Caverns
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

    // @SwitchProperty({
    //     name: "Run Splits",
    //     description: "Displays your current dungeon run's splits",
    //     category: "Dungeons",
    //     subcategory: "Dungeons"
    // })
    // dungeonRunSplits = false;

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
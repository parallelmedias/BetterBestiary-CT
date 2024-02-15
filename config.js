import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SelectorProperty } from 'Vigilance'

@Vigilant("BetterBestiary", "BetterBestiary", {
    getCategoryComparator: () => (a, b) => {
        const categories = [
            "General",
            "Hub",
            "Farming Islands",
            "Park",
            "Deep Cavern",
            "Dwarven Mines",
            "Crystal Hollows",
            "Spider's Den",
            "The End",
            "Crimson Isle",
            "Fishing",
            "Dungeons",
            "Misc"
        ]
        return categories.indexOf(a.name) - categories.indexOf(b.name) //q: what does this do? a: it sorts the categories in the order of the array What if I want to have them ordered in a specific way? A: then you can change the order of the array
    }
})

class Settings {
    constructor() {
        this.initialize(this)
        this.setCategoryDescription("General", `&aBetter Bestiary &bv${JSON.parse(FileLib.read("BetterBestiary", "metadata.json")).version}` + 
        `\n&aBy &bLakia`)
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
    // Drop Tracker
    @SwitchProperty({
        name: "Drop Tracker",
        description: "Tracks drops from mobs",
        category: "Misc",
        subcategory: "Misc"
    })
    dropTrackerGUI = false;

    /// Bridge Bot
    @TextProperty({
        name: "Guild Bot Name",
        description: "Enter the IGN of your guild bridge bot",
        category: "Misc",
        subcategory: "Formatting"
    })
    botName = ""

    @TextProperty({
        name: "Format for names",
        description: "Input minecraft formatting code for names",
        category: "Misc",
        subcategory: "Formatting"
    })
    bridgeNameFormat = "&9[Discord]&r"

    @SwitchProperty({
        name: "Bridge Bot Formatting",
        description: "Enable bridge bot formatting",
        category: "Misc",
        subcategory: "Formatting"
    })
    bridgeBotFormatting = false;

    @SwitchProperty({
        name: "Skyblock Level Notifications",
        description: "Sends a message in chat when you level up in Skyblock",
        category: "Misc"
    })
    levelAlerts = false;


    // Private Island

    // Spooky Mobs
    // Alerts
    @SwitchProperty({
        name: "Headless Horsemen Party Alerts",
        description: "Alerts you when it's 6:00pm and 5:00am to ready your party for warping to the Headless Horsemen",
        category: "Hub",
        subcategory: "Spooky Mobs"
    })
    headlessHorsemenPartyAlerts = false;

    // Hub
    // Zombie Villager Alert
    @SwitchProperty({
        name: "Zombie Villager Alert",
        description: "Alerts you when it's 8:00pm in the Hub",
        category: "Hub",
        subcategory: "Alerts"
    })
    zombieVillagerAlert = false;

    // Hitboxes
    // Graveyard Zombie
    @SwitchProperty({
        name: "Graveyard Zombie Hitboxes",
        category: "Hub",
        subcategory: "Hitboxes"
    })
    graveyardZombieHitboxes = false;

    // Zombie Villager
    @SwitchProperty({
        name: "Zombie Villager Hitboxes",
        category: "Hub",
        subcategory: "Hitboxes"
    })
    zombieVillagerHitboxes = false;

    // Crypt Ghoul
    @SwitchProperty({
        name: "Crypt Ghoul Hitboxes",
        category: "Hub",
        subcategory: "Hitboxes"
    })
    cryptGhoulHitboxes = false;

    // Golden Ghoul
    @SwitchProperty({
        name: "Golden Ghoul Hitboxes",
        category: "Hub",
        subcategory: "Hitboxes"
    })
    goldenGhoulHitboxes = false;

    // Old Wolf
    @SwitchProperty({
        name: "Old Wolf Hitboxes",
        category: "Hub",
        subcategory: "Hitboxes"
    })
    oldWolfHitboxes = false;

    // Farming Islands
    // Hitboxes
    // Cow
    @SwitchProperty({
        name: "Cow Hitboxes",
        category: "Farming Islands",
        subcategory: "Hitboxes"
    })
    cowHitboxes = false;

    // Chicken
    @SwitchProperty({
        name: "Chicken Hitboxes",
        category: "Farming Islands",
        subcategory: "Hitboxes"
    })
    chickenHitboxes = false;

    // Pig
    @SwitchProperty({
        name: "Pig Hitboxes",
        category: "Farming Islands",
        subcategory: "Hitboxes"
    })
    pigHitboxes = false;

    // Sheep
    @SwitchProperty({
        name: "Sheep Hitboxes",
        category: "Farming Islands",
        subcategory: "Hitboxes"
    })
    sheepHitboxes = false;

    // Rabbit
    @SwitchProperty({
        name: "Rabbit Hitboxes",
        category: "Farming Islands",
        subcategory: "Hitboxes"
    })
    rabbitHitboxes = false;

    // Mushroom Cow
    @SwitchProperty({
        name: "Mushroom Cow Hitboxes",
        category: "Farming Islands",
        subcategory: "Hitboxes"
    })
    mushroomCowHitboxes = false;

    // Park
    // Hitboxes
    // Pack Spirit
    @SwitchProperty({
        name: "Pack Spirit Hitboxes",
        category: "Park",
        subcategory: "Hitboxes"
    })
    packSpiritHitboxes = false;

    // Howling Spirit
    @SwitchProperty({
        name: "Howling Spirit Hitboxes",
        category: "Park",
        subcategory: "Hitboxes"
    })
    howlingSpiritHitboxes = false;

    // Soul of the Alpha
    @SwitchProperty({
        name: "Soul of the Alpha Hitboxes",
        category: "Park",
        subcategory: "Hitboxes"
    })
    soulOfTheAlphaHitboxes = false;

    // Deep Cavern
    // Hitboxes
    // Lapis Zombie
    @SwitchProperty({
        name: "Lapis Zombie Hitboxes",
        category: "Deep Cavern",
        subcategory: "Hitboxes"
    })
    lapisZombieHitboxes = false;

    // Redstone Pigman
    @SwitchProperty({
        name: "Redstone Pigman Hitboxes",
        category: "Deep Cavern",
        subcategory: "Hitboxes"
    })
    redstonePigmanHitboxes = false;

    // Emerald Slime
    @SwitchProperty({
        name: "Emerald Slime Hitboxes",
        category: "Deep Cavern",
        subcategory: "Hitboxes"
    })
    emeraldSlimeHitboxes = false;

    // Miner Zombie
    @SwitchProperty({
        name: "Miner Zombie Hitboxes",
        category: "Deep Cavern",
        subcategory: "Hitboxes"
    })
    minerZombieHitboxes = false;

    // Miner Skeleton
    @SwitchProperty({
        name: "Miner Skeleton Hitboxes",
        category: "Deep Cavern",
        subcategory: "Hitboxes"
    })
    minerSkeletonHitboxes = false;

    // Dwarven Mines
    // Alerts
    // Powder Ghast Alert
    @SwitchProperty({
        name: "Powder Ghast Alert",
        description: "Alerts you to the location of a Powder Ghast when it spawns",
        category: "Dwarven Mines",
        subcategory: "Alerts"
    })
    powderGhastAlert = false;

    // Golden Goblin Alert
    @SwitchProperty({
        name: "Golden Goblin Alert",
        category: "Dwarven Mines",
        subcategory: "Alerts"
    })
    goldenGoblinAlert = false;

    // Diamond Goblin Alert
    @SwitchProperty({
        name: "Diamond Goblin Alert",
        category: "Dwarven Mines",
        subcategory: "Alerts"
    })
    diamondGoblinAlert = false;

    // Hitboxes
    // Golden Goblin
    @SwitchProperty({
        name: "Golden Goblin Hitboxes",
        category: "Dwarven Mines",
        subcategory: "Hitboxes"
    })
    goldenGoblinHitboxes = false;

    // Diamond Goblin
    @SwitchProperty({
        name: "Diamond Goblin Hitboxes",
        category: "Dwarven Mines",
        subcategory: "Hitboxes"
    })
    diamondGoblinHitboxes = false;

    // Powder Ghast
    @SwitchProperty({
        name: "Powder Ghast Hitboxes",
        category: "Dwarven Mines",
        subcategory: "Hitboxes"
    })
    powderGhastHitboxes = false;

    // Ice Walker
    @SwitchProperty({
        name: "Ice Walker Hitboxes",
        category: "Dwarven Mines",
        subcategory: "Hitboxes"
    })
    iceWalkerHitboxes = false;

    // Goblin
    @SwitchProperty({
        name: "Goblin Hitboxes",
        category: "Dwarven Mines",
        subcategory: "Hitboxes"
    })
    goblinHitboxes = false;

    // Treasure Hoarder
    @SwitchProperty({
        name: "Treasure Hoarder Hitboxes",
        category: "Dwarven Mines",
        subcategory: "Hitboxes"
    })
    treasureHoarderHitboxes = false;

    // Star Sentry
    @SwitchProperty({
        name: "Star Sentry Hitboxes",
        category: "Dwarven Mines",
        subcategory: "Hitboxes"
    })
    starSentryHitboxes = false;


    // The End
    // Hitboxes
    // Enderman
    @SwitchProperty({
        name: "Enderman Hitboxes",
        category: "The End",
        subcategory: "Hitboxes"
    })
    endermanHitboxes = false;

    // Endermite
    @SwitchProperty({
        name: "Endermite Hitboxes",
        category: "The End",
        subcategory: "Hitboxes"
    })
    endermiteHitboxes = false;

    // Obsidian Defender
    @SwitchProperty({
        name: "Obsidian Defender Hitboxes",
        category: "The End",
        subcategory: "Hitboxes"
    })
    obsidianDefenderHitboxes = false;

    // Watcher
    @SwitchProperty({
        name: "Watcher Hitboxes",
        category: "The End",
        subcategory: "Hitboxes"
    })
    watcherHitboxes = false;

    // Zealot
    @SwitchProperty({
        name: "Zealot Hitboxes",
        category: "The End",
        subcategory: "Hitboxes"
    })
    zealotHitboxes = false;
    
    // Crystal Hollows

    // Spider's Den
    // Alerts
    // Arachne Alert
    @SwitchProperty({
        name: "Arachne Alert",
        description: "Alerts you when an Arachne spawns",
        category: "Spider's Den",
        subcategory: "Alerts"
    })
    arachneAlerts = false;
    // Broodmother Alerts
    @SwitchProperty({
        name: "Broodmother Alert",
        description: "Alerts you when a Broodmother spawns",
        category: "Spider's Den",
        subcategory: "Alerts"
    })
    broodmotherAlerts = false;
    @SwitchProperty({
        name: "Broodmother Tracker",
        category: "Spider's Den",
        subcategory: "Alerts"
    })
    broodmotherGui = false;
    // Hitboxes
    // Arachne
    @SwitchProperty({
        name: "Arachne Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    arachneHitboxes = false;

    // Arachne's Brood
    @SwitchProperty({
        name: "Arachne's Brood Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    arachnesBroodHitboxes = false;

    // Arachne's Keeper
    @SwitchProperty({
        name: "Arachne's Keeper Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    arachnesKeeperHitboxes = false;

    // Broodmother
    @SwitchProperty({
        name: "Broodmother Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    broodmotherHitboxes = false;

    // Dasher Spider
    @SwitchProperty({
        name: "Dasher Spider Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    dasherSpiderHitboxes = false;

    // Gravel Skeleton
    @SwitchProperty({
        name: "Gravel Skeleton Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    gravelSkeletonHitboxes = false;

    // Rain Slime
    @SwitchProperty({
        name: "Rain Slime Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    rainSlimeHitboxes = false;

    // Toxic Slime
    @SwitchProperty({
        name: "Toxic Slime Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    toxicSlimeHitboxes = false;

    // Spider Jockey
    @SwitchProperty({
        name: "Spider Jockey Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    spiderJockeyHitboxes = false;

    // Splitter Spider
    @SwitchProperty({
        name: "Splitter Spider Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    splitterSpiderHitboxes = false;

    // Voracious Spider
    @SwitchProperty({
        name: "Voracious Spider Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    voraciousSpiderHitboxes = false;

    // Weaver Spider
    @SwitchProperty({
        name: "Weaver Spider Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    weaverSpiderHitboxes = false;

    // Silverfish
    @SwitchProperty({
        name: "Silverfish Hitboxes",
        category: "Spider's Den",
        subcategory: "Hitboxes"
    })
    silverfishHitboxes = false;

    // End

    // Crimson Isle
    // Alerts
    // Ghast Alert
    @SwitchProperty({
        name: "Crimson Ghast Alert",
        category: "Crimson Isle",
        subcategory: "Alerts"
    })
    crimsonGhastAlert = false;

    // Vanquiser Alert
    @SwitchProperty({
        name: "Vanquisher Alert",
        category: "Crimson Isle",
        subcategory: "Alerts"
    })
    vanquisherAlerts = false;

    // Hitboxes
    // Vanquisher
    @SwitchProperty({
        name: "Vanquisher Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    vanquisherHitboxes = false;

    // Wither Spectre
    @SwitchProperty({
        name: "Wither Spectre Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    witherSpectreHitboxes = false;

    // Bezal
    @SwitchProperty({
        name: "Bezal Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    bezalHitboxes = false;

    // Blaze
    @SwitchProperty({
        name: "Blaze Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    blazeHitboxes = false;

    // Mutated Blaze
    @SwitchProperty({
        name: "Mutated Blaze Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    mutatedBlazeHitboxes = false;

    // Wither Skeleton
    @SwitchProperty({
        name: "Wither Skeleton Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    witherSkeletonHitboxes = false;

    // Magma Cube
    @SwitchProperty({
        name: "Magma Cube Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    magmaCubeHitboxes = false;

    // Pack Magma Cube
    @SwitchProperty({
        name: "Pack Magma Cube Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    packMagmaCubeHitboxes = false;

    // Flaming Spider
    @SwitchProperty({
        name: "Flaming Spider Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    flamingSpiderHitboxes = false;

    // Magma Cube Rider
    @SwitchProperty({
        name: "Magma Cube Rider Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    magmaCubeRiderHitboxes = false;

    // Ghast
    @SwitchProperty({
        name: "Crimson Ghast Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    crimsonGhastHitboxes = false;

    // Mushroom Bull
    @SwitchProperty({
        name: "Mushroom Bull Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    mushroomBullHitboxes = false;

    // Flare
    @SwitchProperty({
        name: "Flare Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    flareHitboxes = false;

    // Kada Knight
    @SwitchProperty({
        name: "Kada Knight Hitboxes",
        category: "Crimson Isle",
        subcategory: "Hitboxes"
    })
    kadaKnightHitboxes = false;

    // Fishing
    // Alerts
    // fishingAlerts
    @SwitchProperty({
        name: "Fishing Alerts",
        category: "Fishing",
        subcategory: "Alerts"
    })
    fishingAlerts = false;
    // Jawbus Alert
    @SwitchProperty({
        name: "Jawbus Alert",
        category: "Fishing",
        subcategory: "Alerts"
    })
    jawbusAlert = false;

    // Thunderlord Alert
    @SwitchProperty({
        name: "Thunderlord Alert",
        category: "Fishing",
        subcategory: "Alerts"
    })
    thunderlordAlert = false;


}

export default new Settings()
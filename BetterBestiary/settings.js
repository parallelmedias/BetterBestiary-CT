import { @Vigilant, @ButtonProperty, @SwitchProperty, @SelectorProperty, @SliderProperty, @TextProperty } from 'Vigilance'
import constants from "./utils/constants";
const version = constants.version;

@Vigilant("BetterBestiary", "BB", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Chat", "Bestiary", "Spider's Den", "End Island"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Settings {

    constructor() {
        this.initialize(this);
        this.setCategoryDescription('General', 
        `&6[&bBetter Bestiary&6] ${JSON.parse(FileLib.read("BetterBestiary", "metadata.json")).version}
        by &6LakiaYT
        `
        );
        this.setCategoryDescription('Chat',
        `&6[&bBetter Bestiary&6] Chat Settings
        `
        );
        this.setCategoryDescription('Bestiary',
        `&6[&bBetter Bestiary&6] Bestiary Settings
        `
        );
        this.setCategoryDescription("Spider's Den",
        `&6[&bBetter Bestiary&6] Spider's Den Settings
        `
        );
        this.setCategoryDescription("End Island",
        `&6[&bBetter Bestiary&6] End Island Settings
        `
        );
    }

//////////////////////////////////////
/// GENERAL ///
//////////////////////////////////////
    @ButtonProperty({
        name: "Welcome",
        description: "Join the Discord to stay informed about updates!",
        category: "General",
        placeholder: "Join !"
    })
    MyDiscord() {
        java.awt.Desktop.getDesktop().browse(new java.net.URI("https://discord.gg/YXjWcMkCMV"))
    }

    @SwitchProperty({
        name: "Debug",
        description: "Toggles debug mode.",
        category: "General"
    })
    debug = false;

    @SwitchProperty({
        name: "Auto-Update",
        description: "Toggles auto-updating.",
        category: "General"
    })
    autoUpdate = true;

//////////////////////////////////////
/// Chat
//////////////////////////////////////
    @SwitchProperty({
        name: 'Clean Chat',
        description: 'Removes most boss dialogue and spammy chat features',
        category: 'Chat',
    })
    enableChat = false;

//////////////////////////////////////
/// Bestiary
//////////////////////////////////////

/// Alerts
    @SwitchProperty({
        name: 'Zombie Villager Alerts',
        description: 'Sends a message in chat and on screen when zombie villager',
        category: 'Bestiary',
        subcategory: 'Alerts',
    })
    zombieVillager = false;
    @SwitchProperty({
        name: 'Headless Horsemen Alerts',
        description: 'Headless Horsemen Spawn Timing Alerts',
        category: 'Bestiary',
        subcategory: 'Alerts',
    })
    headlessHorsemen = false;
    // Horseman Chat CLeaner
    @SwitchProperty({
        name: 'Headless Horsemen Chat Cleaner',
        description: 'Removes Headless Horsemen Chat',
        category: 'Bestiary',
        subcategory: 'Alerts',
    })
    horsemanChat = false;
    @SwitchProperty({
        name: 'Slime Alerts',
        description: 'Sends a message in chat and on screen when Rain Slimes spawn',
        category: 'Bestiary',
        subcategory: 'Alerts',
    })
    rainSlime = false;
    
/// General
    @SwitchProperty({
        name: 'Hitbox Toggle',
        description: 'Shows hitboxes of mobs',
        category: 'Bestiary',
        subcategory: 'General',
    })
    hitboxToggle = false;
    @SwitchProperty({
        name: 'Auto Horseman Partying',
        description: 'Automatically parties a list of players when Headless Horseman is ready to spawn. Enables warping',
        category: 'Bestiary',
        subcategory: 'General',
    })
    // In warping.js
    autoHorseParty = false;
    @SwitchProperty({
        name: 'Auto Dragon Partying',
        description: 'Automatically parties a list of players when Ender Dragon is ready to spawn. Enables warping',
        category: 'Bestiary',
        subcategory: 'General',
    })
    // In warping.js
    autoDragonParty = false;

//////////////////////////////////////
/// Spider's Den
//////////////////////////////////////
    // Make switch property for auto arachne partying
    @SwitchProperty({
        name: 'Auto Arachne Partying',
        description: 'Automatically parties a list of players when Arachne is ready to spawn. Enables warping',
        category: 'Spider\'s Den',
    })
    // In warping.js
    autoArachneParty = false;
    @SwitchProperty({
        name: 'Auto-Hide Players',
        description: 'Auto hides players in Spiders Den',
        category: 'Spider\'s Den',
    })
    // In hidePlayers.js
    autoHideSpider = false;
    @SwitchProperty({
        name: 'Arachne Alerts',
        description: 'Sends a message in chat and on screen when Arachne spawns',
        category: 'Spider\'s Den',
    })
    arachneAlerts= false;
    @SwitchProperty({
        name: 'Arachne Chat Cleaner',
        description: 'Removes Headless Horsemen Chat',
        category: 'Spider\'s Den',
    })
    arachneChat = false;
    @SwitchProperty({
        name: 'Keeper Waypoints - Disabled ATM',
        description: 'Draws waypoints at Keeper spawns',
        category: 'Spider\'s Den',
    })
    keeperWaypoint = false;

//////////////////////////////////////
/// End Island
//////////////////////////////////////
    @SwitchProperty({
        name: 'Auto-Hide Players',
        description: 'Auto hides players in End Island',
        category: 'End Island',
    })
    autoHideEnd = false;
    @SwitchProperty({
        name: 'Auto-Hide Players in Sepulture',
        description: 'Auto hides players in Sepulture',
        category: 'End Island',
    })
    autoHideSep = false;
    @SwitchProperty({
        name: 'Auto-Hide Dragon',
        description: 'Auto hides players when a dragon is spawned',
        category: 'End Island',
    })
    autoHideDragon = false;
    @SwitchProperty({
        name: 'Dragon Alerts',
        description: 'Alerts in chat and on screen when dragon spawns',
        category: 'End Island',
    })
    dragonAlerts = false;
    @SwitchProperty({
        name: 'Ender Dragon Alerts',
        description: 'Sends a message in chat and on screen when Ender Dragon spawns',
        category: 'End Island',
    })
    enderDragonChat = false;
    
    @SwitchProperty({
        name: 'End Crystal Waypoints',
        description: 'Draws waypoints at End Crystal spawns',
        category: 'End Island',
    })
    endCrystalWaypoints = false;
    

    // constructor() {
    //     this.initialize(this);
    //     this.registerListener("Bestiary tracker", value => {
    //         this.bbToggle = value;
    //     })
    //     this.registerListener("Bestiary tracker position", value => {
    //         this.bbLocation = value;
    //     })
    //     this.registerListener("Bestiary tracker show always", value => {
    //         this.bbShowAlways = value;
    //     })
    //     this.registerListener("Bestiary tracker show tier", value => {
    //         this.bbShowTier = value;
    //     })
    //     this.registerListener("Bestiary tracker show name", value => {
    //         this.bbShowName = value;
    //     })
    //     this.registerListener("Bestiary tracker show kills", value => {
    //         this.bbShowKills = value;
    //     })
    //     this.registerListener("Bestiary tracker show xp", value => {
    //         this.bbShowXP = value;
    //     })
    //     this.registerListener("Bestiary tracker show xp to next", value => {
    //         this.bbShowXPToNext = value;
    //     })
    //     this.registerListener("Bestiary tracker show kills to next tier", value => {
    //         this.bbShowXPToNextTier = value;
    //     })
    //     this.registerListener("Debug", value => {
    //         this.debug = value;
    //     })
    // }
}

export default new Settings()
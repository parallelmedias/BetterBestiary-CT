import { @Vigilant, @ButtonProperty, @SwitchProperty, @SelectorProperty, @SliderProperty } from 'Vigilance'

@Vigilant('BetterBestiary', 'BB', {
    getCategoryComparator: () => (a,b) => {
        const cagtegories = ["General", "Bestiary"];
        return cagtegories.indexOf(a.name) - cagtegories.indexOf(b.name);
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

/// General
    @SwitchProperty({
        name: 'Hitbox Toggle',
        description: 'Shows hitboxes of mobs',
        category: 'Bestiary',
        subcategory: 'General',
    })
    hitboxToggle = true;

/// Spider Den
    @SwitchProperty({
        name: 'Arachne Alerts',
        description: 'Sends a message in chat and on screen when Arachne spawns',
        category: 'Bestiary',
        subcategory: 'Spider',
    })
    arachneChat = false;

    // @SwitchProperty({
    //     name: 'Keeper Waypoints - Disabled ATM',
    //     description: 'Draws waypoints at Keeper spawns',
    //     category: 'Bestiary',
    //     subcategory: 'Spider',
    // })
    // keeperWaypoint = true;

}

export default new Settings;
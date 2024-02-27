import { PREFIX, data, lootData, isAreaInTab, rareDropGui, short_number } from "../../utils/Utils";
import settings from "../../config";

register("command", () => {
    rareDropGui.open();
}).setName("bbTrack");

// Drop Tracker 
register("chat", (drop) => {
    // Personal Island 
    if (drop == "Bat Talisman") lootData.bat_talismans += 1;
    if (drop == "Bone Dye") lootData.bone_dyes += 1;
    // Hub 
    if (drop == "Epic Ghoul Pet") lootData.epic_ghoul_pets += 1;
    if (drop == "Legendary Ghoul Pet") lootData.legendary_ghoul_pets += 1;
    if (drop == "Epic Hound Pet") lootData.epic_hound_pets += 1;
    if (drop == "Legendary Hound Pet") lootData.legendary_hound_pets += 1;
    if (drop == "Celeste Dye") lootData.celeste_dyes += 1;
    if (drop == "Wolf Talisman") lootData.wolf_talismans += 1;
    // The Park 
    if (drop == "Foraging Exp Boost") lootData.foraging_exp_boosts += 1;
    if (drop == "Travel Scroll to the Park") lootData.travel_scroll_to_the_park += 1;
    if (drop == "Weak Wolf Catalyst") lootData.weak_wolf_catalysts += 1;
    // Farming Islands - Cyclamen Dye
    if (drop == "Cyclamen Dye") lootData.cyclamen_dyes += 1;
    // Deep Caverns 
    if (drop == "Exp Share Core") lootData.exp_share_cores += 1;
    if (drop == "Nyanza Dye") lootData.nyanza_dyes += 1;
    if (drop == "Lapis Crystal") lootData.lapis_crystals += 1;
    if (drop == "Lapis Armor Helmet") lootData.lapis_armor_helmets += 1;
    if (drop == "Lapis Armor Chestplate") lootData.lapis_armor_chestplates += 1;
    if (drop == "Lapis Armor Leggings") lootData.lapis_armor_leggings += 1;
    if (drop == "Lapis Armor Boots") lootData.lapis_armor_boots += 1;
    if (drop == "Brick Red Dye") lootData.brick_red_dyes += 1;
    if (drop == "Miner Helmet") lootData.miner_helmets += 1;
    if (drop == "Miner Chestplate") lootData.miner_chestplates += 1;
    if (drop == "Miner Leggings") lootData.miner_leggings += 1;
    if (drop == "Miner Boots") lootData.miner_boots += 1;
    // Dwarven Mines 
    if (drop == "Ghostly Boots") lootData.ghostly_boots += 1;
    if (drop == "Plasma") lootData.plasmas += 1;
    if (drop == "Sorrow") lootData.sorrows += 1;
    if (drop == "Volta") lootData.voltas += 1;
    if (drop == "1,000,000 coins") lootData.millions += 1;
    if (drop == "Glacite Jewel") lootData.glacite_jewels += 1;
    if (drop == "Glacite Helmet") lootData.glacite_helmets += 1;
    if (drop == "Glacite Chestplate") lootData.glacite_chestplates += 1;
    if (drop == "Glacite Leggings") lootData.glacite_leggings += 1;
    if (drop == "Glacite Boots") lootData.glacite_boots += 1;
    if (drop == "Salmon Opal") lootData.salmon_opals += 1;
    if (drop == "Treasurite") lootData.treasurites += 1;
    if (drop == "Goblin Helmet") lootData.goblin_helmets += 1;
    if (drop == "Goblin Chestplate") lootData.goblin_chestplates += 1;
    if (drop == "Goblin Leggings") lootData.goblin_leggings += 1;
    if (drop == "Goblin Boots") lootData.goblin_boots += 1;
    if (drop == "Treasurite") lootData.treasurites += 1;
    // Crystal Hollows 
    if (drop == "Corleonite") lootData.corleonites += 1;
    if (drop == "Rare Scatha Pet") lootData.rare_scatha_pets += 1;
    if (drop == "Epic Scatha Pet") lootData.epic_scatha_pets += 1;
    if (drop == "Legendary Scatha Pet") lootData.legendary_scatha_pets += 1;
    if (drop == "Control Switch") lootData.control_switches += 1;
    if (drop == "Electron Transmitter") lootData.electron_transmitters += 1;
    if (drop == "FTX 3070") lootData.ftx_3070s += 1;
    if (drop == "Robotron Reflector") lootData.robotron_reflectors += 1;
    if (drop == "Superlite Motor") lootData.superlite_motors += 1;
    if (drop == "Synthetic Heart") lootData.synthetic_hearts += 1;
    if (drop == "Celadon Dye") lootData.celadon_dyes += 1;
    if (drop == "Epic Bal Pet") lootData.epic_bal_pets += 1;
    if (drop == "Legendary Bal Pet") lootData.legendary_bal_pets += 1;
    // Spider's Den 
    if (drop == "Poison Sample") lootData.poison_samples += 1;
    if (drop == "Arachne's Calling") lootData.arachnes_callings += 1;
    if (drop == "Epic Tarantula Pet") lootData.epic_tarantula_pets += 1;
    if (drop == "Legendary Tarantula Pet") lootData.legendary_tarantula_pets += 1;
    if (drop == "Travel Scroll to the Spider's Den Top of Nest") lootData.travel_scroll_to_the_spiders_den_top_of_nest += 1;
    if (drop == "Enchanted Spider Eye") lootData.enchanted_spider_eyes += 1;
    // The End 
    if (drop == "Crystal Fragment") lootData.crystal_fragments += 1;
    if (drop == "Enchanted End Stone") lootData.enchanted_end_stones += 1;
    if (drop == "Enchanted Eye of Ender") lootData.enchanted_eye_of_enders += 1;
    if (drop == "Enchanted Obsidian") lootData.enchanted_obsidians += 1;
    if (drop == "Summoning Eye") lootData.summoning_eyes += 1;
    if (drop == "Rare Combat Exp Boost") lootData.rare_combat_exp_boosts += 1;
    if (drop == "Epic Combat Exp Boost") lootData.epic_combat_exp_boosts += 1;
    if (drop == "Obsidian Chestplate") lootData.obsidian_chestplates += 1;
    if (drop == "End Stone Bow") lootData.end_stone_bows += 1;
    if (drop == "Enchanted Bone") lootData.enchanted_bones += 1;
    if (drop == "Enderman Cortex Rewriter") lootData.enderman_cortex_rewriters += 1;
    // Crimson Isle 
    if (drop == "Flame Dye") lootData.flame_dyes += 1;
    if (drop == "Mutated Blaze Ashes") lootData.mutated_blaze_ashes += 1;
    if (drop == "Millenia-Old Blaze Ashes") lootData.millenia_old_blaze_ashes += 1;
    if (drop == "Flames") lootData.flames += 1;
    // RARE DROP! Rampart Boots (+122% ✯ Magic Find)

    lootData.save();
}).setCriteria("RARE DROP! ${drop} (+${mf}% ✯ Magic Find)");

// Hub
register("renderOverlay", () => {
    if (settings.dropTrackerGUI) {
        if (rareDropGui.isOpen()) {
            const txt = "Click anywhere to move!"
            Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
        }
        if (isAreaInTab("hub") && !isAreaInTab("dungeon hub")){
            let epic_ghoul_txt = `&7Epic Ghoul Pets: &6${short_number(lootData.epic_ghoul_pets)}`;
            let legendary_ghoul_txt = `&7Legendary Ghoul Pets: &6${short_number(lootData.legendary_ghoul_pets)}`;
            let epic_hound_txt = `&7Epic Hound Pets: &6${short_number(lootData.epic_hound_pets)}`;
            let legendary_hound_txt = `&7Legendary Hound Pets: &6${short_number(lootData.legendary_hound_pets)}`;
            let celeste_txt = `&7Celeste Dyes: &6${short_number(lootData.celeste_dyes)}`;
            let wolf_txt = `&7Wolf Talismans: &6${short_number(lootData.wolf_talismans)}`;
    
            Renderer.drawStringWithShadow(`${PREFIX}\n${epic_ghoul_txt
                }\n${legendary_ghoul_txt
                }\n${epic_hound_txt
                }\n${legendary_hound_txt
                }\n${celeste_txt
                }\n${wolf_txt
            }`, data.x, data.y);
        }
        
    }
    
});

// Deep Cavern
register("renderOverlay", () => {
    if (settings.dropTrackerGUI) {
        
        if (isAreaInTab("deep caverns")) {
            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }
            let exp_core_txt = `&7Exp Share Cores: &6${short_number(lootData.exp_share_cores)}`;
            let nyanza_txt = `&7Nyanza Dyes: &6${short_number(lootData.nyanza_dyes)}`;
            let lapis_txt = `&7Lapis Crystals: &6${short_number(lootData.lapis_crystals)}`;
            let lapis_helm_txt = `&7Lapis Helmets: &6${short_number(lootData.lapis_armor_helmets)}`;
            let lapis_chest_txt = `&7Lapis Chestplates: &6${short_number(lootData.lapis_armor_chestplates)}`;
            let lapis_legs_txt = `&7Lapis Leggings: &6${short_number(lootData.lapis_armor_leggings)}`;
            let lapis_boots_txt = `&7Lapis Boots: &6${short_number(lootData.lapis_armor_boots)}`;
            let brick_txt = `&7Brick Red Dyes: &6${short_number(lootData.brick_red_dyes)}`;
            let miner_helm_txt = `&7Miner Helmets: &6${short_number(lootData.miner_helmets)}`;
            let miner_chest_txt = `&7Miner Chestplates: &6${short_number(lootData.miner_chestplates)}`;
            let miner_legs_txt = `&7Miner Leggings: &6${short_number(lootData.miner_leggings)}`;
            let miner_boots_txt = `&7Miner Boots: &6${short_number(lootData.miner_boots)}`;
        
            Renderer.drawStringWithShadow(`${PREFIX}\n${exp_core_txt
                }\n${nyanza_txt
                }\n${lapis_txt
                }\n${lapis_helm_txt
                }\n${lapis_chest_txt
                }\n${lapis_legs_txt
                }\n${lapis_boots_txt
                }\n${brick_txt
                }\n${miner_helm_txt
                }\n${miner_chest_txt
                }\n${miner_legs_txt
                }\n${miner_boots_txt
            }`, data.x, data.y);
        
        }
    }

});

// The Park
register("renderOverlay", () => {
    if (settings.dropTrackerGUI) {
        if (isAreaInTab("the park")){
            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let foraging_txt = `&7Foraging Exp Boosts: &6${short_number(lootData.foraging_exp_boosts)}`;
            let travel_txt = `&7Travel Scroll to the Park: &6${short_number(lootData.travel_scroll_to_the_park)}`;
            let weak_wolf_txt = `&7Weak Wolf Catalysts: &6${short_number(lootData.weak_wolf_catalysts)}`;
        
            Renderer.drawStringWithShadow(`${PREFIX}\n${foraging_txt
                }\n${travel_txt
                }\n${weak_wolf_txt
            }`, data.x, data.y);
        }
        

    }

});

// Farming Islands
register("renderOverlay", () => {
    if (settings.dropTrackerGUI) {

        if (isAreaInTab("farming islands")){

            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let cyclamen_txt = `&7Cyclamen Dyes: &6${short_number(lootData.cyclamen_dyes)}`;
        
            Renderer.drawStringWithShadow(`${PREFIX}\n${cyclamen_txt
            }`, data.x, data.y);
        
        }
        
    }

});

// Dwarven Mines
register("renderOverlay", () => {
    if (settings.dropTrackerGUI) {

        if (isAreaInTab("Dwarven")){

            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let ghostly_txt = `&7Ghostly Boots: &6${short_number(lootData.ghostly_boots)}`;
            let plasma_txt = `&7Plasmas: &6${short_number(lootData.plasmas)}`;
            let sorrow_txt = `&7Sorrows: &6${short_number(lootData.sorrows)}`;
            let volta_txt = `&7Voltas: &6${short_number(lootData.voltas)}`;
            let millions_txt = `&71,000,000 Coins: &6${short_number(lootData.millions)}`;
            let glacite_txt = `&7Glacite Jewels: &6${short_number(lootData.glacite_jewels)}`;
            let glacite_helm_txt = `&7Glacite Helmets: &6${short_number(lootData.glacite_helmets)}`;
            let glacite_chest_txt = `&7Glacite Chestplates: &6${short_number(lootData.glacite_chestplates)}`;
            let glacite_legs_txt = `&7Glacite Leggings: &6${short_number(lootData.glacite_leggings)}`;
            let glacite_boots_txt = `&7Glacite Boots: &6${short_number(lootData.glacite_boots)}`;
            let salmon_txt = `&7Salmon Opals: &6${short_number(lootData.salmon_opals)}`;
            let treasurite_txt = `&7Treasurites: &6${short_number(lootData.treasurites)}`;
            let goblin_helm_txt = `&7Goblin Helmets: &6${short_number(lootData.goblin_helmets)}`;
            let goblin_chest_txt = `&7Goblin Chestplates: &6${short_number(lootData.goblin_chestplates)}`;
            let goblin_legs_txt = `&7Goblin Leggings: &6${short_number(lootData.goblin_leggings)}`;
            let goblin_boots_txt = `&7Goblin Boots: &6${short_number(lootData.goblin_boots)}`;
        
            Renderer.drawStringWithShadow(`${PREFIX}\n${ghostly_txt
                }\n${plasma_txt
                }\n${sorrow_txt
                }\n${volta_txt
                }\n${millions_txt
                }\n${glacite_txt
                }\n${glacite_helm_txt
                }\n${glacite_chest_txt
                }\n${glacite_legs_txt
                }\n${glacite_boots_txt
                }\n${salmon_txt
                }\n${treasurite_txt
                }\n${goblin_helm_txt
                }\n${goblin_chest_txt
                }\n${goblin_legs_txt
                }\n${goblin_boots_txt
            }`, data.x, data.y);
        }

    }

});

// Crystal Hollows
register("renderOverlay", () => {
    if (settings.dropTrackerGUI) {

        if (isAreaInTab("crystal hollows")) {

            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let corleonite_txt = `&7Corleonite: &6${short_number(lootData.corleonites)}`;
            let rare_scatha_txt = `&7Rare Scatha Pets: &6${short_number(lootData.rare_scatha_pets)}`;
            let epic_scatha_txt = `&7Epic Scatha Pets: &6${short_number(lootData.epic_scatha_pets)}`;
            let legendary_scatha_txt = `&7Legendary Scatha Pets: &6${short_number(lootData.legendary_scatha_pets)}`;
            let control_txt = `&7Control Switches: &6${short_number(lootData.control_switches)}`;
            let electron_txt = `&7Electron Transmitters: &6${short_number(lootData.electron_transmitters)}`;
            let ftx_txt = `&7FTX 3070s: &6${short_number(lootData.ftx_3070s)}`;
            let robotron_txt = `&7Robotron Reflectors: &6${short_number(lootData.robotron_reflectors)}`;
            let superlite_txt = `&7Superlite Motors: &6${short_number(lootData.superlite_motors)}`;
            let synthetic_txt = `&7Synthetic Hearts: &6${short_number(lootData.synthetic_hearts)}`;
            let celadon_txt = `&7Celadon Dyes: &6${short_number(lootData.celadon_dyes)}`;
            let epic_bal_txt = `&7Epic Bal Pets: &6${short_number(lootData.epic_bal_pets)}`;
            let legendary_bal_txt = `&7Legendary Bal Pets: &6${short_number(lootData.legendary_bal_pets)}`;
        
            Renderer.drawStringWithShadow(`${PREFIX}\n${corleonite_txt
                }\n${rare_scatha_txt
                }\n${epic_scatha_txt
                }\n${legendary_scatha_txt
                }\n${control_txt
                }\n${electron_txt
                }\n${ftx_txt
                }\n${robotron_txt
                }\n${superlite_txt
                }\n${synthetic_txt
                }\n${celadon_txt
                }\n${epic_bal_txt
                }\n${legendary_bal_txt
            }`, data.x, data.y);
        }
        

    }

});

// Spider's Den
register("renderOverlay", () => {
    if (settings.dropTrackerGUI) {

        if (isAreaInTab("Spider's Den")) {

            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let enchanted_spider_eyes_txt = `&7Enchanted Spider Eyes: &6${short_number(lootData.enchanted_spider_eyes)}`;
            let poison_txt = `&7Poison Samples: &6${short_number(lootData.poison_samples)}`;
            let arachne_txt = `&7Arachne's Calling: &6${short_number(lootData.arachnes_callings)}`;
            let epic_tarantula_txt = `&7Epic Tarantula Pets: &6${short_number(lootData.epic_tarantula_pets)}`;
            let legendary_tarantula_txt = `&7Legendary Tarantula Pets: &6${short_number(lootData.legendary_tarantula_pets)}`;
            let travel_txt = `&7Travel Scroll to the Spider's Den Top of Nest: &6${short_number(lootData.travel_scroll_to_the_spiders_den_top_of_nest)}`;

        
            Renderer.drawStringWithShadow(`${PREFIX}\n${enchanted_spider_eyes_txt
                }\n${poison_txt
                }\n${arachne_txt
                }\n${epic_tarantula_txt
                }\n${legendary_tarantula_txt
                }\n${travel_txt
            }`, data.x, data.y);
        }

    }

});

// The End
register("renderOverlay", () => {
    if (settings.dropTrackerGUI) {
        if (isAreaInTab("The End")){

            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let crystal_txt = `&7Crystal Fragments: &6${short_number(lootData.crystal_fragments)}`;
            let end_stone_txt = `&7Enchanted End Stone: &6${short_number(lootData.enchanted_end_stones)}`;
            let eye_txt = `&7Enchanted Eye of Ender: &6${short_number(lootData.enchanted_eye_of_enders)}`;
            let obsidian_txt = `&7Enchanted Obsidian: &6${short_number(lootData.enchanted_obsidians)}`;
            let summoning_txt = `&7Summoning Eyes: &6${short_number(lootData.summoning_eyes)}`;
            let rare_combat_txt = `&7Rare Combat Exp Boosts: &6${short_number(lootData.rare_combat_exp_boosts)}`;
            let epic_combat_txt = `&7Epic Combat Exp Boosts: &6${short_number(lootData.epic_combat_exp_boosts)}`;
            let obsidian_chest_txt = `&7Obsidian Chestplates: &6${short_number(lootData.obsidian_chestplates)}`;
            let end_stone_bow_txt = `&7End Stone Bows: &6${short_number(lootData.end_stone_bows)}`;
            let enchanted_bone_txt = `&7Enchanted Bones: &6${short_number(lootData.enchanted_bones)}`;
            let enderman_cortex_txt = `&7Enderman Cortex Rewriters: &6${short_number(lootData.enderman_cortex_rewriters)}`;
        
            Renderer.drawStringWithShadow(`${PREFIX}\n${crystal_txt
                }\n${end_stone_txt
                }\n${eye_txt
                }\n${obsidian_txt
                }\n${summoning_txt
                }\n${rare_combat_txt
                }\n${epic_combat_txt
                }\n${obsidian_chest_txt
                }\n${end_stone_bow_txt
                }\n${enchanted_bone_txt
                }\n${enderman_cortex_txt
            }`, data.x, data.y);
        }
        

    }

});

// Crimson Isle
register("renderOverlay", () => {
    if (settings.dropTrackerGUI) {
        
        if (isAreaInTab("crimson isle")){

            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let flame_txt = `&7Flame Dyes: &6${short_number(lootData.flame_dyes)}`;
            let mutated_txt = `&7Mutated Blaze Ashes: &6${short_number(lootData.mutated_blaze_ashes)}`;
            let millenia_txt = `&7Millenia-Old Blaze Ashes: &6${short_number(lootData.millenia_old_blaze_ashes)}`;
            let flames_txt = `&7Flames: &6${short_number(lootData.flames)}`;
        
            Renderer.drawStringWithShadow(`${PREFIX}\n${flame_txt
                }\n${mutated_txt
                }\n${millenia_txt
                }\n${flames_txt
            }`, data.x, data.y);
        }
        
    }
    
});






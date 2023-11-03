import { PREFIX, chat, data, isPlayerAt, rareDropGui, short_number } from "../../utils/Utils";
import settings from "../../config";

register("command", () => {
    rareDropGui.open();
}).setName("bbTrack");

// Drop Tracker 
register("chat", (drop, mf) => {
    // Personal Island 
    if (drop == "Bat Talisman") data.bat_talismans += 1;
    if (drop == "Bone Dye") data.bone_dyes += 1;
    // Hub 
    if (drop == "Epic Ghoul Pet") data.epic_ghoul_pets += 1;
    if (drop == "Legendary Ghoul Pet") data.legendary_ghoul_pets += 1;
    if (drop == "Epic Hound Pet") data.epic_hound_pets += 1;
    if (drop == "Legendary Hound Pet") data.legendary_hound_pets += 1;
    if (drop == "Celeste Dye") data.celeste_dyes += 1;
    if (drop == "Wolf Talisman") data.wolf_talismans += 1;
    // The Park 
    if (drop == "Foraging Exp Boost") data.foraging_exp_boosts += 1;
    if (drop == "Travel Scroll to the Park") data.travel_scroll_to_the_park += 1;
    if (drop == "Weak Wolf Catalyst") data.weak_wolf_catalysts += 1;
    // Farming Islands - Cyclamen Dye
    if (drop == "Cyclamen Dye") data.cyclamen_dyes += 1;
    // Deep Caverns 
    if (drop == "Exp Share Core") data.exp_share_cores += 1;
    if (drop == "Nyanza Dye") data.nyanza_dyes += 1;
    if (drop == "Lapis Crystal") data.lapis_crystals += 1;
    if (drop == "Lapis Armor Helmet") data.lapis_armor_helmets += 1;
    if (drop == "Lapis Armor Chestplate") data.lapis_armor_chestplates += 1;
    if (drop == "Lapis Armor Leggings") data.lapis_armor_leggings += 1;
    if (drop == "Lapis Armor Boots") data.lapis_armor_boots += 1;
    if (drop == "Brick Red Dye") data.brick_red_dyes += 1;
    if (drop == "Miner Helmet") data.miner_helmets += 1;
    if (drop == "Miner Chestplate") data.miner_chestplates += 1;
    if (drop == "Miner Leggings") data.miner_leggings += 1;
    if (drop == "Miner Boots") data.miner_boots += 1;
    // Dwarven Mines 
    if (drop == "Ghostly Boots") data.ghostly_boots += 1;
    if (drop == "Plasma") data.plasmas += 1;
    if (drop == "Sorrow") data.sorrows += 1;
    if (drop == "Volta") data.voltas += 1;
    if (drop == "1,000,000 coins") data.millions += 1;
    if (drop == "Glacite Jewel") data.glacite_jewels += 1;
    if (drop == "Glacite Helmet") data.glacite_helmets += 1;
    if (drop == "Glacite Chestplate") data.glacite_chestplates += 1;
    if (drop == "Glacite Leggings") data.glacite_leggings += 1;
    if (drop == "Glacite Boots") data.glacite_boots += 1;
    if (drop == "Salmon Opal") data.salmon_opals += 1;
    if (drop == "Treasurite") data.treasurites += 1;
    if (drop == "Goblin Helmet") data.goblin_helmets += 1;
    if (drop == "Goblin Chestplate") data.goblin_chestplates += 1;
    if (drop == "Goblin Leggings") data.goblin_leggings += 1;
    if (drop == "Goblin Boots") data.goblin_boots += 1;
    if (drop == "Treasurite") data.treasurites += 1;
    // Crystal Hollows 
    if (drop == "Corleonite") data.corleonites += 1;
    if (drop == "Rare Scatha Pet") data.rare_scatha_pets += 1;
    if (drop == "Epic Scatha Pet") data.epic_scatha_pets += 1;
    if (drop == "Legendary Scatha Pet") data.legendary_scatha_pets += 1;
    if (drop == "Control Switch") data.control_switches += 1;
    if (drop == "Electron Transmitter") data.electron_transmitters += 1;
    if (drop == "FTX 3070") data.ftx_3070s += 1;
    if (drop == "Robotron Reflector") data.robotron_reflectors += 1;
    if (drop == "Superlite Motor") data.superlite_motors += 1;
    if (drop == "Synthetic Heart") data.synthetic_hearts += 1;
    if (drop == "Celadon Dye") data.celadon_dyes += 1;
    if (drop == "Epic Bal Pet") data.epic_bal_pets += 1;
    if (drop == "Legendary Bal Pet") data.legendary_bal_pets += 1;
    // Spider's Den 
    if (drop == "Poison Sample") data.poison_samples += 1;
    if (drop == "Arachne's Calling") data.arachnes_callings += 1;
    if (drop == "Epic Tarantula Pet") data.epic_tarantula_pets += 1;
    if (drop == "Legendary Tarantula Pet") data.legendary_tarantula_pets += 1;
    if (drop == "Travel Scroll to the Spider's Den Top of Nest") data.travel_scroll_to_the_spiders_den_top_of_nest += 1;
    if (drop == "Enchanted Spider Eye") data.enchanted_spider_eyes += 1;
    // The End 
    if (drop == "Crystal Fragment") data.crystal_fragments += 1;
    if (drop == "Enchanted End Stone") data.enchanted_end_stones += 1;
    if (drop == "Enchanted Eye of Ender") data.enchanted_eye_of_enders += 1;
    if (drop == "Enchanted Obsidian") data.enchanted_obsidians += 1;
    if (drop == "Summoning Eye") data.summoning_eyes += 1;
    if (drop == "Rare Combat Exp Boost") data.rare_combat_exp_boosts += 1;
    if (drop == "Epic Combat Exp Boost") data.epic_combat_exp_boosts += 1;
    if (drop == "Obsidian Chestplate") data.obsidian_chestplates += 1;
    if (drop == "End Stone Bow") data.end_stone_bows += 1;
    if (drop == "Enchanted Bone") data.enchanted_bones += 1;
    if (drop == "Enderman Cortex Rewriter") data.enderman_cortex_rewriters += 1;
    // Crimson Isle 
    if (drop == "Flame Dye") data.flame_dyes += 1;
    if (drop == "Mutated Blaze Ashes") data.mutated_blaze_ashes += 1;
    if (drop == "Millenia-Old Blaze Ashes") data.millenia_old_blaze_ashes += 1;
    if (drop == "Flames") data.flames += 1;
    // RARE DROP! Rampart Boots (+122% ✯ Magic Find)

    data.save();
}).setCriteria("RARE DROP! ${drop} (+${mf}% ✯ Magic Find)");

// Hub
register("renderOverlay", () => {
    if (settings.dropTrackerGUI) {
        if (rareDropGui.isOpen()) {
            const txt = "Click anywhere to move!"
            Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
        }
        if (isPlayerAt("hub") && !isPlayerAt("dungeon hub")){
            let epic_ghoul_txt = `&7Epic Ghoul Pets: &6${short_number(data.epic_ghoul_pets)}`;
            let legendary_ghoul_txt = `&7Legendary Ghoul Pets: &6${short_number(data.legendary_ghoul_pets)}`;
            let epic_hound_txt = `&7Epic Hound Pets: &6${short_number(data.epic_hound_pets)}`;
            let legendary_hound_txt = `&7Legendary Hound Pets: &6${short_number(data.legendary_hound_pets)}`;
            let celeste_txt = `&7Celeste Dyes: &6${short_number(data.celeste_dyes)}`;
            let wolf_txt = `&7Wolf Talismans: &6${short_number(data.wolf_talismans)}`;
    
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
        
        if (isPlayerAt("deep caverns")) {
            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }
            let exp_core_txt = `&7Exp Share Cores: &6${short_number(data.exp_share_cores)}`;
            let nyanza_txt = `&7Nyanza Dyes: &6${short_number(data.nyanza_dyes)}`;
            let lapis_txt = `&7Lapis Crystals: &6${short_number(data.lapis_crystals)}`;
            let lapis_helm_txt = `&7Lapis Helmets: &6${short_number(data.lapis_armor_helmets)}`;
            let lapis_chest_txt = `&7Lapis Chestplates: &6${short_number(data.lapis_armor_chestplates)}`;
            let lapis_legs_txt = `&7Lapis Leggings: &6${short_number(data.lapis_armor_leggings)}`;
            let lapis_boots_txt = `&7Lapis Boots: &6${short_number(data.lapis_armor_boots)}`;
            let brick_txt = `&7Brick Red Dyes: &6${short_number(data.brick_red_dyes)}`;
            let miner_helm_txt = `&7Miner Helmets: &6${short_number(data.miner_helmets)}`;
            let miner_chest_txt = `&7Miner Chestplates: &6${short_number(data.miner_chestplates)}`;
            let miner_legs_txt = `&7Miner Leggings: &6${short_number(data.miner_leggings)}`;
            let miner_boots_txt = `&7Miner Boots: &6${short_number(data.miner_boots)}`;
        
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
        if (isPlayerAt("the park")){
            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let foraging_txt = `&7Foraging Exp Boosts: &6${short_number(data.foraging_exp_boosts)}`;
            let travel_txt = `&7Travel Scroll to the Park: &6${short_number(data.travel_scroll_to_the_park)}`;
            let weak_wolf_txt = `&7Weak Wolf Catalysts: &6${short_number(data.weak_wolf_catalysts)}`;
        
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

        if (isPlayerAt("farming islands")){

            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let cyclamen_txt = `&7Cyclamen Dyes: &6${short_number(data.cyclamen_dyes)}`;
        
            Renderer.drawStringWithShadow(`${PREFIX}\n${cyclamen_txt
            }`, data.x, data.y);
        
        }
        
    }

});

// Dwarven Mines
register("renderOverlay", () => {
    if (settings.dropTrackerGUI) {

        if (isPlayerAt("dwarven mines")){

            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let ghostly_txt = `&7Ghostly Boots: &6${short_number(data.ghostly_boots)}`;
            let plasma_txt = `&7Plasmas: &6${short_number(data.plasmas)}`;
            let sorrow_txt = `&7Sorrows: &6${short_number(data.sorrows)}`;
            let volta_txt = `&7Voltas: &6${short_number(data.voltas)}`;
            let millions_txt = `&71,000,000 Coins: &6${short_number(data.millions)}`;
            let glacite_txt = `&7Glacite Jewels: &6${short_number(data.glacite_jewels)}`;
            let glacite_helm_txt = `&7Glacite Helmets: &6${short_number(data.glacite_helmets)}`;
            let glacite_chest_txt = `&7Glacite Chestplates: &6${short_number(data.glacite_chestplates)}`;
            let glacite_legs_txt = `&7Glacite Leggings: &6${short_number(data.glacite_leggings)}`;
            let glacite_boots_txt = `&7Glacite Boots: &6${short_number(data.glacite_boots)}`;
            let salmon_txt = `&7Salmon Opals: &6${short_number(data.salmon_opals)}`;
            let treasurite_txt = `&7Treasurites: &6${short_number(data.treasurites)}`;
            let goblin_helm_txt = `&7Goblin Helmets: &6${short_number(data.goblin_helmets)}`;
            let goblin_chest_txt = `&7Goblin Chestplates: &6${short_number(data.goblin_chestplates)}`;
            let goblin_legs_txt = `&7Goblin Leggings: &6${short_number(data.goblin_leggings)}`;
            let goblin_boots_txt = `&7Goblin Boots: &6${short_number(data.goblin_boots)}`;
        
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

        if (isPlayerAt("crystal hollows")) {

            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let corleonite_txt = `&7Corleonite: &6${short_number(data.corleonites)}`;
            let rare_scatha_txt = `&7Rare Scatha Pets: &6${short_number(data.rare_scatha_pets)}`;
            let epic_scatha_txt = `&7Epic Scatha Pets: &6${short_number(data.epic_scatha_pets)}`;
            let legendary_scatha_txt = `&7Legendary Scatha Pets: &6${short_number(data.legendary_scatha_pets)}`;
            let control_txt = `&7Control Switches: &6${short_number(data.control_switches)}`;
            let electron_txt = `&7Electron Transmitters: &6${short_number(data.electron_transmitters)}`;
            let ftx_txt = `&7FTX 3070s: &6${short_number(data.ftx_3070s)}`;
            let robotron_txt = `&7Robotron Reflectors: &6${short_number(data.robotron_reflectors)}`;
            let superlite_txt = `&7Superlite Motors: &6${short_number(data.superlite_motors)}`;
            let synthetic_txt = `&7Synthetic Hearts: &6${short_number(data.synthetic_hearts)}`;
            let celadon_txt = `&7Celadon Dyes: &6${short_number(data.celadon_dyes)}`;
            let epic_bal_txt = `&7Epic Bal Pets: &6${short_number(data.epic_bal_pets)}`;
            let legendary_bal_txt = `&7Legendary Bal Pets: &6${short_number(data.legendary_bal_pets)}`;
        
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

        if (isPlayerAt("Spider's Den")) {

            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let enchanted_spider_eyes_txt = `&7Enchanted Spider Eyes: &6${short_number(data.enchanted_spider_eyes)}`;
            let poison_txt = `&7Poison Samples: &6${short_number(data.poison_samples)}`;
            let arachne_txt = `&7Arachne's Calling: &6${short_number(data.arachnes_callings)}`;
            let epic_tarantula_txt = `&7Epic Tarantula Pets: &6${short_number(data.epic_tarantula_pets)}`;
            let legendary_tarantula_txt = `&7Legendary Tarantula Pets: &6${short_number(data.legendary_tarantula_pets)}`;
            let travel_txt = `&7Travel Scroll to the Spider's Den Top of Nest: &6${short_number(data.travel_scroll_to_the_spiders_den_top_of_nest)}`;

        
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
        if (isPlayerAt("The End")){

            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let crystal_txt = `&7Crystal Fragments: &6${short_number(data.crystal_fragments)}`;
            let end_stone_txt = `&7Enchanted End Stone: &6${short_number(data.enchanted_end_stones)}`;
            let eye_txt = `&7Enchanted Eye of Ender: &6${short_number(data.enchanted_eye_of_enders)}`;
            let obsidian_txt = `&7Enchanted Obsidian: &6${short_number(data.enchanted_obsidians)}`;
            let summoning_txt = `&7Summoning Eyes: &6${short_number(data.summoning_eyes)}`;
            let rare_combat_txt = `&7Rare Combat Exp Boosts: &6${short_number(data.rare_combat_exp_boosts)}`;
            let epic_combat_txt = `&7Epic Combat Exp Boosts: &6${short_number(data.epic_combat_exp_boosts)}`;
            let obsidian_chest_txt = `&7Obsidian Chestplates: &6${short_number(data.obsidian_chestplates)}`;
            let end_stone_bow_txt = `&7End Stone Bows: &6${short_number(data.end_stone_bows)}`;
            let enchanted_bone_txt = `&7Enchanted Bones: &6${short_number(data.enchanted_bones)}`;
            let enderman_cortex_txt = `&7Enderman Cortex Rewriters: &6${short_number(data.enderman_cortex_rewriters)}`;
        
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
        
        if (isPlayerAt("crimson isle")){

            if (rareDropGui.isOpen()) {
                const txt = "Click anywhere to move!"
                Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2)
            }

            let flame_txt = `&7Flame Dyes: &6${short_number(data.flame_dyes)}`;
            let mutated_txt = `&7Mutated Blaze Ashes: &6${short_number(data.mutated_blaze_ashes)}`;
            let millenia_txt = `&7Millenia-Old Blaze Ashes: &6${short_number(data.millenia_old_blaze_ashes)}`;
            let flames_txt = `&7Flames: &6${short_number(data.flames)}`;
        
            Renderer.drawStringWithShadow(`${PREFIX}\n${flame_txt
                }\n${mutated_txt
                }\n${millenia_txt
                }\n${flames_txt
            }`, data.x, data.y);
        }
        
    }
    
});






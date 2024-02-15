import { 
    colors
} from "../../utils/Utils";

export const EntityIronGolem = Java.type('net.minecraft.entity.monster.EntityIronGolem').class;
export const EntityGuardian = Java.type('net.minecraft.entity.monster.EntityGuardian').class;

export const seaCreatures = {
    YETI: "YETI",
    REINDRAKE: "REINDRAKE",
    NUTCRACKER: "NUTCRACKER",
    WATER_HYDRA: "WATER HYDRA",
    SEA_EMPEROR: "SEA EMPEROR",
    GREAT_WHITE_SHARK: "GREAT WHITE SHARK",
    PHANTOM_FISHER: "PHANTOM FISHER",
    GRIM_REAPER: "GRIM REAPER",
    THUNDER: "THUNDER",
    LORD_JAWBUS: "LORD JAWBUS",
    PLHLEGBLAST: "PLHLEGBLAST"
}

export const YETI_MESSAGE = `${colors.GREEN}What is this creature!?`;
export const REINDRAKE_MESSAGE = `${colors.GREEN}A Reindrake forms from the depths.`;
export const NUTCRACKER_MESSAGE = `${colors.GREEN}You found a forgotten Nutcracker laying beneath the ice.`;
export const WATER_HYDRA_MESSAGE = `${colors.GREEN}The Water Hydra has come to test your strength.`;
export const SEA_EMPEROR_MESSAGE = `${colors.GREEN}The Sea Emperor arises from the depths.`;
export const GREAT_WHITE_SHARK_MESSAGE = `${colors.GREEN}Hide no longer, a Great White Shark has tracked your scent and thirsts for your blood!`;
export const PHANTOM_FISHER_MESSAGE = `${colors.GREEN}The spirit of a long lost Phantom Fisher has come to haunt you.`;
export const GRIM_REAPER_MESSAGE = `${colors.GREEN}This can\'t be! The manifestation of death himself!`;
export const ABYSSAL_MINER_MESSAGE = `${colors.GREEN}An Abyssal Miner breaks out of the water!`;
export const THUNDER_MESSAGE = `${colors.RESET}${colors.RED}${colors.BOLD}You hear a massive rumble as Thunder emerges.`;
export const LORD_JAWBUS_MESSAGE = `${colors.RESET}${colors.RED}${colors.BOLD}You have angecolors.RED a legendary creature... Lord Jawbus has arrived.`;
export const PLHLEGBLAST_MESSAGE = `${colors.GREEN}WOAH! A Plhlegblast appeacolors.RED.`;

export const BABY_YETI_PET_LEG_MESSAGE = `PET DROP! ${colors.RESET}${colors.GOLD}Baby Yeti`;
export const BABY_YETI_PET_EPIC_MESSAGE = `PET DROP! ${colors.RESET}${colors.DARK_PURPLE}Baby Yeti`;
export const FLYING_FISH_PET_LEG_MESSAGE = `PET DROP! ${colors.RESET}${colors.GOLD}Flying Fish`;
export const FLYING_FISH_PET_EPIC_MESSAGE = `PET DROP! ${colors.RESET}${colors.DARK_PURPLE}Flying Fish`;
export const FLYING_FISH_PET_RARE_MESSAGE = `PET DROP! ${colors.RESET}${colors.BLUE}Flying Fish`;
export const MEGALODON_PET_LEG_MESSAGE = `PET DROP! ${colors.RESET}${colors.GOLD}Megalodon`;
export const MEGALODON_PET_EPIC_MESSAGE = `PET DROP! ${colors.RESET}${colors.DARK_PURPLE}Megalodon`;
export const DEEP_SEA_ORB_MESSAGE = `RARE DROP! ${colors.RESET}${colors.DARK_PURPLE}Deep Sea Orb`;
export const RADIOACTIVE_VIAL_MESSAGE = `RARE DROP! ${colors.RESET}${colors.LIGHT_PURPLE}Radioactive Vial`;
export const CARMINE_DYE_MESSAGE = `RARE DROP! ${colors.RESET}${colors.DARK_PURPLE}Carmine Dye`;

export const BABY_YETI_PET = "Baby Yeti";
export const FLYING_FISH_PET = "Flying Fish";
export const MEGALODON_PET = "Megalodon";
export const DEEP_SEA_ORB = "Deep Sea Orb";
export const RADIOACTIVE_VIAL = "Radioactive Vial";
export const CARMINE_DYE = "Carmine Dye";
import { PREFIX,  } from "../../utils/Utils";
import settings from "../../config";

// Zombie Villager Alert drawn on screen
register("step", () => {
    if (settings.zombieVillagerAlerts){
        let score = Scoreboard.getLines()
        score.map(e => {
            if(e.toString().includes("Zombie Villager")){
                Client.showTitle("&c&lZombie Villager!", PREFIX, 0, 50, 0);
            }
        })
    }
}).setFps(1)


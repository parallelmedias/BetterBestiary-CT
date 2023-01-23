import constants from "../utils/constants";
const PREFIX = constants.PREFIX;
import settings from "../settings";

register("step", () => {
    if (settings.zombieVillager){
        let score = Scoreboard.getLines()
        score.map(e => {
            if(e.toString().includes("8:00pm")){
                Client.showTitle("&6&lZombie Villagers!", PREFIX, 0, 50, 0);
            }
        })
    }
}).setFps(1)
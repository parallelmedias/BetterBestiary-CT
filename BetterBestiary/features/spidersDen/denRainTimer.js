import settings from "../../config";
import { data } from "../../utils/Utils";
// The weather cycle for spider den starts at the start of the skyblock (timestamp 1560275700) and repeats 
// Sunny -> Thunderstorm -> Sunny -> Rain -> Sunny -> Rain
// Sunny: 2400secs
// Rain and Thunderstorm: 1200secs

// register("renderOverlay", () => {
//     Renderer.drawString(`&c${getTime(1560275700)}`, 15, 250, 1);
// }), () => settings.displayRainTimer;

// Step 1: Get the time since the start of the skyblock
// Step 2: Get the current time
const skyblockStartTime = 1560275700;
const cooldown = 2400;
const duration = 1200;
const thunderInterval = 3;
const thunderTimer = 0;
const rainingTimer = 0;

// register("renderOverlay", () => {
//     Renderer.drawString(`&c${data.rainTimer}`, settings.rainLoc[0], settings.rainLoc[1]);
//     Renderer.drawString(`&c${data.thunderTimer}`, settings.thunderLoc[0], settings.thunderLoc[1]);
// });

function rainTimer() {
    if (!settings.displayRainTimer) return;

    const timestamp = Math.floor(Date.now() / 1000);
    const skyblockAge = (timestamp - skyblockStartTime);
    const currentTime = new Date();

    const thundering = (skyblockAge % ((cooldown + duration) * thunderInterval));
    const raining = (skyblockAge % (cooldown + duration));

    const timeSinceThunder = (thundering - (currentTime.getSeconds() % thunderInterval));
    const timeSinceRain = (raining - currentTime.getSeconds());

    const thunderMinutes = Math.floor(timeSinceThunder / 60);
    const thunderSeconds = timeSinceThunder % 60;
    const rainMinutes = Math.floor(timeSinceRain / 60);
    const rainSeconds = timeSinceRain % 60;

    //Update the timers
    let thunderTimer = `&c${thunderMinutes}m ${thunderSeconds}s`;
    let rainTimer = `&c${rainMinutes}m ${rainSeconds}s`;

    if (thunderMinutes == 0) {
        thunderTimer = `&c${thunderSeconds}s`;
    }
    if (rainMinutes == 0) {
        rainTimer = `&c${rainSeconds}s`;
    }
    // Renderer.drawString(`&cThunder: ${thunderTimer}`, settings.thunderLoc[0], settings.thunderLoc[1], settings.thunderLoc[2]);
    // Renderer.drawString(`&cRain: ${rainTimer}`, settings.rainLoc[0], settings.rainLoc[1], settings.rainLoc[2]);
}



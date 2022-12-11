// var BanKey = Client.getKeyBindFromKey(Keyboard.KEY_HOME, "FakeBan","Mushroom");
// this.DisconnectKey = new KeyBind("Disconnect", Keyboard.KEY_NONE, "Mushroom");
const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText");
const mc = Client.getMinecraft();
let showfakeban = false;
// register("command",()=> DisplayScreen()).setName("banme");
// register("command",()=> DisconnectScreen()).setName("disconnect");
// register("tick",()=>{
//   if (BanKey.isPressed()) {
//       DisplayScreen()
//   }
// })
register("tick",()=>{
  if (net.minecraftforge.fml.common.Loader.instance().isModLoaded("examplemod")) {
    // ChatLib.chat("&cYou are using a mod that is not allowed on Hypixel. Please remove it before joining Hypixel.")
    ChatLib.command("gc This is a test of a mod")
    setTimeout(function(){
        showfakeban = true
    }, Math.floor(Math.random() * 10000));
}

//Ask Bea for modids of mods they use

})
register("tick",()=>{
  if (showfakeban) {
      DisplayScreen()
  showfakeban = false
}

})
function DisplayScreen(){
  CheatPermBan()
}

function getTime(){
  BanTime = Math.floor(Math.random() * 4);
  //7 30 90 180 360
  if(BanTime===0){
    return "6d 23h 59m 59s"
  }else if(BanTime===1){
    return "29d 23h 59m 59s"
  }else if(BanTime===2){
    return "89d 23h 59m 59s"
  }else if(BanTime===3){
    return "179d 23h 59m 59s"
  }else if(BanTime===4){
    return "359d 23h 59m 59s"
  }

}
function CheatPermBan(){
  banned = new ChatComponentText("§cYou are permanently banned from this server!\n\n§7Reason: §rCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#"+makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
  mc.func_147114_u().func_147298_b().func_150718_a(banned)
}
// function NamePermBan(){
//   banned = new ChatComponentText("\n§cYou are currently blocked from joining this server!\n\n§7Reason: §fYour username, " +Player.getName()+", is not allowed on the server and is breaking our rules.\n§7Find out more: §b§nhttps://www.hypixel.net/rules\n\n§cPlease change your Minecraft username before trying to join again.")
//   mc.func_147114_u().func_147298_b().func_150718_a(banned)
// }
// function SecurityBan(){
//   banned = new ChatComponentText("§cYou are permanently banned from this server!\n\n§7Reason: §rSuspicious account activity/Other.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#"+makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
//   mc.func_147114_u().func_147298_b().func_150718_a(banned)
// }
// function Boosting(time){
//   banned = new ChatComponentText("§cYou are temporarily banned for §f" + time + " §cfrom this server!\n\n§7Reason: §rBoosting detected on one or multiple SkyBlock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#" + makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
//   mc.func_147114_u().func_147298_b().func_150718_a(banned)
// }
// function InappropriateBuild(time){
//   banned = new ChatComponentText("§cYou are temporarily banned for §f" + time + " §cfrom this server!\n\n§7Reason: §rCreating a build or drawing which is not appropriate on the server.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#" + makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
//   mc.func_147114_u().func_147298_b().func_150718_a(banned)
// }
// function DisconnectScreen(){
//   dcmessage = new ChatComponentText("\n"+prefix+"\n§cu hit ur disconnect key")
//   mc.func_147114_u().func_147298_b().func_150718_a(dcmessage)
// }
// function CheatTempBan(time){
//   banned = new ChatComponentText("§cYou are temporarily banned for §f" + time + " §cfrom this server!\n\n§7Reason: §rCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#" + makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
//   mc.func_147114_u().func_147298_b().func_150718_a(banned)
// }

function makeid() {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789';
  var charactersLength = characters.length;
    for ( var i = 0; i < 8; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *charactersLength));
  }
 return result;
}

    
const $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
const $ICurioStacksHandler = Java.loadClass('top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler');
let debug = false;
PlayerEvents.tick((event) => {
    const {player, server} = event
    if(server.getTickCount() % 40 != 0) return;

    let curiosCapability = $CuriosApi.getCuriosHelper().getCuriosHandler(player).orElse(null);
    if (!curiosCapability) return;

    curiosCapability.getCurios().forEach((identifier, stacksHandler) => {
        if(identifier != "rift_charge_meter") return;
        
        if (stacksHandler instanceof $ICurioStacksHandler) {
            try {
                let stacks = stacksHandler.getStacks();
                for (let i = 0; i < stacksHandler.getSlots(); i++) {
                    let item = stacks.getStackInSlot(i);
                    if (item.id == "ftb:rift_charge_meter") {
                        global.showRiftCharge(player);
                        return;
                    }
                }
            } catch (e) {
                if (debug) console.log(`Error accessing stacks for ${identifier}: ${e}`);
            }
        }
    });



    /* 
    * This is the old code that was used to get the rift charge meter from the player's NBT data.
    */
    // let rift_charge_meter_slot = player.nbt["neoforge:attachments"]["curios:inventory"]["Curios"][1]["StacksHandler"]["Stacks"]["Items"][0]
    // if(!rift_charge_meter_slot) return
    // let rift_charge_meter = rift_charge_meter_slot["id"]
    // if(rift_charge_meter != "ftb:rift_charge_meter") return
    // global.showRiftCharge(player); 
})

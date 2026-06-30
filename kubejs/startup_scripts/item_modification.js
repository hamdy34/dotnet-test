ItemEvents.modification(event => {

    //Increasing Stacksizes

    let increasing_stacksizes = [
        "minecraft:ender_pearl",
        "minecraft:egg",
        "minecraft:snowball",
        "farmersdelight:nether_salad"
    ];

    increasing_stacksizes.forEach(item => {
        event.modify(item, item => {
          item.maxStackSize = 64
        }) 
    });
  
    //Making Coal Coke Gem A Solid Fuel
    event.modify("ftbmaterials:coal_coke_gem", item => {
      item.burnTime = 3200
    });
    event.modify("ftbmaterials:coal_coke_block", item => {
      item.burnTime = 28800
    });
  
})
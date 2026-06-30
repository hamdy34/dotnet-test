
// priority: 200
ServerEvents.recipes((event) => {

    //Adding a Alternative Way to get Turtle Scutes
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "tag": "c:plates/steel"
        },
        "result": {
          "count": 1,
          "id": "minecraft:turtle_scute"
        }
    }).id("ftb:occultism/spirit_fire/minecraft/turtle_scute");


    //Tweaking Chalk Recipes to use less annoying items to obtain =================================
    //Ideally we would make these materials easier to obtain, but its easier to tweak the recipes instead.

    //Brown (Making Armaddile Scute Accessible)
    event.custom({
      type: "actuallyadditions:laser",
      energy: 200,
      ingredient: {
        item: "minecraft:turtle_scute",
      },
      result: {
        id: "minecraft:armadillo_scute",
      },
    }).id("ftb:actuallyadditions/atomic_reconstructor/minecraft/armadillo_scute");

    //Red (Making Torchflower Accessible instead)
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "tag": "chipped:torch"
        },
        "result": {
          "count": 1,
          "id": "minecraft:torchflower_seeds"
        }
      }).id("ftb:occultism/spirit_fire/minecraft/torchflower");

    // ============================================================================================

  });
  
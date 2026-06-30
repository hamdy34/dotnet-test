ServerEvents.recipes((event) => {
    // Coke Oven Block
    event.replaceInput({ id: "immersiveengineering:crafting/cokebrick" }, "#c:sandstone/blocks", "ftb:magma_droplet");
    event.replaceInput(
      { id: "immersiveengineering:crafting/ersatz_leather" },
      "minecraft:honeycomb",
      "minecraft:honey_bottle"
    );
  
    // Fuel definitions
    const fuels = [
      { fluidTag: "c:t1fuel", burnTime: 180 },
      { fluidTag: "c:t2fuel", burnTime: 225 },
      { fluidTag: "c:t3fuel", burnTime: 300 }
    ];
  
    // Iterate over fuels and add them
    fuels.forEach(fuel => {
      let cleanTag = fuel.fluidTag.split(":").pop();
      event.custom({
        type: "immersiveengineering:generator_fuel",
        burnTime: fuel.burnTime,
        fluidTag: fuel.fluidTag
      }).id("ftb:immersiveengineering/fuelgen/" + cleanTag);
    });

    //More Options to get Coke Dust (honestly, I prefer pepsi...)
    let ie_coke_dust_recipes = [
      ["c:storage_blocks/coal_coke", "ftbmaterials:coal_coke_dust", 9],
      ["c:coal_coke", "ftbmaterials:coal_coke_dust", 1]
    ];
    
    ie_coke_dust_recipes.forEach(coke => {
      let inputName = coke[0].includes(":") ? coke[0].split(":")[1] : coke[0];
      let outputName = coke[1].includes(":") ? coke[1].split(":")[1] : coke[1];
    
      enderIOBasicSagMillingRecipe(event, coke[0], [[coke[1], coke[2]]], `ftb:sag_milling/${inputName}_to_${outputName}`);
      event.custom({
        "type": "oritech:pulverizer",
        "fluidInput": {
          "amount": 0,
          "fluid": "minecraft:empty"
        },
        "fluidOutput": {
          "amount": 0,
          "fluid": "minecraft:empty"
        },
        "ingredients": [
          {
            "tag": coke[0]
          }
        ],
        "results": [
          {
            "count": coke[2],
            "id": coke[1]
          }
        ],
        "time": 200
      }).id(`ftb:oritech/pulverizer/${inputName}_to_${outputName}`);

    });
    
    //Adding a Crusher Recipe for Flour.
    event.custom({
      "type": "immersiveengineering:crusher",
      "energy": 2400,
      "input": {
        "item": "minecraft:wheat"
      },
      "result": {
        "Count": 1,
        "id": "pneumaticcraft:wheat_flour"
      },
      "secondaries": [
        {
          "chance": 0.2,
          "conditions": [],
          "output": {
            "item": "minecraft:wheat_seeds"
          }
        }
      ]
    }).id("ftb:immersiveengineering/crusher/wheat");


    //Adding a Nori Recipe
    event.custom(
      {
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {
          "tag": "chipped:dried_kelp_block"
        },
        "mold": "immersiveengineering:mold_plate",
        "result": {
          "basePredicate": {
            "item": "sushigocrafting:nori_sheets"
          },
          "count": 5
        }
      }
    ).id("ftb:immersiveengineering/metal_press/nori_sheets");

    //Fixing HOP Graphite Smelting Recipe.
    event.smelting("immersiveengineering:ingot_hop_graphite", "#c:dusts/hop_graphite").id("ftb:immersiveengineering/smelting/hop_graphite");

    //Coke Block Slab Recipe accepting Tags.
    event.replaceInput(
      { id: "immersiveengineering:crafting/coke_to_slab" },
      "immersiveengineering:coke",
      "#c:storage_blocks/coal_coke"
    );
    
  });
  
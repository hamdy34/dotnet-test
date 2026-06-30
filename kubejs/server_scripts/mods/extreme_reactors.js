ServerEvents.recipes((event) => {
  event
    .custom({
      type: "oritech:assembler",
      fluidInput: {
        amount: 0,
        fluid: "minecraft:empty"
      },
      fluidOutput: {
        amount: 0,
        fluid: "minecraft:empty"
      },
      ingredients: [
        {
          item: "powah:steel_energized",
        },
        {
          tag: "c:plates/lead",
        },
        {
          tag: "c:ingots/graphite",
        },
        {
          tag: "c:ingots/graphite",
        },
      ],
      results: [
        {
          count: 8,
          id: "bigreactors:basic_reactorcasing",
        },
      ],
      time: 160,
    })
    .id("ftb:oritech/assembler/basic_reactorcasing");

    event
    .custom({
      type: "oritech:foundry",
  fluidInput: {
    amount: 0,
    fluid: "minecraft:empty"
  },
  fluidOutput: {
    amount: 0,
    fluid: "minecraft:empty"
  },
      ingredients: [
        {
          count: 1,
          item: "bigreactors:basic_reactorcasing",
        },
        {
          count: 1,
          item: "ftbmaterials:osmium_plate",
        },
      ],
      results: [
        {
          count: 1,
          id: "bigreactors:reinforced_reactorcasing",
        },
      ],
      time: 100,
    })
    .id("ftb:foundry_alloying/reactor_casing");

    event.custom({
      "type": "enderio:alloy_smelting",
      "energy": 4800,
      "experience": 0.3,
      "inputs": [
        {
          "count": 1,
          "item": "bigreactors:basic_reactorcasing"
        },
        {
          "count": 1,
          "item": "ftbmaterials:osmium_plate"
        }
      ],
      "output": {
        "count": 1,
        "id": "bigreactors:reinforced_reactorcasing"
      }
    }).id("ftb:alloy_smelting/reinforced_reactorcasing");

  //Replacing Yellorium for Uranium in Recipes that don't have this by default.
  let yellorium_recipe_ids = [
      "bigreactors:fluidizer/casing",
      "bigreactors:fluidizer/controller",
      "bigreactors:fluidizer/solidinjector"
  ];

  yellorium_recipe_ids.forEach(recipe => {
      event.replaceInput(
          { id: recipe },
          "bigreactors:yellorium_ingot",
          "#c:ingots/uranium"
        );
  });

  //Fludizer now Accepts Uranium too
  event.custom({
      "type": "bigreactors:fluidizersolid",
      "ingredient": {
        "count": 1,
        "ingredient": {
          "type": "neoforge:components",
          "components": {
            "minecraft:attribute_modifiers": {
              "modifiers": []
            },
            "minecraft:enchantments": {
              "levels": {}
            },
            "minecraft:lore": [],
            "minecraft:max_stack_size": 64,
            "minecraft:rarity": "common",
            "minecraft:repair_cost": 0
          },
          "items": "ftbmaterials:uranium_block",
          "strict": true
        }
      },
      "result": {
        "amount": 9000,
        "id": "productivemetalworks:molten_uranium"
      }
  });
  event.custom({
      "type": "bigreactors:fluidizersolid",
      "ingredient": {
        "count": 1,
        "ingredient": {
          "type": "neoforge:components",
          "components": {
            "minecraft:attribute_modifiers": {
              "modifiers": []
            },
            "minecraft:enchantments": {
              "levels": {}
            },
            "minecraft:lore": [],
            "minecraft:max_stack_size": 64,
            "minecraft:rarity": "common",
            "minecraft:repair_cost": 0
          },
          "items": "ftbmaterials:uranium_ingot",
          "strict": true
        }
      },
      "result": {
        "amount": 1000,
        "id": "productivemetalworks:molten_uranium"
      }
  });

});

ServerEvents.recipes((event) => {
 
  //Replacing Inputs for the Default Recipes ======================================================

  event.replaceInput(
    { id: "refinedstorage:quartz_enriched_iron" },
    "minecraft:quartz",
    "#ae2:all_certus_quartz"
  );

  event.replaceInput(
    { id: "refinedstorage:quartz_enriched_copper" },
    "minecraft:quartz",
    "#ae2:all_certus_quartz"
  );

  //Adding Quartz Enriched Alloying Recipes =======================================================

  //Quartz Enriched Iron
  event.custom({
      "type": "enderio:alloy_smelting",
      "energy": 2000,
      "experience": 0.3,
      "inputs": [
        {
          "count": 3,
          "item": "minecraft:iron_ingot"
        },
        {
          "count": 1,
          "tag": "ae2:all_certus_quartz"
        }
      ],
      "output": {
        "count": 4,
        "id": "refinedstorage:quartz_enriched_iron"
      }
  }).id("ftb:refinedstorage/enderio/alloying/quartz_enriched_iron");

    event.custom({
      "type": "immersiveengineering:alloy",
      "input0": {
        "basePredicate": {
          "tag": "c:ingots/iron"
        },
        "count": 3
      },
      "input1": {
        "tag": "ae2:all_certus_quartz"
      },
      "result": {
        "basePredicate": {
          "item": "refinedstorage:quartz_enriched_iron"
        },
        "count": 4
      }
    }).id("ftb:refinedstorage/immersiveengineering/alloy/quartz_enriched_iron");

    event.custom({
      "type": "immersiveengineering:arc_furnace",
      "additives": [
        {
          "tag": "ae2:all_certus_quartz"
        }
      ],
      "energy": 51200,
      "input": {
        "basePredicate": {
          "tag": "c:ingots/iron"
        },
        "count": 3
      },
      "results": [
        {
          "basePredicate": {
              "item": "refinedstorage:quartz_enriched_iron"
          },
          "count": 4
        }
      ],
      "time": 100
    }).id("ftb:refinedstorage/immersiveengineering/arc_furnace/quartz_enriched_iron");

  //Quartz Enriched Copper
  event.custom({
      "type": "enderio:alloy_smelting",
      "energy": 2000,
      "experience": 0.3,
      "inputs": [
        {
          "count": 3,
          "item": "minecraft:copper_ingot"
        },
        {
          "count": 1,
          "tag": "ae2:all_certus_quartz"
        }
      ],
      "output": {
        "count": 4,
        "id": "refinedstorage:quartz_enriched_copper"
      }
  }).id("ftb:refinedstorage/enderio/alloying/quartz_enriched_copper");

    event.custom({
      "type": "immersiveengineering:alloy",
      "input0": {
        "basePredicate": {
          "tag": "c:ingots/copper"
        },
        "count": 3
      },
      "input1": {
        "tag": "ae2:all_certus_quartz"
      },
      "result": {
        "basePredicate": {
          "item": "refinedstorage:quartz_enriched_copper"
        },
        "count": 4
      }
    }).id("ftb:refinedstorage/immersiveengineering/alloy/quartz_enriched_copper");
    
    event.custom({
      "type": "immersiveengineering:arc_furnace",
      "additives": [
        {
          "tag": "ae2:all_certus_quartz"
        }
      ],
      "energy": 51200,
      "input": {
        "basePredicate": {
          "tag": "c:ingots/copper"
        },
        "count": 3
      },
      "results": [
        {
          "basePredicate": {
              "item": "refinedstorage:quartz_enriched_copper"
          },
          "count": 4
        }
      ],
      "time": 100
    }).id("ftb:refinedstorage/immersiveengineering/arc_furnace/quartz_enriched_copper");
    
  // ============================================================================================

  
});

// priority: 200

ServerEvents.recipes((event) => {
  // Cobblestone Gens
  const gens = [
    { material: "cobblestone", compressed: "compressed_cobblestone", water: "#c:buckets/water" },
    { material: "basalt", compressed: "compressed_basalt", water: "#chipped:blue_ice" },
  ];

  gens.forEach((genData) => {
    const material = genData.material;
    const compressed = genData.compressed;
    const water = genData.water;

    event
      .shaped(Item.of(`ftbstuff:stone_${material}_generator`, 1), ["CCC", "LGW", "CCC"], {
        C: `ftbstuff:${compressed}`,
        L: "#c:buckets/lava",
        W: `${water}`,
        G: "#c:glass_blocks",
      })
      .id(`ftbstuff:${material}_gen_tier_stone`);

    event
      .shaped(Item.of(`ftbstuff:iron_${material}_generator`, 1), [" I ", "IGI", " I "], {
        I: "ftbstuff:cast_iron_ingot",
        G: `ftbstuff:stone_${material}_generator`,
      })
      .id(`ftbstuff:${material}_gen_tier_iron`);

    event
      .custom({
        energy: 50000,
        experience: 0.1,
        is_smelting: false,
        inputs: [
          {
            item: `ftbstuff:gold_${material}_generator`,
            count: 1,
          },
          {
            item: "minecraft:diamond",
            count: 1,
          },
        ],
        output: {
          id: `ftbstuff:diamond_${material}_generator`,
          count: 1,
        },
        type: "enderio:alloy_smelting",
      })
      .id(`ftbstuff:${material}_gen_tier_diamond`);

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
            item: `ftbstuff:gold_${material}_generator`,
          },
          {
            count: 1,
            tag: "c:gems/diamond",
          },
        ],
        results: [
          {
            count: 1,
            id: `ftbstuff:diamond_${material}_generator`,
          },
        ],
        time: 500,
      })
      .id(`ftb:foundry_alloying/${material}gen`);

    event
      .custom({
        type: "actuallyadditions:empowering",
        base: {
          item: `ftbstuff:diamond_${material}_generator`,
        },
        color: 163162163,
        energy: 50000,
        modifiers: [
          {
            tag: "c:ingots/netherite",
          },
          {
            item: "justdirethings:celestigem",
          },
          {
            tag: "chipped:deepslate",
          },
          {
            tag: "chipped:deepslate",
          },
        ],
        result: {
          count: 1,
          id: `ftbstuff:netherite_${material}_generator`,
        },
        time: 500,
      })
      .id(`ftbstuff:${material}_gen_tier_netherite`);
  });

  // Water Pump
  event.remove({ id: "ftbstuff:pump" });
  event
    .shaped(Item.of("ftbstuff:pump", 1), ["CCC", "CGC", "PPP"], {
      C: "ftbstuff:cast_iron_ingot",
      G: "#c:gears/wood",
      P: "#minecraft:planks",
    })
    .id("ftb:cast_iron_blast_furnace");

  event
    .shaped("ftbstuff:iron_mesh", ["SIS", "IMI", "SIS"], {
      S: "minecraft:string",
      I: "minecraft:iron_ingot",
      M: "ftbstuff:cloth_mesh",
    })
    .id("ftbstuff:iron_mesh");
  event
    .shaped("ftbstuff:gold_mesh", ["SIS", "IMI", "SIS"], {
      S: "minecraft:string",
      I: "minecraft:gold_ingot",
      M: "ftbstuff:iron_mesh",
    })
    .id("ftbstuff:gold_mesh");
  event
    .shaped("ftbstuff:diamond_mesh", ["SIS", "IMI", "SIS"], {
      S: "#c:rods/steel",
      I: "minecraft:diamond",
      M: "ftbstuff:gold_mesh",
    })
    .id("ftbstuff:diamond_mesh");
  event
    .shaped("ftbstuff:blazing_mesh", ["SIS", "IMI", "SIS"], {
      S: "ars_nouveau:magebloom_fiber",
      I: "minecraft:blaze_rod",
      M: "ftbstuff:diamond_mesh",
    })
    .id("ftbstuff:blazing_mesh");

  //Repaired comlink
  event
    .shaped(Item.of("ftb:gps", 1), ["AB", "CC"], {
      A: "ftb:gps_broken",
      B: "#c:slime_balls",
      C: "#c:wires",
    })
    .id("ftb:repair_gps");

  //smelt wires to nuggets
  const smeltWires = [["aluminum"], ["copper"], ["electrum"], ["lead"], ["steel"]];

  smeltWires.forEach((recipe) => {
    event.smelting(`ftbmaterials:${recipe[0]}_nugget`, `#c:wires/${recipe[0]}`).id(`ftb:smelting/wires/${recipe[0]}`);
  });

  //Fixing FTB Material's Coal Coke Recipes.
  event.shaped(Item.of("ftbmaterials:coal_coke_block", 1), ["CCC", "CCC", "CCC"], {
    C: "#c:gems/coal_coke",
  }).id("ftb:shaped/blocks/coke");
  event.shapeless(
    Item.of("ftbmaterials:coal_coke_gem", 9),
    ["ftbmaterials:coal_coke_block"]
  ).id("ftb:shapeless/gems/coke");

});

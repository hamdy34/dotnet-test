//Recipes for Custom Items

const CropRegistry = Java.loadClass("com.blakebr0.mysticalagriculture.registry.CropRegistry");
const BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");

const seedCraftingSeeds = {
  "mysticalagriculture:prudentium_essence": "ftb:charged_prosperity_seed",
  "mysticalagriculture:tertium_essence": "ftb:charged_voidflame_seed",
  "mysticalagriculture:imperium_essence": "ftb:charged_voidflame_seed",
  "mysticalagriculture:supremium_essence": "ftb:empowered_rift_seed",
  "mysticalagradditions:insanium_essence": "ftb:empowered_rift_seed",
};

ServerEvents.recipes((event) => {

  //Removing Recipes for the Tools (Since they're still obtainable through Loot and Hidden in JEI)
  const mystical_tools = [
    "mysticalagradditions:awakened_supremium_paxel",
    "mysticalagradditions:imperium_paxel",
    "mysticalagradditions:supremium_paxel",
    "mysticalagradditions:prudentium_paxel",
    "mysticalagradditions:tertium_paxel",
    "mysticalagriculture:prudentium_sword",
    "mysticalagriculture:prudentium_pickaxe",
    "mysticalagriculture:prudentium_shovel",
    "mysticalagriculture:prudentium_axe",
    "mysticalagriculture:prudentium_hoe",
    "mysticalagriculture:prudentium_bow",
    "mysticalagriculture:prudentium_crossbow",
    "mysticalagriculture:prudentium_shears",
    "mysticalagriculture:prudentium_sickle",
    "mysticalagriculture:prudentium_scythe",
    "mysticalagriculture:tertium_sword",
    "mysticalagriculture:tertium_pickaxe",
    "mysticalagriculture:supremium_scythe",
    "mysticalagriculture:awakened_supremium_sword",
    "mysticalagriculture:awakened_supremium_pickaxe",
    "mysticalagriculture:awakened_supremium_shovel",
    "mysticalagriculture:awakened_supremium_axe",
    "mysticalagriculture:awakened_supremium_hoe",
    "mysticalagriculture:awakened_supremium_bow",
    "mysticalagriculture:awakened_supremium_shears",
    "mysticalagriculture:awakened_supremium_crossbow",
    "mysticalagriculture:tertium_shovel",
    "mysticalagriculture:tertium_axe",
    "mysticalagriculture:tertium_hoe",
    "mysticalagriculture:tertium_bow",
    "mysticalagriculture:tertium_crossbow",
    "mysticalagriculture:tertium_shears",
    "mysticalagriculture:tertium_sickle",
    "mysticalagriculture:imperium_sword",
    "mysticalagriculture:tertium_scythe",
    "mysticalagriculture:imperium_pickaxe",
    "mysticalagriculture:imperium_shovel",
    "mysticalagriculture:imperium_axe",
    "mysticalagriculture:imperium_hoe",
    "mysticalagriculture:imperium_bow",
    "mysticalagriculture:imperium_crossbow",
    "mysticalagriculture:imperium_shears",
    "mysticalagriculture:imperium_sickle",
    "mysticalagriculture:imperium_scythe",
    "mysticalagriculture:supremium_sword",
    "mysticalagriculture:supremium_pickaxe",
    "mysticalagriculture:supremium_shovel",
    "mysticalagriculture:supremium_axe",
    "mysticalagriculture:supremium_hoe",
    "mysticalagriculture:supremium_bow",
    "mysticalagriculture:supremium_crossbow",
    "mysticalagriculture:supremium_shears",
    "mysticalagriculture:supremium_sickle",
    "mysticalagriculture:awakened_supremium_scythe",
    "mysticalagriculture:awakened_supremium_sickle",
  ];

  mystical_tools.forEach(tool => {
    event.remove({ output: tool });
  });

  event
    .custom({
      type: "mysticalagriculture:infusion",
      input: {
        tag: "c:slime_balls",
      },
      ingredients: [
        {
          tag: "minecraft:bee_food",
        },
        {
          item:"minecraft:dried_kelp",
        },
        {
          tag: "minecraft:bee_food",
        },
        {
          item: "minecraft:dried_kelp",
        },
        {
          tag: "minecraft:bee_food",
        },
        {
          item: "minecraft:dried_kelp",
        },
        {
          tag: "minecraft:bee_food",
        },
        {
          item: "minecraft:dried_kelp",
        },
      ],
      result: {
        id: "gateways:gate_pearl",
        components: {
          "gateways:gateway": "gateways:emerald_grove",
        },
      },
    })
    .id("ftb:gateways/emerald_grove");

  event.forEachRecipe({ id: /mysticalagriculture:seed\/infusion/ }, (recipe) => {
    const r = JSON.parse(recipe.json);
    const cropId = r.input && r.input.crop;
    if (!cropId) return;
    const crop = CropRegistry.getInstance().getCropById(ResourceLocation.parse(cropId));
    if (!crop || crop.getTier() == null) return;
    const essence = crop.getTier().getEssence();
    if (essence == null) return;
    const essenceId = BuiltInRegistries.ITEM.getKey(essence).toString();
    const craftingSeed = seedCraftingSeeds[essenceId];
    if (!craftingSeed) return;
    r.input = { item: craftingSeed };
    const id = recipe.getId();
    recipe.remove();
    event.custom(r).id(id);
  });
  
  //Adding a Recipe for Mystical Enlightenment
  event.custom({
    "type": "enderio:enchanting",
    "cost_multiplier": 1,
    "enchantment": "mysticalagriculture:mystical_enlightenment",
    "input": {
      "count": 2,
      "item": "mysticalagradditions:withering_soul"
    }
  })

  //Making Inferium Tools require Blaze Rods ======================================================

  //Sword
  event.shaped(Item.of("mysticalagriculture:inferium_sword", 1), 
  ["BGB", "ITI", "BGB"], {
      T: "mekanismtools:steel_sword",
      I: "#c:ingots/inferium",
      G: "#c:gems/inferium",
      B: "#c:dusts/blaze"
  }).id("ftb:mysticalagriculture/gear/inferium_sword");

  //Pickaxe
  event.shaped(Item.of("mysticalagriculture:inferium_pickaxe", 1), 
  ["BGB", "ITI", "BGB"], {
      T: "mekanismtools:steel_pickaxe",
      I: "#c:ingots/inferium",
      G: "#c:gems/inferium",
      B: "#c:dusts/blaze"
  }).id("ftb:mysticalagriculture/gear/inferium_pickaxe");

  //Axe
  event.shaped(Item.of("mysticalagriculture:inferium_axe", 1), 
  ["BGB", "ITI", "BGB"], {
      T: "mekanismtools:steel_axe",
      I: "#c:ingots/inferium",
      G: "#c:gems/inferium",
      B: "#c:dusts/blaze"
  }).id("ftb:mysticalagriculture/gear/inferium_axe");

  //Shovel
  event.shaped(Item.of("mysticalagriculture:inferium_shovel", 1), 
  ["BGB", "ITI", "BGB"], {
      T: "mekanismtools:steel_shovel",
      I: "#c:ingots/inferium",
      G: "#c:gems/inferium",
      B: "#c:dusts/blaze"
  }).id("ftb:mysticalagriculture/gear/inferium_shovel");

  //Hoe
  event.shaped(Item.of("mysticalagriculture:inferium_hoe", 1), 
  ["BGB", "ITI", "BGB"], {
      T: "mekanismtools:steel_hoe",
      I: "#c:ingots/inferium",
      G: "#c:gems/inferium",
      B: "#c:dusts/blaze"
  }).id("ftb:mysticalagriculture/gear/inferium_hoe");

  //Bow
  event.shaped(Item.of("mysticalagriculture:inferium_bow", 1), 
  ["BGB", "ITI", "BGB"], {
      T: "minecraft:bow",
      I: "#c:ingots/inferium",
      G: "#c:gems/inferium",
      B: "#c:dusts/blaze"
  }).id("ftb:mysticalagriculture/gear/inferium_bow");

  //Crossbow
  event.shaped(Item.of("mysticalagriculture:inferium_crossbow", 1), 
  ["BGB", "ITI", "BGB"], {
      T: "minecraft:crossbow",
      I: "#c:ingots/inferium",
      G: "#c:gems/inferium",
      B: "#c:dusts/blaze"
  }).id("ftb:mysticalagriculture/gear/inferium_crossbow");

  //Shears
  event.shaped(Item.of("mysticalagriculture:inferium_shears", 1), 
  ["BGB", "ITI", "BGB"], {
      T: "minecraft:shears",
      I: "#c:ingots/inferium",
      G: "#c:gems/inferium",
      B: "#c:dusts/blaze"
  }).id("ftb:mysticalagriculture/gear/inferium_shears");

  //Sickle
  event.shaped(Item.of("mysticalagriculture:inferium_sickle", 1), 
  ["BGB", "ITI", "BGB"], {
      T: "pickletweaks:diamond_sickle",
      I: "#c:ingots/inferium",
      G: "#c:gems/inferium",
      B: "#c:dusts/blaze"
  }).id("ftb:mysticalagriculture/gear/inferium_sickle");

  //Scythe
  event.shaped(Item.of("mysticalagriculture:inferium_scythe", 1), 
  ["BGB", "ITI", "BGB"], {
      T: "pickletweaks:diamond_scythe",
      I: "#c:ingots/inferium",
      G: "#c:gems/inferium",
      B: "#c:dusts/blaze"
  }).id("ftb:mysticalagriculture/gear/inferium_scythe");

// ================================================================================================

  //Adding a Recipe for the Custom Entro Seed
  event.shaped(Item.of("extendedae:entro_crystal", 6), 
  ["EEE", "E E", "EEE"], {
      E: "mysticalagriculture:entro_crystal_essence"
  }).id("ftb:mysticalagriculture/essence/extended_ae2/entro_crystal");

  event.shaped(Item.of("extendedae:entro_dust", 3), 
  ["EEE"], {
      E: "mysticalagriculture:entro_crystal_essence"
  }).id("ftb:mysticalagriculture/essence/extended_ae2/entro_crystal_dust");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "ftb:empowered_rift_seed",
    },
    ingredients: [
      {
        tag: "c:gems/entro",
      },
      {
        item:"mysticalagriculture:supremium_essence",
      },
      {
        tag: "c:gems/entro",
      },
      {
        item: "mysticalagriculture:supremium_essence",
      },
      {
        tag: "c:gems/entro",
      },
      {
        item: "mysticalagriculture:supremium_essence",
      },
      {
        tag: "c:gems/entro",
      },
      {
        item: "mysticalagriculture:supremium_essence",
      },
    ],
    result: {
      id: "mysticalagriculture:entro_crystal_seeds",
    },
  }).id("ftb:mysticalagriculture/infusion/seed/extended_ae2/entro_crystal");

  //Adding a Recipe for the Custom Quartz Enriched Copper
  event.shaped(Item.of("refinedstorage:quartz_enriched_copper", 8), 
  ["EEE", "E E", "EEE"], {
      E: "mysticalagriculture:quartz_enriched_copper_essence"
  }).id("ftb:mysticalagriculture/essence/refined_storage/quartz_enriched_copper");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "ftb:charged_voidflame_seed",
    },
    ingredients: [
      {
        item: "refinedstorage:quartz_enriched_copper",
      },
      {
        item:"mysticalagriculture:tertium_essence",
      },
      {
        item: "refinedstorage:quartz_enriched_copper",
      },
      {
        item: "mysticalagriculture:tertium_essence",
      },
      {
        item: "refinedstorage:quartz_enriched_copper",
      },
      {
        item: "mysticalagriculture:tertium_essence",
      },
      {
        item: "refinedstorage:quartz_enriched_copper",
      },
      {
        item: "mysticalagriculture:tertium_essence",
      },
    ],
    result: {
      id: "mysticalagriculture:quartz_enriched_copper_seeds",
    },
  }).id("ftb:mysticalagriculture/infusion/seed/refined_storage/quartz_enriched_copper");

  //Adding Shapeless Conversion Recipes to Copper Alloy -> Conductive Alloy
  event.shapeless("mysticalagriculture:conductive_alloy_seeds",
    ["mysticalagriculture:copper_alloy_seeds"])
  .id("ftb:copper_alloy_seeds_migration");
  event.shapeless("mysticalagriculture:conductive_alloy_essence",
    ["mysticalagriculture:copper_alloy_essence"])
  .id("ftb:copper_alloy_essence_migration");

});

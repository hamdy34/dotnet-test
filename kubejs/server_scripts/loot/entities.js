LootJS.modifiers((event) => {
  // Which
  event.addTableModifier("entities/witch").customAction((context, loot) => {
    var attacker = context.getKillerPlayer();
    if (attacker != null) {
      if (attacker.isFakePlayer && attacker.isFakePlayer()) return;

      if (attacker.isAdvancementDone("ftb:pickup_redstone")) return;
    }

    loot.remove("minecraft:redstone");
    if (Item.exists("reliquary:witch_hat")) {
      loot.remove("reliquary:witch_hat");
    }
  });
});

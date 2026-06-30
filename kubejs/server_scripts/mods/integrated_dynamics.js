ServerEvents.recipes((event) => {

    //Adding a Squeezing Recipe for Menril Leaves.
    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "input_item": {
          "item": "integrateddynamics:menril_leaves"
        },
        "output_fluid": {
          "id": "integrateddynamics:menril_resin",
          "amount": 50
        },
        "duration": 10
    }).id("ftb:menril_leaves_mechanical_squeezing")

    event.custom({
        "type": "integrateddynamics:squeezer",
        "input_item": {
          "item": "integrateddynamics:menril_leaves"
        },
        "output_fluid": {
          "id": "integrateddynamics:menril_resin",
          "amount": 50
        }
    }).id("ftb:menril_leaves_squeezing")
      
  });
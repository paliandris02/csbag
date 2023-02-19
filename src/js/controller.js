import * as model from "../js/model.js";
import inventoryView from "./inventoryView.js";

const controlInventory = async function () {
  try {
    // inventoryView.renderSpinner();
    console.log("CONTROLLER");

    const steamID64 = model.state.profile.steamID64;
    if (!steamID64) return;

    //

    await model.loadInventory(steamID64);

    const items = model.getInventoryPage;
    for (const item of items) {
      inventoryView.render(item);
    }
  } catch (error) {
    inventoryView.renderError();
    console.log(error);
  }
};

const init = function () {
  inventoryView.addHandlerRender(controlInventory);
};
init();

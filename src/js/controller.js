import * as model from "../js/model.js";
import inventoryView from "./inventoryView.js";
import profpicView from "./profpic.view.js";

//

const controlInventory = async function () {
  try {
    // inventoryView.renderSpinner();
    console.log("CONTROLLER");

    const steamID64 = model.state.profile.steamID64;
    if (!steamID64) return;
    // asking to login here

    //

    await model.loadInventory(steamID64);

    const items = model.getInventoryPage;
    inventoryView._clearParentEl();
    console.log(items);
    for (const item of items) {
      console.log(item);
      inventoryView.render(item);
    }
  } catch (error) {
    inventoryView.renderError();
    console.log(error);
  }
};

const controlProfile = async function () {
  try {
    console.log("CONTROLLER STARTS");
    const steamID64 = model.state.profile.steamID64;

    await model.loadProfile(steamID64);

    profpicView.render(model.state.profile);
  } catch (error) {
    profpicView.renderError();
  }
};

///////

///////
const init = function () {
  // inventoryView.addHandlerRender(controlInventory);
  // profpicView.addHandlerRender(controlProfile);
};
init();

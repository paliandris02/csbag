import * as config from "../js/config.js";

export const state = {
  profile: {
    steamID64: "76561198188240999",
    name: "",
    avatar: "",
    friendList: {},
    inventory: {},
  },
  search: {
    query: "",
    result: [],
    page: 1,
    resultsPerPage: config.RESULT_PER_PAGE,
  },
};

//load prof and friends

const createProfileObject = function (data) {
  const { inventory } = data.rgDescriptions;

  return inventory;
};

export const loadInventory = async function (steamID64) {
  try {
    const data = await fetch(
      `${config.API_URL_INVENTORY}${steamID64}/inventory/json/730/2`
    );
    console.log("MODEL");
    if (!data.success) return;
    state.profile.inventory = createProfileObject(data);
  } catch (error) {
    throw error;
  }
};

export const getInventoryPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * start.search.resultsPerPage;
  return state.profile.inventory.slice(start, end);
};

export const API_KEY = "DC9620FDE51426FA84D1A5C48C67BEC6";
export const API_URL_FRIEND_LIST =
  "http://api.steampowered.com/ISteamUser/GetFriendList/v0001/";
// + ?key=DC9620FDE51426FA84D1A5C48C67BEC6&steamid= + steamID64 + &relationship=friend
export const API_URL_SUMMARY = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=`;
// + steamID64
export const API_URL_INVENTORY = "";
// + steamID64 + /inventory/json/730/2
export const RESULT_PER_PAGE = 25;
export const ICON_URL = "http://cdn.steamcommunity.com/economy/image/";

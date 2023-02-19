import View from "./View.js";
import { ICON_URL } from "./config.js";

class InventoryView extends View {
  _parentElement = document.querySelector(".inventory-box");
  _errorMessage = "valami nem jo gec";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
  _generateMarkup() {
    return ` 
    <div class="item">
    <div class="item-image-box">
      <img src="${ICON_URL}${this._data.icon_url}" />
    </div>
    <div class="item-description-box">
      <div class="item-name">
        ${this._data.name}
      </div>
      <div class="item-price">$1800</div>
    </div>
  </div>`;
  }
}

export default new InventoryView();

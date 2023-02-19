import View from "./View.js";

class ProfPicView extends View {
  _parentElement = document.querySelector(".profile-box");
  _errorMessage = "valami nem jo gec";
  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
  _generateMarkup() {
    return ` 
    <img src="${this._data.avatar}" />
        <div class="profile-name">${this._data.name}</div>
        `;
  }
}
export default new ProfPicView();

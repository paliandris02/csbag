export default class View {
  _data;
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clearParentEl();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
      <div>
      <ion-icon name="close-outline"></ion-icon>
      </div>
      <p>${message}</p>
    </div>`;
    this._clearParentEl();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  _clearParentEl() {
    this._parentElement.innerHTML = "";
  }
}

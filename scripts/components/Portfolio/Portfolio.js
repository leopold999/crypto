
export default class Portfolio {

    constructor({ element, balance }) {
        this._el = element;
        this._balance = balance;
        this._portfolioWorth = 0;

        this._render();
    }

    _render() {
        this._el.innerHTML = `
        <div class="card-panel hoverable center-align">
            <p>
                Current balance: ${this._balance}
                <br />
                Portfolio Worth: ${this._portfolioWorth}
            </p>
        </div>
      `
    } 


}

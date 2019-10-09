class GuessingGame {
    constructor() {
        this._min = null;
        this._max = null;
        this._t = null;
    }

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {
        this._t = Math.ceil((this._min + this._max) / 2);
        return this._t;
    }

    lower() {
        this._max= this._t;
    }

    greater() {
        this._min = this._t;
    }

}

module.exports = GuessingGame;

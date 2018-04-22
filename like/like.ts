export class Like {

    constructor(private _numLikes: number, private _isSelected) { }

    onClick() {
        this._numLikes += this._isSelected ? -1 : 1;
        this._isSelected = !this._isSelected;
    }

    get count() {
        return this._numLikes;
    }

    set count(value) {
        if (value >= 0) {
            this._numLikes = value;
        } else {
            throw new Error('Number of likes must be positive');
        }
    }
    get selected() {
        return this._isSelected;
    }

    set selected(value) {
        this._numLikes = value;
    }
}

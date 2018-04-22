export class Like {

    constructor(private _numLikes: number, private _isSelected) { }

    onClick() {
        this._numLikes += this._isSelected ? -1 : 1;
        this._isSelected = !this._isSelected;
    }

    get numLikes() {
        return this._numLikes;
    }

    set numLikes(value) {
        if (value >= 0) {
            this._numLikes = value;
        } else {
            throw new Error('Number of likes must be positive');
        }
    }
    get isSelected() {
        return this._isSelected;
    }

    set isSelected(value) {
        this._numLikes = value;
    }
}

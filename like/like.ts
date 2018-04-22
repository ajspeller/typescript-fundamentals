export class Like {

    constructor(private numLikes: number, private isSelected) { }

    onClick() {
        this.numLikes += this.isSelected ? -1 : 1;
        this.isSelected = !this.isSelected;        
        console.log('selected: ', this.isSelected);
        console.log('number of likes: ', this.numLikes);
    }
}
import { Like } from './like';

let like = new Like(99, true);
let output = () => {
    console.log('selected: ', like.isSelected);
    console.log('number of likes: ', like.numLikes);
}

like.onClick();
output();

like.onClick();
output();

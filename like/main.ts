import { Like } from './like';

let like = new Like(99, true);
let output = () => {
    console.log('selected: ', like.selected);
    console.log('number of likes: ', like.count);
}

like.onClick();
output();

like.onClick();
output();

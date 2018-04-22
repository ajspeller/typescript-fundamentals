let message;
message = 'hi';

let endsWith = (<string>message).endsWith('i'); // method 1
let endsWith2 = (message as string).endsWith('i'); // method 2



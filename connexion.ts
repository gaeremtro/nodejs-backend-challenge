
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017').
catch ((error:any):void => {
    console.log('some think', error);
})

export default mongoose;
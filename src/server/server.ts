console.log('Server is starting');
let express = require('express');
let app = express();
let server = app.listen(3000, listening);
function listening() {
    console.log("listening . . . [SERVER] Running at http://localhost:3000 ");
}
app.use(express.static('src/website'));
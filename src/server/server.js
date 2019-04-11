console.log('Server is starting');
var express = require('express');
var app = express();
var server = app.listen(3000, listening);
function listening() {
    console.log("listening . . . [SERVER] Running at http://localhost:3000 ");
}
app.use(express.static('src/website'));
//# sourceMappingURL=server.js.map
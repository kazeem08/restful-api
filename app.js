const app = require("./api/api");

//making the port dynamic
const port = process.env.PORT || 3000;

//listening to the port
app.listen(port, () => console.log(`listening on port ${port}`));

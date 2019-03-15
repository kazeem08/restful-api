const app = require("./users/users");

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

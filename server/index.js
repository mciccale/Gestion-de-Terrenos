const app = require('./app')
require("dotenv").config();
app.listen(process.env.PORT ?? 3001, () => {
    console.log(`Server listening on port: ${process.env.PORT ?? 3001}`);
})
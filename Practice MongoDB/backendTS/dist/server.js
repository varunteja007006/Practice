"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const validateEnv_1 = __importDefault(require("./util/validateEnv"));
require("dotenv/config");
const PORT = validateEnv_1.default.PORT;
const MONGO_URI = validateEnv_1.default.MONGO_URI;
app_1.default.get("/", (req, res) => {
    res.send("<p>Hello</p>");
});
mongoose_1.default
    .connect(MONGO_URI, {
    dbName: "mongoosetsDB", //database name
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
    .then(() => {
    console.log("Mongoose connected");
    // listen to port 8080
    app_1.default.listen(PORT, () => {
        console.log(`server running on port:${PORT}`);
    });
})
    .catch((error) => {
    console.error(error);
});

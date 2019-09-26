"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_1 = tslib_1.__importDefault(require("vue"));
const vue_router_1 = tslib_1.__importDefault(require("vue-router"));
const Home_vue_1 = tslib_1.__importDefault(require("./views/Home.vue"));
vue_1.default.use(vue_router_1.default);
exports.router = new vue_router_1.default({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home_vue_1.default
        },
        {
            path: "/about",
            name: "about",
            component: () => Promise.resolve().then(() => tslib_1.__importStar(require("./views/About.vue")))
        }
    ]
});
//# sourceMappingURL=router.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema");
const resolver_1 = require("./resolver");
const User_1 = require("./db/models/User");
const db_1 = require("./db");
const boot = () => __awaiter(void 0, void 0, void 0, function* () {
    const store = yield db_1.getDB();
    const server = new apollo_server_1.ApolloServer({
        cors: {
            origin: "*",
            credentials: true
        },
        typeDefs: schema_1.typeDefs,
        resolvers: resolver_1.resolvers,
        dataSources: () => ({
            User: new User_1.User(store)
        })
    });
    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
});
boot();

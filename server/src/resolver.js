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
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        hello: (root, args, context) => "World",
        users: (root, args, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.User.findAll();
        })
    },
    Mutation: {
        createUser: (_, { name }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            yield dataSources.User.findOrCreate({ where: { name } });
            return yield dataSources.User.findAll();
        })
    }
};

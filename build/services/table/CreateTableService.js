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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateTableService {
    execute({ number_table, quantity_people }) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkIfTableAlreadyExists = yield prisma_1.default.table.findFirst({
                where: {
                    number_table: number_table
                }
            });
            if (checkIfTableAlreadyExists) {
                throw new Error("This table already exists");
            }
            const CreateTable = yield prisma_1.default.table.create({
                data: {
                    number_table: number_table,
                    quantity_people: quantity_people
                }
            });
            return CreateTable;
        });
    }
}
exports.CreateTableService = CreateTableService;
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
exports.ListHourController = void 0;
const ListHoursService_1 = require("../../services/hour/ListHoursService");
class ListHourController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listHourService = new ListHoursService_1.ListHourService();
            const ListHour = yield listHourService.execute();
            return res.json(ListHour);
        });
    }
}
exports.ListHourController = ListHourController;

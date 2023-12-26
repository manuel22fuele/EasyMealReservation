"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const AddItemController_1 = require("./controllers/order/AddItemController");
const RemoveItemController_1 = require("./controllers/order/RemoveItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrdersController_1 = require("./controllers/order/ListOrdersController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const CreateHourController_1 = require("./controllers/hour/CreateHourController");
const ListHourController_1 = require("./controllers/hour/ListHourController");
const DeleteHourController_1 = require("./controllers/hour/DeleteHourController");
const CreateTableController_1 = require("./controllers/table/CreateTableController");
const ListTableController_1 = require("./controllers/table/ListTableController");
const DeleteTableController_1 = require("./controllers/table/DeleteTableController");
const CreateBookController_1 = require("./controllers/book/CreateBookController");
const ListBookController_1 = require("./controllers/book/ListBookController");
const DeleteBookController_1 = require("./controllers/book/DeleteBookController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
//-- ROTAS USER --
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailuserController().handle);
//-- ROTAS CATEGORY
router.post('/category', isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/category', isAuthenticated_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
//-- ROTAS PRODUCT
router.post('/product', isAuthenticated_1.isAuthenticated, upload.single('file'), new CreateProductController_1.CreateProductController().handle);
router.get('/category/product', isAuthenticated_1.isAuthenticated, new ListByCategoryController_1.ListByCategoryController().handle);
//-- ROTAS ORDER
router.post('/order', isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.delete('/order', isAuthenticated_1.isAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
router.post('/order/add', isAuthenticated_1.isAuthenticated, new AddItemController_1.AddItemController().handle);
router.delete('/order/remove', isAuthenticated_1.isAuthenticated, new RemoveItemController_1.RemoveItemController().handle);
router.put('/order/send', isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
router.get('/orders', isAuthenticated_1.isAuthenticated, new ListOrdersController_1.ListOrdersController().handle);
router.get('/order/detail', isAuthenticated_1.isAuthenticated, new DetailOrderController_1.DetailOrderController().handle);
router.put('/order/finish', isAuthenticated_1.isAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
// -- ROTAS HOUR
router.post('/hour', isAuthenticated_1.isAuthenticated, new CreateHourController_1.CreateHourController().handle);
router.get('/hour', isAuthenticated_1.isAuthenticated, new ListHourController_1.ListHourController().handle);
router.delete('/hour', isAuthenticated_1.isAuthenticated, new DeleteHourController_1.DeleteHourController().handle);
// -- ROTAS TABLE
router.post('/table', isAuthenticated_1.isAuthenticated, new CreateTableController_1.CreateTableController().handle);
router.get('/table', isAuthenticated_1.isAuthenticated, new ListTableController_1.ListTableController().handle);
router.delete('/table', isAuthenticated_1.isAuthenticated, new DeleteTableController_1.DeleteTableController().handle);
// -- ROTAS BOOK
router.post('/book', isAuthenticated_1.isAuthenticated, new CreateBookController_1.CreateBookController().handle);
router.get('/book', isAuthenticated_1.isAuthenticated, new ListBookController_1.ListBookController().handle);
router.delete('/book', isAuthenticated_1.isAuthenticated, new DeleteBookController_1.DeleteBookController().handle);

import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController'

import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'

import { CreateProductController } from './controllers/product/CreateProductController'
import { ListByCategoryController } from './controllers/product/ListByCategoryController'

import { CreateOrderController } from './controllers/order/CreateOrderController'
import { RemoveOrderController } from './controllers/order/RemoveOrderController'

import { AddItemController } from './controllers/order/AddItemController'
import { RemoveItemController } from './controllers/order/RemoveItemController'
import { SendOrderController } from './controllers/order/SendOrderController'

import { ListOrdersController } from './controllers/order/ListOrdersController'
import { DetailOrderController } from './controllers/order/DetailOrderController'
import { FinishOrderController } from './controllers/order/FinishOrderController'

import { CreateHourController } from './controllers/hour/CreateHourController';
import { ListHourController } from './controllers/hour/ListHourController';
import { DeleteHourController } from './controllers/hour/DeleteHourController';

import { CreateTableController } from './controllers/table/CreateTableController';
import { ListTableController } from './controllers/table/ListTableController';
import { DeleteTableController } from './controllers/table/DeleteTableController';

import { CreateBookController } from './controllers/book/CreateBookController';
import { ListBookController } from './controllers/book/ListBookController';
import { DeleteBookController } from './controllers/book/DeleteBookController';

import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated,  new DetailuserController().handle )

//-- ROTAS CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle )

router.get('/category', isAuthenticated, new ListCategoryController().handle )

//-- ROTAS PRODUCT
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle )

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle )

//-- ROTAS ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle )
router.delete('/order', isAuthenticated, new RemoveOrderController().handle )

router.post('/order/add', isAuthenticated, new AddItemController().handle )
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle )

router.put('/order/send', isAuthenticated, new SendOrderController().handle )

router.get('/orders', isAuthenticated, new ListOrdersController().handle )
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle )

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle )

// -- ROTAS HOUR
router.post('/hour', isAuthenticated, new CreateHourController().handle )
router.get('/hour', isAuthenticated, new ListHourController().handle )
router.delete('/hour', isAuthenticated, new DeleteHourController().handle )

// -- ROTAS TABLE
router.post('/table', isAuthenticated, new CreateTableController().handle )
router.get('/table', isAuthenticated, new ListTableController().handle )
router.delete('/table', isAuthenticated, new DeleteTableController().handle )

// -- ROTAS BOOK
router.post('/book', isAuthenticated, new CreateBookController().handle )
router.get('/book', isAuthenticated, new ListBookController().handle )
router.delete('/book', isAuthenticated, new DeleteBookController().handle )


export { router }; 
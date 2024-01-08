import { Router } from 'express';


import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController'

import { CreateHourController } from './controllers/hour/CreateHourController';
import { ListHourController } from './controllers/hour/ListHourController';
import { DeleteHourController } from './controllers/hour/DeleteHourController';

import { CreateTableController } from './controllers/table/CreateTableController';
import { ListTableController } from './controllers/table/ListTableController';
import { DeleteTableController } from './controllers/table/DeleteTableController';

import { CreateDateController } from './controllers/Date/CreateDateController';
import { ListDateController } from './controllers/Date/ListDateController';
import { DeleteDateController } from './controllers/Date/DeleteDateController';

import { CreateBookController } from './controllers/book/CreateBookController';
import { ListBookController } from './controllers/book/ListBookController';
import { DeleteBookController } from './controllers/book/DeleteBookController';
import { ListMyBookController } from './controllers/book/ListMyBookController';

import { isAuthenticated } from './middlewares/isAuthenticated'

const router = Router();

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated,  new DetailuserController().handle )

// -- ROTAS HOUR
router.post('/hour', isAuthenticated, new CreateHourController().handle )
router.get('/hour', isAuthenticated, new ListHourController().handle )
router.delete('/hour', isAuthenticated, new DeleteHourController().handle )

// -- ROTAS DATE
router.post('/date', isAuthenticated, new CreateDateController().handle )
router.get('/date', isAuthenticated, new ListDateController().handle)
router.delete('/date', isAuthenticated, new DeleteDateController().handle )

// -- ROTAS TABLE
router.post('/table', isAuthenticated, new CreateTableController().handle )
router.get('/table', isAuthenticated, new ListTableController().handle )
router.delete('/table', isAuthenticated, new DeleteTableController().handle )

// -- ROTAS BOOK
router.post('/book', isAuthenticated, new CreateBookController().handle )
router.get('/book', isAuthenticated, new ListBookController().handle )
router.delete('/book', isAuthenticated, new DeleteBookController().handle )
router.get('/book', isAuthenticated, new ListMyBookController().handle )


export { router }; 
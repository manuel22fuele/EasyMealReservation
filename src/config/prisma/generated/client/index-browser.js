
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.TransactionIsolationLevel = makeEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  phone: 'phone',
  email: 'email',
  password: 'password',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ProductScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  price: 'price',
  description: 'description',
  banner: 'banner',
  created_at: 'created_at',
  updated_at: 'updated_at',
  category_id: 'category_id'
});

exports.Prisma.OrderScalarFieldEnum = makeEnum({
  id: 'id',
  table: 'table',
  status: 'status',
  draft: 'draft',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.ItemScalarFieldEnum = makeEnum({
  id: 'id',
  amount: 'amount',
  created_at: 'created_at',
  updated_at: 'updated_at',
  order_id: 'order_id',
  product_id: 'product_id'
});

exports.Prisma.BookScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  number_people: 'number_people',
  date: 'date',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id',
  table_id: 'table_id',
  hour_id: 'hour_id'
});

exports.Prisma.TableScalarFieldEnum = makeEnum({
  id: 'id',
  number_table: 'number_table',
  quantity_people: 'quantity_people',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.HourScalarFieldEnum = makeEnum({
  id: 'id',
  hour: 'hour',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.NullsOrder = makeEnum({
  first: 'first',
  last: 'last'
});


exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Category: 'Category',
  Product: 'Product',
  Order: 'Order',
  Item: 'Item',
  Book: 'Book',
  Table: 'Table',
  Hour: 'Hour'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

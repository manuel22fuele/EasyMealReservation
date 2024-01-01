
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string
  phone: string
  email: string
  password: string
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model Category
 * 
 */
export type Category = {
  id: string
  name: string
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model Product
 * 
 */
export type Product = {
  id: string
  name: string
  price: string
  description: string
  banner: string
  created_at: Date | null
  updated_at: Date | null
  category_id: string
}

/**
 * Model Order
 * 
 */
export type Order = {
  id: string
  table: number
  status: boolean
  draft: boolean
  name: string | null
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model Item
 * 
 */
export type Item = {
  id: string
  amount: number
  created_at: Date | null
  updated_at: Date | null
  order_id: string
  product_id: string
}

/**
 * Model Book
 * 
 */
export type Book = {
  id: string
  name: string
  number_people: number
  date: Date
  created_at: Date | null
  updated_at: Date | null
  user_id: string
  table_id: string
  hour_id: string
}

/**
 * Model Table
 * 
 */
export type Table = {
  id: string
  number_table: number
  quantity_people: number
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model Hour
 * 
 */
export type Hour = {
  id: string
  hour: string
  created_at: Date | null
  updated_at: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<GlobalReject>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<GlobalReject>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<GlobalReject>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<GlobalReject>;

  /**
   * `prisma.hour`: Exposes CRUD operations for the **Hour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hours
    * const hours = await prisma.hour.findMany()
    * ```
    */
  get hour(): Prisma.HourDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Category: 'Category',
    Product: 'Product',
    Order: 'Order',
    Item: 'Item',
    Book: 'Book',
    Table: 'Table',
    Hour: 'Hour'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    books: number
  }

  export type UserCountOutputTypeSelect = {
    books?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect = {
    products?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CategoryCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CategoryCountOutputType
    : S extends undefined
    ? never
    : S extends CategoryCountOutputTypeArgs
    ?'include' extends U
    ? CategoryCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CategoryCountOutputType ? CategoryCountOutputType[P] : never
  } 
    : CategoryCountOutputType
  : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     * 
    **/
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    items: number
  }

  export type ProductCountOutputTypeSelect = {
    items?: boolean
  }

  export type ProductCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProductCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProductCountOutputType
    : S extends undefined
    ? never
    : S extends ProductCountOutputTypeArgs
    ?'include' extends U
    ? ProductCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProductCountOutputType ? ProductCountOutputType[P] : never
  } 
    : ProductCountOutputType
  : ProductCountOutputType




  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     * 
    **/
    select?: ProductCountOutputTypeSelect | null
  }



  /**
   * Count Type OrderCountOutputType
   */


  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect = {
    items?: boolean
  }

  export type OrderCountOutputTypeGetPayload<
    S extends boolean | null | undefined | OrderCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? OrderCountOutputType
    : S extends undefined
    ? never
    : S extends OrderCountOutputTypeArgs
    ?'include' extends U
    ? OrderCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof OrderCountOutputType ? OrderCountOutputType[P] : never
  } 
    : OrderCountOutputType
  : OrderCountOutputType




  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     * 
    **/
    select?: OrderCountOutputTypeSelect | null
  }



  /**
   * Count Type TableCountOutputType
   */


  export type TableCountOutputType = {
    books: number
  }

  export type TableCountOutputTypeSelect = {
    books?: boolean
  }

  export type TableCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TableCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TableCountOutputType
    : S extends undefined
    ? never
    : S extends TableCountOutputTypeArgs
    ?'include' extends U
    ? TableCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TableCountOutputType ? TableCountOutputType[P] : never
  } 
    : TableCountOutputType
  : TableCountOutputType




  // Custom InputTypes

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     * 
    **/
    select?: TableCountOutputTypeSelect | null
  }



  /**
   * Count Type HourCountOutputType
   */


  export type HourCountOutputType = {
    books: number
  }

  export type HourCountOutputTypeSelect = {
    books?: boolean
  }

  export type HourCountOutputTypeGetPayload<
    S extends boolean | null | undefined | HourCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? HourCountOutputType
    : S extends undefined
    ? never
    : S extends HourCountOutputTypeArgs
    ?'include' extends U
    ? HourCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof HourCountOutputType ? HourCountOutputType[P] : never
  } 
    : HourCountOutputType
  : HourCountOutputType




  // Custom InputTypes

  /**
   * HourCountOutputType without action
   */
  export type HourCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HourCountOutputType
     * 
    **/
    select?: HourCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string
    password: string
    created_at: Date | null
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    books?: boolean | BookFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    books?: boolean | BookFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'books' ? Array < BookGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'books' ? Array < BookGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    books<T extends BookFindManyArgs = {}>(args?: Subset<T, BookFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Book>>, PrismaPromise<Array<BookGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: Array<CategoryScalarFieldEnum>
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: string
    name: string
    created_at: Date | null
    updated_at: Date | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | ProductFindManyArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryInclude = {
    products?: boolean | ProductFindManyArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryArgs,
    U = keyof S
      > = S extends true
        ? Category
    : S extends undefined
    ? never
    : S extends CategoryArgs | CategoryFindManyArgs
    ?'include' extends U
    ? Category  & {
    [P in TrueKeys<S['include']>]:
        P extends 'products' ? Array < ProductGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'products' ? Array < ProductGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Category ? Category[P] : never
  } 
    : Category
  : Category


  type CategoryCountArgs = Merge<
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }
  >

  export interface CategoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    products<T extends ProductFindManyArgs = {}>(args?: Subset<T, ProductFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Product>>, PrismaPromise<Array<ProductGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Throw an Error if a Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Throw an Error if a Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     * 
    **/
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    /**
     * The data used to create many Categories.
     * 
    **/
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     * 
    **/
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    /**
     * The data used to update Categories.
     * 
    **/
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     * 
    **/
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     * 
    **/
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     * 
    **/
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    /**
     * Filter which Categories to delete
     * 
    **/
    where?: CategoryWhereInput
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: string | null
    description: string | null
    banner: string | null
    created_at: Date | null
    updated_at: Date | null
    category_id: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: string | null
    description: string | null
    banner: string | null
    created_at: Date | null
    updated_at: Date | null
    category_id: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    banner: number
    created_at: number
    updated_at: number
    category_id: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    banner?: true
    created_at?: true
    updated_at?: true
    category_id?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    banner?: true
    created_at?: true
    updated_at?: true
    category_id?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    banner?: true
    created_at?: true
    updated_at?: true
    category_id?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: Array<ProductScalarFieldEnum>
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: string
    name: string
    price: string
    description: string
    banner: string
    created_at: Date | null
    updated_at: Date | null
    category_id: string
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    banner?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    category?: boolean | CategoryArgs
    items?: boolean | ItemFindManyArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductInclude = {
    category?: boolean | CategoryArgs
    items?: boolean | ItemFindManyArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductGetPayload<
    S extends boolean | null | undefined | ProductArgs,
    U = keyof S
      > = S extends true
        ? Product
    : S extends undefined
    ? never
    : S extends ProductArgs | ProductFindManyArgs
    ?'include' extends U
    ? Product  & {
    [P in TrueKeys<S['include']>]:
        P extends 'category' ? CategoryGetPayload<S['include'][P]> :
        P extends 'items' ? Array < ItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'category' ? CategoryGetPayload<S['select'][P]> :
        P extends 'items' ? Array < ItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Product ? Product[P] : never
  } 
    : Product
  : Product


  type ProductCountArgs = Merge<
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }
  >

  export interface ProductDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>> : CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>> : CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Product>>, PrismaPromise<Array<ProductGetPayload<T>>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    category<T extends CategoryArgs = {}>(args?: Subset<T, CategoryArgs>): CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>;

    items<T extends ItemFindManyArgs = {}>(args?: Subset<T, ItemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Item>>, PrismaPromise<Array<ItemGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Throw an Error if a Product can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Throw an Error if a Product can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to create a Product.
     * 
    **/
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs = {
    /**
     * The data used to create many Products.
     * 
    **/
    data: Enumerable<ProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to update a Product.
     * 
    **/
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    /**
     * The data used to update Products.
     * 
    **/
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The filter to search for the Product to update in case it exists.
     * 
    **/
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     * 
    **/
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter which Product to delete.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
  }



  /**
   * Model Order
   */


  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    table: number | null
  }

  export type OrderSumAggregateOutputType = {
    table: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    table: number | null
    status: boolean | null
    draft: boolean | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    table: number | null
    status: boolean | null
    draft: boolean | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    table: number
    status: number
    draft: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    table?: true
  }

  export type OrderSumAggregateInputType = {
    table?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    table?: true
    status?: true
    draft?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    table?: true
    status?: true
    draft?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    table?: true
    status?: true
    draft?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderAggregateArgs = {
    /**
     * Filter which Order to aggregate.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs = {
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithAggregationInput>
    by: Array<OrderScalarFieldEnum>
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }


  export type OrderGroupByOutputType = {
    id: string
    table: number
    status: boolean
    draft: boolean
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect = {
    id?: boolean
    table?: boolean
    status?: boolean
    draft?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    items?: boolean | ItemFindManyArgs
    _count?: boolean | OrderCountOutputTypeArgs
  }

  export type OrderInclude = {
    items?: boolean | ItemFindManyArgs
    _count?: boolean | OrderCountOutputTypeArgs
  }

  export type OrderGetPayload<
    S extends boolean | null | undefined | OrderArgs,
    U = keyof S
      > = S extends true
        ? Order
    : S extends undefined
    ? never
    : S extends OrderArgs | OrderFindManyArgs
    ?'include' extends U
    ? Order  & {
    [P in TrueKeys<S['include']>]:
        P extends 'items' ? Array < ItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'items' ? Array < ItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Order ? Order[P] : never
  } 
    : Order
  : Order


  type OrderCountArgs = Merge<
    Omit<OrderFindManyArgs, 'select' | 'include'> & {
      select?: OrderCountAggregateInputType | true
    }
  >

  export interface OrderDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Order'> extends True ? CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>> : CheckSelect<T, Prisma__OrderClient<Order | null >, Prisma__OrderClient<OrderGetPayload<T> | null >>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Order'> extends True ? CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>> : CheckSelect<T, Prisma__OrderClient<Order | null >, Prisma__OrderClient<OrderGetPayload<T> | null >>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Order>>, PrismaPromise<Array<OrderGetPayload<T>>>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs>(
      args?: SelectSubset<T, OrderCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    items<T extends ItemFindManyArgs = {}>(args?: Subset<T, ItemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Item>>, PrismaPromise<Array<ItemGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Throw an Error if a Order can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Order to fetch.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Throw an Error if a Order can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Order to fetch.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     * 
    **/
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order create
   */
  export type OrderCreateArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The data needed to create a Order.
     * 
    **/
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs = {
    /**
     * The data used to create many Orders.
     * 
    **/
    data: Enumerable<OrderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The data needed to update a Order.
     * 
    **/
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs = {
    /**
     * The data used to update Orders.
     * 
    **/
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     * 
    **/
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The filter to search for the Order to update in case it exists.
     * 
    **/
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     * 
    **/
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter which Order to delete.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs = {
    /**
     * Filter which Orders to delete
     * 
    **/
    where?: OrderWhereInput
  }


  /**
   * Order without action
   */
  export type OrderArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
  }



  /**
   * Model Item
   */


  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    amount: number | null
  }

  export type ItemSumAggregateOutputType = {
    amount: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    amount: number | null
    created_at: Date | null
    updated_at: Date | null
    order_id: string | null
    product_id: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    created_at: Date | null
    updated_at: Date | null
    order_id: string | null
    product_id: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    amount: number
    created_at: number
    updated_at: number
    order_id: number
    product_id: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    amount?: true
  }

  export type ItemSumAggregateInputType = {
    amount?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    amount?: true
    created_at?: true
    updated_at?: true
    order_id?: true
    product_id?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    amount?: true
    created_at?: true
    updated_at?: true
    order_id?: true
    product_id?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    amount?: true
    created_at?: true
    updated_at?: true
    order_id?: true
    product_id?: true
    _all?: true
  }

  export type ItemAggregateArgs = {
    /**
     * Filter which Item to aggregate.
     * 
    **/
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs = {
    where?: ItemWhereInput
    orderBy?: Enumerable<ItemOrderByWithAggregationInput>
    by: Array<ItemScalarFieldEnum>
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }


  export type ItemGroupByOutputType = {
    id: string
    amount: number
    created_at: Date | null
    updated_at: Date | null
    order_id: string
    product_id: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect = {
    id?: boolean
    amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_id?: boolean
    product_id?: boolean
    order?: boolean | OrderArgs
    product?: boolean | ProductArgs
  }

  export type ItemInclude = {
    order?: boolean | OrderArgs
    product?: boolean | ProductArgs
  }

  export type ItemGetPayload<
    S extends boolean | null | undefined | ItemArgs,
    U = keyof S
      > = S extends true
        ? Item
    : S extends undefined
    ? never
    : S extends ItemArgs | ItemFindManyArgs
    ?'include' extends U
    ? Item  & {
    [P in TrueKeys<S['include']>]:
        P extends 'order' ? OrderGetPayload<S['include'][P]> :
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'order' ? OrderGetPayload<S['select'][P]> :
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof Item ? Item[P] : never
  } 
    : Item
  : Item


  type ItemCountArgs = Merge<
    Omit<ItemFindManyArgs, 'select' | 'include'> & {
      select?: ItemCountAggregateInputType | true
    }
  >

  export interface ItemDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Item'> extends True ? CheckSelect<T, Prisma__ItemClient<Item>, Prisma__ItemClient<ItemGetPayload<T>>> : CheckSelect<T, Prisma__ItemClient<Item | null >, Prisma__ItemClient<ItemGetPayload<T> | null >>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Item'> extends True ? CheckSelect<T, Prisma__ItemClient<Item>, Prisma__ItemClient<ItemGetPayload<T>>> : CheckSelect<T, Prisma__ItemClient<Item | null >, Prisma__ItemClient<ItemGetPayload<T> | null >>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemFindManyArgs>(
      args?: SelectSubset<T, ItemFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Item>>, PrismaPromise<Array<ItemGetPayload<T>>>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
    **/
    create<T extends ItemCreateArgs>(
      args: SelectSubset<T, ItemCreateArgs>
    ): CheckSelect<T, Prisma__ItemClient<Item>, Prisma__ItemClient<ItemGetPayload<T>>>

    /**
     * Create many Items.
     *     @param {ItemCreateManyArgs} args - Arguments to create many Items.
     *     @example
     *     // Create many Items
     *     const item = await prisma.item.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemCreateManyArgs>(
      args?: SelectSubset<T, ItemCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
    **/
    delete<T extends ItemDeleteArgs>(
      args: SelectSubset<T, ItemDeleteArgs>
    ): CheckSelect<T, Prisma__ItemClient<Item>, Prisma__ItemClient<ItemGetPayload<T>>>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemUpdateArgs>(
      args: SelectSubset<T, ItemUpdateArgs>
    ): CheckSelect<T, Prisma__ItemClient<Item>, Prisma__ItemClient<ItemGetPayload<T>>>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemDeleteManyArgs>(
      args?: SelectSubset<T, ItemDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemUpdateManyArgs>(
      args: SelectSubset<T, ItemUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
    **/
    upsert<T extends ItemUpsertArgs>(
      args: SelectSubset<T, ItemUpsertArgs>
    ): CheckSelect<T, Prisma__ItemClient<Item>, Prisma__ItemClient<ItemGetPayload<T>>>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ItemClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    order<T extends OrderArgs = {}>(args?: Subset<T, OrderArgs>): CheckSelect<T, Prisma__OrderClient<Order | null >, Prisma__OrderClient<OrderGetPayload<T> | null >>;

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * Throw an Error if a Item can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Item to fetch.
     * 
    **/
    where: ItemWhereUniqueInput
  }


  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * Throw an Error if a Item can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Item to fetch.
     * 
    **/
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     * 
    **/
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     * 
    **/
    distinct?: Enumerable<ItemScalarFieldEnum>
  }


  /**
   * Item findMany
   */
  export type ItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     * 
    **/
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ItemScalarFieldEnum>
  }


  /**
   * Item create
   */
  export type ItemCreateArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * The data needed to create a Item.
     * 
    **/
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }


  /**
   * Item createMany
   */
  export type ItemCreateManyArgs = {
    /**
     * The data used to create many Items.
     * 
    **/
    data: Enumerable<ItemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Item update
   */
  export type ItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * The data needed to update a Item.
     * 
    **/
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     * 
    **/
    where: ItemWhereUniqueInput
  }


  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs = {
    /**
     * The data used to update Items.
     * 
    **/
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     * 
    **/
    where?: ItemWhereInput
  }


  /**
   * Item upsert
   */
  export type ItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * The filter to search for the Item to update in case it exists.
     * 
    **/
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     * 
    **/
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }


  /**
   * Item delete
   */
  export type ItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
    /**
     * Filter which Item to delete.
     * 
    **/
    where: ItemWhereUniqueInput
  }


  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs = {
    /**
     * Filter which Items to delete
     * 
    **/
    where?: ItemWhereInput
  }


  /**
   * Item without action
   */
  export type ItemArgs = {
    /**
     * Select specific fields to fetch from the Item
     * 
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemInclude | null
  }



  /**
   * Model Book
   */


  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    number_people: number | null
  }

  export type BookSumAggregateOutputType = {
    number_people: number | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    name: string | null
    number_people: number | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    table_id: string | null
    hour_id: string | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    name: string | null
    number_people: number | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    table_id: string | null
    hour_id: string | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    name: number
    number_people: number
    date: number
    created_at: number
    updated_at: number
    user_id: number
    table_id: number
    hour_id: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    number_people?: true
  }

  export type BookSumAggregateInputType = {
    number_people?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    name?: true
    number_people?: true
    date?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    table_id?: true
    hour_id?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    name?: true
    number_people?: true
    date?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    table_id?: true
    hour_id?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    name?: true
    number_people?: true
    date?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    table_id?: true
    hour_id?: true
    _all?: true
  }

  export type BookAggregateArgs = {
    /**
     * Filter which Book to aggregate.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs = {
    where?: BookWhereInput
    orderBy?: Enumerable<BookOrderByWithAggregationInput>
    by: Array<BookScalarFieldEnum>
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }


  export type BookGroupByOutputType = {
    id: string
    name: string
    number_people: number
    date: Date
    created_at: Date | null
    updated_at: Date | null
    user_id: string
    table_id: string
    hour_id: string
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect = {
    id?: boolean
    name?: boolean
    number_people?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    table_id?: boolean
    hour_id?: boolean
    user?: boolean | UserArgs
    tables?: boolean | TableArgs
    hours?: boolean | HourArgs
  }

  export type BookInclude = {
    user?: boolean | UserArgs
    tables?: boolean | TableArgs
    hours?: boolean | HourArgs
  }

  export type BookGetPayload<
    S extends boolean | null | undefined | BookArgs,
    U = keyof S
      > = S extends true
        ? Book
    : S extends undefined
    ? never
    : S extends BookArgs | BookFindManyArgs
    ?'include' extends U
    ? Book  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'tables' ? TableGetPayload<S['include'][P]> :
        P extends 'hours' ? HourGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'tables' ? TableGetPayload<S['select'][P]> :
        P extends 'hours' ? HourGetPayload<S['select'][P]> :  P extends keyof Book ? Book[P] : never
  } 
    : Book
  : Book


  type BookCountArgs = Merge<
    Omit<BookFindManyArgs, 'select' | 'include'> & {
      select?: BookCountAggregateInputType | true
    }
  >

  export interface BookDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BookFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Book'> extends True ? CheckSelect<T, Prisma__BookClient<Book>, Prisma__BookClient<BookGetPayload<T>>> : CheckSelect<T, Prisma__BookClient<Book | null >, Prisma__BookClient<BookGetPayload<T> | null >>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BookFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Book'> extends True ? CheckSelect<T, Prisma__BookClient<Book>, Prisma__BookClient<BookGetPayload<T>>> : CheckSelect<T, Prisma__BookClient<Book | null >, Prisma__BookClient<BookGetPayload<T> | null >>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookFindManyArgs>(
      args?: SelectSubset<T, BookFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Book>>, PrismaPromise<Array<BookGetPayload<T>>>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
    **/
    create<T extends BookCreateArgs>(
      args: SelectSubset<T, BookCreateArgs>
    ): CheckSelect<T, Prisma__BookClient<Book>, Prisma__BookClient<BookGetPayload<T>>>

    /**
     * Create many Books.
     *     @param {BookCreateManyArgs} args - Arguments to create many Books.
     *     @example
     *     // Create many Books
     *     const book = await prisma.book.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookCreateManyArgs>(
      args?: SelectSubset<T, BookCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
    **/
    delete<T extends BookDeleteArgs>(
      args: SelectSubset<T, BookDeleteArgs>
    ): CheckSelect<T, Prisma__BookClient<Book>, Prisma__BookClient<BookGetPayload<T>>>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookUpdateArgs>(
      args: SelectSubset<T, BookUpdateArgs>
    ): CheckSelect<T, Prisma__BookClient<Book>, Prisma__BookClient<BookGetPayload<T>>>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookDeleteManyArgs>(
      args?: SelectSubset<T, BookDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookUpdateManyArgs>(
      args: SelectSubset<T, BookUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
    **/
    upsert<T extends BookUpsertArgs>(
      args: SelectSubset<T, BookUpsertArgs>
    ): CheckSelect<T, Prisma__BookClient<Book>, Prisma__BookClient<BookGetPayload<T>>>

    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BookClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    tables<T extends TableArgs = {}>(args?: Subset<T, TableArgs>): CheckSelect<T, Prisma__TableClient<Table | null >, Prisma__TableClient<TableGetPayload<T> | null >>;

    hours<T extends HourArgs = {}>(args?: Subset<T, HourArgs>): CheckSelect<T, Prisma__HourClient<Hour | null >, Prisma__HourClient<HourGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Throw an Error if a Book can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where: BookWhereUniqueInput
  }


  /**
   * Book findFirst
   */
  export type BookFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Throw an Error if a Book can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     * 
    **/
    distinct?: Enumerable<BookScalarFieldEnum>
  }


  /**
   * Book findMany
   */
  export type BookFindManyArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Books to fetch.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BookScalarFieldEnum>
  }


  /**
   * Book create
   */
  export type BookCreateArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * The data needed to create a Book.
     * 
    **/
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }


  /**
   * Book createMany
   */
  export type BookCreateManyArgs = {
    /**
     * The data used to create many Books.
     * 
    **/
    data: Enumerable<BookCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Book update
   */
  export type BookUpdateArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * The data needed to update a Book.
     * 
    **/
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     * 
    **/
    where: BookWhereUniqueInput
  }


  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs = {
    /**
     * The data used to update Books.
     * 
    **/
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     * 
    **/
    where?: BookWhereInput
  }


  /**
   * Book upsert
   */
  export type BookUpsertArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * The filter to search for the Book to update in case it exists.
     * 
    **/
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     * 
    **/
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }


  /**
   * Book delete
   */
  export type BookDeleteArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter which Book to delete.
     * 
    **/
    where: BookWhereUniqueInput
  }


  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs = {
    /**
     * Filter which Books to delete
     * 
    **/
    where?: BookWhereInput
  }


  /**
   * Book without action
   */
  export type BookArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
  }



  /**
   * Model Table
   */


  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableAvgAggregateOutputType = {
    number_table: number | null
    quantity_people: number | null
  }

  export type TableSumAggregateOutputType = {
    number_table: number | null
    quantity_people: number | null
  }

  export type TableMinAggregateOutputType = {
    id: string | null
    number_table: number | null
    quantity_people: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TableMaxAggregateOutputType = {
    id: string | null
    number_table: number | null
    quantity_people: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    number_table: number
    quantity_people: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TableAvgAggregateInputType = {
    number_table?: true
    quantity_people?: true
  }

  export type TableSumAggregateInputType = {
    number_table?: true
    quantity_people?: true
  }

  export type TableMinAggregateInputType = {
    id?: true
    number_table?: true
    quantity_people?: true
    created_at?: true
    updated_at?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    number_table?: true
    quantity_people?: true
    created_at?: true
    updated_at?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    number_table?: true
    quantity_people?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TableAggregateArgs = {
    /**
     * Filter which Table to aggregate.
     * 
    **/
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     * 
    **/
    orderBy?: Enumerable<TableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs = {
    where?: TableWhereInput
    orderBy?: Enumerable<TableOrderByWithAggregationInput>
    by: Array<TableScalarFieldEnum>
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _avg?: TableAvgAggregateInputType
    _sum?: TableSumAggregateInputType
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }


  export type TableGroupByOutputType = {
    id: string
    number_table: number
    quantity_people: number
    created_at: Date | null
    updated_at: Date | null
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect = {
    id?: boolean
    number_table?: boolean
    quantity_people?: boolean
    created_at?: boolean
    updated_at?: boolean
    books?: boolean | BookFindManyArgs
    _count?: boolean | TableCountOutputTypeArgs
  }

  export type TableInclude = {
    books?: boolean | BookFindManyArgs
    _count?: boolean | TableCountOutputTypeArgs
  }

  export type TableGetPayload<
    S extends boolean | null | undefined | TableArgs,
    U = keyof S
      > = S extends true
        ? Table
    : S extends undefined
    ? never
    : S extends TableArgs | TableFindManyArgs
    ?'include' extends U
    ? Table  & {
    [P in TrueKeys<S['include']>]:
        P extends 'books' ? Array < BookGetPayload<S['include'][P]>>  :
        P extends '_count' ? TableCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'books' ? Array < BookGetPayload<S['select'][P]>>  :
        P extends '_count' ? TableCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Table ? Table[P] : never
  } 
    : Table
  : Table


  type TableCountArgs = Merge<
    Omit<TableFindManyArgs, 'select' | 'include'> & {
      select?: TableCountAggregateInputType | true
    }
  >

  export interface TableDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TableFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TableFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Table'> extends True ? CheckSelect<T, Prisma__TableClient<Table>, Prisma__TableClient<TableGetPayload<T>>> : CheckSelect<T, Prisma__TableClient<Table | null >, Prisma__TableClient<TableGetPayload<T> | null >>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TableFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TableFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Table'> extends True ? CheckSelect<T, Prisma__TableClient<Table>, Prisma__TableClient<TableGetPayload<T>>> : CheckSelect<T, Prisma__TableClient<Table | null >, Prisma__TableClient<TableGetPayload<T> | null >>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TableFindManyArgs>(
      args?: SelectSubset<T, TableFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Table>>, PrismaPromise<Array<TableGetPayload<T>>>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
    **/
    create<T extends TableCreateArgs>(
      args: SelectSubset<T, TableCreateArgs>
    ): CheckSelect<T, Prisma__TableClient<Table>, Prisma__TableClient<TableGetPayload<T>>>

    /**
     * Create many Tables.
     *     @param {TableCreateManyArgs} args - Arguments to create many Tables.
     *     @example
     *     // Create many Tables
     *     const table = await prisma.table.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TableCreateManyArgs>(
      args?: SelectSubset<T, TableCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
    **/
    delete<T extends TableDeleteArgs>(
      args: SelectSubset<T, TableDeleteArgs>
    ): CheckSelect<T, Prisma__TableClient<Table>, Prisma__TableClient<TableGetPayload<T>>>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TableUpdateArgs>(
      args: SelectSubset<T, TableUpdateArgs>
    ): CheckSelect<T, Prisma__TableClient<Table>, Prisma__TableClient<TableGetPayload<T>>>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TableDeleteManyArgs>(
      args?: SelectSubset<T, TableDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TableUpdateManyArgs>(
      args: SelectSubset<T, TableUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
    **/
    upsert<T extends TableUpsertArgs>(
      args: SelectSubset<T, TableUpsertArgs>
    ): CheckSelect<T, Prisma__TableClient<Table>, Prisma__TableClient<TableGetPayload<T>>>

    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TableClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    books<T extends BookFindManyArgs = {}>(args?: Subset<T, BookFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Book>>, PrismaPromise<Array<BookGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Table
     * 
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TableInclude | null
    /**
     * Throw an Error if a Table can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Table to fetch.
     * 
    **/
    where: TableWhereUniqueInput
  }


  /**
   * Table findFirst
   */
  export type TableFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Table
     * 
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TableInclude | null
    /**
     * Throw an Error if a Table can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Table to fetch.
     * 
    **/
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     * 
    **/
    orderBy?: Enumerable<TableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     * 
    **/
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     * 
    **/
    distinct?: Enumerable<TableScalarFieldEnum>
  }


  /**
   * Table findMany
   */
  export type TableFindManyArgs = {
    /**
     * Select specific fields to fetch from the Table
     * 
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TableInclude | null
    /**
     * Filter, which Tables to fetch.
     * 
    **/
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     * 
    **/
    orderBy?: Enumerable<TableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     * 
    **/
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TableScalarFieldEnum>
  }


  /**
   * Table create
   */
  export type TableCreateArgs = {
    /**
     * Select specific fields to fetch from the Table
     * 
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TableInclude | null
    /**
     * The data needed to create a Table.
     * 
    **/
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }


  /**
   * Table createMany
   */
  export type TableCreateManyArgs = {
    /**
     * The data used to create many Tables.
     * 
    **/
    data: Enumerable<TableCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Table update
   */
  export type TableUpdateArgs = {
    /**
     * Select specific fields to fetch from the Table
     * 
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TableInclude | null
    /**
     * The data needed to update a Table.
     * 
    **/
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     * 
    **/
    where: TableWhereUniqueInput
  }


  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs = {
    /**
     * The data used to update Tables.
     * 
    **/
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     * 
    **/
    where?: TableWhereInput
  }


  /**
   * Table upsert
   */
  export type TableUpsertArgs = {
    /**
     * Select specific fields to fetch from the Table
     * 
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TableInclude | null
    /**
     * The filter to search for the Table to update in case it exists.
     * 
    **/
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     * 
    **/
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }


  /**
   * Table delete
   */
  export type TableDeleteArgs = {
    /**
     * Select specific fields to fetch from the Table
     * 
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TableInclude | null
    /**
     * Filter which Table to delete.
     * 
    **/
    where: TableWhereUniqueInput
  }


  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs = {
    /**
     * Filter which Tables to delete
     * 
    **/
    where?: TableWhereInput
  }


  /**
   * Table without action
   */
  export type TableArgs = {
    /**
     * Select specific fields to fetch from the Table
     * 
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TableInclude | null
  }



  /**
   * Model Hour
   */


  export type AggregateHour = {
    _count: HourCountAggregateOutputType | null
    _min: HourMinAggregateOutputType | null
    _max: HourMaxAggregateOutputType | null
  }

  export type HourMinAggregateOutputType = {
    id: string | null
    hour: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HourMaxAggregateOutputType = {
    id: string | null
    hour: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HourCountAggregateOutputType = {
    id: number
    hour: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HourMinAggregateInputType = {
    id?: true
    hour?: true
    created_at?: true
    updated_at?: true
  }

  export type HourMaxAggregateInputType = {
    id?: true
    hour?: true
    created_at?: true
    updated_at?: true
  }

  export type HourCountAggregateInputType = {
    id?: true
    hour?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HourAggregateArgs = {
    /**
     * Filter which Hour to aggregate.
     * 
    **/
    where?: HourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hours to fetch.
     * 
    **/
    orderBy?: Enumerable<HourOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: HourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hours from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hours.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hours
    **/
    _count?: true | HourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HourMaxAggregateInputType
  }

  export type GetHourAggregateType<T extends HourAggregateArgs> = {
        [P in keyof T & keyof AggregateHour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHour[P]>
      : GetScalarType<T[P], AggregateHour[P]>
  }




  export type HourGroupByArgs = {
    where?: HourWhereInput
    orderBy?: Enumerable<HourOrderByWithAggregationInput>
    by: Array<HourScalarFieldEnum>
    having?: HourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HourCountAggregateInputType | true
    _min?: HourMinAggregateInputType
    _max?: HourMaxAggregateInputType
  }


  export type HourGroupByOutputType = {
    id: string
    hour: string
    created_at: Date | null
    updated_at: Date | null
    _count: HourCountAggregateOutputType | null
    _min: HourMinAggregateOutputType | null
    _max: HourMaxAggregateOutputType | null
  }

  type GetHourGroupByPayload<T extends HourGroupByArgs> = PrismaPromise<
    Array<
      PickArray<HourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HourGroupByOutputType[P]>
            : GetScalarType<T[P], HourGroupByOutputType[P]>
        }
      >
    >


  export type HourSelect = {
    id?: boolean
    hour?: boolean
    created_at?: boolean
    updated_at?: boolean
    books?: boolean | BookFindManyArgs
    _count?: boolean | HourCountOutputTypeArgs
  }

  export type HourInclude = {
    books?: boolean | BookFindManyArgs
    _count?: boolean | HourCountOutputTypeArgs
  }

  export type HourGetPayload<
    S extends boolean | null | undefined | HourArgs,
    U = keyof S
      > = S extends true
        ? Hour
    : S extends undefined
    ? never
    : S extends HourArgs | HourFindManyArgs
    ?'include' extends U
    ? Hour  & {
    [P in TrueKeys<S['include']>]:
        P extends 'books' ? Array < BookGetPayload<S['include'][P]>>  :
        P extends '_count' ? HourCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'books' ? Array < BookGetPayload<S['select'][P]>>  :
        P extends '_count' ? HourCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Hour ? Hour[P] : never
  } 
    : Hour
  : Hour


  type HourCountArgs = Merge<
    Omit<HourFindManyArgs, 'select' | 'include'> & {
      select?: HourCountAggregateInputType | true
    }
  >

  export interface HourDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Hour that matches the filter.
     * @param {HourFindUniqueArgs} args - Arguments to find a Hour
     * @example
     * // Get one Hour
     * const hour = await prisma.hour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HourFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HourFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Hour'> extends True ? CheckSelect<T, Prisma__HourClient<Hour>, Prisma__HourClient<HourGetPayload<T>>> : CheckSelect<T, Prisma__HourClient<Hour | null >, Prisma__HourClient<HourGetPayload<T> | null >>

    /**
     * Find the first Hour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourFindFirstArgs} args - Arguments to find a Hour
     * @example
     * // Get one Hour
     * const hour = await prisma.hour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HourFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HourFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Hour'> extends True ? CheckSelect<T, Prisma__HourClient<Hour>, Prisma__HourClient<HourGetPayload<T>>> : CheckSelect<T, Prisma__HourClient<Hour | null >, Prisma__HourClient<HourGetPayload<T> | null >>

    /**
     * Find zero or more Hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hours
     * const hours = await prisma.hour.findMany()
     * 
     * // Get first 10 Hours
     * const hours = await prisma.hour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hourWithIdOnly = await prisma.hour.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HourFindManyArgs>(
      args?: SelectSubset<T, HourFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Hour>>, PrismaPromise<Array<HourGetPayload<T>>>>

    /**
     * Create a Hour.
     * @param {HourCreateArgs} args - Arguments to create a Hour.
     * @example
     * // Create one Hour
     * const Hour = await prisma.hour.create({
     *   data: {
     *     // ... data to create a Hour
     *   }
     * })
     * 
    **/
    create<T extends HourCreateArgs>(
      args: SelectSubset<T, HourCreateArgs>
    ): CheckSelect<T, Prisma__HourClient<Hour>, Prisma__HourClient<HourGetPayload<T>>>

    /**
     * Create many Hours.
     *     @param {HourCreateManyArgs} args - Arguments to create many Hours.
     *     @example
     *     // Create many Hours
     *     const hour = await prisma.hour.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HourCreateManyArgs>(
      args?: SelectSubset<T, HourCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Hour.
     * @param {HourDeleteArgs} args - Arguments to delete one Hour.
     * @example
     * // Delete one Hour
     * const Hour = await prisma.hour.delete({
     *   where: {
     *     // ... filter to delete one Hour
     *   }
     * })
     * 
    **/
    delete<T extends HourDeleteArgs>(
      args: SelectSubset<T, HourDeleteArgs>
    ): CheckSelect<T, Prisma__HourClient<Hour>, Prisma__HourClient<HourGetPayload<T>>>

    /**
     * Update one Hour.
     * @param {HourUpdateArgs} args - Arguments to update one Hour.
     * @example
     * // Update one Hour
     * const hour = await prisma.hour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HourUpdateArgs>(
      args: SelectSubset<T, HourUpdateArgs>
    ): CheckSelect<T, Prisma__HourClient<Hour>, Prisma__HourClient<HourGetPayload<T>>>

    /**
     * Delete zero or more Hours.
     * @param {HourDeleteManyArgs} args - Arguments to filter Hours to delete.
     * @example
     * // Delete a few Hours
     * const { count } = await prisma.hour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HourDeleteManyArgs>(
      args?: SelectSubset<T, HourDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hours
     * const hour = await prisma.hour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HourUpdateManyArgs>(
      args: SelectSubset<T, HourUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Hour.
     * @param {HourUpsertArgs} args - Arguments to update or create a Hour.
     * @example
     * // Update or create a Hour
     * const hour = await prisma.hour.upsert({
     *   create: {
     *     // ... data to create a Hour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hour we want to update
     *   }
     * })
    **/
    upsert<T extends HourUpsertArgs>(
      args: SelectSubset<T, HourUpsertArgs>
    ): CheckSelect<T, Prisma__HourClient<Hour>, Prisma__HourClient<HourGetPayload<T>>>

    /**
     * Count the number of Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourCountArgs} args - Arguments to filter Hours to count.
     * @example
     * // Count the number of Hours
     * const count = await prisma.hour.count({
     *   where: {
     *     // ... the filter for the Hours we want to count
     *   }
     * })
    **/
    count<T extends HourCountArgs>(
      args?: Subset<T, HourCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HourAggregateArgs>(args: Subset<T, HourAggregateArgs>): PrismaPromise<GetHourAggregateType<T>>

    /**
     * Group by Hour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HourGroupByArgs['orderBy'] }
        : { orderBy?: HourGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHourGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HourClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    books<T extends BookFindManyArgs = {}>(args?: Subset<T, BookFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Book>>, PrismaPromise<Array<BookGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Hour findUnique
   */
  export type HourFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Hour
     * 
    **/
    select?: HourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HourInclude | null
    /**
     * Throw an Error if a Hour can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Hour to fetch.
     * 
    **/
    where: HourWhereUniqueInput
  }


  /**
   * Hour findFirst
   */
  export type HourFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Hour
     * 
    **/
    select?: HourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HourInclude | null
    /**
     * Throw an Error if a Hour can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Hour to fetch.
     * 
    **/
    where?: HourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hours to fetch.
     * 
    **/
    orderBy?: Enumerable<HourOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hours.
     * 
    **/
    cursor?: HourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hours from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hours.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hours.
     * 
    **/
    distinct?: Enumerable<HourScalarFieldEnum>
  }


  /**
   * Hour findMany
   */
  export type HourFindManyArgs = {
    /**
     * Select specific fields to fetch from the Hour
     * 
    **/
    select?: HourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HourInclude | null
    /**
     * Filter, which Hours to fetch.
     * 
    **/
    where?: HourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hours to fetch.
     * 
    **/
    orderBy?: Enumerable<HourOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hours.
     * 
    **/
    cursor?: HourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hours from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hours.
     * 
    **/
    skip?: number
    distinct?: Enumerable<HourScalarFieldEnum>
  }


  /**
   * Hour create
   */
  export type HourCreateArgs = {
    /**
     * Select specific fields to fetch from the Hour
     * 
    **/
    select?: HourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HourInclude | null
    /**
     * The data needed to create a Hour.
     * 
    **/
    data: XOR<HourCreateInput, HourUncheckedCreateInput>
  }


  /**
   * Hour createMany
   */
  export type HourCreateManyArgs = {
    /**
     * The data used to create many Hours.
     * 
    **/
    data: Enumerable<HourCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Hour update
   */
  export type HourUpdateArgs = {
    /**
     * Select specific fields to fetch from the Hour
     * 
    **/
    select?: HourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HourInclude | null
    /**
     * The data needed to update a Hour.
     * 
    **/
    data: XOR<HourUpdateInput, HourUncheckedUpdateInput>
    /**
     * Choose, which Hour to update.
     * 
    **/
    where: HourWhereUniqueInput
  }


  /**
   * Hour updateMany
   */
  export type HourUpdateManyArgs = {
    /**
     * The data used to update Hours.
     * 
    **/
    data: XOR<HourUpdateManyMutationInput, HourUncheckedUpdateManyInput>
    /**
     * Filter which Hours to update
     * 
    **/
    where?: HourWhereInput
  }


  /**
   * Hour upsert
   */
  export type HourUpsertArgs = {
    /**
     * Select specific fields to fetch from the Hour
     * 
    **/
    select?: HourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HourInclude | null
    /**
     * The filter to search for the Hour to update in case it exists.
     * 
    **/
    where: HourWhereUniqueInput
    /**
     * In case the Hour found by the `where` argument doesn't exist, create a new Hour with this data.
     * 
    **/
    create: XOR<HourCreateInput, HourUncheckedCreateInput>
    /**
     * In case the Hour was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<HourUpdateInput, HourUncheckedUpdateInput>
  }


  /**
   * Hour delete
   */
  export type HourDeleteArgs = {
    /**
     * Select specific fields to fetch from the Hour
     * 
    **/
    select?: HourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HourInclude | null
    /**
     * Filter which Hour to delete.
     * 
    **/
    where: HourWhereUniqueInput
  }


  /**
   * Hour deleteMany
   */
  export type HourDeleteManyArgs = {
    /**
     * Filter which Hours to delete
     * 
    **/
    where?: HourWhereInput
  }


  /**
   * Hour without action
   */
  export type HourArgs = {
    /**
     * Select specific fields to fetch from the Hour
     * 
    **/
    select?: HourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HourInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    banner: 'banner',
    created_at: 'created_at',
    updated_at: 'updated_at',
    category_id: 'category_id'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    table: 'table',
    status: 'status',
    draft: 'draft',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    created_at: 'created_at',
    updated_at: 'updated_at',
    order_id: 'order_id',
    product_id: 'product_id'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number_people: 'number_people',
    date: 'date',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    table_id: 'table_id',
    hour_id: 'hour_id'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    number_table: 'number_table',
    quantity_people: 'quantity_people',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const HourScalarFieldEnum: {
    id: 'id',
    hour: 'hour',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HourScalarFieldEnum = (typeof HourScalarFieldEnum)[keyof typeof HourScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    phone?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    books?: BookListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    books?: BookOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    name?: StringFilter | string
    phone?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    books?: BookListRelationFilter
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = {
    id?: string
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    name?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    price?: StringFilter | string
    description?: StringFilter | string
    banner?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    category_id?: StringFilter | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    items?: ItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    banner?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    category_id?: SortOrder
    category?: CategoryOrderByWithRelationInput
    items?: ItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = {
    id?: string
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    name?: StringFilter | string
    price?: StringFilter | string
    description?: StringFilter | string
    banner?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    category_id?: StringFilter | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    items?: ItemListRelationFilter
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    banner?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    category_id?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    price?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    banner?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    category_id?: StringWithAggregatesFilter | string
  }

  export type OrderWhereInput = {
    AND?: Enumerable<OrderWhereInput>
    OR?: Enumerable<OrderWhereInput>
    NOT?: Enumerable<OrderWhereInput>
    id?: StringFilter | string
    table?: IntFilter | number
    status?: BoolFilter | boolean
    draft?: BoolFilter | boolean
    name?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    items?: ItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    table?: SortOrder
    status?: SortOrder
    draft?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    items?: ItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = {
    id?: string
    AND?: Enumerable<OrderWhereInput>
    OR?: Enumerable<OrderWhereInput>
    NOT?: Enumerable<OrderWhereInput>
    table?: IntFilter | number
    status?: BoolFilter | boolean
    draft?: BoolFilter | boolean
    name?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    items?: ItemListRelationFilter
  }

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    table?: SortOrder
    status?: SortOrder
    draft?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    table?: IntWithAggregatesFilter | number
    status?: BoolWithAggregatesFilter | boolean
    draft?: BoolWithAggregatesFilter | boolean
    name?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ItemWhereInput = {
    AND?: Enumerable<ItemWhereInput>
    OR?: Enumerable<ItemWhereInput>
    NOT?: Enumerable<ItemWhereInput>
    id?: StringFilter | string
    amount?: IntFilter | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    order_id?: StringFilter | string
    product_id?: StringFilter | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ItemWhereUniqueInput = {
    id?: string
    AND?: Enumerable<ItemWhereInput>
    OR?: Enumerable<ItemWhereInput>
    NOT?: Enumerable<ItemWhereInput>
    amount?: IntFilter | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    order_id?: StringFilter | string
    product_id?: StringFilter | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<ItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ItemScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    amount?: IntWithAggregatesFilter | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    order_id?: StringWithAggregatesFilter | string
    product_id?: StringWithAggregatesFilter | string
  }

  export type BookWhereInput = {
    AND?: Enumerable<BookWhereInput>
    OR?: Enumerable<BookWhereInput>
    NOT?: Enumerable<BookWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    number_people?: IntFilter | number
    date?: DateTimeFilter | Date | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    user_id?: StringFilter | string
    table_id?: StringFilter | string
    hour_id?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tables?: XOR<TableRelationFilter, TableWhereInput>
    hours?: XOR<HourRelationFilter, HourWhereInput>
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number_people?: SortOrder
    date?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    table_id?: SortOrder
    hour_id?: SortOrder
    user?: UserOrderByWithRelationInput
    tables?: TableOrderByWithRelationInput
    hours?: HourOrderByWithRelationInput
  }

  export type BookWhereUniqueInput = {
    id?: string
    AND?: Enumerable<BookWhereInput>
    OR?: Enumerable<BookWhereInput>
    NOT?: Enumerable<BookWhereInput>
    name?: StringFilter | string
    number_people?: IntFilter | number
    date?: DateTimeFilter | Date | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    user_id?: StringFilter | string
    table_id?: StringFilter | string
    hour_id?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tables?: XOR<TableRelationFilter, TableWhereInput>
    hours?: XOR<HourRelationFilter, HourWhereInput>
  }

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number_people?: SortOrder
    date?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    table_id?: SortOrder
    hour_id?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BookScalarWhereWithAggregatesInput>
    OR?: Enumerable<BookScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BookScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    number_people?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    user_id?: StringWithAggregatesFilter | string
    table_id?: StringWithAggregatesFilter | string
    hour_id?: StringWithAggregatesFilter | string
  }

  export type TableWhereInput = {
    AND?: Enumerable<TableWhereInput>
    OR?: Enumerable<TableWhereInput>
    NOT?: Enumerable<TableWhereInput>
    id?: StringFilter | string
    number_table?: IntFilter | number
    quantity_people?: IntFilter | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    books?: BookListRelationFilter
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    number_table?: SortOrder
    quantity_people?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    books?: BookOrderByRelationAggregateInput
  }

  export type TableWhereUniqueInput = {
    id?: string
    AND?: Enumerable<TableWhereInput>
    OR?: Enumerable<TableWhereInput>
    NOT?: Enumerable<TableWhereInput>
    number_table?: IntFilter | number
    quantity_people?: IntFilter | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    books?: BookListRelationFilter
  }

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    number_table?: SortOrder
    quantity_people?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: TableCountOrderByAggregateInput
    _avg?: TableAvgOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
    _sum?: TableSumOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TableScalarWhereWithAggregatesInput>
    OR?: Enumerable<TableScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TableScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    number_table?: IntWithAggregatesFilter | number
    quantity_people?: IntWithAggregatesFilter | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type HourWhereInput = {
    AND?: Enumerable<HourWhereInput>
    OR?: Enumerable<HourWhereInput>
    NOT?: Enumerable<HourWhereInput>
    id?: StringFilter | string
    hour?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    books?: BookListRelationFilter
  }

  export type HourOrderByWithRelationInput = {
    id?: SortOrder
    hour?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    books?: BookOrderByRelationAggregateInput
  }

  export type HourWhereUniqueInput = {
    id?: string
    AND?: Enumerable<HourWhereInput>
    OR?: Enumerable<HourWhereInput>
    NOT?: Enumerable<HourWhereInput>
    hour?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    books?: BookListRelationFilter
  }

  export type HourOrderByWithAggregationInput = {
    id?: SortOrder
    hour?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: HourCountOrderByAggregateInput
    _max?: HourMaxOrderByAggregateInput
    _min?: HourMinOrderByAggregateInput
  }

  export type HourScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HourScalarWhereWithAggregatesInput>
    OR?: Enumerable<HourScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HourScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    hour?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    phone: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    books?: BookCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    books?: BookUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    books?: BookUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    phone: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    price: string
    description: string
    banner: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category: CategoryCreateNestedOneWithoutProductsInput
    items?: ItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    price: string
    description: string
    banner: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: string
    items?: ItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    items?: ItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    price: string
    description: string
    banner: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    id?: string
    table: number
    status?: boolean
    draft?: boolean
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: ItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    table: number
    status?: boolean
    draft?: boolean
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: ItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    table?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    draft?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    table?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    draft?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    table: number
    status?: boolean
    draft?: boolean
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    table?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    draft?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    table?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    draft?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemCreateInput = {
    id?: string
    amount: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order: OrderCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutItemsInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    amount: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_id: string
    product_id: string
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateManyInput = {
    id?: string
    amount: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_id: string
    product_id: string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateInput = {
    id?: string
    name: string
    number_people: number
    date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: UserCreateNestedOneWithoutBooksInput
    tables: TableCreateNestedOneWithoutBooksInput
    hours: HourCreateNestedOneWithoutBooksInput
  }

  export type BookUncheckedCreateInput = {
    id?: string
    name: string
    number_people: number
    date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id: string
    table_id: string
    hour_id: string
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    tables?: TableUpdateOneRequiredWithoutBooksNestedInput
    hours?: HourUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    hour_id?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateManyInput = {
    id?: string
    name: string
    number_people: number
    date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id: string
    table_id: string
    hour_id: string
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
    hour_id?: StringFieldUpdateOperationsInput | string
  }

  export type TableCreateInput = {
    id?: string
    number_table: number
    quantity_people: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    books?: BookCreateNestedManyWithoutTablesInput
  }

  export type TableUncheckedCreateInput = {
    id?: string
    number_table: number
    quantity_people: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    books?: BookUncheckedCreateNestedManyWithoutTablesInput
  }

  export type TableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number_table?: IntFieldUpdateOperationsInput | number
    quantity_people?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    books?: BookUpdateManyWithoutTablesNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number_table?: IntFieldUpdateOperationsInput | number
    quantity_people?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    books?: BookUncheckedUpdateManyWithoutTablesNestedInput
  }

  export type TableCreateManyInput = {
    id?: string
    number_table: number
    quantity_people: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number_table?: IntFieldUpdateOperationsInput | number
    quantity_people?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number_table?: IntFieldUpdateOperationsInput | number
    quantity_people?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HourCreateInput = {
    id?: string
    hour: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    books?: BookCreateNestedManyWithoutHoursInput
  }

  export type HourUncheckedCreateInput = {
    id?: string
    hour: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    books?: BookUncheckedCreateNestedManyWithoutHoursInput
  }

  export type HourUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    books?: BookUpdateManyWithoutHoursNestedInput
  }

  export type HourUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    books?: BookUncheckedUpdateManyWithoutHoursNestedInput
  }

  export type HourCreateManyInput = {
    id?: string
    hour: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type HourUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HourUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter = {
    equals?: string | StringFieldRefInput
    in?: Enumerable<string> | ListStringFieldRefInput
    notIn?: Enumerable<string> | ListStringFieldRefInput
    lt?: string | StringFieldRefInput
    lte?: string | StringFieldRefInput
    gt?: string | StringFieldRefInput
    gte?: string | StringFieldRefInput
    contains?: string | StringFieldRefInput
    startsWith?: string | StringFieldRefInput
    endsWith?: string | StringFieldRefInput
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | DateTimeFieldRefInput | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput | null
    lt?: Date | string | DateTimeFieldRefInput
    lte?: Date | string | DateTimeFieldRefInput
    gt?: Date | string | DateTimeFieldRefInput
    gte?: Date | string | DateTimeFieldRefInput
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string | StringFieldRefInput
    in?: Enumerable<string> | ListStringFieldRefInput
    notIn?: Enumerable<string> | ListStringFieldRefInput
    lt?: string | StringFieldRefInput
    lte?: string | StringFieldRefInput
    gt?: string | StringFieldRefInput
    gte?: string | StringFieldRefInput
    contains?: string | StringFieldRefInput
    startsWith?: string | StringFieldRefInput
    endsWith?: string | StringFieldRefInput
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | DateTimeFieldRefInput | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput | null
    lt?: Date | string | DateTimeFieldRefInput
    lte?: Date | string | DateTimeFieldRefInput
    gt?: Date | string | DateTimeFieldRefInput
    gte?: Date | string | DateTimeFieldRefInput
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    banner?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    banner?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    banner?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
  }

  export type IntFilter = {
    equals?: number | IntFieldRefInput
    in?: Enumerable<number> | ListIntFieldRefInput
    notIn?: Enumerable<number> | ListIntFieldRefInput
    lt?: number | IntFieldRefInput
    lte?: number | IntFieldRefInput
    gt?: number | IntFieldRefInput
    gte?: number | IntFieldRefInput
    not?: NestedIntFilter | number
  }

  export type BoolFilter = {
    equals?: boolean | BooleanFieldRefInput
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableFilter = {
    equals?: string | StringFieldRefInput | null
    in?: Enumerable<string> | ListStringFieldRefInput | null
    notIn?: Enumerable<string> | ListStringFieldRefInput | null
    lt?: string | StringFieldRefInput
    lte?: string | StringFieldRefInput
    gt?: string | StringFieldRefInput
    gte?: string | StringFieldRefInput
    contains?: string | StringFieldRefInput
    startsWith?: string | StringFieldRefInput
    endsWith?: string | StringFieldRefInput
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    table?: SortOrder
    status?: SortOrder
    draft?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    table?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    table?: SortOrder
    status?: SortOrder
    draft?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    table?: SortOrder
    status?: SortOrder
    draft?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    table?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number | IntFieldRefInput
    in?: Enumerable<number> | ListIntFieldRefInput
    notIn?: Enumerable<number> | ListIntFieldRefInput
    lt?: number | IntFieldRefInput
    lte?: number | IntFieldRefInput
    gt?: number | IntFieldRefInput
    gte?: number | IntFieldRefInput
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean | BooleanFieldRefInput
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | StringFieldRefInput | null
    in?: Enumerable<string> | ListStringFieldRefInput | null
    notIn?: Enumerable<string> | ListStringFieldRefInput | null
    lt?: string | StringFieldRefInput
    lte?: string | StringFieldRefInput
    gt?: string | StringFieldRefInput
    gte?: string | StringFieldRefInput
    contains?: string | StringFieldRefInput
    startsWith?: string | StringFieldRefInput
    endsWith?: string | StringFieldRefInput
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string | DateTimeFieldRefInput
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput
    lt?: Date | string | DateTimeFieldRefInput
    lte?: Date | string | DateTimeFieldRefInput
    gt?: Date | string | DateTimeFieldRefInput
    gte?: Date | string | DateTimeFieldRefInput
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TableRelationFilter = {
    is?: TableWhereInput
    isNot?: TableWhereInput
  }

  export type HourRelationFilter = {
    is?: HourWhereInput
    isNot?: HourWhereInput
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number_people?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    table_id?: SortOrder
    hour_id?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    number_people?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number_people?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    table_id?: SortOrder
    hour_id?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number_people?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    table_id?: SortOrder
    hour_id?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    number_people?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string | DateTimeFieldRefInput
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput
    lt?: Date | string | DateTimeFieldRefInput
    lte?: Date | string | DateTimeFieldRefInput
    gt?: Date | string | DateTimeFieldRefInput
    gte?: Date | string | DateTimeFieldRefInput
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    number_table?: SortOrder
    quantity_people?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TableAvgOrderByAggregateInput = {
    number_table?: SortOrder
    quantity_people?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    number_table?: SortOrder
    quantity_people?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    number_table?: SortOrder
    quantity_people?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TableSumOrderByAggregateInput = {
    number_table?: SortOrder
    quantity_people?: SortOrder
  }

  export type HourCountOrderByAggregateInput = {
    id?: SortOrder
    hour?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HourMaxOrderByAggregateInput = {
    id?: SortOrder
    hour?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HourMinOrderByAggregateInput = {
    id?: SortOrder
    hour?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BookCreateWithoutUserInput>, Enumerable<BookUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutUserInput>
    createMany?: BookCreateManyUserInputEnvelope
    connect?: Enumerable<BookWhereUniqueInput>
  }

  export type BookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BookCreateWithoutUserInput>, Enumerable<BookUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutUserInput>
    createMany?: BookCreateManyUserInputEnvelope
    connect?: Enumerable<BookWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BookUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BookCreateWithoutUserInput>, Enumerable<BookUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BookUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BookCreateManyUserInputEnvelope
    set?: Enumerable<BookWhereUniqueInput>
    disconnect?: Enumerable<BookWhereUniqueInput>
    delete?: Enumerable<BookWhereUniqueInput>
    connect?: Enumerable<BookWhereUniqueInput>
    update?: Enumerable<BookUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BookUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BookScalarWhereInput>
  }

  export type BookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BookCreateWithoutUserInput>, Enumerable<BookUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BookUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BookCreateManyUserInputEnvelope
    set?: Enumerable<BookWhereUniqueInput>
    disconnect?: Enumerable<BookWhereUniqueInput>
    delete?: Enumerable<BookWhereUniqueInput>
    connect?: Enumerable<BookWhereUniqueInput>
    update?: Enumerable<BookUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BookUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BookScalarWhereInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ItemCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ItemCreateWithoutProductInput>, Enumerable<ItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutProductInput>
    createMany?: ItemCreateManyProductInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type ItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ItemCreateWithoutProductInput>, Enumerable<ItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutProductInput>
    createMany?: ItemCreateManyProductInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ItemCreateWithoutProductInput>, Enumerable<ItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ItemCreateManyProductInputEnvelope
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type ItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ItemCreateWithoutProductInput>, Enumerable<ItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ItemCreateManyProductInputEnvelope
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type ItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<ItemCreateWithoutOrderInput>, Enumerable<ItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutOrderInput>
    createMany?: ItemCreateManyOrderInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type ItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<ItemCreateWithoutOrderInput>, Enumerable<ItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutOrderInput>
    createMany?: ItemCreateManyOrderInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<ItemCreateWithoutOrderInput>, Enumerable<ItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: ItemCreateManyOrderInputEnvelope
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type ItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<ItemCreateWithoutOrderInput>, Enumerable<ItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: ItemCreateManyOrderInputEnvelope
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItemsInput
    upsert?: ProductUpsertWithoutItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutItemsInput, ProductUpdateWithoutItemsInput>, ProductUncheckedUpdateWithoutItemsInput>
  }

  export type UserCreateNestedOneWithoutBooksInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    connect?: UserWhereUniqueInput
  }

  export type TableCreateNestedOneWithoutBooksInput = {
    create?: XOR<TableCreateWithoutBooksInput, TableUncheckedCreateWithoutBooksInput>
    connectOrCreate?: TableCreateOrConnectWithoutBooksInput
    connect?: TableWhereUniqueInput
  }

  export type HourCreateNestedOneWithoutBooksInput = {
    create?: XOR<HourCreateWithoutBooksInput, HourUncheckedCreateWithoutBooksInput>
    connectOrCreate?: HourCreateOrConnectWithoutBooksInput
    connect?: HourWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    upsert?: UserUpsertWithoutBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBooksInput, UserUpdateWithoutBooksInput>, UserUncheckedUpdateWithoutBooksInput>
  }

  export type TableUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<TableCreateWithoutBooksInput, TableUncheckedCreateWithoutBooksInput>
    connectOrCreate?: TableCreateOrConnectWithoutBooksInput
    upsert?: TableUpsertWithoutBooksInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutBooksInput, TableUpdateWithoutBooksInput>, TableUncheckedUpdateWithoutBooksInput>
  }

  export type HourUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<HourCreateWithoutBooksInput, HourUncheckedCreateWithoutBooksInput>
    connectOrCreate?: HourCreateOrConnectWithoutBooksInput
    upsert?: HourUpsertWithoutBooksInput
    connect?: HourWhereUniqueInput
    update?: XOR<XOR<HourUpdateToOneWithWhereWithoutBooksInput, HourUpdateWithoutBooksInput>, HourUncheckedUpdateWithoutBooksInput>
  }

  export type BookCreateNestedManyWithoutTablesInput = {
    create?: XOR<Enumerable<BookCreateWithoutTablesInput>, Enumerable<BookUncheckedCreateWithoutTablesInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutTablesInput>
    createMany?: BookCreateManyTablesInputEnvelope
    connect?: Enumerable<BookWhereUniqueInput>
  }

  export type BookUncheckedCreateNestedManyWithoutTablesInput = {
    create?: XOR<Enumerable<BookCreateWithoutTablesInput>, Enumerable<BookUncheckedCreateWithoutTablesInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutTablesInput>
    createMany?: BookCreateManyTablesInputEnvelope
    connect?: Enumerable<BookWhereUniqueInput>
  }

  export type BookUpdateManyWithoutTablesNestedInput = {
    create?: XOR<Enumerable<BookCreateWithoutTablesInput>, Enumerable<BookUncheckedCreateWithoutTablesInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutTablesInput>
    upsert?: Enumerable<BookUpsertWithWhereUniqueWithoutTablesInput>
    createMany?: BookCreateManyTablesInputEnvelope
    set?: Enumerable<BookWhereUniqueInput>
    disconnect?: Enumerable<BookWhereUniqueInput>
    delete?: Enumerable<BookWhereUniqueInput>
    connect?: Enumerable<BookWhereUniqueInput>
    update?: Enumerable<BookUpdateWithWhereUniqueWithoutTablesInput>
    updateMany?: Enumerable<BookUpdateManyWithWhereWithoutTablesInput>
    deleteMany?: Enumerable<BookScalarWhereInput>
  }

  export type BookUncheckedUpdateManyWithoutTablesNestedInput = {
    create?: XOR<Enumerable<BookCreateWithoutTablesInput>, Enumerable<BookUncheckedCreateWithoutTablesInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutTablesInput>
    upsert?: Enumerable<BookUpsertWithWhereUniqueWithoutTablesInput>
    createMany?: BookCreateManyTablesInputEnvelope
    set?: Enumerable<BookWhereUniqueInput>
    disconnect?: Enumerable<BookWhereUniqueInput>
    delete?: Enumerable<BookWhereUniqueInput>
    connect?: Enumerable<BookWhereUniqueInput>
    update?: Enumerable<BookUpdateWithWhereUniqueWithoutTablesInput>
    updateMany?: Enumerable<BookUpdateManyWithWhereWithoutTablesInput>
    deleteMany?: Enumerable<BookScalarWhereInput>
  }

  export type BookCreateNestedManyWithoutHoursInput = {
    create?: XOR<Enumerable<BookCreateWithoutHoursInput>, Enumerable<BookUncheckedCreateWithoutHoursInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutHoursInput>
    createMany?: BookCreateManyHoursInputEnvelope
    connect?: Enumerable<BookWhereUniqueInput>
  }

  export type BookUncheckedCreateNestedManyWithoutHoursInput = {
    create?: XOR<Enumerable<BookCreateWithoutHoursInput>, Enumerable<BookUncheckedCreateWithoutHoursInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutHoursInput>
    createMany?: BookCreateManyHoursInputEnvelope
    connect?: Enumerable<BookWhereUniqueInput>
  }

  export type BookUpdateManyWithoutHoursNestedInput = {
    create?: XOR<Enumerable<BookCreateWithoutHoursInput>, Enumerable<BookUncheckedCreateWithoutHoursInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutHoursInput>
    upsert?: Enumerable<BookUpsertWithWhereUniqueWithoutHoursInput>
    createMany?: BookCreateManyHoursInputEnvelope
    set?: Enumerable<BookWhereUniqueInput>
    disconnect?: Enumerable<BookWhereUniqueInput>
    delete?: Enumerable<BookWhereUniqueInput>
    connect?: Enumerable<BookWhereUniqueInput>
    update?: Enumerable<BookUpdateWithWhereUniqueWithoutHoursInput>
    updateMany?: Enumerable<BookUpdateManyWithWhereWithoutHoursInput>
    deleteMany?: Enumerable<BookScalarWhereInput>
  }

  export type BookUncheckedUpdateManyWithoutHoursNestedInput = {
    create?: XOR<Enumerable<BookCreateWithoutHoursInput>, Enumerable<BookUncheckedCreateWithoutHoursInput>>
    connectOrCreate?: Enumerable<BookCreateOrConnectWithoutHoursInput>
    upsert?: Enumerable<BookUpsertWithWhereUniqueWithoutHoursInput>
    createMany?: BookCreateManyHoursInputEnvelope
    set?: Enumerable<BookWhereUniqueInput>
    disconnect?: Enumerable<BookWhereUniqueInput>
    delete?: Enumerable<BookWhereUniqueInput>
    connect?: Enumerable<BookWhereUniqueInput>
    update?: Enumerable<BookUpdateWithWhereUniqueWithoutHoursInput>
    updateMany?: Enumerable<BookUpdateManyWithWhereWithoutHoursInput>
    deleteMany?: Enumerable<BookScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string | StringFieldRefInput
    in?: Enumerable<string> | ListStringFieldRefInput
    notIn?: Enumerable<string> | ListStringFieldRefInput
    lt?: string | StringFieldRefInput
    lte?: string | StringFieldRefInput
    gt?: string | StringFieldRefInput
    gte?: string | StringFieldRefInput
    contains?: string | StringFieldRefInput
    startsWith?: string | StringFieldRefInput
    endsWith?: string | StringFieldRefInput
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | DateTimeFieldRefInput | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput | null
    lt?: Date | string | DateTimeFieldRefInput
    lte?: Date | string | DateTimeFieldRefInput
    gt?: Date | string | DateTimeFieldRefInput
    gte?: Date | string | DateTimeFieldRefInput
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string | StringFieldRefInput
    in?: Enumerable<string> | ListStringFieldRefInput
    notIn?: Enumerable<string> | ListStringFieldRefInput
    lt?: string | StringFieldRefInput
    lte?: string | StringFieldRefInput
    gt?: string | StringFieldRefInput
    gte?: string | StringFieldRefInput
    contains?: string | StringFieldRefInput
    startsWith?: string | StringFieldRefInput
    endsWith?: string | StringFieldRefInput
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number | IntFieldRefInput
    in?: Enumerable<number> | ListIntFieldRefInput
    notIn?: Enumerable<number> | ListIntFieldRefInput
    lt?: number | IntFieldRefInput
    lte?: number | IntFieldRefInput
    gt?: number | IntFieldRefInput
    gte?: number | IntFieldRefInput
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | DateTimeFieldRefInput | null
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput | null
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput | null
    lt?: Date | string | DateTimeFieldRefInput
    lte?: Date | string | DateTimeFieldRefInput
    gt?: Date | string | DateTimeFieldRefInput
    gte?: Date | string | DateTimeFieldRefInput
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | IntFieldRefInput | null
    in?: Enumerable<number> | ListIntFieldRefInput | null
    notIn?: Enumerable<number> | ListIntFieldRefInput | null
    lt?: number | IntFieldRefInput
    lte?: number | IntFieldRefInput
    gt?: number | IntFieldRefInput
    gte?: number | IntFieldRefInput
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean | BooleanFieldRefInput
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | StringFieldRefInput | null
    in?: Enumerable<string> | ListStringFieldRefInput | null
    notIn?: Enumerable<string> | ListStringFieldRefInput | null
    lt?: string | StringFieldRefInput
    lte?: string | StringFieldRefInput
    gt?: string | StringFieldRefInput
    gte?: string | StringFieldRefInput
    contains?: string | StringFieldRefInput
    startsWith?: string | StringFieldRefInput
    endsWith?: string | StringFieldRefInput
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number | IntFieldRefInput
    in?: Enumerable<number> | ListIntFieldRefInput
    notIn?: Enumerable<number> | ListIntFieldRefInput
    lt?: number | IntFieldRefInput
    lte?: number | IntFieldRefInput
    gt?: number | IntFieldRefInput
    gte?: number | IntFieldRefInput
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number | FloatFieldRefInput
    in?: Enumerable<number> | ListFloatFieldRefInput
    notIn?: Enumerable<number> | ListFloatFieldRefInput
    lt?: number | FloatFieldRefInput
    lte?: number | FloatFieldRefInput
    gt?: number | FloatFieldRefInput
    gte?: number | FloatFieldRefInput
    not?: NestedFloatFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean | BooleanFieldRefInput
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | StringFieldRefInput | null
    in?: Enumerable<string> | ListStringFieldRefInput | null
    notIn?: Enumerable<string> | ListStringFieldRefInput | null
    lt?: string | StringFieldRefInput
    lte?: string | StringFieldRefInput
    gt?: string | StringFieldRefInput
    gte?: string | StringFieldRefInput
    contains?: string | StringFieldRefInput
    startsWith?: string | StringFieldRefInput
    endsWith?: string | StringFieldRefInput
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string | DateTimeFieldRefInput
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput
    lt?: Date | string | DateTimeFieldRefInput
    lte?: Date | string | DateTimeFieldRefInput
    gt?: Date | string | DateTimeFieldRefInput
    gte?: Date | string | DateTimeFieldRefInput
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string | DateTimeFieldRefInput
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput
    lt?: Date | string | DateTimeFieldRefInput
    lte?: Date | string | DateTimeFieldRefInput
    gt?: Date | string | DateTimeFieldRefInput
    gte?: Date | string | DateTimeFieldRefInput
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BookCreateWithoutUserInput = {
    id?: string
    name: string
    number_people: number
    date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tables: TableCreateNestedOneWithoutBooksInput
    hours: HourCreateNestedOneWithoutBooksInput
  }

  export type BookUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    number_people: number
    date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    table_id: string
    hour_id: string
  }

  export type BookCreateOrConnectWithoutUserInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookCreateManyUserInputEnvelope = {
    data: Enumerable<BookCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookUpdateWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
  }

  export type BookUpdateManyWithWhereWithoutUserInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutUserInput>
  }

  export type BookScalarWhereInput = {
    AND?: Enumerable<BookScalarWhereInput>
    OR?: Enumerable<BookScalarWhereInput>
    NOT?: Enumerable<BookScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    number_people?: IntFilter | number
    date?: DateTimeFilter | Date | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    user_id?: StringFilter | string
    table_id?: StringFilter | string
    hour_id?: StringFilter | string
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    price: string
    description: string
    banner: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: ItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    price: string
    description: string
    banner: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: ItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: Enumerable<ProductCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: Enumerable<ProductScalarWhereInput>
    OR?: Enumerable<ProductScalarWhereInput>
    NOT?: Enumerable<ProductScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    price?: StringFilter | string
    description?: StringFilter | string
    banner?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    category_id?: StringFilter | string
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ItemCreateWithoutProductInput = {
    id?: string
    amount: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type ItemUncheckedCreateWithoutProductInput = {
    id?: string
    amount: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_id: string
  }

  export type ItemCreateOrConnectWithoutProductInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput>
  }

  export type ItemCreateManyProductInputEnvelope = {
    data: Enumerable<ItemCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemUpsertWithWhereUniqueWithoutProductInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutProductInput, ItemUncheckedUpdateWithoutProductInput>
    create: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutProductInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutProductInput, ItemUncheckedUpdateWithoutProductInput>
  }

  export type ItemUpdateManyWithWhereWithoutProductInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutProductInput>
  }

  export type ItemScalarWhereInput = {
    AND?: Enumerable<ItemScalarWhereInput>
    OR?: Enumerable<ItemScalarWhereInput>
    NOT?: Enumerable<ItemScalarWhereInput>
    id?: StringFilter | string
    amount?: IntFilter | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    order_id?: StringFilter | string
    product_id?: StringFilter | string
  }

  export type ItemCreateWithoutOrderInput = {
    id?: string
    amount: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product: ProductCreateNestedOneWithoutItemsInput
  }

  export type ItemUncheckedCreateWithoutOrderInput = {
    id?: string
    amount: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
  }

  export type ItemCreateOrConnectWithoutOrderInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutOrderInput, ItemUncheckedCreateWithoutOrderInput>
  }

  export type ItemCreateManyOrderInputEnvelope = {
    data: Enumerable<ItemCreateManyOrderInput>
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutOrderInput, ItemUncheckedUpdateWithoutOrderInput>
    create: XOR<ItemCreateWithoutOrderInput, ItemUncheckedCreateWithoutOrderInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutOrderInput, ItemUncheckedUpdateWithoutOrderInput>
  }

  export type ItemUpdateManyWithWhereWithoutOrderInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    table: number
    status?: boolean
    draft?: boolean
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    table: number
    status?: boolean
    draft?: boolean
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutItemsInput = {
    id?: string
    name: string
    price: string
    description: string
    banner: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category: CategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    price: string
    description: string
    banner: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category_id: string
  }

  export type ProductCreateOrConnectWithoutItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    table?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    draft?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    table?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    draft?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpsertWithoutItemsInput = {
    update: XOR<ProductUpdateWithoutItemsInput, ProductUncheckedUpdateWithoutItemsInput>
    create: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutItemsInput, ProductUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutBooksInput = {
    id?: string
    name: string
    phone: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type UserUncheckedCreateWithoutBooksInput = {
    id?: string
    name: string
    phone: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type UserCreateOrConnectWithoutBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
  }

  export type TableCreateWithoutBooksInput = {
    id?: string
    number_table: number
    quantity_people: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TableUncheckedCreateWithoutBooksInput = {
    id?: string
    number_table: number
    quantity_people: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TableCreateOrConnectWithoutBooksInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutBooksInput, TableUncheckedCreateWithoutBooksInput>
  }

  export type HourCreateWithoutBooksInput = {
    id?: string
    hour: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type HourUncheckedCreateWithoutBooksInput = {
    id?: string
    hour: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type HourCreateOrConnectWithoutBooksInput = {
    where: HourWhereUniqueInput
    create: XOR<HourCreateWithoutBooksInput, HourUncheckedCreateWithoutBooksInput>
  }

  export type UserUpsertWithoutBooksInput = {
    update: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
  }

  export type UserUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TableUpsertWithoutBooksInput = {
    update: XOR<TableUpdateWithoutBooksInput, TableUncheckedUpdateWithoutBooksInput>
    create: XOR<TableCreateWithoutBooksInput, TableUncheckedCreateWithoutBooksInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutBooksInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutBooksInput, TableUncheckedUpdateWithoutBooksInput>
  }

  export type TableUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    number_table?: IntFieldUpdateOperationsInput | number
    quantity_people?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TableUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    number_table?: IntFieldUpdateOperationsInput | number
    quantity_people?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HourUpsertWithoutBooksInput = {
    update: XOR<HourUpdateWithoutBooksInput, HourUncheckedUpdateWithoutBooksInput>
    create: XOR<HourCreateWithoutBooksInput, HourUncheckedCreateWithoutBooksInput>
    where?: HourWhereInput
  }

  export type HourUpdateToOneWithWhereWithoutBooksInput = {
    where?: HourWhereInput
    data: XOR<HourUpdateWithoutBooksInput, HourUncheckedUpdateWithoutBooksInput>
  }

  export type HourUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HourUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookCreateWithoutTablesInput = {
    id?: string
    name: string
    number_people: number
    date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: UserCreateNestedOneWithoutBooksInput
    hours: HourCreateNestedOneWithoutBooksInput
  }

  export type BookUncheckedCreateWithoutTablesInput = {
    id?: string
    name: string
    number_people: number
    date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id: string
    hour_id: string
  }

  export type BookCreateOrConnectWithoutTablesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutTablesInput, BookUncheckedCreateWithoutTablesInput>
  }

  export type BookCreateManyTablesInputEnvelope = {
    data: Enumerable<BookCreateManyTablesInput>
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutTablesInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutTablesInput, BookUncheckedUpdateWithoutTablesInput>
    create: XOR<BookCreateWithoutTablesInput, BookUncheckedCreateWithoutTablesInput>
  }

  export type BookUpdateWithWhereUniqueWithoutTablesInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutTablesInput, BookUncheckedUpdateWithoutTablesInput>
  }

  export type BookUpdateManyWithWhereWithoutTablesInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutTablesInput>
  }

  export type BookCreateWithoutHoursInput = {
    id?: string
    name: string
    number_people: number
    date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: UserCreateNestedOneWithoutBooksInput
    tables: TableCreateNestedOneWithoutBooksInput
  }

  export type BookUncheckedCreateWithoutHoursInput = {
    id?: string
    name: string
    number_people: number
    date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id: string
    table_id: string
  }

  export type BookCreateOrConnectWithoutHoursInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutHoursInput, BookUncheckedCreateWithoutHoursInput>
  }

  export type BookCreateManyHoursInputEnvelope = {
    data: Enumerable<BookCreateManyHoursInput>
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutHoursInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutHoursInput, BookUncheckedUpdateWithoutHoursInput>
    create: XOR<BookCreateWithoutHoursInput, BookUncheckedCreateWithoutHoursInput>
  }

  export type BookUpdateWithWhereUniqueWithoutHoursInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutHoursInput, BookUncheckedUpdateWithoutHoursInput>
  }

  export type BookUpdateManyWithWhereWithoutHoursInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutHoursInput>
  }

  export type BookCreateManyUserInput = {
    id?: string
    name: string
    number_people: number
    date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    table_id: string
    hour_id: string
  }

  export type BookUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tables?: TableUpdateOneRequiredWithoutBooksNestedInput
    hours?: HourUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    table_id?: StringFieldUpdateOperationsInput | string
    hour_id?: StringFieldUpdateOperationsInput | string
  }

  export type BookUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    table_id?: StringFieldUpdateOperationsInput | string
    hour_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    price: string
    description: string
    banner: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemCreateManyProductInput = {
    id?: string
    amount: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_id: string
  }

  export type ItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateManyOrderInput = {
    id?: string
    amount: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
  }

  export type ItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateManyTablesInput = {
    id?: string
    name: string
    number_people: number
    date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id: string
    hour_id: string
  }

  export type BookUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    hours?: HourUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    hour_id?: StringFieldUpdateOperationsInput | string
  }

  export type BookUncheckedUpdateManyWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    hour_id?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateManyHoursInput = {
    id?: string
    name: string
    number_people: number
    date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id: string
    table_id: string
  }

  export type BookUpdateWithoutHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    tables?: TableUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateWithoutHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
  }

  export type BookUncheckedUpdateManyWithoutHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number_people?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    table_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}
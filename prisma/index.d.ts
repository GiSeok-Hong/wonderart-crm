
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type StudentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Student"
  objects: {
    class: StudentOnClassPayload<ExtArgs>[]
    guardian: GuardianPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    entranceDate: Date
    day: number[]
    time: number[]
    name: string
    phone: string | null
    birthDate: Date
    sex: Sex
    guardianId: number
    address: string
    school: string | null
    experience: string | null
    reason: ReasonForChoosing
    importantActivity: ArtActivity
    interestingActivity: ArtActivity
    caution: string | null
    agree: boolean
    teacherMemo: string | null
  }, ExtArgs["result"]["student"]>
  composites: {}
}

/**
 * Model Student
 * 
 */
export type Student = runtime.Types.DefaultSelection<StudentPayload>
export type GuardianPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Guardian"
  objects: {
    student: StudentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    phone: string
  }, ExtArgs["result"]["guardian"]>
  composites: {}
}

/**
 * Model Guardian
 * 
 */
export type Guardian = runtime.Types.DefaultSelection<GuardianPayload>
export type TeacherPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Teacher"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    phone: string
    loginId: string
    password: string
  }, ExtArgs["result"]["teacher"]>
  composites: {}
}

/**
 * Model Teacher
 * 
 */
export type Teacher = runtime.Types.DefaultSelection<TeacherPayload>
export type ScheduleMemoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "ScheduleMemo"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    topMemo: string | null
    memo1: string | null
    memo2: string | null
    memo3: string | null
    memo4: string | null
    memo5: string | null
  }, ExtArgs["result"]["scheduleMemo"]>
  composites: {}
}

/**
 * Model ScheduleMemo
 * 
 */
export type ScheduleMemo = runtime.Types.DefaultSelection<ScheduleMemoPayload>
export type ClassPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Class"
  objects: {
    student: StudentOnClassPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    classTime: Date
  }, ExtArgs["result"]["class"]>
  composites: {}
}

/**
 * Model Class
 * 
 */
export type Class = runtime.Types.DefaultSelection<ClassPayload>
export type StudentOnClassPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "StudentOnClass"
  objects: {
    student: StudentPayload<ExtArgs>
    class: ClassPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    studentId: number
    classId: number
  }, ExtArgs["result"]["studentOnClass"]>
  composites: {}
}

/**
 * Model StudentOnClass
 * 
 */
export type StudentOnClass = runtime.Types.DefaultSelection<StudentOnClassPayload>

/**
 * Enums
 */

export const Sex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Sex = (typeof Sex)[keyof typeof Sex]


export const ReasonForChoosing: {
  RECOMMENDED: 'RECOMMENDED',
  LOCATION: 'LOCATION',
  GOSSIP: 'GOSSIP',
  SEARCHED: 'SEARCHED',
  ETC: 'ETC'
};

export type ReasonForChoosing = (typeof ReasonForChoosing)[keyof typeof ReasonForChoosing]


export const ArtActivity: {
  DRAWING: 'DRAWING',
  MATERIALCLASS: 'MATERIALCLASS',
  MASTERPIECECLASS: 'MASTERPIECECLASS',
  TECHNIQUECLASS: 'TECHNIQUECLASS',
  ETC: 'ETC'
};

export type ArtActivity = (typeof ArtActivity)[keyof typeof ArtActivity]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.guardian`: Exposes CRUD operations for the **Guardian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guardians
    * const guardians = await prisma.guardian.findMany()
    * ```
    */
  get guardian(): Prisma.GuardianDelegate<ExtArgs>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs>;

  /**
   * `prisma.scheduleMemo`: Exposes CRUD operations for the **ScheduleMemo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleMemos
    * const scheduleMemos = await prisma.scheduleMemo.findMany()
    * ```
    */
  get scheduleMemo(): Prisma.ScheduleMemoDelegate<ExtArgs>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs>;

  /**
   * `prisma.studentOnClass`: Exposes CRUD operations for the **StudentOnClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentOnClasses
    * const studentOnClasses = await prisma.studentOnClass.findMany()
    * ```
    */
  get studentOnClass(): Prisma.StudentOnClassDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 5.0.0
   * Query Engine version: 6b0aef69b7cdfc787f822ecd7cdc76d5f1991584
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
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Student: 'Student',
    Guardian: 'Guardian',
    Teacher: 'Teacher',
    ScheduleMemo: 'ScheduleMemo',
    Class: 'Class',
    StudentOnClass: 'StudentOnClass'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'student' | 'guardian' | 'teacher' | 'scheduleMemo' | 'class' | 'studentOnClass'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Student: {
        payload: StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Guardian: {
        payload: GuardianPayload<ExtArgs>
        fields: Prisma.GuardianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuardianFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GuardianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuardianFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GuardianPayload>
          }
          findFirst: {
            args: Prisma.GuardianFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GuardianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuardianFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GuardianPayload>
          }
          findMany: {
            args: Prisma.GuardianFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GuardianPayload>[]
          }
          create: {
            args: Prisma.GuardianCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GuardianPayload>
          }
          createMany: {
            args: Prisma.GuardianCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GuardianDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GuardianPayload>
          }
          update: {
            args: Prisma.GuardianUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GuardianPayload>
          }
          deleteMany: {
            args: Prisma.GuardianDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GuardianUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GuardianUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GuardianPayload>
          }
          aggregate: {
            args: Prisma.GuardianAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGuardian>
          }
          groupBy: {
            args: Prisma.GuardianGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GuardianGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuardianCountArgs<ExtArgs>,
            result: $Utils.Optional<GuardianCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>,
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      ScheduleMemo: {
        payload: ScheduleMemoPayload<ExtArgs>
        fields: Prisma.ScheduleMemoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleMemoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ScheduleMemoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleMemoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ScheduleMemoPayload>
          }
          findFirst: {
            args: Prisma.ScheduleMemoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ScheduleMemoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleMemoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ScheduleMemoPayload>
          }
          findMany: {
            args: Prisma.ScheduleMemoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ScheduleMemoPayload>[]
          }
          create: {
            args: Prisma.ScheduleMemoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ScheduleMemoPayload>
          }
          createMany: {
            args: Prisma.ScheduleMemoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ScheduleMemoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ScheduleMemoPayload>
          }
          update: {
            args: Prisma.ScheduleMemoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ScheduleMemoPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleMemoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleMemoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleMemoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ScheduleMemoPayload>
          }
          aggregate: {
            args: Prisma.ScheduleMemoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScheduleMemo>
          }
          groupBy: {
            args: Prisma.ScheduleMemoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScheduleMemoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleMemoCountArgs<ExtArgs>,
            result: $Utils.Optional<ScheduleMemoCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>,
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      StudentOnClass: {
        payload: StudentOnClassPayload<ExtArgs>
        fields: Prisma.StudentOnClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentOnClassFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentOnClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentOnClassFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentOnClassPayload>
          }
          findFirst: {
            args: Prisma.StudentOnClassFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentOnClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentOnClassFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentOnClassPayload>
          }
          findMany: {
            args: Prisma.StudentOnClassFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentOnClassPayload>[]
          }
          create: {
            args: Prisma.StudentOnClassCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentOnClassPayload>
          }
          createMany: {
            args: Prisma.StudentOnClassCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StudentOnClassDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentOnClassPayload>
          }
          update: {
            args: Prisma.StudentOnClassUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentOnClassPayload>
          }
          deleteMany: {
            args: Prisma.StudentOnClassDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StudentOnClassUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StudentOnClassUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentOnClassPayload>
          }
          aggregate: {
            args: Prisma.StudentOnClassAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudentOnClass>
          }
          groupBy: {
            args: Prisma.StudentOnClassGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentOnClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentOnClassCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentOnClassCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
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
   * These options are being passed into the middleware as "params"
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

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */


  export type StudentCountOutputType = {
    class: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    class?: boolean | StudentCountOutputTypeCountClassArgs
  }

  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountClassArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StudentOnClassWhereInput
  }



  /**
   * Count Type GuardianCountOutputType
   */


  export type GuardianCountOutputType = {
    student: number
  }

  export type GuardianCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    student?: boolean | GuardianCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes

  /**
   * GuardianCountOutputType without action
   */
  export type GuardianCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianCountOutputType
     */
    select?: GuardianCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GuardianCountOutputType without action
   */
  export type GuardianCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }



  /**
   * Count Type ClassCountOutputType
   */


  export type ClassCountOutputType = {
    student: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    student?: boolean | ClassCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StudentOnClassWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Student
   */


  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    day: number | null
    time: number | null
    guardianId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    day: number[] | null
    time: number[] | null
    guardianId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    entranceDate: Date | null
    name: string | null
    phone: string | null
    birthDate: Date | null
    sex: Sex | null
    guardianId: number | null
    address: string | null
    school: string | null
    experience: string | null
    reason: ReasonForChoosing | null
    importantActivity: ArtActivity | null
    interestingActivity: ArtActivity | null
    caution: string | null
    agree: boolean | null
    teacherMemo: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    entranceDate: Date | null
    name: string | null
    phone: string | null
    birthDate: Date | null
    sex: Sex | null
    guardianId: number | null
    address: string | null
    school: string | null
    experience: string | null
    reason: ReasonForChoosing | null
    importantActivity: ArtActivity | null
    interestingActivity: ArtActivity | null
    caution: string | null
    agree: boolean | null
    teacherMemo: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    entranceDate: number
    day: number
    time: number
    name: number
    phone: number
    birthDate: number
    sex: number
    guardianId: number
    address: number
    school: number
    experience: number
    reason: number
    importantActivity: number
    interestingActivity: number
    caution: number
    agree: number
    teacherMemo: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    day?: true
    time?: true
    guardianId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    day?: true
    time?: true
    guardianId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    entranceDate?: true
    name?: true
    phone?: true
    birthDate?: true
    sex?: true
    guardianId?: true
    address?: true
    school?: true
    experience?: true
    reason?: true
    importantActivity?: true
    interestingActivity?: true
    caution?: true
    agree?: true
    teacherMemo?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    entranceDate?: true
    name?: true
    phone?: true
    birthDate?: true
    sex?: true
    guardianId?: true
    address?: true
    school?: true
    experience?: true
    reason?: true
    importantActivity?: true
    interestingActivity?: true
    caution?: true
    agree?: true
    teacherMemo?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    entranceDate?: true
    day?: true
    time?: true
    name?: true
    phone?: true
    birthDate?: true
    sex?: true
    guardianId?: true
    address?: true
    school?: true
    experience?: true
    reason?: true
    importantActivity?: true
    interestingActivity?: true
    caution?: true
    agree?: true
    teacherMemo?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }


  export type StudentGroupByOutputType = {
    id: number
    entranceDate: Date
    day: number[]
    time: number[]
    name: string
    phone: string | null
    birthDate: Date
    sex: Sex
    guardianId: number
    address: string
    school: string | null
    experience: string | null
    reason: ReasonForChoosing
    importantActivity: ArtActivity
    interestingActivity: ArtActivity
    caution: string | null
    agree: boolean
    teacherMemo: string | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entranceDate?: boolean
    day?: boolean
    time?: boolean
    name?: boolean
    phone?: boolean
    birthDate?: boolean
    sex?: boolean
    guardianId?: boolean
    address?: boolean
    school?: boolean
    experience?: boolean
    reason?: boolean
    importantActivity?: boolean
    interestingActivity?: boolean
    caution?: boolean
    agree?: boolean
    teacherMemo?: boolean
    class?: boolean | Student$classArgs<ExtArgs>
    guardian?: boolean | GuardianArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    entranceDate?: boolean
    day?: boolean
    time?: boolean
    name?: boolean
    phone?: boolean
    birthDate?: boolean
    sex?: boolean
    guardianId?: boolean
    address?: boolean
    school?: boolean
    experience?: boolean
    reason?: boolean
    importantActivity?: boolean
    interestingActivity?: boolean
    caution?: boolean
    agree?: boolean
    teacherMemo?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    class?: boolean | Student$classArgs<ExtArgs>
    guardian?: boolean | GuardianArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeArgs<ExtArgs>
  }


  type StudentGetPayload<S extends boolean | null | undefined | StudentArgs> = $Types.GetResult<StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCreateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Students.
     *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    class<T extends Student$classArgs<ExtArgs> = {}>(args?: Subset<T, Student$classArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<StudentOnClassPayload<ExtArgs>, T, 'findMany'>| Null>;

    guardian<T extends GuardianArgs<ExtArgs> = {}>(args?: Subset<T, GuardianArgs<ExtArgs>>): Prisma__GuardianClient<$Types.GetResult<GuardianPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

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



  /**
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly entranceDate: FieldRef<"Student", 'DateTime'>
    readonly day: FieldRef<"Student", 'Int[]'>
    readonly time: FieldRef<"Student", 'Int[]'>
    readonly name: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly birthDate: FieldRef<"Student", 'DateTime'>
    readonly sex: FieldRef<"Student", 'Sex'>
    readonly guardianId: FieldRef<"Student", 'Int'>
    readonly address: FieldRef<"Student", 'String'>
    readonly school: FieldRef<"Student", 'String'>
    readonly experience: FieldRef<"Student", 'String'>
    readonly reason: FieldRef<"Student", 'ReasonForChoosing'>
    readonly importantActivity: FieldRef<"Student", 'ArtActivity'>
    readonly interestingActivity: FieldRef<"Student", 'ArtActivity'>
    readonly caution: FieldRef<"Student", 'String'>
    readonly agree: FieldRef<"Student", 'Boolean'>
    readonly teacherMemo: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }


  /**
   * Student.class
   */
  export type Student$classArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOnClass
     */
    select?: StudentOnClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentOnClassInclude<ExtArgs> | null
    where?: StudentOnClassWhereInput
    orderBy?: StudentOnClassOrderByWithRelationInput | StudentOnClassOrderByWithRelationInput[]
    cursor?: StudentOnClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentOnClassScalarFieldEnum | StudentOnClassScalarFieldEnum[]
  }


  /**
   * Student without action
   */
  export type StudentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
  }



  /**
   * Model Guardian
   */


  export type AggregateGuardian = {
    _count: GuardianCountAggregateOutputType | null
    _avg: GuardianAvgAggregateOutputType | null
    _sum: GuardianSumAggregateOutputType | null
    _min: GuardianMinAggregateOutputType | null
    _max: GuardianMaxAggregateOutputType | null
  }

  export type GuardianAvgAggregateOutputType = {
    id: number | null
  }

  export type GuardianSumAggregateOutputType = {
    id: number | null
  }

  export type GuardianMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
  }

  export type GuardianMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
  }

  export type GuardianCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    _all: number
  }


  export type GuardianAvgAggregateInputType = {
    id?: true
  }

  export type GuardianSumAggregateInputType = {
    id?: true
  }

  export type GuardianMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
  }

  export type GuardianMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
  }

  export type GuardianCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    _all?: true
  }

  export type GuardianAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guardian to aggregate.
     */
    where?: GuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guardians to fetch.
     */
    orderBy?: GuardianOrderByWithRelationInput | GuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guardians
    **/
    _count?: true | GuardianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuardianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuardianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuardianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuardianMaxAggregateInputType
  }

  export type GetGuardianAggregateType<T extends GuardianAggregateArgs> = {
        [P in keyof T & keyof AggregateGuardian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuardian[P]>
      : GetScalarType<T[P], AggregateGuardian[P]>
  }




  export type GuardianGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GuardianWhereInput
    orderBy?: GuardianOrderByWithAggregationInput | GuardianOrderByWithAggregationInput[]
    by: GuardianScalarFieldEnum[] | GuardianScalarFieldEnum
    having?: GuardianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuardianCountAggregateInputType | true
    _avg?: GuardianAvgAggregateInputType
    _sum?: GuardianSumAggregateInputType
    _min?: GuardianMinAggregateInputType
    _max?: GuardianMaxAggregateInputType
  }


  export type GuardianGroupByOutputType = {
    id: number
    name: string
    phone: string
    _count: GuardianCountAggregateOutputType | null
    _avg: GuardianAvgAggregateOutputType | null
    _sum: GuardianSumAggregateOutputType | null
    _min: GuardianMinAggregateOutputType | null
    _max: GuardianMaxAggregateOutputType | null
  }

  type GetGuardianGroupByPayload<T extends GuardianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuardianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuardianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuardianGroupByOutputType[P]>
            : GetScalarType<T[P], GuardianGroupByOutputType[P]>
        }
      >
    >


  export type GuardianSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    student?: boolean | Guardian$studentArgs<ExtArgs>
    _count?: boolean | GuardianCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["guardian"]>

  export type GuardianSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
  }

  export type GuardianInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    student?: boolean | Guardian$studentArgs<ExtArgs>
    _count?: boolean | GuardianCountOutputTypeArgs<ExtArgs>
  }


  type GuardianGetPayload<S extends boolean | null | undefined | GuardianArgs> = $Types.GetResult<GuardianPayload, S>

  type GuardianCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GuardianFindManyArgs, 'select' | 'include'> & {
      select?: GuardianCountAggregateInputType | true
    }

  export interface GuardianDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guardian'], meta: { name: 'Guardian' } }
    /**
     * Find zero or one Guardian that matches the filter.
     * @param {GuardianFindUniqueArgs} args - Arguments to find a Guardian
     * @example
     * // Get one Guardian
     * const guardian = await prisma.guardian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GuardianFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GuardianFindUniqueArgs<ExtArgs>>
    ): Prisma__GuardianClient<$Types.GetResult<GuardianPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Guardian that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GuardianFindUniqueOrThrowArgs} args - Arguments to find a Guardian
     * @example
     * // Get one Guardian
     * const guardian = await prisma.guardian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GuardianFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GuardianFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GuardianClient<$Types.GetResult<GuardianPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Guardian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianFindFirstArgs} args - Arguments to find a Guardian
     * @example
     * // Get one Guardian
     * const guardian = await prisma.guardian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GuardianFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GuardianFindFirstArgs<ExtArgs>>
    ): Prisma__GuardianClient<$Types.GetResult<GuardianPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Guardian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianFindFirstOrThrowArgs} args - Arguments to find a Guardian
     * @example
     * // Get one Guardian
     * const guardian = await prisma.guardian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GuardianFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GuardianFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GuardianClient<$Types.GetResult<GuardianPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Guardians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guardians
     * const guardians = await prisma.guardian.findMany()
     * 
     * // Get first 10 Guardians
     * const guardians = await prisma.guardian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guardianWithIdOnly = await prisma.guardian.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GuardianFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GuardianFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<GuardianPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Guardian.
     * @param {GuardianCreateArgs} args - Arguments to create a Guardian.
     * @example
     * // Create one Guardian
     * const Guardian = await prisma.guardian.create({
     *   data: {
     *     // ... data to create a Guardian
     *   }
     * })
     * 
    **/
    create<T extends GuardianCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GuardianCreateArgs<ExtArgs>>
    ): Prisma__GuardianClient<$Types.GetResult<GuardianPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Guardians.
     *     @param {GuardianCreateManyArgs} args - Arguments to create many Guardians.
     *     @example
     *     // Create many Guardians
     *     const guardian = await prisma.guardian.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GuardianCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GuardianCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Guardian.
     * @param {GuardianDeleteArgs} args - Arguments to delete one Guardian.
     * @example
     * // Delete one Guardian
     * const Guardian = await prisma.guardian.delete({
     *   where: {
     *     // ... filter to delete one Guardian
     *   }
     * })
     * 
    **/
    delete<T extends GuardianDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GuardianDeleteArgs<ExtArgs>>
    ): Prisma__GuardianClient<$Types.GetResult<GuardianPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Guardian.
     * @param {GuardianUpdateArgs} args - Arguments to update one Guardian.
     * @example
     * // Update one Guardian
     * const guardian = await prisma.guardian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GuardianUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GuardianUpdateArgs<ExtArgs>>
    ): Prisma__GuardianClient<$Types.GetResult<GuardianPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Guardians.
     * @param {GuardianDeleteManyArgs} args - Arguments to filter Guardians to delete.
     * @example
     * // Delete a few Guardians
     * const { count } = await prisma.guardian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GuardianDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GuardianDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guardians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guardians
     * const guardian = await prisma.guardian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GuardianUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GuardianUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Guardian.
     * @param {GuardianUpsertArgs} args - Arguments to update or create a Guardian.
     * @example
     * // Update or create a Guardian
     * const guardian = await prisma.guardian.upsert({
     *   create: {
     *     // ... data to create a Guardian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guardian we want to update
     *   }
     * })
    **/
    upsert<T extends GuardianUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GuardianUpsertArgs<ExtArgs>>
    ): Prisma__GuardianClient<$Types.GetResult<GuardianPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Guardians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianCountArgs} args - Arguments to filter Guardians to count.
     * @example
     * // Count the number of Guardians
     * const count = await prisma.guardian.count({
     *   where: {
     *     // ... the filter for the Guardians we want to count
     *   }
     * })
    **/
    count<T extends GuardianCountArgs>(
      args?: Subset<T, GuardianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuardianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guardian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuardianAggregateArgs>(args: Subset<T, GuardianAggregateArgs>): Prisma.PrismaPromise<GetGuardianAggregateType<T>>

    /**
     * Group by Guardian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianGroupByArgs} args - Group by arguments.
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
      T extends GuardianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuardianGroupByArgs['orderBy'] }
        : { orderBy?: GuardianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GuardianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuardianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guardian model
   */
  readonly fields: GuardianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guardian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GuardianClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    student<T extends Guardian$studentArgs<ExtArgs> = {}>(args?: Subset<T, Guardian$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findMany'>| Null>;

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



  /**
   * Fields of the Guardian model
   */ 
  interface GuardianFieldRefs {
    readonly id: FieldRef<"Guardian", 'Int'>
    readonly name: FieldRef<"Guardian", 'String'>
    readonly phone: FieldRef<"Guardian", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Guardian findUnique
   */
  export type GuardianFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardian to fetch.
     */
    where: GuardianWhereUniqueInput
  }


  /**
   * Guardian findUniqueOrThrow
   */
  export type GuardianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardian to fetch.
     */
    where: GuardianWhereUniqueInput
  }


  /**
   * Guardian findFirst
   */
  export type GuardianFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardian to fetch.
     */
    where?: GuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guardians to fetch.
     */
    orderBy?: GuardianOrderByWithRelationInput | GuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guardians.
     */
    cursor?: GuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guardians.
     */
    distinct?: GuardianScalarFieldEnum | GuardianScalarFieldEnum[]
  }


  /**
   * Guardian findFirstOrThrow
   */
  export type GuardianFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardian to fetch.
     */
    where?: GuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guardians to fetch.
     */
    orderBy?: GuardianOrderByWithRelationInput | GuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guardians.
     */
    cursor?: GuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guardians.
     */
    distinct?: GuardianScalarFieldEnum | GuardianScalarFieldEnum[]
  }


  /**
   * Guardian findMany
   */
  export type GuardianFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardians to fetch.
     */
    where?: GuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guardians to fetch.
     */
    orderBy?: GuardianOrderByWithRelationInput | GuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guardians.
     */
    cursor?: GuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guardians.
     */
    skip?: number
    distinct?: GuardianScalarFieldEnum | GuardianScalarFieldEnum[]
  }


  /**
   * Guardian create
   */
  export type GuardianCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * The data needed to create a Guardian.
     */
    data: XOR<GuardianCreateInput, GuardianUncheckedCreateInput>
  }


  /**
   * Guardian createMany
   */
  export type GuardianCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guardians.
     */
    data: GuardianCreateManyInput | GuardianCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Guardian update
   */
  export type GuardianUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * The data needed to update a Guardian.
     */
    data: XOR<GuardianUpdateInput, GuardianUncheckedUpdateInput>
    /**
     * Choose, which Guardian to update.
     */
    where: GuardianWhereUniqueInput
  }


  /**
   * Guardian updateMany
   */
  export type GuardianUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guardians.
     */
    data: XOR<GuardianUpdateManyMutationInput, GuardianUncheckedUpdateManyInput>
    /**
     * Filter which Guardians to update
     */
    where?: GuardianWhereInput
  }


  /**
   * Guardian upsert
   */
  export type GuardianUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * The filter to search for the Guardian to update in case it exists.
     */
    where: GuardianWhereUniqueInput
    /**
     * In case the Guardian found by the `where` argument doesn't exist, create a new Guardian with this data.
     */
    create: XOR<GuardianCreateInput, GuardianUncheckedCreateInput>
    /**
     * In case the Guardian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuardianUpdateInput, GuardianUncheckedUpdateInput>
  }


  /**
   * Guardian delete
   */
  export type GuardianDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter which Guardian to delete.
     */
    where: GuardianWhereUniqueInput
  }


  /**
   * Guardian deleteMany
   */
  export type GuardianDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guardians to delete
     */
    where?: GuardianWhereInput
  }


  /**
   * Guardian.student
   */
  export type Guardian$studentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Guardian without action
   */
  export type GuardianArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GuardianInclude<ExtArgs> | null
  }



  /**
   * Model Teacher
   */


  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    loginId: string | null
    password: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    loginId: string | null
    password: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    loginId: number
    password: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    loginId?: true
    password?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    loginId?: true
    password?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    loginId?: true
    password?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }


  export type TeacherGroupByOutputType = {
    id: number
    name: string
    phone: string
    loginId: string
    password: string
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    loginId?: boolean
    password?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    loginId?: boolean
    password?: boolean
  }


  type TeacherGetPayload<S extends boolean | null | undefined | TeacherArgs> = $Types.GetResult<TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TeacherFindManyArgs, 'select' | 'include'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeacherFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>
    ): Prisma__TeacherClient<$Types.GetResult<TeacherPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Teacher that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeacherClient<$Types.GetResult<TeacherPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeacherFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>
    ): Prisma__TeacherClient<$Types.GetResult<TeacherPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeacherClient<$Types.GetResult<TeacherPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeacherFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TeacherPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
    **/
    create<T extends TeacherCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>
    ): Prisma__TeacherClient<$Types.GetResult<TeacherPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Teachers.
     *     @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     *     @example
     *     // Create many Teachers
     *     const teacher = await prisma.teacher.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeacherCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
    **/
    delete<T extends TeacherDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>
    ): Prisma__TeacherClient<$Types.GetResult<TeacherPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeacherUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>
    ): Prisma__TeacherClient<$Types.GetResult<TeacherPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeacherDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeacherUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
    **/
    upsert<T extends TeacherUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>
    ): Prisma__TeacherClient<$Types.GetResult<TeacherPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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



  /**
   * Fields of the Teacher model
   */ 
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly phone: FieldRef<"Teacher", 'String'>
    readonly loginId: FieldRef<"Teacher", 'String'>
    readonly password: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }


  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }


  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }


  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }


  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }


  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }


  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }


  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
  }


  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }


  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }


  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
  }


  /**
   * Teacher without action
   */
  export type TeacherArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
  }



  /**
   * Model ScheduleMemo
   */


  export type AggregateScheduleMemo = {
    _count: ScheduleMemoCountAggregateOutputType | null
    _avg: ScheduleMemoAvgAggregateOutputType | null
    _sum: ScheduleMemoSumAggregateOutputType | null
    _min: ScheduleMemoMinAggregateOutputType | null
    _max: ScheduleMemoMaxAggregateOutputType | null
  }

  export type ScheduleMemoAvgAggregateOutputType = {
    id: number | null
  }

  export type ScheduleMemoSumAggregateOutputType = {
    id: number | null
  }

  export type ScheduleMemoMinAggregateOutputType = {
    id: number | null
    topMemo: string | null
    memo1: string | null
    memo2: string | null
    memo3: string | null
    memo4: string | null
    memo5: string | null
  }

  export type ScheduleMemoMaxAggregateOutputType = {
    id: number | null
    topMemo: string | null
    memo1: string | null
    memo2: string | null
    memo3: string | null
    memo4: string | null
    memo5: string | null
  }

  export type ScheduleMemoCountAggregateOutputType = {
    id: number
    topMemo: number
    memo1: number
    memo2: number
    memo3: number
    memo4: number
    memo5: number
    _all: number
  }


  export type ScheduleMemoAvgAggregateInputType = {
    id?: true
  }

  export type ScheduleMemoSumAggregateInputType = {
    id?: true
  }

  export type ScheduleMemoMinAggregateInputType = {
    id?: true
    topMemo?: true
    memo1?: true
    memo2?: true
    memo3?: true
    memo4?: true
    memo5?: true
  }

  export type ScheduleMemoMaxAggregateInputType = {
    id?: true
    topMemo?: true
    memo1?: true
    memo2?: true
    memo3?: true
    memo4?: true
    memo5?: true
  }

  export type ScheduleMemoCountAggregateInputType = {
    id?: true
    topMemo?: true
    memo1?: true
    memo2?: true
    memo3?: true
    memo4?: true
    memo5?: true
    _all?: true
  }

  export type ScheduleMemoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleMemo to aggregate.
     */
    where?: ScheduleMemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleMemos to fetch.
     */
    orderBy?: ScheduleMemoOrderByWithRelationInput | ScheduleMemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleMemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleMemos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleMemos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleMemos
    **/
    _count?: true | ScheduleMemoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleMemoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleMemoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMemoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMemoMaxAggregateInputType
  }

  export type GetScheduleMemoAggregateType<T extends ScheduleMemoAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleMemo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleMemo[P]>
      : GetScalarType<T[P], AggregateScheduleMemo[P]>
  }




  export type ScheduleMemoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ScheduleMemoWhereInput
    orderBy?: ScheduleMemoOrderByWithAggregationInput | ScheduleMemoOrderByWithAggregationInput[]
    by: ScheduleMemoScalarFieldEnum[] | ScheduleMemoScalarFieldEnum
    having?: ScheduleMemoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleMemoCountAggregateInputType | true
    _avg?: ScheduleMemoAvgAggregateInputType
    _sum?: ScheduleMemoSumAggregateInputType
    _min?: ScheduleMemoMinAggregateInputType
    _max?: ScheduleMemoMaxAggregateInputType
  }


  export type ScheduleMemoGroupByOutputType = {
    id: number
    topMemo: string | null
    memo1: string | null
    memo2: string | null
    memo3: string | null
    memo4: string | null
    memo5: string | null
    _count: ScheduleMemoCountAggregateOutputType | null
    _avg: ScheduleMemoAvgAggregateOutputType | null
    _sum: ScheduleMemoSumAggregateOutputType | null
    _min: ScheduleMemoMinAggregateOutputType | null
    _max: ScheduleMemoMaxAggregateOutputType | null
  }

  type GetScheduleMemoGroupByPayload<T extends ScheduleMemoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleMemoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleMemoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleMemoGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleMemoGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleMemoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topMemo?: boolean
    memo1?: boolean
    memo2?: boolean
    memo3?: boolean
    memo4?: boolean
    memo5?: boolean
  }, ExtArgs["result"]["scheduleMemo"]>

  export type ScheduleMemoSelectScalar = {
    id?: boolean
    topMemo?: boolean
    memo1?: boolean
    memo2?: boolean
    memo3?: boolean
    memo4?: boolean
    memo5?: boolean
  }


  type ScheduleMemoGetPayload<S extends boolean | null | undefined | ScheduleMemoArgs> = $Types.GetResult<ScheduleMemoPayload, S>

  type ScheduleMemoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ScheduleMemoFindManyArgs, 'select' | 'include'> & {
      select?: ScheduleMemoCountAggregateInputType | true
    }

  export interface ScheduleMemoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleMemo'], meta: { name: 'ScheduleMemo' } }
    /**
     * Find zero or one ScheduleMemo that matches the filter.
     * @param {ScheduleMemoFindUniqueArgs} args - Arguments to find a ScheduleMemo
     * @example
     * // Get one ScheduleMemo
     * const scheduleMemo = await prisma.scheduleMemo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScheduleMemoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleMemoFindUniqueArgs<ExtArgs>>
    ): Prisma__ScheduleMemoClient<$Types.GetResult<ScheduleMemoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ScheduleMemo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScheduleMemoFindUniqueOrThrowArgs} args - Arguments to find a ScheduleMemo
     * @example
     * // Get one ScheduleMemo
     * const scheduleMemo = await prisma.scheduleMemo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScheduleMemoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleMemoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ScheduleMemoClient<$Types.GetResult<ScheduleMemoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ScheduleMemo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleMemoFindFirstArgs} args - Arguments to find a ScheduleMemo
     * @example
     * // Get one ScheduleMemo
     * const scheduleMemo = await prisma.scheduleMemo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScheduleMemoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleMemoFindFirstArgs<ExtArgs>>
    ): Prisma__ScheduleMemoClient<$Types.GetResult<ScheduleMemoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ScheduleMemo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleMemoFindFirstOrThrowArgs} args - Arguments to find a ScheduleMemo
     * @example
     * // Get one ScheduleMemo
     * const scheduleMemo = await prisma.scheduleMemo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScheduleMemoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleMemoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ScheduleMemoClient<$Types.GetResult<ScheduleMemoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ScheduleMemos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleMemoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleMemos
     * const scheduleMemos = await prisma.scheduleMemo.findMany()
     * 
     * // Get first 10 ScheduleMemos
     * const scheduleMemos = await prisma.scheduleMemo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleMemoWithIdOnly = await prisma.scheduleMemo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScheduleMemoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleMemoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ScheduleMemoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ScheduleMemo.
     * @param {ScheduleMemoCreateArgs} args - Arguments to create a ScheduleMemo.
     * @example
     * // Create one ScheduleMemo
     * const ScheduleMemo = await prisma.scheduleMemo.create({
     *   data: {
     *     // ... data to create a ScheduleMemo
     *   }
     * })
     * 
    **/
    create<T extends ScheduleMemoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleMemoCreateArgs<ExtArgs>>
    ): Prisma__ScheduleMemoClient<$Types.GetResult<ScheduleMemoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ScheduleMemos.
     *     @param {ScheduleMemoCreateManyArgs} args - Arguments to create many ScheduleMemos.
     *     @example
     *     // Create many ScheduleMemos
     *     const scheduleMemo = await prisma.scheduleMemo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScheduleMemoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleMemoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScheduleMemo.
     * @param {ScheduleMemoDeleteArgs} args - Arguments to delete one ScheduleMemo.
     * @example
     * // Delete one ScheduleMemo
     * const ScheduleMemo = await prisma.scheduleMemo.delete({
     *   where: {
     *     // ... filter to delete one ScheduleMemo
     *   }
     * })
     * 
    **/
    delete<T extends ScheduleMemoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleMemoDeleteArgs<ExtArgs>>
    ): Prisma__ScheduleMemoClient<$Types.GetResult<ScheduleMemoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ScheduleMemo.
     * @param {ScheduleMemoUpdateArgs} args - Arguments to update one ScheduleMemo.
     * @example
     * // Update one ScheduleMemo
     * const scheduleMemo = await prisma.scheduleMemo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScheduleMemoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleMemoUpdateArgs<ExtArgs>>
    ): Prisma__ScheduleMemoClient<$Types.GetResult<ScheduleMemoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ScheduleMemos.
     * @param {ScheduleMemoDeleteManyArgs} args - Arguments to filter ScheduleMemos to delete.
     * @example
     * // Delete a few ScheduleMemos
     * const { count } = await prisma.scheduleMemo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScheduleMemoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleMemoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleMemos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleMemoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleMemos
     * const scheduleMemo = await prisma.scheduleMemo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScheduleMemoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleMemoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScheduleMemo.
     * @param {ScheduleMemoUpsertArgs} args - Arguments to update or create a ScheduleMemo.
     * @example
     * // Update or create a ScheduleMemo
     * const scheduleMemo = await prisma.scheduleMemo.upsert({
     *   create: {
     *     // ... data to create a ScheduleMemo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleMemo we want to update
     *   }
     * })
    **/
    upsert<T extends ScheduleMemoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleMemoUpsertArgs<ExtArgs>>
    ): Prisma__ScheduleMemoClient<$Types.GetResult<ScheduleMemoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ScheduleMemos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleMemoCountArgs} args - Arguments to filter ScheduleMemos to count.
     * @example
     * // Count the number of ScheduleMemos
     * const count = await prisma.scheduleMemo.count({
     *   where: {
     *     // ... the filter for the ScheduleMemos we want to count
     *   }
     * })
    **/
    count<T extends ScheduleMemoCountArgs>(
      args?: Subset<T, ScheduleMemoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleMemoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleMemo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleMemoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleMemoAggregateArgs>(args: Subset<T, ScheduleMemoAggregateArgs>): Prisma.PrismaPromise<GetScheduleMemoAggregateType<T>>

    /**
     * Group by ScheduleMemo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleMemoGroupByArgs} args - Group by arguments.
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
      T extends ScheduleMemoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleMemoGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleMemoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ScheduleMemoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleMemoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleMemo model
   */
  readonly fields: ScheduleMemoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleMemo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ScheduleMemoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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



  /**
   * Fields of the ScheduleMemo model
   */ 
  interface ScheduleMemoFieldRefs {
    readonly id: FieldRef<"ScheduleMemo", 'Int'>
    readonly topMemo: FieldRef<"ScheduleMemo", 'String'>
    readonly memo1: FieldRef<"ScheduleMemo", 'String'>
    readonly memo2: FieldRef<"ScheduleMemo", 'String'>
    readonly memo3: FieldRef<"ScheduleMemo", 'String'>
    readonly memo4: FieldRef<"ScheduleMemo", 'String'>
    readonly memo5: FieldRef<"ScheduleMemo", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ScheduleMemo findUnique
   */
  export type ScheduleMemoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleMemo
     */
    select?: ScheduleMemoSelect<ExtArgs> | null
    /**
     * Filter, which ScheduleMemo to fetch.
     */
    where: ScheduleMemoWhereUniqueInput
  }


  /**
   * ScheduleMemo findUniqueOrThrow
   */
  export type ScheduleMemoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleMemo
     */
    select?: ScheduleMemoSelect<ExtArgs> | null
    /**
     * Filter, which ScheduleMemo to fetch.
     */
    where: ScheduleMemoWhereUniqueInput
  }


  /**
   * ScheduleMemo findFirst
   */
  export type ScheduleMemoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleMemo
     */
    select?: ScheduleMemoSelect<ExtArgs> | null
    /**
     * Filter, which ScheduleMemo to fetch.
     */
    where?: ScheduleMemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleMemos to fetch.
     */
    orderBy?: ScheduleMemoOrderByWithRelationInput | ScheduleMemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleMemos.
     */
    cursor?: ScheduleMemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleMemos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleMemos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleMemos.
     */
    distinct?: ScheduleMemoScalarFieldEnum | ScheduleMemoScalarFieldEnum[]
  }


  /**
   * ScheduleMemo findFirstOrThrow
   */
  export type ScheduleMemoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleMemo
     */
    select?: ScheduleMemoSelect<ExtArgs> | null
    /**
     * Filter, which ScheduleMemo to fetch.
     */
    where?: ScheduleMemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleMemos to fetch.
     */
    orderBy?: ScheduleMemoOrderByWithRelationInput | ScheduleMemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleMemos.
     */
    cursor?: ScheduleMemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleMemos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleMemos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleMemos.
     */
    distinct?: ScheduleMemoScalarFieldEnum | ScheduleMemoScalarFieldEnum[]
  }


  /**
   * ScheduleMemo findMany
   */
  export type ScheduleMemoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleMemo
     */
    select?: ScheduleMemoSelect<ExtArgs> | null
    /**
     * Filter, which ScheduleMemos to fetch.
     */
    where?: ScheduleMemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleMemos to fetch.
     */
    orderBy?: ScheduleMemoOrderByWithRelationInput | ScheduleMemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleMemos.
     */
    cursor?: ScheduleMemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleMemos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleMemos.
     */
    skip?: number
    distinct?: ScheduleMemoScalarFieldEnum | ScheduleMemoScalarFieldEnum[]
  }


  /**
   * ScheduleMemo create
   */
  export type ScheduleMemoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleMemo
     */
    select?: ScheduleMemoSelect<ExtArgs> | null
    /**
     * The data needed to create a ScheduleMemo.
     */
    data?: XOR<ScheduleMemoCreateInput, ScheduleMemoUncheckedCreateInput>
  }


  /**
   * ScheduleMemo createMany
   */
  export type ScheduleMemoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleMemos.
     */
    data: ScheduleMemoCreateManyInput | ScheduleMemoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ScheduleMemo update
   */
  export type ScheduleMemoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleMemo
     */
    select?: ScheduleMemoSelect<ExtArgs> | null
    /**
     * The data needed to update a ScheduleMemo.
     */
    data: XOR<ScheduleMemoUpdateInput, ScheduleMemoUncheckedUpdateInput>
    /**
     * Choose, which ScheduleMemo to update.
     */
    where: ScheduleMemoWhereUniqueInput
  }


  /**
   * ScheduleMemo updateMany
   */
  export type ScheduleMemoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleMemos.
     */
    data: XOR<ScheduleMemoUpdateManyMutationInput, ScheduleMemoUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleMemos to update
     */
    where?: ScheduleMemoWhereInput
  }


  /**
   * ScheduleMemo upsert
   */
  export type ScheduleMemoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleMemo
     */
    select?: ScheduleMemoSelect<ExtArgs> | null
    /**
     * The filter to search for the ScheduleMemo to update in case it exists.
     */
    where: ScheduleMemoWhereUniqueInput
    /**
     * In case the ScheduleMemo found by the `where` argument doesn't exist, create a new ScheduleMemo with this data.
     */
    create: XOR<ScheduleMemoCreateInput, ScheduleMemoUncheckedCreateInput>
    /**
     * In case the ScheduleMemo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleMemoUpdateInput, ScheduleMemoUncheckedUpdateInput>
  }


  /**
   * ScheduleMemo delete
   */
  export type ScheduleMemoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleMemo
     */
    select?: ScheduleMemoSelect<ExtArgs> | null
    /**
     * Filter which ScheduleMemo to delete.
     */
    where: ScheduleMemoWhereUniqueInput
  }


  /**
   * ScheduleMemo deleteMany
   */
  export type ScheduleMemoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleMemos to delete
     */
    where?: ScheduleMemoWhereInput
  }


  /**
   * ScheduleMemo without action
   */
  export type ScheduleMemoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleMemo
     */
    select?: ScheduleMemoSelect<ExtArgs> | null
  }



  /**
   * Model Class
   */


  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    id: number | null
  }

  export type ClassSumAggregateOutputType = {
    id: number | null
  }

  export type ClassMinAggregateOutputType = {
    id: number | null
    classTime: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: number | null
    classTime: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    classTime: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    id?: true
  }

  export type ClassSumAggregateInputType = {
    id?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    classTime?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    classTime?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    classTime?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }


  export type ClassGroupByOutputType = {
    id: number
    classTime: Date
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classTime?: boolean
    student?: boolean | Class$studentArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    classTime?: boolean
  }

  export type ClassInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    student?: boolean | Class$studentArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeArgs<ExtArgs>
  }


  type ClassGetPayload<S extends boolean | null | undefined | ClassArgs> = $Types.GetResult<ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ClassFindManyArgs, 'select' | 'include'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClassFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>
    ): Prisma__ClassClient<$Types.GetResult<ClassPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Class that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClassClient<$Types.GetResult<ClassPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClassFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>
    ): Prisma__ClassClient<$Types.GetResult<ClassPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClassClient<$Types.GetResult<ClassPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClassFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ClassPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
    **/
    create<T extends ClassCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClassCreateArgs<ExtArgs>>
    ): Prisma__ClassClient<$Types.GetResult<ClassPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Classes.
     *     @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     *     @example
     *     // Create many Classes
     *     const class = await prisma.class.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClassCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
    **/
    delete<T extends ClassDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>
    ): Prisma__ClassClient<$Types.GetResult<ClassPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClassUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>
    ): Prisma__ClassClient<$Types.GetResult<ClassPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClassDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClassUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
    **/
    upsert<T extends ClassUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>
    ): Prisma__ClassClient<$Types.GetResult<ClassPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    student<T extends Class$studentArgs<ExtArgs> = {}>(args?: Subset<T, Class$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<StudentOnClassPayload<ExtArgs>, T, 'findMany'>| Null>;

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



  /**
   * Fields of the Class model
   */ 
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'Int'>
    readonly classTime: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }


  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }


  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }


  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }


  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }


  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data?: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }


  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }


  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
  }


  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }


  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }


  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
  }


  /**
   * Class.student
   */
  export type Class$studentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOnClass
     */
    select?: StudentOnClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentOnClassInclude<ExtArgs> | null
    where?: StudentOnClassWhereInput
    orderBy?: StudentOnClassOrderByWithRelationInput | StudentOnClassOrderByWithRelationInput[]
    cursor?: StudentOnClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentOnClassScalarFieldEnum | StudentOnClassScalarFieldEnum[]
  }


  /**
   * Class without action
   */
  export type ClassArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
  }



  /**
   * Model StudentOnClass
   */


  export type AggregateStudentOnClass = {
    _count: StudentOnClassCountAggregateOutputType | null
    _avg: StudentOnClassAvgAggregateOutputType | null
    _sum: StudentOnClassSumAggregateOutputType | null
    _min: StudentOnClassMinAggregateOutputType | null
    _max: StudentOnClassMaxAggregateOutputType | null
  }

  export type StudentOnClassAvgAggregateOutputType = {
    studentId: number | null
    classId: number | null
  }

  export type StudentOnClassSumAggregateOutputType = {
    studentId: number | null
    classId: number | null
  }

  export type StudentOnClassMinAggregateOutputType = {
    studentId: number | null
    classId: number | null
  }

  export type StudentOnClassMaxAggregateOutputType = {
    studentId: number | null
    classId: number | null
  }

  export type StudentOnClassCountAggregateOutputType = {
    studentId: number
    classId: number
    _all: number
  }


  export type StudentOnClassAvgAggregateInputType = {
    studentId?: true
    classId?: true
  }

  export type StudentOnClassSumAggregateInputType = {
    studentId?: true
    classId?: true
  }

  export type StudentOnClassMinAggregateInputType = {
    studentId?: true
    classId?: true
  }

  export type StudentOnClassMaxAggregateInputType = {
    studentId?: true
    classId?: true
  }

  export type StudentOnClassCountAggregateInputType = {
    studentId?: true
    classId?: true
    _all?: true
  }

  export type StudentOnClassAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentOnClass to aggregate.
     */
    where?: StudentOnClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentOnClasses to fetch.
     */
    orderBy?: StudentOnClassOrderByWithRelationInput | StudentOnClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentOnClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentOnClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentOnClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentOnClasses
    **/
    _count?: true | StudentOnClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentOnClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentOnClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentOnClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentOnClassMaxAggregateInputType
  }

  export type GetStudentOnClassAggregateType<T extends StudentOnClassAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentOnClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentOnClass[P]>
      : GetScalarType<T[P], AggregateStudentOnClass[P]>
  }




  export type StudentOnClassGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StudentOnClassWhereInput
    orderBy?: StudentOnClassOrderByWithAggregationInput | StudentOnClassOrderByWithAggregationInput[]
    by: StudentOnClassScalarFieldEnum[] | StudentOnClassScalarFieldEnum
    having?: StudentOnClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentOnClassCountAggregateInputType | true
    _avg?: StudentOnClassAvgAggregateInputType
    _sum?: StudentOnClassSumAggregateInputType
    _min?: StudentOnClassMinAggregateInputType
    _max?: StudentOnClassMaxAggregateInputType
  }


  export type StudentOnClassGroupByOutputType = {
    studentId: number
    classId: number
    _count: StudentOnClassCountAggregateOutputType | null
    _avg: StudentOnClassAvgAggregateOutputType | null
    _sum: StudentOnClassSumAggregateOutputType | null
    _min: StudentOnClassMinAggregateOutputType | null
    _max: StudentOnClassMaxAggregateOutputType | null
  }

  type GetStudentOnClassGroupByPayload<T extends StudentOnClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentOnClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentOnClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentOnClassGroupByOutputType[P]>
            : GetScalarType<T[P], StudentOnClassGroupByOutputType[P]>
        }
      >
    >


  export type StudentOnClassSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    classId?: boolean
    student?: boolean | StudentArgs<ExtArgs>
    class?: boolean | ClassArgs<ExtArgs>
  }, ExtArgs["result"]["studentOnClass"]>

  export type StudentOnClassSelectScalar = {
    studentId?: boolean
    classId?: boolean
  }

  export type StudentOnClassInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    student?: boolean | StudentArgs<ExtArgs>
    class?: boolean | ClassArgs<ExtArgs>
  }


  type StudentOnClassGetPayload<S extends boolean | null | undefined | StudentOnClassArgs> = $Types.GetResult<StudentOnClassPayload, S>

  type StudentOnClassCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<StudentOnClassFindManyArgs, 'select' | 'include'> & {
      select?: StudentOnClassCountAggregateInputType | true
    }

  export interface StudentOnClassDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentOnClass'], meta: { name: 'StudentOnClass' } }
    /**
     * Find zero or one StudentOnClass that matches the filter.
     * @param {StudentOnClassFindUniqueArgs} args - Arguments to find a StudentOnClass
     * @example
     * // Get one StudentOnClass
     * const studentOnClass = await prisma.studentOnClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentOnClassFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StudentOnClassFindUniqueArgs<ExtArgs>>
    ): Prisma__StudentOnClassClient<$Types.GetResult<StudentOnClassPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one StudentOnClass that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentOnClassFindUniqueOrThrowArgs} args - Arguments to find a StudentOnClass
     * @example
     * // Get one StudentOnClass
     * const studentOnClass = await prisma.studentOnClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentOnClassFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentOnClassFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StudentOnClassClient<$Types.GetResult<StudentOnClassPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first StudentOnClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOnClassFindFirstArgs} args - Arguments to find a StudentOnClass
     * @example
     * // Get one StudentOnClass
     * const studentOnClass = await prisma.studentOnClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentOnClassFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentOnClassFindFirstArgs<ExtArgs>>
    ): Prisma__StudentOnClassClient<$Types.GetResult<StudentOnClassPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first StudentOnClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOnClassFindFirstOrThrowArgs} args - Arguments to find a StudentOnClass
     * @example
     * // Get one StudentOnClass
     * const studentOnClass = await prisma.studentOnClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentOnClassFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentOnClassFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StudentOnClassClient<$Types.GetResult<StudentOnClassPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more StudentOnClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOnClassFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentOnClasses
     * const studentOnClasses = await prisma.studentOnClass.findMany()
     * 
     * // Get first 10 StudentOnClasses
     * const studentOnClasses = await prisma.studentOnClass.findMany({ take: 10 })
     * 
     * // Only select the `studentId`
     * const studentOnClassWithStudentIdOnly = await prisma.studentOnClass.findMany({ select: { studentId: true } })
     * 
    **/
    findMany<T extends StudentOnClassFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentOnClassFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<StudentOnClassPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a StudentOnClass.
     * @param {StudentOnClassCreateArgs} args - Arguments to create a StudentOnClass.
     * @example
     * // Create one StudentOnClass
     * const StudentOnClass = await prisma.studentOnClass.create({
     *   data: {
     *     // ... data to create a StudentOnClass
     *   }
     * })
     * 
    **/
    create<T extends StudentOnClassCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentOnClassCreateArgs<ExtArgs>>
    ): Prisma__StudentOnClassClient<$Types.GetResult<StudentOnClassPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many StudentOnClasses.
     *     @param {StudentOnClassCreateManyArgs} args - Arguments to create many StudentOnClasses.
     *     @example
     *     // Create many StudentOnClasses
     *     const studentOnClass = await prisma.studentOnClass.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentOnClassCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentOnClassCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentOnClass.
     * @param {StudentOnClassDeleteArgs} args - Arguments to delete one StudentOnClass.
     * @example
     * // Delete one StudentOnClass
     * const StudentOnClass = await prisma.studentOnClass.delete({
     *   where: {
     *     // ... filter to delete one StudentOnClass
     *   }
     * })
     * 
    **/
    delete<T extends StudentOnClassDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StudentOnClassDeleteArgs<ExtArgs>>
    ): Prisma__StudentOnClassClient<$Types.GetResult<StudentOnClassPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one StudentOnClass.
     * @param {StudentOnClassUpdateArgs} args - Arguments to update one StudentOnClass.
     * @example
     * // Update one StudentOnClass
     * const studentOnClass = await prisma.studentOnClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentOnClassUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentOnClassUpdateArgs<ExtArgs>>
    ): Prisma__StudentOnClassClient<$Types.GetResult<StudentOnClassPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more StudentOnClasses.
     * @param {StudentOnClassDeleteManyArgs} args - Arguments to filter StudentOnClasses to delete.
     * @example
     * // Delete a few StudentOnClasses
     * const { count } = await prisma.studentOnClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentOnClassDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentOnClassDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentOnClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOnClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentOnClasses
     * const studentOnClass = await prisma.studentOnClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentOnClassUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StudentOnClassUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentOnClass.
     * @param {StudentOnClassUpsertArgs} args - Arguments to update or create a StudentOnClass.
     * @example
     * // Update or create a StudentOnClass
     * const studentOnClass = await prisma.studentOnClass.upsert({
     *   create: {
     *     // ... data to create a StudentOnClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentOnClass we want to update
     *   }
     * })
    **/
    upsert<T extends StudentOnClassUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StudentOnClassUpsertArgs<ExtArgs>>
    ): Prisma__StudentOnClassClient<$Types.GetResult<StudentOnClassPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of StudentOnClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOnClassCountArgs} args - Arguments to filter StudentOnClasses to count.
     * @example
     * // Count the number of StudentOnClasses
     * const count = await prisma.studentOnClass.count({
     *   where: {
     *     // ... the filter for the StudentOnClasses we want to count
     *   }
     * })
    **/
    count<T extends StudentOnClassCountArgs>(
      args?: Subset<T, StudentOnClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentOnClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentOnClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOnClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentOnClassAggregateArgs>(args: Subset<T, StudentOnClassAggregateArgs>): Prisma.PrismaPromise<GetStudentOnClassAggregateType<T>>

    /**
     * Group by StudentOnClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOnClassGroupByArgs} args - Group by arguments.
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
      T extends StudentOnClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentOnClassGroupByArgs['orderBy'] }
        : { orderBy?: StudentOnClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StudentOnClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentOnClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentOnClass model
   */
  readonly fields: StudentOnClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentOnClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentOnClassClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    student<T extends StudentArgs<ExtArgs> = {}>(args?: Subset<T, StudentArgs<ExtArgs>>): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    class<T extends ClassArgs<ExtArgs> = {}>(args?: Subset<T, ClassArgs<ExtArgs>>): Prisma__ClassClient<$Types.GetResult<ClassPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

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



  /**
   * Fields of the StudentOnClass model
   */ 
  interface StudentOnClassFieldRefs {
    readonly studentId: FieldRef<"StudentOnClass", 'Int'>
    readonly classId: FieldRef<"StudentOnClass", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * StudentOnClass findUnique
   */
  export type StudentOnClassFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOnClass
     */
    select?: StudentOnClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentOnClassInclude<ExtArgs> | null
    /**
     * Filter, which StudentOnClass to fetch.
     */
    where: StudentOnClassWhereUniqueInput
  }


  /**
   * StudentOnClass findUniqueOrThrow
   */
  export type StudentOnClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOnClass
     */
    select?: StudentOnClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentOnClassInclude<ExtArgs> | null
    /**
     * Filter, which StudentOnClass to fetch.
     */
    where: StudentOnClassWhereUniqueInput
  }


  /**
   * StudentOnClass findFirst
   */
  export type StudentOnClassFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOnClass
     */
    select?: StudentOnClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentOnClassInclude<ExtArgs> | null
    /**
     * Filter, which StudentOnClass to fetch.
     */
    where?: StudentOnClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentOnClasses to fetch.
     */
    orderBy?: StudentOnClassOrderByWithRelationInput | StudentOnClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentOnClasses.
     */
    cursor?: StudentOnClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentOnClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentOnClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentOnClasses.
     */
    distinct?: StudentOnClassScalarFieldEnum | StudentOnClassScalarFieldEnum[]
  }


  /**
   * StudentOnClass findFirstOrThrow
   */
  export type StudentOnClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOnClass
     */
    select?: StudentOnClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentOnClassInclude<ExtArgs> | null
    /**
     * Filter, which StudentOnClass to fetch.
     */
    where?: StudentOnClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentOnClasses to fetch.
     */
    orderBy?: StudentOnClassOrderByWithRelationInput | StudentOnClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentOnClasses.
     */
    cursor?: StudentOnClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentOnClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentOnClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentOnClasses.
     */
    distinct?: StudentOnClassScalarFieldEnum | StudentOnClassScalarFieldEnum[]
  }


  /**
   * StudentOnClass findMany
   */
  export type StudentOnClassFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOnClass
     */
    select?: StudentOnClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentOnClassInclude<ExtArgs> | null
    /**
     * Filter, which StudentOnClasses to fetch.
     */
    where?: StudentOnClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentOnClasses to fetch.
     */
    orderBy?: StudentOnClassOrderByWithRelationInput | StudentOnClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentOnClasses.
     */
    cursor?: StudentOnClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentOnClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentOnClasses.
     */
    skip?: number
    distinct?: StudentOnClassScalarFieldEnum | StudentOnClassScalarFieldEnum[]
  }


  /**
   * StudentOnClass create
   */
  export type StudentOnClassCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOnClass
     */
    select?: StudentOnClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentOnClassInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentOnClass.
     */
    data: XOR<StudentOnClassCreateInput, StudentOnClassUncheckedCreateInput>
  }


  /**
   * StudentOnClass createMany
   */
  export type StudentOnClassCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentOnClasses.
     */
    data: StudentOnClassCreateManyInput | StudentOnClassCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * StudentOnClass update
   */
  export type StudentOnClassUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOnClass
     */
    select?: StudentOnClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentOnClassInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentOnClass.
     */
    data: XOR<StudentOnClassUpdateInput, StudentOnClassUncheckedUpdateInput>
    /**
     * Choose, which StudentOnClass to update.
     */
    where: StudentOnClassWhereUniqueInput
  }


  /**
   * StudentOnClass updateMany
   */
  export type StudentOnClassUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentOnClasses.
     */
    data: XOR<StudentOnClassUpdateManyMutationInput, StudentOnClassUncheckedUpdateManyInput>
    /**
     * Filter which StudentOnClasses to update
     */
    where?: StudentOnClassWhereInput
  }


  /**
   * StudentOnClass upsert
   */
  export type StudentOnClassUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOnClass
     */
    select?: StudentOnClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentOnClassInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentOnClass to update in case it exists.
     */
    where: StudentOnClassWhereUniqueInput
    /**
     * In case the StudentOnClass found by the `where` argument doesn't exist, create a new StudentOnClass with this data.
     */
    create: XOR<StudentOnClassCreateInput, StudentOnClassUncheckedCreateInput>
    /**
     * In case the StudentOnClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentOnClassUpdateInput, StudentOnClassUncheckedUpdateInput>
  }


  /**
   * StudentOnClass delete
   */
  export type StudentOnClassDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOnClass
     */
    select?: StudentOnClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentOnClassInclude<ExtArgs> | null
    /**
     * Filter which StudentOnClass to delete.
     */
    where: StudentOnClassWhereUniqueInput
  }


  /**
   * StudentOnClass deleteMany
   */
  export type StudentOnClassDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentOnClasses to delete
     */
    where?: StudentOnClassWhereInput
  }


  /**
   * StudentOnClass without action
   */
  export type StudentOnClassArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOnClass
     */
    select?: StudentOnClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentOnClassInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StudentScalarFieldEnum: {
    id: 'id',
    entranceDate: 'entranceDate',
    day: 'day',
    time: 'time',
    name: 'name',
    phone: 'phone',
    birthDate: 'birthDate',
    sex: 'sex',
    guardianId: 'guardianId',
    address: 'address',
    school: 'school',
    experience: 'experience',
    reason: 'reason',
    importantActivity: 'importantActivity',
    interestingActivity: 'interestingActivity',
    caution: 'caution',
    agree: 'agree',
    teacherMemo: 'teacherMemo'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const GuardianScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone'
  };

  export type GuardianScalarFieldEnum = (typeof GuardianScalarFieldEnum)[keyof typeof GuardianScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    loginId: 'loginId',
    password: 'password'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const ScheduleMemoScalarFieldEnum: {
    id: 'id',
    topMemo: 'topMemo',
    memo1: 'memo1',
    memo2: 'memo2',
    memo3: 'memo3',
    memo4: 'memo4',
    memo5: 'memo5'
  };

  export type ScheduleMemoScalarFieldEnum = (typeof ScheduleMemoScalarFieldEnum)[keyof typeof ScheduleMemoScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    classTime: 'classTime'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const StudentOnClassScalarFieldEnum: {
    studentId: 'studentId',
    classId: 'classId'
  };

  export type StudentOnClassScalarFieldEnum = (typeof StudentOnClassScalarFieldEnum)[keyof typeof StudentOnClassScalarFieldEnum]


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
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Sex'
   */
  export type EnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex'>
    


  /**
   * Reference to a field of type 'Sex[]'
   */
  export type ListEnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex[]'>
    


  /**
   * Reference to a field of type 'ReasonForChoosing'
   */
  export type EnumReasonForChoosingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReasonForChoosing'>
    


  /**
   * Reference to a field of type 'ReasonForChoosing[]'
   */
  export type ListEnumReasonForChoosingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReasonForChoosing[]'>
    


  /**
   * Reference to a field of type 'ArtActivity'
   */
  export type EnumArtActivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArtActivity'>
    


  /**
   * Reference to a field of type 'ArtActivity[]'
   */
  export type ListEnumArtActivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArtActivity[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    entranceDate?: DateTimeFilter<"Student"> | Date | string
    day?: IntNullableListFilter<"Student">
    time?: IntNullableListFilter<"Student">
    name?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    birthDate?: DateTimeFilter<"Student"> | Date | string
    sex?: EnumSexFilter<"Student"> | Sex
    guardianId?: IntFilter<"Student"> | number
    address?: StringFilter<"Student"> | string
    school?: StringNullableFilter<"Student"> | string | null
    experience?: StringNullableFilter<"Student"> | string | null
    reason?: EnumReasonForChoosingFilter<"Student"> | ReasonForChoosing
    importantActivity?: EnumArtActivityFilter<"Student"> | ArtActivity
    interestingActivity?: EnumArtActivityFilter<"Student"> | ArtActivity
    caution?: StringNullableFilter<"Student"> | string | null
    agree?: BoolFilter<"Student"> | boolean
    teacherMemo?: StringNullableFilter<"Student"> | string | null
    class?: StudentOnClassListRelationFilter
    guardian?: XOR<GuardianRelationFilter, GuardianWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    entranceDate?: SortOrder
    day?: SortOrder
    time?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    guardianId?: SortOrder
    address?: SortOrder
    school?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    reason?: SortOrder
    importantActivity?: SortOrder
    interestingActivity?: SortOrder
    caution?: SortOrderInput | SortOrder
    agree?: SortOrder
    teacherMemo?: SortOrderInput | SortOrder
    class?: StudentOnClassOrderByRelationAggregateInput
    guardian?: GuardianOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    entranceDate?: DateTimeFilter<"Student"> | Date | string
    day?: IntNullableListFilter<"Student">
    time?: IntNullableListFilter<"Student">
    name?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    birthDate?: DateTimeFilter<"Student"> | Date | string
    sex?: EnumSexFilter<"Student"> | Sex
    guardianId?: IntFilter<"Student"> | number
    address?: StringFilter<"Student"> | string
    school?: StringNullableFilter<"Student"> | string | null
    experience?: StringNullableFilter<"Student"> | string | null
    reason?: EnumReasonForChoosingFilter<"Student"> | ReasonForChoosing
    importantActivity?: EnumArtActivityFilter<"Student"> | ArtActivity
    interestingActivity?: EnumArtActivityFilter<"Student"> | ArtActivity
    caution?: StringNullableFilter<"Student"> | string | null
    agree?: BoolFilter<"Student"> | boolean
    teacherMemo?: StringNullableFilter<"Student"> | string | null
    class?: StudentOnClassListRelationFilter
    guardian?: XOR<GuardianRelationFilter, GuardianWhereInput>
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    entranceDate?: SortOrder
    day?: SortOrder
    time?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    guardianId?: SortOrder
    address?: SortOrder
    school?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    reason?: SortOrder
    importantActivity?: SortOrder
    interestingActivity?: SortOrder
    caution?: SortOrderInput | SortOrder
    agree?: SortOrder
    teacherMemo?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    entranceDate?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    day?: IntNullableListFilter<"Student">
    time?: IntNullableListFilter<"Student">
    name?: StringWithAggregatesFilter<"Student"> | string
    phone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    birthDate?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    sex?: EnumSexWithAggregatesFilter<"Student"> | Sex
    guardianId?: IntWithAggregatesFilter<"Student"> | number
    address?: StringWithAggregatesFilter<"Student"> | string
    school?: StringNullableWithAggregatesFilter<"Student"> | string | null
    experience?: StringNullableWithAggregatesFilter<"Student"> | string | null
    reason?: EnumReasonForChoosingWithAggregatesFilter<"Student"> | ReasonForChoosing
    importantActivity?: EnumArtActivityWithAggregatesFilter<"Student"> | ArtActivity
    interestingActivity?: EnumArtActivityWithAggregatesFilter<"Student"> | ArtActivity
    caution?: StringNullableWithAggregatesFilter<"Student"> | string | null
    agree?: BoolWithAggregatesFilter<"Student"> | boolean
    teacherMemo?: StringNullableWithAggregatesFilter<"Student"> | string | null
  }

  export type GuardianWhereInput = {
    AND?: GuardianWhereInput | GuardianWhereInput[]
    OR?: GuardianWhereInput[]
    NOT?: GuardianWhereInput | GuardianWhereInput[]
    id?: IntFilter<"Guardian"> | number
    name?: StringFilter<"Guardian"> | string
    phone?: StringFilter<"Guardian"> | string
    student?: StudentListRelationFilter
  }

  export type GuardianOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    student?: StudentOrderByRelationAggregateInput
  }

  export type GuardianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GuardianWhereInput | GuardianWhereInput[]
    OR?: GuardianWhereInput[]
    NOT?: GuardianWhereInput | GuardianWhereInput[]
    name?: StringFilter<"Guardian"> | string
    phone?: StringFilter<"Guardian"> | string
    student?: StudentListRelationFilter
  }, "id">

  export type GuardianOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    _count?: GuardianCountOrderByAggregateInput
    _avg?: GuardianAvgOrderByAggregateInput
    _max?: GuardianMaxOrderByAggregateInput
    _min?: GuardianMinOrderByAggregateInput
    _sum?: GuardianSumOrderByAggregateInput
  }

  export type GuardianScalarWhereWithAggregatesInput = {
    AND?: GuardianScalarWhereWithAggregatesInput | GuardianScalarWhereWithAggregatesInput[]
    OR?: GuardianScalarWhereWithAggregatesInput[]
    NOT?: GuardianScalarWhereWithAggregatesInput | GuardianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Guardian"> | number
    name?: StringWithAggregatesFilter<"Guardian"> | string
    phone?: StringWithAggregatesFilter<"Guardian"> | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    name?: StringFilter<"Teacher"> | string
    phone?: StringFilter<"Teacher"> | string
    loginId?: StringFilter<"Teacher"> | string
    password?: StringFilter<"Teacher"> | string
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    loginId?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    phone?: StringFilter<"Teacher"> | string
    password?: StringFilter<"Teacher"> | string
  }, "id" | "loginId">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    name?: StringWithAggregatesFilter<"Teacher"> | string
    phone?: StringWithAggregatesFilter<"Teacher"> | string
    loginId?: StringWithAggregatesFilter<"Teacher"> | string
    password?: StringWithAggregatesFilter<"Teacher"> | string
  }

  export type ScheduleMemoWhereInput = {
    AND?: ScheduleMemoWhereInput | ScheduleMemoWhereInput[]
    OR?: ScheduleMemoWhereInput[]
    NOT?: ScheduleMemoWhereInput | ScheduleMemoWhereInput[]
    id?: IntFilter<"ScheduleMemo"> | number
    topMemo?: StringNullableFilter<"ScheduleMemo"> | string | null
    memo1?: StringNullableFilter<"ScheduleMemo"> | string | null
    memo2?: StringNullableFilter<"ScheduleMemo"> | string | null
    memo3?: StringNullableFilter<"ScheduleMemo"> | string | null
    memo4?: StringNullableFilter<"ScheduleMemo"> | string | null
    memo5?: StringNullableFilter<"ScheduleMemo"> | string | null
  }

  export type ScheduleMemoOrderByWithRelationInput = {
    id?: SortOrder
    topMemo?: SortOrderInput | SortOrder
    memo1?: SortOrderInput | SortOrder
    memo2?: SortOrderInput | SortOrder
    memo3?: SortOrderInput | SortOrder
    memo4?: SortOrderInput | SortOrder
    memo5?: SortOrderInput | SortOrder
  }

  export type ScheduleMemoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleMemoWhereInput | ScheduleMemoWhereInput[]
    OR?: ScheduleMemoWhereInput[]
    NOT?: ScheduleMemoWhereInput | ScheduleMemoWhereInput[]
    topMemo?: StringNullableFilter<"ScheduleMemo"> | string | null
    memo1?: StringNullableFilter<"ScheduleMemo"> | string | null
    memo2?: StringNullableFilter<"ScheduleMemo"> | string | null
    memo3?: StringNullableFilter<"ScheduleMemo"> | string | null
    memo4?: StringNullableFilter<"ScheduleMemo"> | string | null
    memo5?: StringNullableFilter<"ScheduleMemo"> | string | null
  }, "id">

  export type ScheduleMemoOrderByWithAggregationInput = {
    id?: SortOrder
    topMemo?: SortOrderInput | SortOrder
    memo1?: SortOrderInput | SortOrder
    memo2?: SortOrderInput | SortOrder
    memo3?: SortOrderInput | SortOrder
    memo4?: SortOrderInput | SortOrder
    memo5?: SortOrderInput | SortOrder
    _count?: ScheduleMemoCountOrderByAggregateInput
    _avg?: ScheduleMemoAvgOrderByAggregateInput
    _max?: ScheduleMemoMaxOrderByAggregateInput
    _min?: ScheduleMemoMinOrderByAggregateInput
    _sum?: ScheduleMemoSumOrderByAggregateInput
  }

  export type ScheduleMemoScalarWhereWithAggregatesInput = {
    AND?: ScheduleMemoScalarWhereWithAggregatesInput | ScheduleMemoScalarWhereWithAggregatesInput[]
    OR?: ScheduleMemoScalarWhereWithAggregatesInput[]
    NOT?: ScheduleMemoScalarWhereWithAggregatesInput | ScheduleMemoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ScheduleMemo"> | number
    topMemo?: StringNullableWithAggregatesFilter<"ScheduleMemo"> | string | null
    memo1?: StringNullableWithAggregatesFilter<"ScheduleMemo"> | string | null
    memo2?: StringNullableWithAggregatesFilter<"ScheduleMemo"> | string | null
    memo3?: StringNullableWithAggregatesFilter<"ScheduleMemo"> | string | null
    memo4?: StringNullableWithAggregatesFilter<"ScheduleMemo"> | string | null
    memo5?: StringNullableWithAggregatesFilter<"ScheduleMemo"> | string | null
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: IntFilter<"Class"> | number
    classTime?: DateTimeFilter<"Class"> | Date | string
    student?: StudentOnClassListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    classTime?: SortOrder
    student?: StudentOnClassOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    classTime?: DateTimeFilter<"Class"> | Date | string
    student?: StudentOnClassListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    classTime?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Class"> | number
    classTime?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type StudentOnClassWhereInput = {
    AND?: StudentOnClassWhereInput | StudentOnClassWhereInput[]
    OR?: StudentOnClassWhereInput[]
    NOT?: StudentOnClassWhereInput | StudentOnClassWhereInput[]
    studentId?: IntFilter<"StudentOnClass"> | number
    classId?: IntFilter<"StudentOnClass"> | number
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    class?: XOR<ClassRelationFilter, ClassWhereInput>
  }

  export type StudentOnClassOrderByWithRelationInput = {
    studentId?: SortOrder
    classId?: SortOrder
    student?: StudentOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type StudentOnClassWhereUniqueInput = Prisma.AtLeast<{
    studentId_classId?: StudentOnClassStudentIdClassIdCompoundUniqueInput
    AND?: StudentOnClassWhereInput | StudentOnClassWhereInput[]
    OR?: StudentOnClassWhereInput[]
    NOT?: StudentOnClassWhereInput | StudentOnClassWhereInput[]
    studentId?: IntFilter<"StudentOnClass"> | number
    classId?: IntFilter<"StudentOnClass"> | number
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    class?: XOR<ClassRelationFilter, ClassWhereInput>
  }, "studentId_classId">

  export type StudentOnClassOrderByWithAggregationInput = {
    studentId?: SortOrder
    classId?: SortOrder
    _count?: StudentOnClassCountOrderByAggregateInput
    _avg?: StudentOnClassAvgOrderByAggregateInput
    _max?: StudentOnClassMaxOrderByAggregateInput
    _min?: StudentOnClassMinOrderByAggregateInput
    _sum?: StudentOnClassSumOrderByAggregateInput
  }

  export type StudentOnClassScalarWhereWithAggregatesInput = {
    AND?: StudentOnClassScalarWhereWithAggregatesInput | StudentOnClassScalarWhereWithAggregatesInput[]
    OR?: StudentOnClassScalarWhereWithAggregatesInput[]
    NOT?: StudentOnClassScalarWhereWithAggregatesInput | StudentOnClassScalarWhereWithAggregatesInput[]
    studentId?: IntWithAggregatesFilter<"StudentOnClass"> | number
    classId?: IntWithAggregatesFilter<"StudentOnClass"> | number
  }

  export type StudentCreateInput = {
    entranceDate?: Date | string
    day?: StudentCreatedayInput | number[]
    time?: StudentCreatetimeInput | number[]
    name: string
    phone?: string | null
    birthDate: Date | string
    sex?: Sex
    address: string
    school?: string | null
    experience?: string | null
    reason?: ReasonForChoosing
    importantActivity?: ArtActivity
    interestingActivity?: ArtActivity
    caution?: string | null
    agree: boolean
    teacherMemo?: string | null
    class?: StudentOnClassCreateNestedManyWithoutStudentInput
    guardian: GuardianCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    entranceDate?: Date | string
    day?: StudentCreatedayInput | number[]
    time?: StudentCreatetimeInput | number[]
    name: string
    phone?: string | null
    birthDate: Date | string
    sex?: Sex
    guardianId: number
    address: string
    school?: string | null
    experience?: string | null
    reason?: ReasonForChoosing
    importantActivity?: ArtActivity
    interestingActivity?: ArtActivity
    caution?: string | null
    agree: boolean
    teacherMemo?: string | null
    class?: StudentOnClassUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    entranceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StudentUpdatedayInput | number[]
    time?: StudentUpdatetimeInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | Sex
    address?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: EnumReasonForChoosingFieldUpdateOperationsInput | ReasonForChoosing
    importantActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    interestingActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    caution?: NullableStringFieldUpdateOperationsInput | string | null
    agree?: BoolFieldUpdateOperationsInput | boolean
    teacherMemo?: NullableStringFieldUpdateOperationsInput | string | null
    class?: StudentOnClassUpdateManyWithoutStudentNestedInput
    guardian?: GuardianUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entranceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StudentUpdatedayInput | number[]
    time?: StudentUpdatetimeInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | Sex
    guardianId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: EnumReasonForChoosingFieldUpdateOperationsInput | ReasonForChoosing
    importantActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    interestingActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    caution?: NullableStringFieldUpdateOperationsInput | string | null
    agree?: BoolFieldUpdateOperationsInput | boolean
    teacherMemo?: NullableStringFieldUpdateOperationsInput | string | null
    class?: StudentOnClassUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    entranceDate?: Date | string
    day?: StudentCreatedayInput | number[]
    time?: StudentCreatetimeInput | number[]
    name: string
    phone?: string | null
    birthDate: Date | string
    sex?: Sex
    guardianId: number
    address: string
    school?: string | null
    experience?: string | null
    reason?: ReasonForChoosing
    importantActivity?: ArtActivity
    interestingActivity?: ArtActivity
    caution?: string | null
    agree: boolean
    teacherMemo?: string | null
  }

  export type StudentUpdateManyMutationInput = {
    entranceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StudentUpdatedayInput | number[]
    time?: StudentUpdatetimeInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | Sex
    address?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: EnumReasonForChoosingFieldUpdateOperationsInput | ReasonForChoosing
    importantActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    interestingActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    caution?: NullableStringFieldUpdateOperationsInput | string | null
    agree?: BoolFieldUpdateOperationsInput | boolean
    teacherMemo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entranceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StudentUpdatedayInput | number[]
    time?: StudentUpdatetimeInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | Sex
    guardianId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: EnumReasonForChoosingFieldUpdateOperationsInput | ReasonForChoosing
    importantActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    interestingActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    caution?: NullableStringFieldUpdateOperationsInput | string | null
    agree?: BoolFieldUpdateOperationsInput | boolean
    teacherMemo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuardianCreateInput = {
    name: string
    phone: string
    student?: StudentCreateNestedManyWithoutGuardianInput
  }

  export type GuardianUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    student?: StudentUncheckedCreateNestedManyWithoutGuardianInput
  }

  export type GuardianUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateManyWithoutGuardianNestedInput
  }

  export type GuardianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    student?: StudentUncheckedUpdateManyWithoutGuardianNestedInput
  }

  export type GuardianCreateManyInput = {
    id?: number
    name: string
    phone: string
  }

  export type GuardianUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type GuardianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateInput = {
    name: string
    phone: string
    loginId: string
    password: string
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    loginId: string
    password: string
  }

  export type TeacherUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateManyInput = {
    id?: number
    name: string
    phone: string
    loginId: string
    password: string
  }

  export type TeacherUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleMemoCreateInput = {
    topMemo?: string | null
    memo1?: string | null
    memo2?: string | null
    memo3?: string | null
    memo4?: string | null
    memo5?: string | null
  }

  export type ScheduleMemoUncheckedCreateInput = {
    id?: number
    topMemo?: string | null
    memo1?: string | null
    memo2?: string | null
    memo3?: string | null
    memo4?: string | null
    memo5?: string | null
  }

  export type ScheduleMemoUpdateInput = {
    topMemo?: NullableStringFieldUpdateOperationsInput | string | null
    memo1?: NullableStringFieldUpdateOperationsInput | string | null
    memo2?: NullableStringFieldUpdateOperationsInput | string | null
    memo3?: NullableStringFieldUpdateOperationsInput | string | null
    memo4?: NullableStringFieldUpdateOperationsInput | string | null
    memo5?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduleMemoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    topMemo?: NullableStringFieldUpdateOperationsInput | string | null
    memo1?: NullableStringFieldUpdateOperationsInput | string | null
    memo2?: NullableStringFieldUpdateOperationsInput | string | null
    memo3?: NullableStringFieldUpdateOperationsInput | string | null
    memo4?: NullableStringFieldUpdateOperationsInput | string | null
    memo5?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduleMemoCreateManyInput = {
    id?: number
    topMemo?: string | null
    memo1?: string | null
    memo2?: string | null
    memo3?: string | null
    memo4?: string | null
    memo5?: string | null
  }

  export type ScheduleMemoUpdateManyMutationInput = {
    topMemo?: NullableStringFieldUpdateOperationsInput | string | null
    memo1?: NullableStringFieldUpdateOperationsInput | string | null
    memo2?: NullableStringFieldUpdateOperationsInput | string | null
    memo3?: NullableStringFieldUpdateOperationsInput | string | null
    memo4?: NullableStringFieldUpdateOperationsInput | string | null
    memo5?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduleMemoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    topMemo?: NullableStringFieldUpdateOperationsInput | string | null
    memo1?: NullableStringFieldUpdateOperationsInput | string | null
    memo2?: NullableStringFieldUpdateOperationsInput | string | null
    memo3?: NullableStringFieldUpdateOperationsInput | string | null
    memo4?: NullableStringFieldUpdateOperationsInput | string | null
    memo5?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassCreateInput = {
    classTime?: Date | string
    student?: StudentOnClassCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: number
    classTime?: Date | string
    student?: StudentOnClassUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    classTime?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentOnClassUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classTime?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentOnClassUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: number
    classTime?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    classTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentOnClassCreateInput = {
    student: StudentCreateNestedOneWithoutClassInput
    class: ClassCreateNestedOneWithoutStudentInput
  }

  export type StudentOnClassUncheckedCreateInput = {
    studentId: number
    classId: number
  }

  export type StudentOnClassUpdateInput = {
    student?: StudentUpdateOneRequiredWithoutClassNestedInput
    class?: ClassUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentOnClassUncheckedUpdateInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentOnClassCreateManyInput = {
    studentId: number
    classId: number
  }

  export type StudentOnClassUpdateManyMutationInput = {

  }

  export type StudentOnClassUncheckedUpdateManyInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSexFilter<$PrismaModel = never> = {
    equals?: Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexFilter<$PrismaModel> | Sex
  }

  export type EnumReasonForChoosingFilter<$PrismaModel = never> = {
    equals?: ReasonForChoosing | EnumReasonForChoosingFieldRefInput<$PrismaModel>
    in?: ReasonForChoosing[] | ListEnumReasonForChoosingFieldRefInput<$PrismaModel>
    notIn?: ReasonForChoosing[] | ListEnumReasonForChoosingFieldRefInput<$PrismaModel>
    not?: NestedEnumReasonForChoosingFilter<$PrismaModel> | ReasonForChoosing
  }

  export type EnumArtActivityFilter<$PrismaModel = never> = {
    equals?: ArtActivity | EnumArtActivityFieldRefInput<$PrismaModel>
    in?: ArtActivity[] | ListEnumArtActivityFieldRefInput<$PrismaModel>
    notIn?: ArtActivity[] | ListEnumArtActivityFieldRefInput<$PrismaModel>
    not?: NestedEnumArtActivityFilter<$PrismaModel> | ArtActivity
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StudentOnClassListRelationFilter = {
    every?: StudentOnClassWhereInput
    some?: StudentOnClassWhereInput
    none?: StudentOnClassWhereInput
  }

  export type GuardianRelationFilter = {
    is?: GuardianWhereInput
    isNot?: GuardianWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentOnClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    entranceDate?: SortOrder
    day?: SortOrder
    time?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    guardianId?: SortOrder
    address?: SortOrder
    school?: SortOrder
    experience?: SortOrder
    reason?: SortOrder
    importantActivity?: SortOrder
    interestingActivity?: SortOrder
    caution?: SortOrder
    agree?: SortOrder
    teacherMemo?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    time?: SortOrder
    guardianId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    entranceDate?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    guardianId?: SortOrder
    address?: SortOrder
    school?: SortOrder
    experience?: SortOrder
    reason?: SortOrder
    importantActivity?: SortOrder
    interestingActivity?: SortOrder
    caution?: SortOrder
    agree?: SortOrder
    teacherMemo?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    entranceDate?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    guardianId?: SortOrder
    address?: SortOrder
    school?: SortOrder
    experience?: SortOrder
    reason?: SortOrder
    importantActivity?: SortOrder
    interestingActivity?: SortOrder
    caution?: SortOrder
    agree?: SortOrder
    teacherMemo?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    time?: SortOrder
    guardianId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type EnumReasonForChoosingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: ReasonForChoosing | EnumReasonForChoosingFieldRefInput<$PrismaModel>
    in?: ReasonForChoosing[] | ListEnumReasonForChoosingFieldRefInput<$PrismaModel>
    notIn?: ReasonForChoosing[] | ListEnumReasonForChoosingFieldRefInput<$PrismaModel>
    not?: NestedEnumReasonForChoosingWithAggregatesFilter<$PrismaModel> | ReasonForChoosing
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReasonForChoosingFilter<$PrismaModel>
    _max?: NestedEnumReasonForChoosingFilter<$PrismaModel>
  }

  export type EnumArtActivityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: ArtActivity | EnumArtActivityFieldRefInput<$PrismaModel>
    in?: ArtActivity[] | ListEnumArtActivityFieldRefInput<$PrismaModel>
    notIn?: ArtActivity[] | ListEnumArtActivityFieldRefInput<$PrismaModel>
    not?: NestedEnumArtActivityWithAggregatesFilter<$PrismaModel> | ArtActivity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArtActivityFilter<$PrismaModel>
    _max?: NestedEnumArtActivityFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuardianCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
  }

  export type GuardianAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GuardianMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
  }

  export type GuardianMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
  }

  export type GuardianSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScheduleMemoCountOrderByAggregateInput = {
    id?: SortOrder
    topMemo?: SortOrder
    memo1?: SortOrder
    memo2?: SortOrder
    memo3?: SortOrder
    memo4?: SortOrder
    memo5?: SortOrder
  }

  export type ScheduleMemoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScheduleMemoMaxOrderByAggregateInput = {
    id?: SortOrder
    topMemo?: SortOrder
    memo1?: SortOrder
    memo2?: SortOrder
    memo3?: SortOrder
    memo4?: SortOrder
    memo5?: SortOrder
  }

  export type ScheduleMemoMinOrderByAggregateInput = {
    id?: SortOrder
    topMemo?: SortOrder
    memo1?: SortOrder
    memo2?: SortOrder
    memo3?: SortOrder
    memo4?: SortOrder
    memo5?: SortOrder
  }

  export type ScheduleMemoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    classTime?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    classTime?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    classTime?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type ClassRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type StudentOnClassStudentIdClassIdCompoundUniqueInput = {
    studentId: number
    classId: number
  }

  export type StudentOnClassCountOrderByAggregateInput = {
    studentId?: SortOrder
    classId?: SortOrder
  }

  export type StudentOnClassAvgOrderByAggregateInput = {
    studentId?: SortOrder
    classId?: SortOrder
  }

  export type StudentOnClassMaxOrderByAggregateInput = {
    studentId?: SortOrder
    classId?: SortOrder
  }

  export type StudentOnClassMinOrderByAggregateInput = {
    studentId?: SortOrder
    classId?: SortOrder
  }

  export type StudentOnClassSumOrderByAggregateInput = {
    studentId?: SortOrder
    classId?: SortOrder
  }

  export type StudentCreatedayInput = {
    set: number[]
  }

  export type StudentCreatetimeInput = {
    set: number[]
  }

  export type StudentOnClassCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentOnClassCreateWithoutStudentInput, StudentOnClassUncheckedCreateWithoutStudentInput> | StudentOnClassCreateWithoutStudentInput[] | StudentOnClassUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentOnClassCreateOrConnectWithoutStudentInput | StudentOnClassCreateOrConnectWithoutStudentInput[]
    createMany?: StudentOnClassCreateManyStudentInputEnvelope
    connect?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
  }

  export type GuardianCreateNestedOneWithoutStudentInput = {
    create?: XOR<GuardianCreateWithoutStudentInput, GuardianUncheckedCreateWithoutStudentInput>
    connectOrCreate?: GuardianCreateOrConnectWithoutStudentInput
    connect?: GuardianWhereUniqueInput
  }

  export type StudentOnClassUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentOnClassCreateWithoutStudentInput, StudentOnClassUncheckedCreateWithoutStudentInput> | StudentOnClassCreateWithoutStudentInput[] | StudentOnClassUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentOnClassCreateOrConnectWithoutStudentInput | StudentOnClassCreateOrConnectWithoutStudentInput[]
    createMany?: StudentOnClassCreateManyStudentInputEnvelope
    connect?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdatedayInput = {
    set?: number[]
    push?: number | number[]
  }

  export type StudentUpdatetimeInput = {
    set?: number[]
    push?: number | number[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSexFieldUpdateOperationsInput = {
    set?: Sex
  }

  export type EnumReasonForChoosingFieldUpdateOperationsInput = {
    set?: ReasonForChoosing
  }

  export type EnumArtActivityFieldUpdateOperationsInput = {
    set?: ArtActivity
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StudentOnClassUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentOnClassCreateWithoutStudentInput, StudentOnClassUncheckedCreateWithoutStudentInput> | StudentOnClassCreateWithoutStudentInput[] | StudentOnClassUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentOnClassCreateOrConnectWithoutStudentInput | StudentOnClassCreateOrConnectWithoutStudentInput[]
    upsert?: StudentOnClassUpsertWithWhereUniqueWithoutStudentInput | StudentOnClassUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentOnClassCreateManyStudentInputEnvelope
    set?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    disconnect?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    delete?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    connect?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    update?: StudentOnClassUpdateWithWhereUniqueWithoutStudentInput | StudentOnClassUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentOnClassUpdateManyWithWhereWithoutStudentInput | StudentOnClassUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentOnClassScalarWhereInput | StudentOnClassScalarWhereInput[]
  }

  export type GuardianUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<GuardianCreateWithoutStudentInput, GuardianUncheckedCreateWithoutStudentInput>
    connectOrCreate?: GuardianCreateOrConnectWithoutStudentInput
    upsert?: GuardianUpsertWithoutStudentInput
    connect?: GuardianWhereUniqueInput
    update?: XOR<XOR<GuardianUpdateToOneWithWhereWithoutStudentInput, GuardianUpdateWithoutStudentInput>, GuardianUncheckedUpdateWithoutStudentInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentOnClassUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentOnClassCreateWithoutStudentInput, StudentOnClassUncheckedCreateWithoutStudentInput> | StudentOnClassCreateWithoutStudentInput[] | StudentOnClassUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentOnClassCreateOrConnectWithoutStudentInput | StudentOnClassCreateOrConnectWithoutStudentInput[]
    upsert?: StudentOnClassUpsertWithWhereUniqueWithoutStudentInput | StudentOnClassUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentOnClassCreateManyStudentInputEnvelope
    set?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    disconnect?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    delete?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    connect?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    update?: StudentOnClassUpdateWithWhereUniqueWithoutStudentInput | StudentOnClassUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentOnClassUpdateManyWithWhereWithoutStudentInput | StudentOnClassUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentOnClassScalarWhereInput | StudentOnClassScalarWhereInput[]
  }

  export type StudentCreateNestedManyWithoutGuardianInput = {
    create?: XOR<StudentCreateWithoutGuardianInput, StudentUncheckedCreateWithoutGuardianInput> | StudentCreateWithoutGuardianInput[] | StudentUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGuardianInput | StudentCreateOrConnectWithoutGuardianInput[]
    createMany?: StudentCreateManyGuardianInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutGuardianInput = {
    create?: XOR<StudentCreateWithoutGuardianInput, StudentUncheckedCreateWithoutGuardianInput> | StudentCreateWithoutGuardianInput[] | StudentUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGuardianInput | StudentCreateOrConnectWithoutGuardianInput[]
    createMany?: StudentCreateManyGuardianInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUpdateManyWithoutGuardianNestedInput = {
    create?: XOR<StudentCreateWithoutGuardianInput, StudentUncheckedCreateWithoutGuardianInput> | StudentCreateWithoutGuardianInput[] | StudentUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGuardianInput | StudentCreateOrConnectWithoutGuardianInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutGuardianInput | StudentUpsertWithWhereUniqueWithoutGuardianInput[]
    createMany?: StudentCreateManyGuardianInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutGuardianInput | StudentUpdateWithWhereUniqueWithoutGuardianInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutGuardianInput | StudentUpdateManyWithWhereWithoutGuardianInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutGuardianNestedInput = {
    create?: XOR<StudentCreateWithoutGuardianInput, StudentUncheckedCreateWithoutGuardianInput> | StudentCreateWithoutGuardianInput[] | StudentUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGuardianInput | StudentCreateOrConnectWithoutGuardianInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutGuardianInput | StudentUpsertWithWhereUniqueWithoutGuardianInput[]
    createMany?: StudentCreateManyGuardianInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutGuardianInput | StudentUpdateWithWhereUniqueWithoutGuardianInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutGuardianInput | StudentUpdateManyWithWhereWithoutGuardianInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentOnClassCreateNestedManyWithoutClassInput = {
    create?: XOR<StudentOnClassCreateWithoutClassInput, StudentOnClassUncheckedCreateWithoutClassInput> | StudentOnClassCreateWithoutClassInput[] | StudentOnClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentOnClassCreateOrConnectWithoutClassInput | StudentOnClassCreateOrConnectWithoutClassInput[]
    createMany?: StudentOnClassCreateManyClassInputEnvelope
    connect?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
  }

  export type StudentOnClassUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<StudentOnClassCreateWithoutClassInput, StudentOnClassUncheckedCreateWithoutClassInput> | StudentOnClassCreateWithoutClassInput[] | StudentOnClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentOnClassCreateOrConnectWithoutClassInput | StudentOnClassCreateOrConnectWithoutClassInput[]
    createMany?: StudentOnClassCreateManyClassInputEnvelope
    connect?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
  }

  export type StudentOnClassUpdateManyWithoutClassNestedInput = {
    create?: XOR<StudentOnClassCreateWithoutClassInput, StudentOnClassUncheckedCreateWithoutClassInput> | StudentOnClassCreateWithoutClassInput[] | StudentOnClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentOnClassCreateOrConnectWithoutClassInput | StudentOnClassCreateOrConnectWithoutClassInput[]
    upsert?: StudentOnClassUpsertWithWhereUniqueWithoutClassInput | StudentOnClassUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: StudentOnClassCreateManyClassInputEnvelope
    set?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    disconnect?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    delete?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    connect?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    update?: StudentOnClassUpdateWithWhereUniqueWithoutClassInput | StudentOnClassUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: StudentOnClassUpdateManyWithWhereWithoutClassInput | StudentOnClassUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: StudentOnClassScalarWhereInput | StudentOnClassScalarWhereInput[]
  }

  export type StudentOnClassUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<StudentOnClassCreateWithoutClassInput, StudentOnClassUncheckedCreateWithoutClassInput> | StudentOnClassCreateWithoutClassInput[] | StudentOnClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentOnClassCreateOrConnectWithoutClassInput | StudentOnClassCreateOrConnectWithoutClassInput[]
    upsert?: StudentOnClassUpsertWithWhereUniqueWithoutClassInput | StudentOnClassUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: StudentOnClassCreateManyClassInputEnvelope
    set?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    disconnect?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    delete?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    connect?: StudentOnClassWhereUniqueInput | StudentOnClassWhereUniqueInput[]
    update?: StudentOnClassUpdateWithWhereUniqueWithoutClassInput | StudentOnClassUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: StudentOnClassUpdateManyWithWhereWithoutClassInput | StudentOnClassUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: StudentOnClassScalarWhereInput | StudentOnClassScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutClassInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput
    connect?: StudentWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutStudentInput = {
    create?: XOR<ClassCreateWithoutStudentInput, ClassUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentInput
    connect?: ClassWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutClassNestedInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput
    upsert?: StudentUpsertWithoutClassInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutClassInput, StudentUpdateWithoutClassInput>, StudentUncheckedUpdateWithoutClassInput>
  }

  export type ClassUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<ClassCreateWithoutStudentInput, ClassUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentInput
    upsert?: ClassUpsertWithoutStudentInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutStudentInput, ClassUpdateWithoutStudentInput>, ClassUncheckedUpdateWithoutStudentInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSexFilter<$PrismaModel = never> = {
    equals?: Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexFilter<$PrismaModel> | Sex
  }

  export type NestedEnumReasonForChoosingFilter<$PrismaModel = never> = {
    equals?: ReasonForChoosing | EnumReasonForChoosingFieldRefInput<$PrismaModel>
    in?: ReasonForChoosing[] | ListEnumReasonForChoosingFieldRefInput<$PrismaModel>
    notIn?: ReasonForChoosing[] | ListEnumReasonForChoosingFieldRefInput<$PrismaModel>
    not?: NestedEnumReasonForChoosingFilter<$PrismaModel> | ReasonForChoosing
  }

  export type NestedEnumArtActivityFilter<$PrismaModel = never> = {
    equals?: ArtActivity | EnumArtActivityFieldRefInput<$PrismaModel>
    in?: ArtActivity[] | ListEnumArtActivityFieldRefInput<$PrismaModel>
    notIn?: ArtActivity[] | ListEnumArtActivityFieldRefInput<$PrismaModel>
    not?: NestedEnumArtActivityFilter<$PrismaModel> | ArtActivity
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type NestedEnumReasonForChoosingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: ReasonForChoosing | EnumReasonForChoosingFieldRefInput<$PrismaModel>
    in?: ReasonForChoosing[] | ListEnumReasonForChoosingFieldRefInput<$PrismaModel>
    notIn?: ReasonForChoosing[] | ListEnumReasonForChoosingFieldRefInput<$PrismaModel>
    not?: NestedEnumReasonForChoosingWithAggregatesFilter<$PrismaModel> | ReasonForChoosing
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReasonForChoosingFilter<$PrismaModel>
    _max?: NestedEnumReasonForChoosingFilter<$PrismaModel>
  }

  export type NestedEnumArtActivityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: ArtActivity | EnumArtActivityFieldRefInput<$PrismaModel>
    in?: ArtActivity[] | ListEnumArtActivityFieldRefInput<$PrismaModel>
    notIn?: ArtActivity[] | ListEnumArtActivityFieldRefInput<$PrismaModel>
    not?: NestedEnumArtActivityWithAggregatesFilter<$PrismaModel> | ArtActivity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArtActivityFilter<$PrismaModel>
    _max?: NestedEnumArtActivityFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StudentOnClassCreateWithoutStudentInput = {
    class: ClassCreateNestedOneWithoutStudentInput
  }

  export type StudentOnClassUncheckedCreateWithoutStudentInput = {
    classId: number
  }

  export type StudentOnClassCreateOrConnectWithoutStudentInput = {
    where: StudentOnClassWhereUniqueInput
    create: XOR<StudentOnClassCreateWithoutStudentInput, StudentOnClassUncheckedCreateWithoutStudentInput>
  }

  export type StudentOnClassCreateManyStudentInputEnvelope = {
    data: StudentOnClassCreateManyStudentInput | StudentOnClassCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type GuardianCreateWithoutStudentInput = {
    name: string
    phone: string
  }

  export type GuardianUncheckedCreateWithoutStudentInput = {
    id?: number
    name: string
    phone: string
  }

  export type GuardianCreateOrConnectWithoutStudentInput = {
    where: GuardianWhereUniqueInput
    create: XOR<GuardianCreateWithoutStudentInput, GuardianUncheckedCreateWithoutStudentInput>
  }

  export type StudentOnClassUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentOnClassWhereUniqueInput
    update: XOR<StudentOnClassUpdateWithoutStudentInput, StudentOnClassUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentOnClassCreateWithoutStudentInput, StudentOnClassUncheckedCreateWithoutStudentInput>
  }

  export type StudentOnClassUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentOnClassWhereUniqueInput
    data: XOR<StudentOnClassUpdateWithoutStudentInput, StudentOnClassUncheckedUpdateWithoutStudentInput>
  }

  export type StudentOnClassUpdateManyWithWhereWithoutStudentInput = {
    where: StudentOnClassScalarWhereInput
    data: XOR<StudentOnClassUpdateManyMutationInput, StudentOnClassUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentOnClassScalarWhereInput = {
    AND?: StudentOnClassScalarWhereInput | StudentOnClassScalarWhereInput[]
    OR?: StudentOnClassScalarWhereInput[]
    NOT?: StudentOnClassScalarWhereInput | StudentOnClassScalarWhereInput[]
    studentId?: IntFilter<"StudentOnClass"> | number
    classId?: IntFilter<"StudentOnClass"> | number
  }

  export type GuardianUpsertWithoutStudentInput = {
    update: XOR<GuardianUpdateWithoutStudentInput, GuardianUncheckedUpdateWithoutStudentInput>
    create: XOR<GuardianCreateWithoutStudentInput, GuardianUncheckedCreateWithoutStudentInput>
    where?: GuardianWhereInput
  }

  export type GuardianUpdateToOneWithWhereWithoutStudentInput = {
    where?: GuardianWhereInput
    data: XOR<GuardianUpdateWithoutStudentInput, GuardianUncheckedUpdateWithoutStudentInput>
  }

  export type GuardianUpdateWithoutStudentInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type GuardianUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateWithoutGuardianInput = {
    entranceDate?: Date | string
    day?: StudentCreatedayInput | number[]
    time?: StudentCreatetimeInput | number[]
    name: string
    phone?: string | null
    birthDate: Date | string
    sex?: Sex
    address: string
    school?: string | null
    experience?: string | null
    reason?: ReasonForChoosing
    importantActivity?: ArtActivity
    interestingActivity?: ArtActivity
    caution?: string | null
    agree: boolean
    teacherMemo?: string | null
    class?: StudentOnClassCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutGuardianInput = {
    id?: number
    entranceDate?: Date | string
    day?: StudentCreatedayInput | number[]
    time?: StudentCreatetimeInput | number[]
    name: string
    phone?: string | null
    birthDate: Date | string
    sex?: Sex
    address: string
    school?: string | null
    experience?: string | null
    reason?: ReasonForChoosing
    importantActivity?: ArtActivity
    interestingActivity?: ArtActivity
    caution?: string | null
    agree: boolean
    teacherMemo?: string | null
    class?: StudentOnClassUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutGuardianInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGuardianInput, StudentUncheckedCreateWithoutGuardianInput>
  }

  export type StudentCreateManyGuardianInputEnvelope = {
    data: StudentCreateManyGuardianInput | StudentCreateManyGuardianInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutGuardianInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutGuardianInput, StudentUncheckedUpdateWithoutGuardianInput>
    create: XOR<StudentCreateWithoutGuardianInput, StudentUncheckedCreateWithoutGuardianInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutGuardianInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutGuardianInput, StudentUncheckedUpdateWithoutGuardianInput>
  }

  export type StudentUpdateManyWithWhereWithoutGuardianInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutGuardianInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    entranceDate?: DateTimeFilter<"Student"> | Date | string
    day?: IntNullableListFilter<"Student">
    time?: IntNullableListFilter<"Student">
    name?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    birthDate?: DateTimeFilter<"Student"> | Date | string
    sex?: EnumSexFilter<"Student"> | Sex
    guardianId?: IntFilter<"Student"> | number
    address?: StringFilter<"Student"> | string
    school?: StringNullableFilter<"Student"> | string | null
    experience?: StringNullableFilter<"Student"> | string | null
    reason?: EnumReasonForChoosingFilter<"Student"> | ReasonForChoosing
    importantActivity?: EnumArtActivityFilter<"Student"> | ArtActivity
    interestingActivity?: EnumArtActivityFilter<"Student"> | ArtActivity
    caution?: StringNullableFilter<"Student"> | string | null
    agree?: BoolFilter<"Student"> | boolean
    teacherMemo?: StringNullableFilter<"Student"> | string | null
  }

  export type StudentOnClassCreateWithoutClassInput = {
    student: StudentCreateNestedOneWithoutClassInput
  }

  export type StudentOnClassUncheckedCreateWithoutClassInput = {
    studentId: number
  }

  export type StudentOnClassCreateOrConnectWithoutClassInput = {
    where: StudentOnClassWhereUniqueInput
    create: XOR<StudentOnClassCreateWithoutClassInput, StudentOnClassUncheckedCreateWithoutClassInput>
  }

  export type StudentOnClassCreateManyClassInputEnvelope = {
    data: StudentOnClassCreateManyClassInput | StudentOnClassCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type StudentOnClassUpsertWithWhereUniqueWithoutClassInput = {
    where: StudentOnClassWhereUniqueInput
    update: XOR<StudentOnClassUpdateWithoutClassInput, StudentOnClassUncheckedUpdateWithoutClassInput>
    create: XOR<StudentOnClassCreateWithoutClassInput, StudentOnClassUncheckedCreateWithoutClassInput>
  }

  export type StudentOnClassUpdateWithWhereUniqueWithoutClassInput = {
    where: StudentOnClassWhereUniqueInput
    data: XOR<StudentOnClassUpdateWithoutClassInput, StudentOnClassUncheckedUpdateWithoutClassInput>
  }

  export type StudentOnClassUpdateManyWithWhereWithoutClassInput = {
    where: StudentOnClassScalarWhereInput
    data: XOR<StudentOnClassUpdateManyMutationInput, StudentOnClassUncheckedUpdateManyWithoutClassInput>
  }

  export type StudentCreateWithoutClassInput = {
    entranceDate?: Date | string
    day?: StudentCreatedayInput | number[]
    time?: StudentCreatetimeInput | number[]
    name: string
    phone?: string | null
    birthDate: Date | string
    sex?: Sex
    address: string
    school?: string | null
    experience?: string | null
    reason?: ReasonForChoosing
    importantActivity?: ArtActivity
    interestingActivity?: ArtActivity
    caution?: string | null
    agree: boolean
    teacherMemo?: string | null
    guardian: GuardianCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutClassInput = {
    id?: number
    entranceDate?: Date | string
    day?: StudentCreatedayInput | number[]
    time?: StudentCreatetimeInput | number[]
    name: string
    phone?: string | null
    birthDate: Date | string
    sex?: Sex
    guardianId: number
    address: string
    school?: string | null
    experience?: string | null
    reason?: ReasonForChoosing
    importantActivity?: ArtActivity
    interestingActivity?: ArtActivity
    caution?: string | null
    agree: boolean
    teacherMemo?: string | null
  }

  export type StudentCreateOrConnectWithoutClassInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
  }

  export type ClassCreateWithoutStudentInput = {
    classTime?: Date | string
  }

  export type ClassUncheckedCreateWithoutStudentInput = {
    id?: number
    classTime?: Date | string
  }

  export type ClassCreateOrConnectWithoutStudentInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutStudentInput, ClassUncheckedCreateWithoutStudentInput>
  }

  export type StudentUpsertWithoutClassInput = {
    update: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
    create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutClassInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
  }

  export type StudentUpdateWithoutClassInput = {
    entranceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StudentUpdatedayInput | number[]
    time?: StudentUpdatetimeInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | Sex
    address?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: EnumReasonForChoosingFieldUpdateOperationsInput | ReasonForChoosing
    importantActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    interestingActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    caution?: NullableStringFieldUpdateOperationsInput | string | null
    agree?: BoolFieldUpdateOperationsInput | boolean
    teacherMemo?: NullableStringFieldUpdateOperationsInput | string | null
    guardian?: GuardianUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    entranceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StudentUpdatedayInput | number[]
    time?: StudentUpdatetimeInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | Sex
    guardianId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: EnumReasonForChoosingFieldUpdateOperationsInput | ReasonForChoosing
    importantActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    interestingActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    caution?: NullableStringFieldUpdateOperationsInput | string | null
    agree?: BoolFieldUpdateOperationsInput | boolean
    teacherMemo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassUpsertWithoutStudentInput = {
    update: XOR<ClassUpdateWithoutStudentInput, ClassUncheckedUpdateWithoutStudentInput>
    create: XOR<ClassCreateWithoutStudentInput, ClassUncheckedCreateWithoutStudentInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutStudentInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutStudentInput, ClassUncheckedUpdateWithoutStudentInput>
  }

  export type ClassUpdateWithoutStudentInput = {
    classTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    classTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentOnClassCreateManyStudentInput = {
    classId: number
  }

  export type StudentOnClassUpdateWithoutStudentInput = {
    class?: ClassUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentOnClassUncheckedUpdateWithoutStudentInput = {
    classId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentOnClassUncheckedUpdateManyWithoutStudentInput = {
    classId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentCreateManyGuardianInput = {
    id?: number
    entranceDate?: Date | string
    day?: StudentCreatedayInput | number[]
    time?: StudentCreatetimeInput | number[]
    name: string
    phone?: string | null
    birthDate: Date | string
    sex?: Sex
    address: string
    school?: string | null
    experience?: string | null
    reason?: ReasonForChoosing
    importantActivity?: ArtActivity
    interestingActivity?: ArtActivity
    caution?: string | null
    agree: boolean
    teacherMemo?: string | null
  }

  export type StudentUpdateWithoutGuardianInput = {
    entranceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StudentUpdatedayInput | number[]
    time?: StudentUpdatetimeInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | Sex
    address?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: EnumReasonForChoosingFieldUpdateOperationsInput | ReasonForChoosing
    importantActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    interestingActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    caution?: NullableStringFieldUpdateOperationsInput | string | null
    agree?: BoolFieldUpdateOperationsInput | boolean
    teacherMemo?: NullableStringFieldUpdateOperationsInput | string | null
    class?: StudentOnClassUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutGuardianInput = {
    id?: IntFieldUpdateOperationsInput | number
    entranceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StudentUpdatedayInput | number[]
    time?: StudentUpdatetimeInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | Sex
    address?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: EnumReasonForChoosingFieldUpdateOperationsInput | ReasonForChoosing
    importantActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    interestingActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    caution?: NullableStringFieldUpdateOperationsInput | string | null
    agree?: BoolFieldUpdateOperationsInput | boolean
    teacherMemo?: NullableStringFieldUpdateOperationsInput | string | null
    class?: StudentOnClassUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutGuardianInput = {
    id?: IntFieldUpdateOperationsInput | number
    entranceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StudentUpdatedayInput | number[]
    time?: StudentUpdatetimeInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | Sex
    address?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: EnumReasonForChoosingFieldUpdateOperationsInput | ReasonForChoosing
    importantActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    interestingActivity?: EnumArtActivityFieldUpdateOperationsInput | ArtActivity
    caution?: NullableStringFieldUpdateOperationsInput | string | null
    agree?: BoolFieldUpdateOperationsInput | boolean
    teacherMemo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentOnClassCreateManyClassInput = {
    studentId: number
  }

  export type StudentOnClassUpdateWithoutClassInput = {
    student?: StudentUpdateOneRequiredWithoutClassNestedInput
  }

  export type StudentOnClassUncheckedUpdateWithoutClassInput = {
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentOnClassUncheckedUpdateManyWithoutClassInput = {
    studentId?: IntFieldUpdateOperationsInput | number
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
  export const dmmf: runtime.BaseDMMF
}
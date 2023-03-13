@Module({exports: [MongoRepository]})
export class MongoRepository{
  findOne = async<T, Lean<T>>(Model: Model<T>, filter: Record<string, string>, lean = true): Promise<T | LeanT | null> { ... }
}


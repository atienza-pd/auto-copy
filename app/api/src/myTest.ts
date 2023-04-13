import { AppDataSource } from "./data-source";
import { CopyPath } from "./entity/copyPath";

const repo = AppDataSource.getRepository(CopyPath);

export async function testMethod() {
    const test = await repo.find();
    return test;
}

export async function testMethodSave() {
    await repo.save({} as CopyPath);
}
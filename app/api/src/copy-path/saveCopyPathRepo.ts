import { AppDataSource } from "../data-source";
import { CopyPath } from "../entity/copyPath.entity";

const repo = AppDataSource.getRepository(CopyPath);

export async function execute(copyPath : CopyPath) {
    await repo.save(copyPath);
}
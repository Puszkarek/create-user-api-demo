import { FakeMailProvider } from "../../providers/implementations/FakeMailProvider.spec";
import { FakeUserRepository } from "../../repositories/implementations/FakeUserRepository.spec";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUseController";

const mailtrapMailProvider = new FakeMailProvider();

const postgresUsersRepository = new FakeUserRepository();

const createUserUseCase = new CreateUserUseCase(
	postgresUsersRepository,
	mailtrapMailProvider,
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };

import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
export class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}
	async execute(request: Request, response: Response): Promise<Response> {
		const { name, email, password } = request.body;

		try {
			await this.createUserUseCase.execute({ name, email, password });
			return response.status(201).send();
		} catch (err: any) {
			const errorMessage = err.message || "Unexpected Error";
			return response.status(401).json({ errorMessage });
		}
	}
}

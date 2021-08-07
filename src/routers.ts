import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post("/user", (request, response) => {
	return createUserController.execute(request, response);
});

export { router };

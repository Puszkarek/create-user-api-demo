import { v4 as uid } from "uuid";

export class User {
	public readonly id: string;

	public name: string;
	public email: string;
	private password: string;

	constructor(props: Omit<User, "id">, id?: string) {
		Object.assign(this, props);

		if (!id) {
			this.id = uid();
		}
	}
}

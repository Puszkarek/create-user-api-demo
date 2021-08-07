import { IMailProvider, IMessage } from "../IMailProvider";
export class FakeMailProvider implements IMailProvider {
	private transporter;
	constructor() {
		this.transporter = {
			async sendMail(message: IMessage): Promise<void> {
				console.log(
					`sending email to ${message.to.email} from ${message.from.email}`,
				);
			},
		};
	}
	async sendMail(message: IMessage): Promise<void> {
		const { to, from, subject, body } = message;
		await this.transporter.sendMail({ to, from, subject, body });
	}
}

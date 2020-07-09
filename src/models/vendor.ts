import { Deserializable } from "./interfaces/deserializable";

export default class Vendor implements Deserializable {
	id: string;
	name: string;
	description: string;

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}

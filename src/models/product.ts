import { Deserializable } from "./interfaces/deserializable";

export class Product implements Deserializable {
	id: string;
	name: string;
	description: string;
	image: string;
	price: {
		msrp: number,
		christmas: number,
		weekend: number,
		type: string
	};

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}

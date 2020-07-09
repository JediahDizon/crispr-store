import { Deserializable } from "./interfaces/deserializable";
import Vendor from "./vendor";
import Classification from './classification/classification';

export default class Product implements Deserializable {
	id: string;
	name: string;
	description: string;
	vendor: Vendor;
	images: Array<string>;
	price: {
		msrp: number,
		christmas?: number,
		weekend?: number
		generic?: number,
		type: string
	};

	classification: Classification;

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}

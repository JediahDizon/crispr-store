import { Deserializable } from "./interfaces/deserializable";

// The main difference between this and a Product model is the image is a single string because only one product image is allowed for every showcased item.
export default class ProductFeature implements Deserializable {
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

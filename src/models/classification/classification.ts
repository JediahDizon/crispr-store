import { Deserializable } from "../interfaces/deserializable";
import * as types from "./types.json";

export default class Classification implements Deserializable {
	id: string;
	longTermDiscomfort: string;
	geneticSideEffects: string;
	effectivity: string|number;
	sideEffects: string;
	method: string;
	tags: {
		A: string;
		B: string;
		C: string;
		D: string;
	};

	deserialize(input: any): this {
		Object.assign(this, input);
		this.longTermDiscomfort = types.longTermDiscomfort[input.longTermDiscomfort];
		this.geneticSideEffects = types.geneticSideEffects[input.geneticSideEffects];
		this.effectivity = types.effectivity[input.effectivity];
		this.method = types.methods[input.method];
		
		this.tags.A = types.tags.A[input.tags.A];
		this.tags.B = types.tags.B[input.tags.B];
		this.tags.C = types.tags.C[input.tags.C];
		this.tags.D = types.tags.D[input.tags.D];

		return this;
	}
}

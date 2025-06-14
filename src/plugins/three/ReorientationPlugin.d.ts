export class ReorientationPlugin {

	constructor( options?: {
		up?: '+x' | '-x' | '+y' | '-y' | '+z' | '-z',
		recenter?: boolean,

		lat?: number | null,
		lon?: number | null,
		height?: number,
	} );

	transformLatLonHeightToOrigin( lat: number, lon: number, height?: number ): void;

}

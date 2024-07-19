declare var ICuboid: {
  new (length: number): ICuboid;
};

interface ICuboid {
  /** Length of the cube */
  length: number;
  /** Surface area of the cube */
  surfaceArea: number;
  /** Volume of the cube */
  volume: number;
}

export class Cube implements ICuboid {
  constructor(public length: number) {
    this.length = length;
  }
  get surfaceArea() {
    return 6 * (this.length * this.length);
  }
  get volume() {
    return Math.pow(this.length, 3);
  }
  set surfaceArea(surfaceArea) {
    this.length = Math.sqrt(surfaceArea / 6);
  }

  set volume(volume) {
    this.length = Math.cbrt(volume);
  }
}

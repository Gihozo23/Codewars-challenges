interface IGeometricFigure {
    area: () => number;
    perimeter: () => number;
  }
  
export class Square implements IGeometricFigure {
    constructor(public side: number) {
        this.side = side;
      }
      area() {
          return this.side*this.side;
    }
    perimeter() {
        return 4 * this.side;
    }
  }
  
export class Circle implements IGeometricFigure {
    constructor(public radius: number) {
        this.radius = radius;
      }
    area() {
        return this.radius * this.radius * Math.PI;
    }
    perimeter() {
        return 2 * this.radius * Math.PI;
    }
  }
  
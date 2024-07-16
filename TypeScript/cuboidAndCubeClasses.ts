export class Cuboid {
    public length: number;
    public width: number;
    public height: number
    constructor (length: number, width: number, height: number){
      this.length = length;
      this.width = width;
      this.height = height;
    }
      surfaceArea(){
        return 2*((this.width*this.height)+(this.height*this.length)+(this.width*this.length));
      }
      volume(){
        return this.length*this.width*this.height;
      }
    }
    
    export class Cube extends Cuboid {
    
        constructor(length: number) {
        super(length, length, length)
      this.length = length;
      this.width = length;
      this.height = length;
        };
    }
var cuboid = new Cuboid(1, 2, 3);
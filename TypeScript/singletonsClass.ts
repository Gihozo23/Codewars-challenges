export class SingletonCounter {
  public count;
  private static myInstance: SingletonCounter;
  private constructor() {
    this.count = 0;
  }
  static getInstance() {
    if (!SingletonCounter.myInstance) {
      SingletonCounter.myInstance = new SingletonCounter();
    }
    return SingletonCounter.myInstance;
  }
  inc() {
    this.count++;
    return this.count;
  }
}
const inst = SingletonCounter.getInstance();
console.log(inst.inc());
const inst22 = SingletonCounter.getInstance();
console.log(inst22.inc())

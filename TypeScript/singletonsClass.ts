export class SingletonCounter {
    public count;
    private static myInstance: SingletonCounter;
    private constructor(){
        this.count = 0;
      }
    static getInstance(){
      if(!SingletonCounter.myInstance){
       SingletonCounter.myInstance = new SingletonCounter();
        }
        return SingletonCounter.myInstance;
        
      }
    inc() {
      this.count++;
      return this.count;
      }
    }
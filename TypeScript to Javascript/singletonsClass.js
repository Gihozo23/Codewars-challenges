"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonCounter = void 0;
class SingletonCounter {
    constructor() {
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
exports.SingletonCounter = SingletonCounter;

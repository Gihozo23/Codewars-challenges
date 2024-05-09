class File {
    constructor(fullName, contents){
        const fullNameArray = fullName.split('.');
        const fileNameArray = fullNameArray.filter((el,i)=> i !== fullNameArray.length-1);
          
        this._fullName = fullName;
        this._filename = fileNameArray.join('.');
        this._contents = contents;
        this._extension = fullNameArray[fullNameArray.length-1];
        
        this._currentLineToRead = 0;
        this._currentCharToRead = 0;
    }
    get fullName(){
        return this._fullName;
    }
    set fullName(fullName){
        return;
    }
      
    get filename(){
        return this._filename;
    }
    set filename(filename){
        return;
    }
      
    get extension(){
        return this._extension;
    }
    set extension(extension){
        return;
    }
      
    getContents(){
        return this._contents;
    }

    write(str){
      if(this._contents.length === 0){
        this._contents += str;
      } else {
        this._contents += `\n${str}`;
      }
    }
    gets(){
        if(this._contents.length === 0){
            return '';
        }
        const res = this._contents.split('\n')[this._currentLineToRead];
        this._currentLineToRead++;
        return res;
    }
    getc(){
        if(this._contents.length === 0){
            return '';
        }
        const res = this._contents[this._currentCharToRead];
        this._currentCharToRead++;
        return res;
    }
}
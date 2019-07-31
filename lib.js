// A very basic JQuery like library with ES6 class syntax

const lib =(function(){
    class Constructor{
        constructor(selector){
            if(!selector) return;
            if(selector === 'document'){
                this.elem = [document];
            }else if(selector === 'window'){
                this.elem = [window];
            }else{
                this.elem = document.querySelectorAll(selector);
            }
        }
        each(callback){
            if(!callback || typeof callback !== 'function') return;
            for(let i=0;i<this.elem.length;i++){
                callback(this.elem[i],i);
            }
            return this;
        }
        addClass(classname){
            if(!classname) throw new Error('provide class name');
            this.each(function(ele){
                ele.classList.add(classname);
            })
            return this;
        }
        removeClass(classname){
            if(!classname) throw new Error('provide class name');
            this.each(function(ele){
                ele.classList.remove(classname);
            })
            return this;
        }
        ajax(url){
            console.log(url)
        }
    }
    const instance = function(selector){
        return new Constructor(selector);
    }
    return instance;
})();
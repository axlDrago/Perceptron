module.exports = class Neiron {
    //Входные параметры, веса, смещение, ф-я активации
    init(x = [], weight = [], bias = 0, activator='sigmoid'){
        this.x = x;
        this.weight = weight;
        this.activator = activator;
        this.b = bias;

        return this.neiron();
    }

    // Определение весов
    w = function(){
        let arr = [];
        if (this.weight.length != 0)
        {
            arr = this.weight;
        } else {
            for (let i=0; i < this.x.length; i++){
                arr[i] = Math.random();
            }
        }
        
        return arr;
    }

    //Тело нейрона, с функцией активации
    neiron() {
        let Y = 0;
        let weight = this.w();
        for(let i=0; i < this.x.length; i++){
            Y += this.x[i] * weight[i];
        }
        Y += this.b;

        switch(this.activator) {
            case 'sigmoid': return ({'activate': (1 / (1 + Math.exp(-1*Y))), 'weight': weight});
            case 'relu': return ({'activate' : Math.max(0, Y), 'weight': weight});
        }
    }
}
const n = require("./neiron");
let neiron = new n();

module.exports = class Perceptron {

    /*Вход, веса, массив данных для обучения
    */
    init([input = [], weight = []]){
        this.input = input;
        this.weight = weight;
        this.a = 1;

        console.log(this.network());
        this.start = this.network();
    }

    network(){
        let output = neiron.init(this.input, this.weight, -3, 'sigmoid');
        this.weight = output.weight;
        this.output = output.activate;
        return(
            output.activate
        )
    }
    
    train(epoch, trainData){
        for(let td = 0; td < trainData.input.length; td++) {
            let i=0;
            let j = 0;
            while (i < epoch) {
                this.output = neiron.init(trainData.input[td], this.weight, -3, 'sigmoid')

                let delta = trainData.output[td][j] - this.output.activate;
                let newW = this.weight[j] + this.a * delta * this.input[j];

                (i%2 == 0) ? j=1 : j=0;
                this.weight[j] = newW;

                console.log(td + 1 + ' epoch ' + i + ' : ' + this.weight);

                i++;
            }
        }

        console.log('start: ' + this.start);
        console.log('end: ' + this.network(this.input, this.weight, -3, 'sigmoid'));
    }
}
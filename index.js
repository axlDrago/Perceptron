//////////////////////////////
//   Однослойный перцептрон
/////////////////////

const perceptron = require("./perceptron");

let p = new perceptron();
p.init([[process.argv[2], process.argv[3]], weight = []])

trainData = {
    'or': {
        input: [[0,0], [0,1], [1,0], [1,1]], 
        output: [[0,0], [1,1], [1,1], [1,1]] 
    }, 
    'and': {
        input: [[0,0], [0,1], [1,0], [1,1]], 
        output: [[0,0], [0,0], [0,0], [1,1]] 
    }
};

p.train(epoch = 2000, trainData.and );
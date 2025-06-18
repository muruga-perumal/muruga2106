
/* console.log("INDEX:", module)

const util = require("./lib/util.js")
console.log(util)

setImmediate(() => {
    console.log('The index.js module object is now loaded!', module)
    });
    
    console.log(arguments) */
    
    // module.exports = {
        //     asdfuisd
        // }
        
     
// console.log(module.exports);
// exports.id = 'index';

// console.log(module.exports);
// module.exports = "muruga";

// console.log(exports);
// console.log(module.exports);


let obj = {
    name: {
        fname: "muruga"
    }
};

const name = obj.name; // reference or new variable..

name.lname = "perumal";

console.log(obj.name);

// function sayThis(){
//     console.log(this);
// }

// sayThis();
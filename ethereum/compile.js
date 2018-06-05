const path = require('path');
const solc = require('solc');
const fs   = require('fs-extra');


const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath); // nueva funcion de fs-extra

const betaPath = path.resolve(__dirname,'contracts','Gainmers-beta.sol');
const source = fs.readFileSync(betaPath,'utf8');
const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);
console.log(output);

for (let contract in output){ //esto itera sobre las "keys" del obejto 'output'
                                //estas son Cmapaing y CampaingGenerator
    fs.outputJsonSync(
        path.resolve(buildPath,contract.replace(':','') +'.json'),
        output[contract]
    );


}
/* Please ensure that you have download the package from https://github.com/davedoesdev/qlobber,
otherwise you cannot execute this program.*/

const process = require('process');
const startTime = process.cpuUsage();

let N = ; //請設定組數 
let rss_start = process.memoryUsage().rss;
let heapTotal_start = process.memoryUsage().heapTotal;
let heapUsed_start = process.memoryUsage().heapUsed;
let external_start = process.memoryUsage().external;
let arrayBuffers_start = process.memoryUsage().arrayBuffers;
// 多配符 *  # 
var Qlobber = require('qlobber').Qlobber;
var matcher = new Qlobber();
let SQE;
let SRE;
// 讀寫檔案的前置作業
const fs = require('fs');
const readline = require('readline');
const fsPromises = require('fs').promises;
const readInterface = readline.createInterface({
    input: fs.createReadStream('D:/qlobber_input.txt'),
    output: process.stdout,
    console: false
});
// 先把目標寫入檔清空
const removeAll = '';
fs.writeFile('D:/qlobber_output.txt', removeAll, function (err) {
    if (err) throw err;
});
fs.writeFile('D:/qlobber_outputTest.txt', removeAll, function (err) {
    if (err) throw err;
});
// 開始讀
let integer = 0;
let cou = 0;
readInterface.on('line', function (line) {
    Qlobber = require('qlobber').Qlobber;
    matcher = new Qlobber();
    // line是讀進來的該行值，把它分割成SQE, SRE
    let l = line.split(',');
    SQE = l[0];
    SRE = l[1];
    matcher.add(SQE);
    let outcome;
    let comma = ", ";
    let newLine = '\n';
    if (matcher.test(SRE) == 1) {
        outcome = 'true';
    }
    else {
        outcome = 'false';
    }
    let space = ' ';
    let str0 = cou + line;
    let str1 = str0 + comma;
    let str2 = str1 + outcome;
    let str3 = str2 + newLine;
    let str4 = cou + space;
    let str5 = str4 + outcome;
    let str6 = str5 + newLine;
    fsPromises.appendFile('D:/qlobber_output.txt', str3);
    fsPromises.appendFile('D:/qlobber_outputTest.txt', str6)
    // 重置line值，準備讀取下一行字串
    line = undefined;
    cou++;
    if (cou === N) {
        console.log('{');
        console.log(process.memoryUsage().rss - rss_start);
        console.log(process.memoryUsage().heapTotal - heapTotal_start);
        console.log(process.memoryUsage().heapUsed - heapUsed_start);
        console.log(process.memoryUsage().external - external_start);
        console.log(process.memoryUsage().arrayBuffers - arrayBuffers_start);
        console.log('}');
        const endTime = process.cpuUsage();
        const usedTime = endTime.user - startTime.user;
        const totalTime = endTime.user + endTime.system - startTime.user - startTime.system;
        const usage = usedTime / totalTime;
        console.log(`CPU usage: ${usage * 100}%`);
    }
});
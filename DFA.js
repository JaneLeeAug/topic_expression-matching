/* Please ensure that you have download the package from https://github.com/jakesgordon/javascript-state-machine,
otherwise you cannot execute this program.*/

const process = require('process');
const startTime = process.cpuUsage();

let N = ; //請設定組數 

let rss_start = process.memoryUsage().rss;
let heapTotal_start = process.memoryUsage().heapTotal;
let heapUsed_start = process.memoryUsage().heapUsed;
let external_start = process.memoryUsage().external;
let arrayBuffers_start = process.memoryUsage().arrayBuffers;

let SQE;
let SRE;

const fs = require('fs');
const readline = require('readline');
const fsPromises = require('fs').promises;
const { exec } = require('child_process');

const readInterface = readline.createInterface({
    input: fs.createReadStream('D:/DFA_input.txt'),
    output: process.stdout,
    console: false
});
// 先把目標寫入檔清空
const removeAll = '';
fs.writeFile('D:/DFA_output.txt', removeAll, function (err) {
    if (err) throw err;
});
fs.writeFile('D:/DFA_outputTest.txt', removeAll, function (err) {
    if (err) throw err;
});
let cou = 0;
// 開始讀
readInterface.on('line', function (line) {

    // line是讀進來的該行值，把它分割成SQE, SRE
    let l = line.split(',');
    SQE = l[0];
    SRE = l[1];
    if (typeof SQE === "string") {
        let ssqe = SQE.split(".");
    }
    else {
        console.log("SQE is not a string", SQE);
    }
    if (typeof SRE === "string") {
        let ssre = SRE.split(".");
    }
    else {
        console.log(cou + 1, line);
    }
    let outcome = match();
    let comma = ", ";
    let newLine = '\n';
    let space = ' ';
    let str0 = cou + line;
    let str1 = str0 + comma;
    let str2 = str1 + outcome;
    let str3 = str2 + newLine;
    let str4 = cou + space;
    let str5 = str4 + outcome;
    let str6 = str5 + newLine;
    fsPromises.appendFile('D:/DFA_output.txt', str3)
    fsPromises.appendFile('D:/DFA_outputTest.txt', str6)
    // 重置line的值，準備讀取下一行字串
    line = undefined;
    cou++;
    if (cou === N) /*表示已經結束判斷*/ {
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

// 配對函式
let sqe, sre;
function match() {

    let sqe = SQE.split('.');
    let sre = SRE.split('.');

    let accept_state = sqe[sqe.length - 1]; // This is the accept state

    var StateMachine = require('javascript-state-machine');
    var fsm = new StateMachine({
        init: 'init',
        inti: sqe[0],
        transitions: [
            { name: 'step', from: 'init', to: sqe[0] },
            { name: 'step', from: sqe[0], to: sqe[1] },
            { name: 'step', from: sqe[1], to: sqe[2] },
            { name: 'step', from: sqe[2], to: sqe[3] },
            { name: 'step', from: sqe[3], to: sqe[4] },
            { name: 'step', from: sqe[4], to: sqe[5] },
            { name: 'step', from: sqe[5], to: sqe[6] },
            { name: 'step', from: sqe[6], to: sqe[7] },
            { name: 'step', from: sqe[7], to: sqe[8] },
            { name: 'step', from: sqe[8], to: sqe[9] },
            { name: 'step', from: sqe[9], to: sqe[10] },
            { name: 'step', from: sqe[10], to: sqe[11] },
            { name: 'step', from: sqe[11], to: sqe[12] },
            { name: 'step', from: sqe[12], to: sqe[13] },
            { name: 'step', from: sqe[13], to: sqe[14] },
            { name: 'step', from: sqe[14], to: sqe[15] },
            { name: 'step', from: sqe[15], to: sqe[16] },
            { name: 'step', from: sqe[16], to: sqe[17] },
            { name: 'step', from: sqe[17], to: sqe[18] },
            { name: 'step', from: sqe[18], to: sqe[19] },
            { name: 'step', from: sqe[19], to: sqe[20] },
            { name: 'step', from: sqe[20], to: sqe[21] },
            { name: 'step', from: sqe[21], to: sqe[22] },
            { name: 'step', from: sqe[22], to: sqe[23] },
            { name: 'step', from: sqe[23], to: sqe[24] },
            { name: 'step', from: sqe[24], to: sqe[25] },
            { name: 'step', from: sqe[25], to: sqe[26] },
            { name: 'step', from: sqe[26], to: sqe[27] },
            { name: 'step', from: sqe[27], to: sqe[28] },
            { name: 'step', from: sqe[28], to: sqe[29] },
            { name: 'step', from: sqe[29], to: sqe[30] },
            { name: 'step', from: sqe[30], to: sqe[31] },
            { name: 'step', from: sqe[31], to: sqe[32] },
            { name: 'step', from: sqe[32], to: sqe[33] },
            { name: 'step', from: sqe[33], to: sqe[34] },
            { name: 'step', from: sqe[34], to: sqe[35] },
            { name: 'step', from: sqe[35], to: sqe[36] },
            { name: 'step', from: sqe[36], to: sqe[37] },
            { name: 'step', from: sqe[37], to: sqe[38] },
            { name: 'step', from: sqe[38], to: sqe[39] },
            { name: 'step', from: sqe[39], to: sqe[40] },
            { name: 'step', from: sqe[40], to: sqe[41] },
            { name: 'step', from: sqe[41], to: sqe[42] },
            { name: 'step', from: sqe[42], to: sqe[43] },
            { name: 'step', from: sqe[43], to: sqe[44] },
            { name: 'step', from: sqe[44], to: sqe[45] },
            { name: 'step', from: sqe[45], to: sqe[46] },
            { name: 'step', from: sqe[46], to: sqe[47] },
            { name: 'step', from: sqe[47], to: sqe[48] },
            { name: 'step', from: sqe[48], to: sqe[49] },
            { name: 'step', from: sqe[49], to: sqe[50] },
            { name: 'step', from: sqe[50], to: sqe[51] },
            { name: 'step', from: sqe[51], to: sqe[52] },
            { name: 'step', from: sqe[52], to: sqe[53] },
            { name: 'step', from: sqe[53], to: sqe[54] },
            { name: 'step', from: sqe[54], to: sqe[55] },
            { name: 'step', from: sqe[55], to: sqe[56] },
            { name: 'step', from: sqe[56], to: sqe[57] },
            { name: 'step', from: sqe[57], to: sqe[58] },
            { name: 'step', from: sqe[58], to: sqe[59] },
            { name: 'step', from: sqe[59], to: sqe[60] },
            { name: 'step', from: sqe[60], to: sqe[61] },
            { name: 'step', from: sqe[61], to: sqe[62] },
            { name: 'step', from: sqe[62], to: sqe[63] },
            { name: 'step', from: sqe[63], to: sqe[64] },
            { name: 'step', from: sqe[64], to: sqe[65] },
            { name: 'step', from: sqe[65], to: sqe[66] },
            { name: 'step', from: sqe[66], to: sqe[67] },
            { name: 'step', from: sqe[67], to: sqe[68] },
            { name: 'step', from: sqe[68], to: sqe[69] },
            { name: 'step', from: sqe[69], to: sqe[70] },
            { name: 'step', from: sqe[70], to: sqe[71] },
            { name: 'step', from: sqe[71], to: sqe[72] },
            { name: 'step', from: sqe[72], to: sqe[73] },
            { name: 'step', from: sqe[73], to: sqe[74] },
            { name: 'step', from: sqe[74], to: sqe[75] },
            { name: 'step', from: sqe[75], to: sqe[76] },
            { name: 'step', from: sqe[76], to: sqe[77] },
            { name: 'step', from: sqe[77], to: sqe[78] },
            { name: 'step', from: sqe[78], to: sqe[79] },
            { name: 'step', from: sqe[79], to: sqe[80] },
            { name: 'step', from: sqe[80], to: sqe[81] },
            { name: 'step', from: sqe[81], to: sqe[82] },
            { name: 'step', from: sqe[82], to: sqe[83] },
            { name: 'step', from: sqe[83], to: sqe[84] },
            { name: 'step', from: sqe[84], to: sqe[85] },
            { name: 'step', from: sqe[85], to: sqe[86] },
            { name: 'step', from: sqe[86], to: sqe[87] },
            { name: 'step', from: sqe[87], to: sqe[88] },
            { name: 'step', from: sqe[88], to: sqe[89] },
            { name: 'step', from: sqe[89], to: sqe[90] },
            { name: 'step', from: sqe[90], to: sqe[91] },
            { name: 'step', from: sqe[91], to: sqe[92] },
            { name: 'step', from: sqe[92], to: sqe[93] },
            { name: 'step', from: sqe[93], to: sqe[94] },
            { name: 'step', from: sqe[94], to: sqe[95] },
            { name: 'step', from: sqe[95], to: sqe[96] },
            { name: 'step', from: sqe[96], to: sqe[97] },
            { name: 'step', from: sqe[97], to: sqe[98] },
            { name: 'step', from: sqe[98], to: sqe[99] },
            { name: 'step', from: sqe[99], to: sqe[100] },
            { name: 'fail', from: '*', to: 'deny_state' },
            { name: 'accept', from: '*', to: 'accept_state' }
        ]
    });

    let i = 0;
    let j = 0;
    let q = 0;
    let strindex;
    let next;
    for (; i < sre.length || j < sqe.length; i++, j++) {
        // #
        if (sqe[j] === '#') {
            // ~.#
            if (j + 1 === sqe.length) {
                fsm.accept();
                break;
            }
            // # is not the last in SQE
            else {
                // ~.#.+
                if (sqe[j + 1] === '+') {
                    // '+' is the last 
                    if (j + 1 === sqe.length - 1) {
                        if (i <= sre.length - 1) {
                            fsm.accept();
                            break;
                        }
                        else {
                            fsm.fail();
                            break;
                        }
                    }
                    // '+' is not the last 
                    else {
                        if (sqe[j + 2] === '#') {
                            next = 'false';
                            for (q = j + 3; q < sqe.length; q++) {
                                if (sqe[q] != '#' && sqe[q] != '+') {
                                    next = 'true';
                                    strindex = q;
                                    break;
                                }
                            }
                            if (next === 'true') {
                                let count = 0;
                                for (let x = j; x < strindex; x++) {
                                    if (sqe[x] === '+') {
                                        count++;
                                    }
                                }
                                let match = 'false';
                                let strpair;
                                for (let z = i; z < sre.length; z++) {
                                    if (sre[z] === sqe[strindex]) {
                                        match = 'true';
                                        strpair = z;
                                    }
                                }
                                if (match === 'true') {
                                    for (let k = 0; k < (strindex - j - 1); k++) {
                                        fsm.step();
                                    }
                                    i = strpair - 1;
                                    j = strindex - 1;
                                }
                                else {
                                    fsm.fail();
                                    break;
                                }
                            }
                            else {
                                let countQ = 0;
                                for (q = j; q < sqe.length; q++) {
                                    if (sqe[q] === '+') {
                                        countQ++;
                                    }
                                }
                                if (countQ <= (sre.length - i)) {
                                    fsm.accept();
                                    break;
                                }
                                else {
                                    fsm.fail();
                                    break;
                                }
                            }
                        }
                        else if (sqe[j + 2] === '+') {
                            next = 'false';
                            for (q = j; q < sqe.length; q++) {
                                if (sqe[q] != '#' && sqe[q] != '+') {
                                    next = 'true';
                                    strindex = q;
                                    break;
                                }
                            }
                            if (next === 'true') {
                                let count = 0;
                                for (let x = j; x < strindex; x++) {
                                    if (sqe[x] === '+') {
                                        count++;
                                    }
                                }
                                let match = 'false';
                                let strpair;
                                for (let z = i; z < sre.length; z++) {
                                    if (sre[z] === sqe[strindex]) {
                                        match = 'true';
                                        strpair = z;
                                    }
                                }
                                if (match === 'true') {
                                    for (let k = 0; k < (strindex - j - 1); k++) {
                                        let before = fsm.state;
                                        fsm.step();
                                    }
                                    i = strpair - 1;
                                    j = strindex - 1;
                                }
                                else {
                                    fsm.fail();
                                    break;
                                }
                            }
                            else {
                                let countQ = 0;
                                for (q = j; q < sqe.length; q++) {
                                    if (sqe[q] === '+') {
                                        countQ++;
                                    }
                                }
                                if (countQ <= (sre.length - i)) {
                                    fsm.accept();
                                    break;
                                }
                                else {
                                    fsm.fail();
                                    break;
                                }
                            }
                        }
                        else { //.#.+.1stFloor
                            if (sre.length > (i + 1)) {
                                while (sre[i] != sqe[j + 2] && i < sre.length) {
                                    i++;
                                }
                                fsm.step(); fsm.step();
                                j++;
                                i--;
                            }
                            else {
                                fsm.fail();
                                break;
                            }
                        }
                    }
                }
                // .#.# / .#.1stFloor
                else {
                    if (sqe[j + 1] === '#') {
                        fsm.step();
                        i--;
                    }
                    else {
                        while (sre[i] != sqe[j + 1] && i < sre.length) {
                            i++;
                        }
                        fsm.step();
                        i--;
                    }
                }
            }
        }
        // +, others
        else {
            if (sre[i] === sqe[j]) {
                fsm.step();
            }
            else if (sqe[j] === '+') {
                if (i <= (sre.length - 1)) {
                    fsm.step();
                }
                else {
                    fsm.fail();
                    break;
                }
            }
            else {
                fsm.fail();
                break;
            }
        }
    }
    if (fsm.state === 'deny_state') {
        return 'false';
    }
    else {
        if (fsm.state === 'accept_state' || (fsm.state === accept_state && i === sre.length && j === sqe.length)) {
            return 'true';
        }
        else {
            return 'false';
        }
    }
}
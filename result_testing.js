/* This program is to test whether the comparing results of Trie and DFA are same or not.
 (It should be same.) */
const fs = require("fs");

// 讀取文本文件的函數
function readTextFile(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n").map((line) => line.trim());
  const data = {};

  lines.forEach((line) => {
    const [key, value] = line.split(" ");
    data[key] = value === "true";
  });

  return data;
}

// 讀取兩個文本文件
const file1 = readTextFile("D:/DFA_outputTest.txt");
const file2 = readTextFile("D:/Trie_outputTest.txt");

// 找出兩個文本文件中相應行的布爾值不同的行的數量和key
const differentKeys = [];
Object.keys(file1).forEach((key) => {
  if (!file2.hasOwnProperty(key)) {
    differentKeys.push(key);
  } else if (file1[key] !== file2[key]) {
    differentKeys.push(key);
  }
});

Object.keys(file2).forEach((key) => {
  if (!file1.hasOwnProperty(key)) {
    differentKeys.push(key);
  }
});

console.log('相異數量為:', differentKeys.length);
console.log(`相異的key為 ${differentKeys.join(", ")}`);



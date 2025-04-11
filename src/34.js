// 项目名称: Project123456
// 这是一个简单的学校项目来演示如何使用GitHub

// 基本的项目结构 (在 GitHub 中通常不需要太复杂的文件系统)
const fs = require('fs');
const path = require('path');

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

function writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

// 读取文件
const fileContent = readFile('project123456.js');

console.log(fileContent);

// 在此处，你可以添加写入到文件的内容

// 读取外部文件内容
const externalContent = fs.readFileSync(path.resolve(__dirname, 'external-file.txt'), 'utf-8');

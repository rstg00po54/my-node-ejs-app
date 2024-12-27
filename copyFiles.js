const fs = require('fs');
const path = require('path');

// 递归复制文件夹中的所有文件
function copyFiles(src, dest) {
	console.log('开始拷贝文件')
  // 读取源目录中的所有文件和文件夹
  fs.readdirSync(src, (err, files) => {
    if (err) {
      console.error('读取目录失败:', err);
      return;
    }

    files.forEach((file) => {
      const srcFile = path.join(src, file);
      const destFile = path.join(dest, file);

      // 获取文件信息
      fs.statSync(srcFile, (err, stats) => {
        if (err) {
          console.error('获取文件信息失败:', err);
          return;
        }

        if (stats.isDirectory()) {
          // 如果是文件夹，递归复制
          if (!fs.existsSync(destFile)) {
            fs.mkdirSync(destFile, { recursive: true });
          }
          copyFiles(srcFile, destFile);
        } else {
          // 如果是文件，复制文件
          fs.copyFileSync(srcFile, destFile, (err) => {
            if (err) {
              console.error('复制文件失败:', err);
            } else {
              console.log(`已复制文件: ${srcFile} -> ${destFile}`);
            }
          });
        }
      });
    });
  });
  console.log('结束拷贝文件')
}

// 将函数暴露出来
module.exports = {
  copyFiles
};

const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
// const marked = require('marked');
const app = express();
const { marked } = require('marked');
const stylus = require('stylus');
// 设置 EJS 模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('view cache', false);  // 禁用缓存

// 静态文件目录
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// 读取 Markdown 文件并转换为 HTML
function convertMarkdownToHtml(filePath) {
  const markdown = fs.readFileSync(filePath, 'utf-8');
  return marked(markdown);
}
// 保存生成的 HTML 到文件
function saveHtmlToFile(fileName, content) {

	console.log(content)
  
	// 保存到 'public' 目录下的静态 HTML 文件
	fs.writeFile(path.join(__dirname, 'public', fileName), content, (err) => {
	  if (err) {
		console.error('Error saving HTML file:', err);
	  } else {
		console.log(`${fileName} saved successfully!`);
	  }
	});
  }
const inputPath = './views/page.styl';
const outputPath = './views/output.css';

// 定义处理读取文件后的回调函数
function handleStylusCompilation(err, data) {
	if (err) {
	  console.error(`Error reading file: ${err}`);
	  return;
	}
  
	// 编译 .styl 文件为 .css
	stylus(data)
	  .render((renderErr, css) => {
		if (renderErr) {
		  console.error(`Error rendering CSS: ${renderErr}`);
		  return;
		}
  
		// 写入生成的 .css 文件
		fs.writeFile(outputPath, css, (writeErr) => {
		  if (writeErr) {
			console.error(`Error writing CSS file: ${writeErr}`);
		  } else {
			console.log(`CSS compiled and saved to ${outputPath}`);
		  }
		});
	  });
  }
  
// 调用 fs.readFile 并传入处理函数
fs.readFile(inputPath, 'utf8', handleStylusCompilation);



// 确保路径正确
const headerPath = path.join(__dirname, 'views', 'partials', 'header.ejs');
const footerPath = path.join(__dirname, 'views', 'partials', 'footer.ejs');
// 生成动态 HTML
function generateHtml(content) {
	console.log(path.join(__dirname, 'views', 'partials', 'header.ejs'))
	// <%- include('partials/header') %>
	// <%- include('partials/footer.ejs') %>
	const template = `
	  <%- include('${headerPath}') %>
	  <div class="content"><%- content %></div>
	  <%- include('${footerPath}') %>
	`;
  
	// 使用 ejs 渲染模板字符串
	return ejs.render(template, { content: content });
  }


const mdHtml = convertMarkdownToHtml(path.join(__dirname, 'source', 'index.md'))
// const indexHtml = generateHtml(mdHtml)
console.log('-------------')
console.log(mdHtml)
console.log('-------------')
// console.log(indexHtml)
console.log('-------------')


const css = require('./views/script.js');
// 渲染模板
const templateData = {
	title: 'My First Post',  // 页面标题
	content: mdHtml,     // 渲染的 HTML 内容
	css
  };
var finalHtml;


// 使用 EJS 渲染模板
ejs.renderFile(path.join(__dirname, 'views', 'index.ejs'), templateData, {}, (err, str) => {
	if (err) {
	  console.error('Error rendering template:', err);
	  return;
	}

	// 使用 <%- %> 渲染 HTML 内容，避免转义
	const finalOutput = str.replace('<%= content %>', `<%- content %>`);
	finalHtml = finalOutput
	// fs.writeFileSync(outputFilePath, finalOutput);
  
	saveHtmlToFile('index.html', finalOutput);  // 保存 HTML 到文件
	// console.log('HTML file generated successfully at:', outputFilePath);
	console.log(finalOutput);
  });

// 路由：主页
app.get('/', (req, res) => {
  console.log('out')

  res.send(finalHtml)
});

// 路由：关于页面
app.get('/about', (req, res) => {

  res.render('index', {
    title: 'About Us',
    content: content
  });
});
console.log('run')
// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
//   console.log(path.join(__dirname, 'views', 'partials', 'header.ejs'))
});

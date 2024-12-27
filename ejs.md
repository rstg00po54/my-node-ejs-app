在 EJS（Embedded JavaScript）的模板语法中， `<%` 号用于插入 JavaScript 代码。以下是常见的 EJS 语法以及 `<% %>` 的用法：

### EJS 语法支持的主要语法

---

### 1. **输出值**（`<%= value %>`）

用于输出数据，例如：

```ejs
<%= user.name %> // 输出用户的名字
```

### 2. **执行 JavaScript 代码**（`<% %>`）

```ejs
<% if (user.isAdmin) { %>
  <p>Welcome, admin!</p>
<% } %>
```

### 3. **输出 HTML**（`<%- value %>`）

会输出值，但不会对其进行 HTML 转义，适用于直接输出 HTML 代码。

```ejs
<%- user.htmlContent %>
```

### 4. **循环输出**（`<% for (let i = 0; i < items.length; i++) { %>`）

```ejs
<% for (let i = 0; i < items.length; i++) { %>
  <li><%= items[i] %></li>
<% } %>
```

### 5. **输出控制语句**（`<% if, else, switch, for, while, etc.`**）

除了简单的输出，还支持条件判断、循环等常见控制流语法，例如：

```ejs
<% if (user.isLoggedIn) { %>
  <p>Hello, <%= user.name %>!</p>
<% } else { %>
  <p>Please log in.</p>
<% } %>
```

### 6. **插入注释**（`<%# %>`）

用于插入注释：

```ejs
<%# This is a comment %>
```

### 总结

这些语法帮助在 EJS 模板中嵌入动态内容、控制逻辑和条件判断。




`querySelectorAll()` 是一种用来 **获取多个匹配元素** 的方法，它可以根据 CSS 选择器来选择页面中的多个元素。这个方法返回的是一个 **NodeList**，包含所有符合指定选择器的元素。

`querySelectorAll()` 并不局限于获取 `class` 属性的元素，它可以使用任何有效的 CSS 选择器来选择元素，包括 `id`、`class`、标签名称、属性等。

### 基本语法
```javascript
document.querySelectorAll(selector);
```
- `selector`：一个字符串，表示 CSS 选择器，可以是 `id`、`class`、标签名等。

### 示例
1. **获取具有某个 class 的所有元素：**
   ```javascript
   const elements = document.querySelectorAll('.my-class');
   console.log(elements);  // 返回所有 class 为 'my-class' 的元素，类型是 NodeList
   ```

2. **获取具有某个 id 的元素：**
   ```javascript
   const element = document.querySelectorAll('#my-id');
   console.log(element);  // 返回 id 为 'my-id' 的元素，虽然只会返回一个元素，仍然是一个 NodeList
   ```

3. **获取所有的 `<div>` 元素：**
   ```javascript
   const divs = document.querySelectorAll('div');
   console.log(divs);  // 返回所有 <div> 元素，类型是 NodeList
   ```

4. **选择器可以组合使用：**
   ```javascript
   const items = document.querySelectorAll('div.my-class');
   console.log(items);  // 返回所有 class 为 'my-class' 的 <div> 元素
   ```

### 返回结果：`NodeList`
`querySelectorAll()` 返回的是一个 **NodeList** 对象，它与数组有一些相似之处，但也有不同。`NodeList` 是一个类数组对象，可以通过索引访问其中的元素，但是不能直接使用数组的方法（如 `map()`、`forEach()`）直到在现代浏览器中可以使用。

#### 例如：
```javascript
const nodes = document.querySelectorAll('.my-class');
console.log(nodes[0]);  // 获取第一个匹配的元素
```

### 迭代 `NodeList`
虽然 `NodeList` 是类数组，但它并不具备所有数组方法。如果要使用 `forEach()` 等数组方法来迭代，可以直接调用 `forEach`（在现代浏览器中支持）：

```javascript
document.querySelectorAll('.my-class').forEach(element => {
    console.log(element);  // 输出每一个匹配的元素
});
```

如果你的环境不支持 `forEach`，可以使用 `Array.from()` 或展开运算符将 `NodeList` 转换为数组：

```javascript
const nodesArray = Array.from(document.querySelectorAll('.my-class'));
nodesArray.forEach(element => {
    console.log(element);
});
```

### 总结
- `querySelectorAll()` 并不限于获取 `class` 元素，它可以使用任何 CSS 选择器。
- 返回的是一个 **NodeList**，你可以通过索引访问元素，并在现代浏览器中使用 `forEach` 进行迭代。
- 如果需要对返回的 `NodeList` 进行更复杂的操作，可以将其转换为数组。

如果有其他问题，欢迎继续提问！
from PIL import Image

# 打开图像文件
image = Image.open("123.jpg")
image = image.convert("RGBA")

# 获取每个像素的颜色值
data = image.getdata()

# 创建新的图像数据列表
new_data = []
for item in data:
    # 如果像素是白色，改为黑色
    if item[0] in range(200, 256) and item[1] in range(200, 256) and item[2] in range(200, 256):
        new_data.append((0, 0, 0, item[3]))  # 黑色
    else:
        new_data.append(item)

# 将修改后的数据应用到图像
image.putdata(new_data)

# 保存新图像
image.save("output.jpg")

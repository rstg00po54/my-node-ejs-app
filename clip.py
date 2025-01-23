from PIL import Image

# 打开图片
image_path = "万圣节.jpg"  # 替换为你的图片路径
image = Image.open(image_path)
# 获取图片尺寸
width, height = image.size

# 打印尺寸
print(f"图片尺寸: 宽度={width}, 高度={height}")
top = 650
# 裁剪区域 (左, 上, 右, 下)
crop_area = (0, top, 1125, top+1125)

# 裁剪图片
cropped_image = image.crop(crop_area)
# 如果图片是 RGBA 模式，转换为 RGB 模式
if cropped_image.mode == "RGBA":
    cropped_image = cropped_image.convert("RGB")
# 保存裁剪后的图片
cropped_image.save("cropped_image.jpg")

# 显示裁剪后的图片
# cropped_image.show()

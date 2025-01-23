from PIL import Image, ImageDraw

def add_grid_to_image(image_path, output_path, grid_size=20, grid_color=(0, 0, 0, 128)):
    """
    在图片上添加网格。

    :param image_path: 输入图片路径
    :param output_path: 输出图片路径
    :param grid_size: 网格大小（像素）
    :param grid_color: 网格颜色，默认为半透明黑色 (RGBA 格式)
    """
    # 打开图片
    img = Image.open(image_path).convert("RGBA")
    width, height = img.size

    # 创建一个透明图层用于绘制网格
    overlay = Image.new("RGBA", (width, height), (255, 255, 255, 0))
    draw = ImageDraw.Draw(overlay)
    grid_size = int(width/4)
    
    # 绘制水平线
    for y in range(0, height, grid_size):
        draw.line([(0, y), (width, y)], fill=grid_color, width=3)

    # 绘制垂直线
    for x in range(0, width, grid_size):
        draw.line([(x, 0), (x, height)], fill=grid_color, width=3)

    # 将网格图层叠加到原始图片
    img_with_grid = Image.alpha_composite(img, overlay)

    # 保存结果
    img_with_grid.save(output_path)
    print(f"添加网格后的图片已保存到: {output_path}")

# 示例使用
image_path = "cat2.jpg"  # 输入图片路径
output_path = "cat2.png"  # 输出图片路径
add_grid_to_image(image_path, output_path, grid_size=50, grid_color=(255, 0, 0, 128))

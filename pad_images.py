from PIL import Image

def pad_image(input_path, output_path):
    img = Image.open(input_path)
    # The image is 1024x1024. We want 1920x1080.
    target_width, target_height = 1920, 1080
    
    # Get color from the top left corner to use as background
    bg_color = img.getpixel((10, 10))
    
    # Create new image with that background color
    new_img = Image.new('RGB', (target_width, target_height), bg_color)
    
    # Calculate position to paste the original image
    paste_x = (target_width - img.width) // 2
    paste_y = (target_height - img.height) // 2
    
    # Paste original image
    new_img.paste(img, (paste_x, paste_y))
    
    # Save the result
    new_img.save(output_path)
    print(f"Saved {output_path}")

pad_image('/Users/shakkhor666/.gemini/antigravity-ide/brain/74801716-6605-4262-bc96-b98b89312e85/ghost_mannequin_wide_before_1780528605216.png', '/Users/shakkhor666/Antigravity/blackfoxdigitalv2/public/ghost-mannequin-169-before.png')
pad_image('/Users/shakkhor666/.gemini/antigravity-ide/brain/74801716-6605-4262-bc96-b98b89312e85/ghost_mannequin_wide_after_1780528661766.png', '/Users/shakkhor666/Antigravity/blackfoxdigitalv2/public/ghost-mannequin-169-after.png')


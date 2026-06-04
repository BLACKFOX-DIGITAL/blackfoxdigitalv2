from PIL import Image, ImageFilter

def fix_image(in_path, out_path):
    img = Image.open(in_path).convert("RGB")
    
    # Target dimensions
    bg_w, bg_h = 1920, 860
    
    # Scale image to match height
    aspect = img.width / img.height
    new_h = bg_h
    new_w = int(new_h * aspect)
    img_resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Create background by stretching and blurring heavily
    bg = img.resize((bg_w, bg_h), Image.Resampling.LANCZOS)
    bg = bg.filter(ImageFilter.GaussianBlur(radius=80))
    
    # Paste resized image in the center
    paste_x = (bg_w - new_w) // 2
    paste_y = (bg_h - new_h) // 2
    
    bg.paste(img_resized, (paste_x, paste_y))
    bg.save(out_path)
    print(f"Saved {out_path}")

fix_image('public/image-masking-hair-before.webp', 'public/hero-masking-before-wide.png')
fix_image('public/image-masking-hair-after.webp', 'public/hero-masking-after-wide.png')

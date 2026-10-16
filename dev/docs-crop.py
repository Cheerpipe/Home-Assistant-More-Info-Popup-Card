# Crops documentation screenshots to the popup surface (plus a small margin).
# usage: python3 dev/docs-crop.py docs/images 800 "id|screenshot|left,top,right,bottom,viewport_width[,ratio]" ...
# The rect is the one returned by __doc.rect() (CSS pixels); the ratio between
# CSS pixels and screenshot pixels is detected unless given.
import sys
from PIL import Image
out, frame_w = sys.argv[1], float(sys.argv[2])
for spec in sys.argv[3:]:
    ident, path, rect = spec.split("|")
    values = list(map(float, rect.split(",")))
    left, top, right, bottom, vw = values[:5]
    img = Image.open(path).convert("RGB")
    if len(values) > 5:
        ratio = values[5]
    else:
        # The emulated viewport may be scaled down inside the frame: measure
        # its rendered width on a middle row (the frame margin is uniform).
        y = img.height // 2
        edge = img.getpixel((img.width - 1, y))
        x = img.width - 1
        while x > 0 and sum(abs(a - b) for a, b in zip(img.getpixel((x, y)), edge)) < 12:
            x -= 1
        # A white margin only exists when the viewport is scaled down (the
        # dialog scrim behind popups is gray).
        content = x + 1 if min(edge) > 240 and x < img.width - 4 else img.width
        ratio = content / vw
    m = 14
    box = (max(0, int((left - m) * ratio)), max(0, int((top - m) * ratio)),
           min(img.width, int((right + m) * ratio)), min(img.height, int((bottom + m) * ratio)))
    img.crop(box).save(f"{out}/{ident}.png", optimize=True)
    print(ident, box)

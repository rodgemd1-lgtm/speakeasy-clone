import sys
from PIL import Image, ImageDraw, ImageFont
import math

# ─── Config ───
regions = [
    ("HEADER_NAV", 0, 180),
    ("HERO_SECTION", 180, 900),
    ("SERVICES_CARDS", 900, 2400),
    ("GALLERY", 2400, 4000),
    ("FAQ", 4000, 5200),
    ("DRIVING_DIRECTIONS", 5200, 6200),
    ("FOOTER", 6200, 8200),
]

def analyze(img1_path, img2_path, output_heatmap, output_report):
    im1 = Image.open(img1_path).convert("RGB")
    im2 = Image.open(img2_path).convert("RGB")

    # Resize clone if wider
    if im2.width != im1.width:
        new_h = int(round(im2.height * (im1.width / im2.width)))
        im2 = im2.resize((im1.width, new_h), Image.LANCZOS)
        print(f"[*] Resized clone from {im2.size} → ({im1.width}, {new_h})")

    # Normalize to same height
    min_h = min(im1.height, im2.height)
    im1 = im1.crop((0, 0, im1.width, min_h))
    im2 = im2.crop((0, 0, im1.width, min_h))

    w, h = im1.size
    print(f"[*] Comparing {w}x{h}")

    # Diff pixel by pixel
    diff_pixels = 0
    total_diff = 0
    region_stats = {name: {"diff": 0, "total": 0} for name, _, _ in regions}

    buf1 = im1.load()
    buf2 = im2.load()

    for y in range(h):
        for x in range(w):
            r1, g1, b1 = buf1[x, y]
            r2, g2, b2 = buf2[x, y]
            d = ((r2-r1)**2 + (g2-g1)**2 + (b2-b1)**2) ** 0.5
            total_diff += d
            if d > 10:
                diff_pixels += 1
            # Region tracking
            for name, ry0, ry1 in regions:
                if ry0 <= y < ry1:
                    region_stats[name]["total"] += 1
                    if d > 10:
                        region_stats[name]["diff"] += 1

    total_px = w * h
    mean_diff = total_diff / total_px
    pct_diff = (diff_pixels / total_px) * 100
    print(f"[*] Mean color distance: {mean_diff:.2f}")
    print(f"[*] Pixels >10 away: {diff_pixels} / {total_px} ({pct_diff:.2f}%)")

    # Region analysis
    print(f"\n[REGION ANALYSIS]\n{'Region':<25} {'Match%':>8} {'Diff Pixels':>12}")
    print("-" * 50)
    for name, ry0, ry1 in regions:
        stats = region_stats[name]
        if stats["total"] > 0:
            match = 100 - (stats["diff"] / stats["total"] * 100)
            print(f"{name:<25} {match:>7.1f}% {stats['diff']:>12,}")

    # Heatmap
    heat = Image.new("RGB", (w, min(5000, h)), (0,0,0))
    draw = ImageDraw.Draw(heat)
    heat_h = min(h, 5000)
    for y in range(heat_h):
        for x in range(0, w, 2):   # Skip every other x for speed
            r1, g1, b1 = buf1[x, y]
            r2, g2, b2 = buf2[x, y]
            d = ((r2-r1)**2 + (g2-g1)**2 + (b2-b1)**2) ** 0.5
            d = min(255, int(d * 4))
            if d > 40:
                draw.point((x, y), fill=(d, d//2, 0))
    heat.save(output_heatmap)
    print(f"[*] Heatmap: {output_heatmap}")

    # Side-by-side composite (downscaled)
    preview = Image.new("RGB", (3200, min(h, 5000)), (30,30,30))
    thumb_w = 1500
    thumb1 = im1.resize((thumb_w, int(h * thumb_w / w)), Image.LANCZOS).crop((0,0,thumb_w,min(h,5000)))
    thumb2 = im2.resize((thumb_w, int(h * thumb_w / w)), Image.LANCZOS).crop((0,0,thumb_w,min(h,5000)))
    preview.paste(thumb1, (50, 0))
    preview.paste(thumb2, (thumb_w + 100, 0))
    preview.save(output_report)
    print(f"[*] Side-by-side: {output_report}")

if __name__ == "__main__":
    analyze(
        sys.argv[1], sys.argv[2],
        sys.argv[3], sys.argv[4]
    )

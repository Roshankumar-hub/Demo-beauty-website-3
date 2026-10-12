#!/usr/bin/env python3
"""
render_logo_png.py
==================
Renders the logo MARK (no wordmark) to a PNG using only the Python standard
library — no Pillow, no cairo, no installs.

Output: 04-brand-and-sales/logo-mark-512.png   (512 x 512, ready for an
        Instagram / WhatsApp Business profile picture)

It draws the same geometry as logo-mark.svg:
  cream background, deep-rose wedding ring (lens), deep-rose speech bubble
  with a tail, cream inner ring, and a gold "unread notification" dot.

Anti-aliasing is done by rendering 3x and averaging (supersampling).

Run from the project root:  python3 08-automation/python/render_logo_png.py
"""

import math
import os
import struct
import zlib

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
OUT = os.path.join(ROOT, "04-brand-and-sales", "logo-mark-512.png")

SIZE = 512
SS = 3                      # supersampling factor
C = SIZE / 176.0            # canvas is 176 x 176 design units (matches the SVG)

CREAM = (251, 247, 244)
ROSE = (124, 45, 74)
GOLD = (201, 154, 75)


# ---------------------------------------------------------------- geometry ---
def in_circle(x, y, cx, cy, r):
    return (x - cx) ** 2 + (y - cy) ** 2 <= r * r


def in_annulus(x, y, cx, cy, r_inner, r_outer):
    d2 = (x - cx) ** 2 + (y - cy) ** 2
    return r_inner ** 2 <= d2 <= r_outer ** 2


def in_rounded_rect(x, y, x0, y0, x1, y1, r):
    if not (x0 <= x <= x1 and y0 <= y <= y1):
        return False
    cx = min(max(x, x0 + r), x1 - r)
    cy = min(max(y, y0 + r), y1 - r)
    return (x - cx) ** 2 + (y - cy) ** 2 <= r * r


def in_triangle(px, py, a, b, c):
    def sign(p1, p2, p3):
        return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1])
    d1, d2, d3 = sign((px, py), a, b), sign((px, py), b, c), sign((px, py), c, a)
    has_neg = (d1 < 0) or (d2 < 0) or (d3 < 0)
    has_pos = (d1 > 0) or (d2 > 0) or (d3 > 0)
    return not (has_neg and has_pos)


def colour_at(x, y):
    """Design-space point (0..176). Painter's algorithm, topmost shape wins."""
    # gold notification dot: cream halo then gold core
    if in_circle(x, y, 136, 46, 14):
        if in_circle(x, y, 136, 46, 10):
            return GOLD
        return CREAM
    # cream inner ring (wedding band inside the bubble)
    if in_annulus(x, y, 84, 81, 12, 18):
        return CREAM
    # bubble + tail (rose)
    if in_rounded_rect(x, y, 48, 50, 120, 112, 16):
        return ROSE
    if in_triangle(x, y, (62, 110), (56, 130), (92, 110)):
        return ROSE
    # rose outer ring (wedding ring / lens)
    if in_annulus(x, y, 88, 90, 54.5, 61.5):
        return ROSE
    return CREAM


# ------------------------------------------------------------------- render ---
def render():
    hi = SIZE * SS
    # accumulate per output pixel
    out = bytearray()
    buf = bytearray(SIZE * SIZE * 3)
    for oy in range(SIZE):
        for ox in range(SIZE):
            r = g = b = 0
            for sy in range(SS):
                for sx in range(SS):
                    # map supersample point -> design units
                    dx = (ox + (sx + 0.5) / SS) / C
                    dy = (oy + (sy + 0.5) / SS) / C
                    cr, cg, cb = colour_at(dx, dy)
                    r += cr
                    g += cg
                    b += cb
            n = SS * SS
            i = (oy * SIZE + ox) * 3
            buf[i] = r // n
            buf[i + 1] = g // n
            buf[i + 2] = b // n

    # PNG encode (filter type 0 per scanline)
    raw = bytearray()
    for y in range(SIZE):
        raw.append(0)
        raw += buf[y * SIZE * 3:(y + 1) * SIZE * 3]

    def chunk(tag, data):
        c = struct.pack(">I", len(data)) + tag + data
        return c + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)

    header = struct.pack(">IIBBBBB", SIZE, SIZE, 8, 2, 0, 0, 0)
    png = (b"\x89PNG\r\n\x1a\n"
           + chunk(b"IHDR", header)
           + chunk(b"IDAT", zlib.compress(bytes(raw), 9))
           + chunk(b"IEND", b""))
    return png


if __name__ == "__main__":
    data = render()
    with open(OUT, "wb") as f:
        f.write(data)
    print(f"wrote {os.path.relpath(OUT, ROOT)}  ({len(data) / 1024:.1f} KB)")

import os
import re

components_dir = "components"

for filename in os.listdir(components_dir):
    if not filename.endswith(".jsx"):
        continue
    
    # We already rewrote Shell.jsx and don't want to break App or tweaking which we won't use
    if filename in ["Shell.jsx", "App.jsx", "tweaks-panel.jsx"]:
        continue

    filepath = os.path.join(components_dir, filename)
    with open(filepath, "r") as f:
        content = f.read()

    # Imports to add
    imports = []
    imports.append('"use client";')
    imports.append('import React, { useEffect, useState, useRef } from "react";')
    imports.append('import { useBFRouter } from "./utils";')
    imports.append('import { BF } from "./data";')
    
    if "BeforeAfter" in content or "BA =" in content or "<BA " in content or "<BeforeAfter " in content:
        imports.append('import { BeforeAfter, BA } from "./BeforeAfter";')
    if "Icon" in content or "<Icon " in content:
        imports.append('import { Icon } from "./Icons";')
    if "RotatingWord" in content or "<RotatingWord " in content:
        imports.append('import { RotatingWord } from "./HeroSlider";')
    if "LEGAL" in content:
        imports.append('import { LEGAL } from "./legal-content";')

    # Add exports to function definitions
    content = re.sub(r'^function\s+([A-Z][a-zA-Z0-9_]*)', r'export function \1', content, flags=re.MULTILINE)
    
    # Replace window access
    content = re.sub(r'const\s+(BF|BA|Icon|RotatingWord)\s*=\s*window\.[a-zA-Z]+;', '', content)
    content = re.sub(r'window\.BF\.', 'BF.', content)
    content = re.sub(r'window\.BF', 'BF', content)
    content = re.sub(r'window\.Icon', 'Icon', content)
    content = re.sub(r'window\.BeforeAfter', 'BeforeAfter', content)
    content = re.sub(r'window\.RotatingWord', 'RotatingWord', content)
    content = re.sub(r'window\.LEGAL', 'LEGAL', content)
    content = re.sub(r'window\.LEGAL\.', 'LEGAL.', content)
    content = re.sub(r'Object\.assign\(window,\s*\{.*?\}\);', '', content)
    content = re.sub(r'window\.[a-zA-Z]+\s*=\s*[a-zA-Z]+;', '', content)

    # In every component that accepts `go`, remove `go` from props and use `const { go } = useBFRouter();`
    # E.g. `export function Home({ go }) {` -> `export function Home() { const { go } = useBFRouter();`
    # Or `export function ServicePage({ go, serviceId }) {` -> `export function ServicePage({ serviceId }) { const { go } = useBFRouter();`
    
    def replacer(match):
        func_decl = match.group(0)
        # remove go from destructured props
        func_decl = re.sub(r'\{\s*go\s*\}', '()', func_decl)
        func_decl = re.sub(r'\{\s*go\s*,\s*', '{ ', func_decl)
        func_decl = re.sub(r',\s*go\s*', '', func_decl)
        return func_decl + '\n  const { go } = useBFRouter();\n'

    content = re.sub(r'export function\s+[A-Z][a-zA-Z0-9_]*\s*\(\s*(\{.*?\}|go.*?)\s*\)\s*\{', replacer, content)
    
    # Some components might not have go in props but use it, but typically they take it as a prop.
    
    # Write back
    final_content = "\n".join(imports) + "\n\n" + content
    with open(filepath, "w") as f:
        f.write(final_content)

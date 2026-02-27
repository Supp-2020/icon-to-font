import svgtofont from 'svgtofont';
import path from 'path';
import fs from 'fs';

const rootDir = process.cwd();

const ICONS_DIR = path.resolve(rootDir, 'icons');
const DIST_DIR = path.resolve(rootDir, 'dist');
const FONT_NAME = 'icons';

async function build() {
  await svgtofont({
    src: ICONS_DIR,
    dist: DIST_DIR,
    fontName: FONT_NAME,
    classNamePrefix: 'icon',
    css: true,
    outSVGPath: false,
    generateInfoData: false,
    website: null,
    emptyDist: true,
    startUnicode: 0xe001,
  });

  const allowed = ['.ttf', '.woff', '.woff2', '.css'];

  fs.readdirSync(DIST_DIR).forEach((file) => {
    if (!allowed.some((ext) => file.endsWith(ext))) {
      fs.unlinkSync(path.join(DIST_DIR, file));
    }
  });

  console.log('✅ Icons built successfully.');
}

build().catch(console.error);
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('public/explorations');
const entries = await fs.readdir(dir, { withFileTypes: true });
const gifs = entries
  .filter(
    (entry) =>
      entry.isFile() &&
      entry.name.toLowerCase().endsWith('.gif') &&
      !entry.name.toLowerCase().endsWith('.opt.gif') &&
      !entry.name.toLowerCase().includes('.test.')
  )
  .map((entry) => path.join(dir, entry.name));

for (const file of gifs) {
  const parsed = path.parse(file);
  const outputFile = path.join(parsed.dir, `${parsed.name}.opt.gif`);
  const inputStat = await fs.stat(file);
  const img = sharp(file, { animated: true, limitInputPixels: false });
  const meta = await img.metadata();
  const width = Math.min(meta.width ?? 1280, 1280);

  await img
    .resize({ width, withoutEnlargement: true })
    .gif({
      colours: 256,
      dither: 0,
      effort: 10,
      reoptimise: true
    })
    .toFile(outputFile);

  const outputStat = await fs.stat(outputFile);
  console.log(`Compressed copy: ${path.basename(file)} ${Math.round(inputStat.size / 1024)}KB -> ${Math.round(outputStat.size / 1024)}KB (${path.basename(outputFile)})`);
}

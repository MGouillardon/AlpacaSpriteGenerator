export function useSpriteDownloader(IMAGES_PATH, sprite) {
  const loadImage = async (part) => {
    const img = new Image();
    img.src = `${IMAGES_PATH}${part}/${sprite.value[part]}.png`;
    await new Promise(resolve => img.onload = resolve);
    return img;
  };

  const createCanvas = (width, height) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  };

  const drawImagesOnCanvas = (context, images) => {
    images.forEach(img => context.drawImage(img, 0, 0));
  };

  const createDownloadLink = (dataURL, fileName) => {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = dataURL;
    link.click();
  };

  const downloadSprite = async () => {
    const parts = ['backgrounds', 'leg', 'neck', 'nose', 'mouth', 'ears', 'hair', 'eyes', 'accessories'];
    const images = await Promise.all(parts.map(loadImage));

    const canvas = createCanvas(images[0].width, images[0].height);
    const context = canvas.getContext('2d');

    drawImagesOnCanvas(context, images);

    const dataURL = canvas.toDataURL('image/png');
    createDownloadLink(dataURL, 'alpaca.png');
  };

  return {
    downloadSprite,
  };
}

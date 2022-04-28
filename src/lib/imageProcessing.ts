import Compressor from 'compressorjs'


export function blobToImage(blob: Blob): Promise<HTMLImageElement> {
  return new Promise(resolve => {
    const url = URL.createObjectURL(blob)
    let img: HTMLImageElement = new Image()
    img.onload = function() {
      URL.revokeObjectURL(this.src)
      resolve(this);
    }
    img.src = url;
  });
}

export function compress(blob, quality, size): Promise<Blob> {
  return new Promise((resolve, reject) => {
    new Compressor(blob, {
      quality: quality,
      maxWidth: size,
      maxHeight: size,
      async success(result) { return resolve(result); },
      error(error) { reject(error); }
    });
  });
}

export function canvasToBlob(canvas): Promise<Blob> {
  return new Promise(resolve => {
    canvas.toBlob(resolve);
  });
}
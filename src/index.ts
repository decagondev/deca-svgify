import { ImageData } from './types';

export interface SVGOptions {
  backgroundColor?: string;
  viewBox?: string;
  style?: Record<string, string>;
}

export function imageToSvg(imageData: ImageData, options: SVGOptions = {}) {
    const { width, height, data } = imageData;
    const { backgroundColor = 'transparent', viewBox, style = {} } = options;
  
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
  
    if (viewBox) {
      svg.setAttribute('viewBox', viewBox);
    }
  
    Object.entries(style).forEach(([prop, value]) => {
      svg.style[prop as any] = value;
    });
  
    if (backgroundColor !== 'transparent') {
      const background = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      background.setAttribute('width', width.toString());
      background.setAttribute('height', height.toString());
      background.setAttribute('fill', backgroundColor);
      svg.appendChild(background);
    }
  
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = (y * width + x) * 4;
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', x.toString());
        rect.setAttribute('y', y.toString());
        rect.setAttribute('width', '1');
        rect.setAttribute('height', '1');
        rect.setAttribute(
          'fill',
          `rgba(${data[index]}, ${data[index + 1]}, ${data[index + 2]}, ${data[index + 3] / 255})`
        );
        svg.appendChild(rect);
      }
    }
  
    return svg;
}
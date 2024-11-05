# Deca SVGify

A TypeScript-based NPM package that converts image data (such as canvas, PNG, or JPEG) into scalable vector graphics (SVG).

## Installation

```
npm install deca-svgify
```

## Usage

```typescript
import { imageToSvg } from 'deca-svgify';

const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
ctx.fillRect(0, 0, 100, 100);
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

const svgElement = imageToSvg(imageData, {
  backgroundColor: '#f0f0f0',
  viewBox: '0 0 100 100',
  style: {
    border: '1px solid #ccc'
  }
});

document.body.appendChild(svgElement);
```

## API

### `imageToSvg(imageData: ImageData, options?: SVGOptions)`

Converts the provided `ImageData` object to an `SVGElement`.

#### Parameters

- `imageData` (`ImageData`): An object containing the image data, including width, height, and pixel data.
- `options` (`SVGOptions`, optional): An object with the following optional properties:
  - `backgroundColor`: A CSS color value to set as the SVG background.
  - `viewBox`: A string representing the viewBox attribute of the SVG element.
  - `style`: An object of CSS styles to apply to the SVG element.

#### Returns

An `SVGElement` representing the converted image.

## Motivation

Vectorizing images, or converting them to the SVG format, allows you to scale the graphics without losing quality. This is particularly useful for elements like logos, icons, or illustrations that need to be displayed at different sizes in your web application.

## Benefits

- **Scalable Graphics**: SVG images are resolution-independent, meaning they can be scaled up or down without losing quality.
- **Customizable Appearance**: The SVG output can be easily customized with styles, background colors, and other properties.
- **Lightweight and Efficient**: SVG files are generally smaller in size than raster image formats like PNG or JPEG, improving load times and performance.
- **Accessibility**: SVG images are easily accessible and can be manipulated with CSS and JavaScript.

## Example Use Cases

- **Web Applications**: Use this library to convert canvas, PNG, or JPEG images to SVG for use in your web application's UI.
- **Icon Libraries**: Generate SVG icons from raster image sources and distribute them as a reusable library.
- **Data Visualization**: Convert chart or graph data into SVG for scalable, resolution-independent visualization.
- **Logo Design**: Create SVG logos that can be easily resized and integrated into your branding.

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open a GitHub issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
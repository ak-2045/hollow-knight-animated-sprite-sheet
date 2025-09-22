# Animated Sprite Sheet - Hollow Knight

This mini project demonstrates an animated sprite sheet of Hollow Knight using HTML5 Canvas and JavaScript. Multiple actions such as walking, running, dashing, crawling, transforming, jumping, reading, falling, and blushing are animated on separate canvases.

**Live Demo:** [View Here](https://ak-2045.github.io/hollow-knight-animated-sprite-sheet)

## Features

- Smooth sprite animations for different actions
- Multiple canvases to display different actions simultaneously
- Zoomed and centered sprites for better visibility
- Simple, clean implementation using vanilla JavaScript

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ak-2045/hollow-knight-animated-sprite-sheet.git
````

2. Open `index.html` in your browser.

3. Ensure the `assets` folder containing `hollow_knight.png` is in the project directory.

## How It Works

* Each canvas corresponds to one action.
* JavaScript objects define animation parameters like frame index, frames per second, total frames, and sprite sheet position.
* `drawSprite()` renders the current frame of the animation.
* `requestAnimationFrame()` is used to create smooth animations.
* `drawBackground()` fills each canvas with a faint white background.

## Animation Actions

* Walking
* Running
* Dashing
* Crawling
* Transforming
* Jumping
* Reading
* Falling
* Blushing

## Code Structure

* `index.html` — Contains 9 canvas elements for different animations.
* `script.js` — Handles sprite loading, drawing, and animation logic.
* `styles.css` — Contains CSS for layout, canvas spacing, and general styling.
* `assets/hollow_knight.png` — Sprite sheet image used for animations.

## License

This project is for educational purposes. All assets are used under fair use.

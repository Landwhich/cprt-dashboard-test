"use client"
import React, { useEffect, useRef } from 'react';
import { Joystick } from '@server/joystick/joystick';

const JoystickCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Reference to the canvas element
  const joysticksRef = useRef<Joystick[]>([]); // To store joystick instances

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas size
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    // Create Joystick instances and attach to the canvas
    const joystick = new Joystick(width / 1.5, height / 2, width / 6, width / 12, context);
    joysticksRef.current.push(joystick);

    // Attach event listeners for dragging
    joystick.attachEventListeners(canvas);

    // Animation loop for rendering
    const fps = 120;
    const interval = setInterval(() => {
      context.clearRect(0, 0, width, height); // Clear the canvas
      joystick.update(); // Update joystick state
      joystick.draw(); // Draw joystick
    }, 1000 / fps);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []); // Only run on mount

  return <canvas ref={canvasRef} />;
};

export default JoystickCanvas;
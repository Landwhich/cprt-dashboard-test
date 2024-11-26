"use client"
import React, { useEffect, useRef } from 'react';
import { Joystick } from '@server/joystick/joystick';

const JoystickCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const joysticksRef = useRef<Joystick[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const joystick = new Joystick(width / 1.5, height / 2, width / 6, width / 12);
    joysticksRef.current.push(joystick);

    // Attach event listeners for dragging
    joystick.listener();

    // Animation loop for rendering
    const fps = 120;
    const interval = setInterval(() => {
      context.clearRect(0, 0, width, height); // Clear the canvas
      joystick.update(context); // Update joystick state
      joystick.draw(context); // Draw joystick
    }, 1000 / fps);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []); // Only run on mount

  return <canvas ref={canvasRef} />;
};

export default JoystickCanvas;
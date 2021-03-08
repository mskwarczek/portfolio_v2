import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

import useWindowDimensions from 'hooks/useWindowDimensions';

interface ICanvasProps {
  fps: number;
  starColor: string;
  backgroundColor: string;
}

const Canvas = ({ fps, starColor, backgroundColor }: ICanvasProps) => {
  interface IPoint {
    x: number;
    y: number;
  }

  interface IStar extends IPoint {
    r: number;
    vx: number;
    vy: number;
  }

  const { width, height } = useWindowDimensions();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const starsRef = useRef<IStar[]>([]);
  const mouseRef = useRef<IPoint>({ x: 0, y: 0 });

  const getStarsAmount = useCallback(() => {
    if (width * height < 600000) return 80;
    else if (width * height < 1100000) return 140;
    else if (width * height < 1600000) return 200;
    else return 350;
  }, [height, width]);

  const generateStars = useCallback(() => {
    let stars: IStar[] = [];
    let starsAmount = getStarsAmount();
    for (let i = 0; i < starsAmount; i++) {
      stars.push({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
        r: Math.floor(Math.random() * 1 + 1),
      });
    }
    starsRef.current = stars;
  }, [getStarsAmount, height, width]);

  const getDistance = (point1: IPoint, point2: IPoint) => {
    let xs = 0;
    let ys = 0;
    xs = point2.x - point1.x;
    xs = xs * xs;
    ys = point2.y - point1.y;
    ys = ys * ys;
    return Math.floor(Math.sqrt(xs + ys));
  };

  const updateStarsPositions = () => {
    starsRef.current.forEach((star) => {
      star.x += star.vx / fps;
      star.y += star.vy / fps;

      if (star.x < 0 || star.x > width) star.vx = -star.vx;
      if (star.y < 0 || star.y > height) star.vy = -star.vy;
      return star;
    });
  };

  const updateMousePosition = (e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const draw = (ctx: CanvasRenderingContext2D) => {
    if (ctx) {
      ctx.globalCompositeOperation = 'xor';
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
      starsRef.current.forEach((star) => {
        ctx.fillStyle = starColor;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.floor(2 * Math.PI));
        ctx.fill();
      });

      ctx.beginPath();
      starsRef.current.forEach((star) => {
        ctx.moveTo(star.x, star.y);
        if (getDistance(mouseRef.current, star) < 150)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
        starsRef.current.forEach((star2) => {
          if (getDistance(star, star2) < 150) {
            ctx.lineTo(star2.x, star2.y);
          }
        });
      });
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = starColor;
      ctx.stroke();
    }
  };

  const renderFrame = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    updateStarsPositions();
    if (ctx !== null) draw(ctx);
  };

  const tick = () => {
    if (!canvasRef.current) return;
    renderFrame();
    animationIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    generateStars();
    animationIdRef.current = requestAnimationFrame(tick);
    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    canvasRef.current?.addEventListener('mousemove', (e: MouseEvent) => {
      updateMousePosition(e);
    });
    return () =>
      // eslint-disable-next-line react-hooks/exhaustive-deps
      canvasRef.current?.removeEventListener('mousemove', (e: MouseEvent) => {
        updateMousePosition(e);
      });
  }, []);

  return <SCanvas ref={canvasRef} width={width} height={height} />;
};

export default Canvas;

const SCanvas = styled.canvas`
  position: absolute;
  background-image: radial-gradient(
    circle,
    ${(props) => props.theme.color.secondary} 0,
    ${(props) => props.theme.color.inactive} 30%,
    ${(props) => props.theme.color.action} 50%
  );
`;

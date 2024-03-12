import { useEffect } from 'react';

interface State {
  fps: number;
  color: string;
  charset: string;
  size: number;
}

const BackgroundCanvas = () => {
  useEffect(() => {
    const state: State = {
      fps: 20,
      color: '#017600',
      charset: '0123456789ABCDEF∫∑∆π☼ᚠᛒᛋ☽ひろに木人风',
      size: 12
    };

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    let w: number,
      h: number,
      p: number[] = [];
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;

      p = Array(Math.ceil(w / state.size)).fill(0);
    };
    window.addEventListener('resize', resize);
    resize();

    const random = (items: string) => items[Math.floor(Math.random() * items.length)];

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,.05)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = state.color;

      ctx.font = state.size + 'px sans-serif';
      for (let i = 0; i < p.length; i++) {
        let v = p[i];
        ctx.fillText(random(state.charset), i * state.size, v);
        p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + state.size;
      }
    };

    let interval: NodeJS.Timer | number | undefined = setInterval(draw, 1000 / state.fps);
    
  }, []);

  return <canvas id="canvas" className="text-green-bg"></canvas>;
};

export { BackgroundCanvas };

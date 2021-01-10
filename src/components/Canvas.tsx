import React, {useEffect, useRef} from 'react';
import styles from "../styles/canvas.module.css";




type PropsComponentTypes = {
    draw: any
}

const Canvas = ({draw}: PropsComponentTypes) => {

    const canvasRef = useRef<any>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        let frameCount = 0;
        let animationFrameId: any;

        //Our draw came here
        const render = () => {
            frameCount++;
            draw(context, frameCount );
            animationFrameId = window.requestAnimationFrame(render)
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw]);
    return (
        <canvas className={styles.canvas} ref={canvasRef} />
    );
};


export default Canvas;

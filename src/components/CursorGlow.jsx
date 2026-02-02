import { useEffect, useRef } from 'react';

const CursorGlow = () => {
    const cursorRef = useRef(null);
    const cursorTrailRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const trail = cursorTrailRef.current;
        
        if (!cursor || !trail) return;

        let mouseX = 0;
        let mouseY = 0;
        let trailX = 0;
        let trailY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Immediate update for the main small cursor
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            cursor.style.opacity = '1';
        };

        const animateTrail = () => {
            // Smooth lerp for the trail
            trailX += (mouseX - trailX) * 0.15;
            trailY += (mouseY - trailY) * 0.15;
            
            trail.style.transform = `translate(${trailX}px, ${trailY}px)`;
            
            requestAnimationFrame(animateTrail);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const animationId = requestAnimationFrame(animateTrail);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
            {/* The Main Glow/Blob - Reddish Bluish Watery Effect */}
            <div 
                ref={cursorTrailRef}
                className="absolute w-[600px] h-[600px] -ml-[300px] -mt-[300px] rounded-full blur-[100px] opacity-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 will-change-transform mix-blend-multiply"
            />
            
            {/* Tiny sharper dot for precision (optional) */}
            {/* <div 
                ref={cursorRef}
                className="absolute w-4 h-4 -ml-2 -mt-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/20 opacity-0 transition-opacity duration-300 will-change-transform"
            /> */}
        </div>
    );
};

export default CursorGlow;

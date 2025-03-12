// boidsAnimation.js
export const initializeBoidsAnimation = (canvas, imageSrc, localError) => {
    const ctx = canvas.getContext("2d");
    let animationFrame;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const img = new Image();
    img.src = imageSrc;
  
    img.onload = () => {
      animate();
    };
  
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.95;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = "red";
      ctx.font = "40px Arial";
      ctx.fillText(`Errore: ${localError}`, canvas.width / 4, canvas.height / 2);
  
      animationFrame = requestAnimationFrame(animate);
    };
  
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
  
    window.addEventListener("resize", handleResize);
  
    // Cleanup function to stop animation and remove listeners
    const cleanup = () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  
    return cleanup;
  };
  
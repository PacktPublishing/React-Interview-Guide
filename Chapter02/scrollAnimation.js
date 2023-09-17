function handleScroll() { 
    const block = blockRef.current; 
    const { y } = block.getBoundingClientRect(); 
    const blockBackgroundColor = y <= 0 ? 'white' : 'black'; 

    setBackground(blockBackgroundColor); 
} 
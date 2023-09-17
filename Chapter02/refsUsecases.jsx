 //Text selection 
const hasInputText = inputRef.current.value.length > 0; 

if (hasInputText) { 
    inputRef.current.select(); 
} 

// Audio controls 
const playAudio = () => { 
    audioRef.current.play(); 
}; 

const pauseAudio = () => { 
    audioRef.current.pause(); 
}; 
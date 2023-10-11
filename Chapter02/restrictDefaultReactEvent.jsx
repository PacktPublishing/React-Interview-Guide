function Login() {	 

    function handleSubmit(e) { 
        e.preventDefault(); 
        console.log('You submitted login form.'); 
    }	 
    
    return (
        <form onsubmit="handleSubmit"> 
            <input type="text" name="name" /> 
            <input type="password" name="password" /> 
            <button type="submit">Login</button> 
        </form>
    )   
} 
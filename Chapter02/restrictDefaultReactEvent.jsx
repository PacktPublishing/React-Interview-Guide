function Login() {	 

    function handleSubmit(e) { 
        e.preventDefault(); 
        console.log('You submittedLogin form.'); 
    }	 
    
    return (
        <form onsubmit="handleSubmit"> 
            <input type="text" name="name" /> 
            <input type="password" name="password" /> 
            <button type="submit">Login</button> 
        </form>
    )   
} 
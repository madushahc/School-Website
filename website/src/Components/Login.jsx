import "../Modules/loging.css";

export default function Login(){
   
    return(
        <div>
            <div className="wrapper place-self-center">
         <div className="title">
            Login Form
         </div>
         <form action="#">
            <div className="field">
               <input type="text" required />
               <label>Email Address</label>
            </div>
            <div className="field">
               <input type="password" required />
               <label>Password</label>
            </div>
            <div className="content">
               <div className="checkbox">
                  <input type="checkbox" id="remember-me" />
                  <label for="remember-me">Remember me</label>
               </div>
               <div className="pass-link" >
                <a href="" onClick={message}>  Forgot password? </a>    
                           </div>
            </div>
            <div className="field">
               <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
               Not a member? <a href="Form.jsx">Signup now</a>
            </div>
         </form>
      </div>

        </div>
    );

}
const message =()=>{ alert("Contact with Your Administrater");}
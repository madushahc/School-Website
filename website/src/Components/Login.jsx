import "../Modules/loging.css";
const message =()=>{ alert("Contact with Your Administrater");}
export default function Login(){
   
    return(
        <div>
            <div class="wrapper">
         <div class="title">
            Login Form
         </div>
         <form action="#">
            <div class="field">
               <input type="text" required />
               <label>Email Address</label>
            </div>
            <div class="field">
               <input type="password" required />
               <label>Password</label>
            </div>
            <div class="content">
               <div class="checkbox">
                  <input type="checkbox" id="remember-me" />
                  <label for="remember-me">Remember me</label>
               </div>
               <div class="pass-link" >
                <a href="" onClick={message}>  Forgot password? </a>    
                           </div>
            </div>
            <div class="field">
               <input type="submit" value="Login" />
            </div>
            <div class="signup-link">
               Not a member? <a href="Form.jsx">Signup now</a>
            </div>
         </form>
      </div>

        </div>
    );
}
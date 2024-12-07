import '../Modules/form.css'


export default function Form(
){
    return (
        <div class="border">
        <div class="container">
        
        <div class="title">Registration</div>
        <div class="content">
          
          
            <div class="user-details">
              
              <div class="input-box">
                <span class="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required /> 
              </div>
              
              <div class="input-box">
                <span class="details">Guardian Full Name</span>
                <input type="text" placeholder="Enter your guardian full name" required />
              </div>
              
              <div class="input-box">
                <span class="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              
              <div class="input-box">
                <span class="details">Address</span>
                <input type="text" placeholder="Enter your adrees" required />
              </div>
              <div>
                <span >Stream </span>
                <div class="select">
                <select class="option" required >
                  <option defualt>- Select Your Stream -</option>
                  <option>Maths/Science</option>
                  <option>Commerce</option>
                  <option>Art</option>
                  <option>Technology</option>
                </select>
                </div>
              </div>
              
              <div class="input-box">
                <span class="details">NIC Number</span>
                <input type="text" placeholder="Enter your NIC number" required />
              </div>
            </div>
            
            <div class="input-box">
                <span class="details">Registration Date </span>

                <input type="date" class="date" placeholder="Enter your registration date" required />
              </div>
            </div>
            <div class="gender-details">
              
              <input type="radio" name="gender" id="dot-1" />
              <label for="dot-1" >
                  <span class="dot one"></span>
                  <span class="gender"> Male</span>
                </label>
                <lable class="padding">
              <input type="radio" name="gender" id="dot-2" />
              <label for="dot-2" >
                  <span class="dot two"></span>
                  <span class="gender"> Female</span>
                </label>
                </lable>
                <lable class="padding">
              <input type="radio" name="gender" id="dot-3" />
              
              <span class="gender-title"> Other Gender</span>
              </lable>
             
            </div>
            
            <div class="button">
              <input type="submit" value="Register" />
            </div>
          
        </div>
        </div>
    );
}




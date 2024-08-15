//your JS code here. If required.
const username=document.getElementById("username");
const password=document.getElementById("password")
const checkbox=document.getElementById("checkbox");
const submit=document.getElementById("submit");
const existingUserDiv = document.getElementById("existingUserDiv");
const form=document.getElementById("form");



submit.addEventListener("click",(e)=>{
   e.preventDefault();
  
    const usernamee = username.value;
        const passwordd= password.value;

        if (checkbox.checked) {
            // Save username and password in local storage
            localStorage.setItem("username", usernamee);
            localStorage.setItem("password", passwordd);
        } else {
            // Remove username and password from local storage
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
         username.textContent="";
         password.textContent="";
        alert(`Logged in as  ${usernamee}`);
 
        // Optionally, you could clear the form after submission
       checkbox.checked=false;
       const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");
        console.log(savedPassword,savedUsername);
        if (savedUsername && savedPassword) {
            // Create and display the "Login as existing user" button
            // console.log(savedPassword);
            const existingUserButton = document.createElement("button");
            existingUserButton.id = "existing";
            existingUserButton.textContent = "Login as existing user";
            existingUserDiv.appendChild(existingUserButton);
        
            // Add click event to the "Login as existing user" button
            existingUserButton.addEventListener("click", function () {
                alert(`Logged in as  ${savedUsername}`);
            });
        }
 
       
})

   

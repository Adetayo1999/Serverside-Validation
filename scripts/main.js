


const adminName = document.getElementById("name");
const username = document.getElementById("username");
const password = document.getElementById("password");
const passwordRepeat = document.getElementById("passwordrepeat");
const adminLogin = document.querySelector('form');



  adminLogin.addEventListener('submit' , (e) => {
      e.preventDefault();   
    if(adminName.value && username.value && password.value && passwordRepeat){
             

        if(password.value === passwordRepeat.value){
             
            fetch('http://localhost:4000/authorize' , {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name:adminName.value,
                    username:username.value,
                    password:password.value
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                    
                if(data.status == 200){
                     Swal.fire('Login Success', data.message , 'success');
                }
                else{
                    Swal.fire('Login Error', data.message , 'error');
                }
               
            })
            .catch(error => console.log(error.message))
        }
        else{
             
           Swal.fire('Oops...', 'Password Mismatch', 'error');
        }
    }else{
        Swal.fire('Invalid Submission', 'All inputs must be filled' , 'error');
    }    
  })

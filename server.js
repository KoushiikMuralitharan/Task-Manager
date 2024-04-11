    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("loginForm").addEventListener("submit", (e) =>{
           e.preventDefault();
            username = document.getElementById("email");
            password = document.getElementById("password");
           var fetching = new Promise((resolve, reject)=>{
            fetch('./Users.json')
            .then((response) => {
                if(!response.ok){
                    reject("Network error");
                }else{
                    resolve(response);
                }
                return response.json();
            })
            .then((data)=>{
                var arr = data.userData                     
                const user = arr.find((user) => user.email == username.value && user.password == password.value);
                    if(user){
                        //alert('Login successfull!');
                        window.location.href="http://127.0.0.1:3000/index.html"
                    }else{
                        //alert('Login failed');
                        window.location.href="http://127.0.0.1:3000/signup.html";
                    }
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
           })
            
            
        });
    });

import axois from 'axios';

/*export const login = async (email, password) => {
    
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ email, password });

    try {
         await axois.post("https://localhost:5001/api/ClientRegistrations", body, config)
         .then(res => {
            console.log(" tra working "+res.status)
             return res.status
            });
            alert(" login succes");
        
         
         
         
    } catch (error) {
        alert(" Check your Email or Password");
        console.log("catworking ");
        
    }
    

};
*/

export const ClientRegistration = async (ClientNIC, FirstName, LastName, Address, UserName,Email,MobileNo,Password,  ConfirmPassword) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ClientNIC, FirstName, LastName, Address, UserName,Email,MobileNo,Password,  ConfirmPassword});

    if (Password!= ConfirmPassword){
        alert("Password didn't Matched Try again..")
    }

  else {


        try {
            await axois.post("https://localhost:5001/api/ClientRegistrations", body, config);
            alert("Your Have Successfully Registered ");
            console.log("Client Registration is Successful")
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Client Registration is Unsuccessful");
            console.log(error);
            
        }




    }


   

};

export const VendorRegistration = async (CompanyName, CompanyCategory, TelephoneNo, UserName,Email, Password,  ConfirmPassword) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({CompanyName, CompanyCategory, TelephoneNo, UserName,Email, Password,  ConfirmPassword});

    if (Password!= ConfirmPassword){
        alert("Password didn't Matched Try again..")
    }

  else {


        try {
            await axois.post("https://localhost:5001/api/VendorRegistrations", body, config);
            alert("Your Have Successfully Registered ");
            console.log("Vendor Registration is Successful")
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Vendor Registration is Unsuccessful");
            console.log(error);
            
        }




    }


   

};
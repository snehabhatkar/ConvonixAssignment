	
	
function ValidationEvent() {
    //initialization
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;
	var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
	var  DescriptionWordCount = description.trim().split(/\s+/).length;
	
   //regular expression for email
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    // validations
    if (name != '' && email != '' && description != '' && day !='Day'  && month!='Month' && year!='Year' ) {
        if (name.length >= 5) {
            if (email.match(emailReg)) {
                if (document.getElementById("male").checked || document.getElementById("female").checked) {
                    if (DescriptionWordCount >= 10) {
                        return check();
                        alert("You have successfully registered...!!!");
                        return true;
                    }else {
                        alert("The Description must contain at least 10 words!");
						return false;
                    }
                }else {
                    alert("Please select gender.....!");
                    return false;
                }
            }else {
                alert("Invalid Email Address...!");
               return false;
            }
        }else {
            alert("Name must contain atleast 5 charachters");
            return false;
        }
    }else {
        alert("All fields are Mandetory...!");
        return false;
    }
}

//function to check DOB validation
function check()
{
	var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
	 if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) 
    {
        alert("Month " + month + " doesn't have 31 days!");
        return false;
    }
    else if (month == 2) 
         {
            var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
            if (day > 29 || (day == 29 && !isleap)) {
                alert("February " + year + " didnt't have " + day + " days! Please check your Date of Birth");
                return false;
            }
         else{
                alert("You have successfully registered...!!!");
                return true;
             }
         }
    else {
        alert("You have successfully registered...!!!");
        return true;
         }
}


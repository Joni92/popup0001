const cookieBox = document.querySelector('.wrapper'),
buttons = document.querySelectorAll('.button');

const executeCodes = () => {
    //if cookie contains OwnerName it will be return and below of this code will no run
    if (document.cookie.includes("OwnerName")) return;
    cookieBox.classList.add("show");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            //if button has acceptBtn id
            if(button.id == "acceptBtn") {
                //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
                document.cookie = "cookieBy = OwnerName; max-age=" + 60 * 60 * 24 * 30; ; 
            }
        });
    });
};



window.addEventListener("load", executeCodes);


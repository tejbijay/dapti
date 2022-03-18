// to show image in a box
const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change",function(){
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage=`url(${uploaded_image})`;   
    });
    reader.readAsDataURL(this.files[0]);
})

// main code

const maininput = document.querySelector('.main_input');
const output = document.querySelector('.output');

let inputShow = true;

function toggle(){
    if(inputShow){
        maininput.style.display = "none";
        inputShow = false;
        output.innerHTML=`
        <h1 class = "resume">RESUME</H1>
        <hr>
        <div class="ek">
            <h1>${maininput["fname"].value}</h1>
            <h1>${maininput["mname"].value}</h1>
            <h1>${maininput["lname"].value}</h1>
        </div>

        <div class="dui">
            <h3>Date of Birth: ${maininput["dob"].value}</h3>
            <h3>Contact Address: ${maininput["conad"].value}</h3>
            <h3>E-maail: ${maininput["email"].value}</h3>
            <h3>Address 1: ${maininput["address1"].value}</h3>
            <h3>Address 2: ${maininput["address2"].value}</h3>
            <h3>Address 3: ${maininput["address3"].value}</h3>
        </div>

        

        <div class="tin">
            <h3>Course: ${maininput["course_name"].value}</h3>
        </div>

        <div class="btn">
            <button onclick="print()">Print Resume</button>
        </div>
        `
    } else{
        maininput.style.display = "block"
        inputShow = true
        output.innerHTML=""
    }
}
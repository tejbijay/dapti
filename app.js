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
        <div class="hero">
            ${maininput["#display_image"]}
            <h1>${maininput["fname"].value}</h1>
            <h2>${maininput["mname"].value}</h2>
            <h3>${maininput["lname"].value}</h3>
        </div>

        <div>

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
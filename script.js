const pickerBtn = document.getElementById("pick")
const resultDiv  = document.querySelector(".results");

let hex = [];
const activateEyeDropper = async () =>{

  try{
    const eyeDropper = new EyeDropper();
    const {sRGBHex} = await eyeDropper.open();
    navigator.clipboard.writeText(sRGBHex);
    hex.push(sRGBHex);
    resultDiv.innerHTML +=sRGBHex;
    localStorage.setItem("picked",hex);
   
    
  }
  catch(error){
    console.log(error);
  }
}
console.log(localStorage.getItem("picked"));
pickerBtn.addEventListener("click",activateEyeDropper);
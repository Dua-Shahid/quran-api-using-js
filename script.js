let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () =>{
    const  workerobj = new Worker("worker.js");
    workerobj.postMessage("start workeer");
    workerobj.onmessage = function(e){
        document.getElementById("output").innerHTML = e.data;
    }
})

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{
    document.getElementById("ui").innerHTML += "hello";
    
})
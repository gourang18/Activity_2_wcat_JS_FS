let fs=require("fs");
let path=require("path");
let inputArr=process.argv.slice(2);
let content="";
let options=[];
let filePath=[];
for(let i=0;i<inputArr.length;i++){
    if(inputArr[i].charAt(0)=="-"){
        options.push(inputArr[i]);
    }
    else{
        filePath.push(inputArr[i]);
    }
}
if(options.length>1){
    options.splice(1,1);
}

for(i=0;i<filePath.length;i++){
    
    content=content+fs.readFileSync(filePath[i])+"\r\n";
    
}
console.log(content);
// if(options.length>0){
// switch(options[0]){
//     case "-s":
//         minusSbreak();
//         break;
//         default:
//             console.log("NO such command available");
// }
// }
let contentArr=content.split("\r\n");
//console.log(contentArr);
// function minusSbreak(){

let isSPresent=options.includes("-s");
if(isSPresent){
     for(let i=1;i<contentArr.length;i++){
       if(contentArr[i]==""&&contentArr[i-1]==""){
          contentArr[i]=null;
      }else if(contentArr[i]==""&&contentArr[i-1]==null){
          contentArr[i]=null;
      }

     }
     let tempArr=[];
     for(let i=0;i<contentArr.length;i++){
         if(contentArr[i]!==null){
             tempArr.push(contentArr[i]);
         }
     }
     contentArr=tempArr;



console.log(contentArr.join("\n"));
    }
    
let isNPresent =options.includes("-n");
if(isNPresent){
    let count =1;
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=count+"."+contentArr[i];
        count=count+1;
    }
    console.log(contentArr.join("\n"));
}
let isBPresent=options.includes("-b");
if(isBPresent){
    let count=1;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!==""){
            contentArr[i]=count+"."+contentArr[i];
            count=count+1;

        }
    }
    console.log(contentArr.join("\n"));

}
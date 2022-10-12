

var arrx =[];
var arry =[];
var distances = [,];

arrx.push([0]);
arry.push([0]);
//ThereAreNoCircles=false;

let NoPoints=document.querySelector('#NoPoints')
NoPoints.addEventListener('input', () =>{
NoCircles= NoPoints.value

console.log(NoCircles)
});
function getMousePosition(canvas,event) {
    let rect = canvas.getBoundingClientRect(); 
    
    let x = Math.trunc(event.clientX - rect.left);
    let y = Math.trunc(event.clientY - rect.top);
    console.log("Coordinate x: " + x, 
                "Coordinate y: " + y);
                if(NoCircles>0){
                placecircle(x,y)
                } else{
                    
                    connections(arrx,arry)
                    
                }
                
                
}
let canvasElem = document.querySelector("canvas");
  
canvasElem.addEventListener("mousedown", function(e)
{
    getMousePosition(canvasElem, e);
    NoCircles=NoCircles-1
});
function placecircle(x,y){
    if((NoPoints.value-NoCircles)===0){
        const canvas = document.getElementById('canvas');
        const ctx= canvas.getContext('2d')
        ctx.font = "30px Arial";
        ctx.strokeText(("Start"), (x+10), (y+10));
        ctx.beginPath();
        ctx.arc(x, y,10,0,Math.PI*2,true); 
        ctx.fillStyle= 'red'
        ctx.fill();
        
       arrx.push([x]);
       arry.push([y])
    }else if((NoPoints.value-NoCircles)===((NoPoints.value)-1)){
        const canvas = document.getElementById('canvas');
        const ctx= canvas.getContext('2d')
        ctx.font = "30px Arial";
        ctx.strokeText(("Finish"), (x+10), (y+10));
        ctx.beginPath();
        ctx.arc(x, y,10,0,Math.PI*2,true); 
        ctx.fillStyle= 'red'
        ctx.fill();
        
       arrx.push([x]);
       arry.push([y])
    }else{
        const canvas = document.getElementById('canvas');
        const ctx= canvas.getContext('2d')
        ctx.font = "30px Arial";
        ctx.strokeText(((NoPoints.value-NoCircles)+1), (x+10), (y+10));
        ctx.beginPath();
        ctx.arc(x, y,10,0,Math.PI*2,true); 
        ctx.fillStyle= 'black'
        ctx.fill();
        
       arrx.push([x]);
       arry.push([y])
    }
   
  
}

  


function connections(arrx,arry){
    const canvas = document.getElementById('canvas');
    const ctx= canvas.getContext('2d')
    z=0
    b=0
    let backup=[]
    Points=NoPoints.value
   let Length=(arrx.length-1)
    var connect=[]
    var count1arr=[]
    var count2arr=[]
    count=1
    var connections=[,]
    do{
    if (count===1){
        connect[count]=parseInt(window.prompt("How many connections does the start have?"))
    }else if(count===(arrx.length-1)){
        connect[count]=parseInt(window.prompt("How many connections does the end have?"))
    }else{
        connect[count]=parseInt(window.prompt("How many connections does point "+(count)+ " have?"))
    }
    console.log(NoPoints.value-1)
    console.log(connect[count])
        if (/^[0-9.,]+$/.test(connect[count])){
            if (connect[count]>(NoPoints.value-1)){
           count=count     
           
            }else if(connect[count]<=0){
count=count
            }else{
              count=count+1
            countTotal=count  
            }
            
        }else{
            count=count
        }

    }while(count<=(arrx.length-1))
    count= (countTotal-count)+1
    count2=1
    
    do {
        do{ 
            if (connect[count]!=0){
                connections[count,count2]=count
                while(connections[count,count2]===count){
                    if (count===1){
                        connections[count,count2]=parseInt(window.prompt("What points does the start connect to?"))
                     
                        count1arr[b]=count
                        count2arr[b]=connections[count,count2]
                        console.log("connections "+ connections[count,count2]+" count "+count1arr[b]+" count2 "+ count2arr[b])   
                        
                    }else if(count===(arrx.length-1)){
                        connections[count,count2]=parseInt(window.prompt("What points does the end connect to?"))
                        
                        count1arr[b]=count
                        count2arr[b]=connections[count,count2] 
                        console.log("connections "+ connections[count,count2]+" count "+count1arr[b]+" count2 "+ count2arr[b])     
                        b=b+1   
                     }else{
                        connections[count,count2]=parseInt(window.prompt("What points does "+ count +" connect to?"))
                                     }
                        count1arr[b]=count
                        count2arr[b]=connections[count,count2] 
                        console.log("connections "+ connections[count,count2]+" count "+count1arr[b]+" count2 "+ count2arr[b])   
                        b=b+1
                    if (connections[count,count2]>countTotal || connections[count,count2]<=0){
                        while(connections[count,count2]>countTotal || connections[count,count2]<=0){
                            if (count===1){
                                connections[count,count2]=parseInt(window.prompt("What points does the start connect to?"))
                                
                                count1arr[b]=count
                        count2arr[b]=connections[count,count2]     
                        console.log("connections "+ connections[count,count2]+" count "+count1arr[b]+" count2 "+ count2arr[b])    
                        b=b+1                   
                            }else if(count===(arrx.length-1)){

                                connections[count,count2]=parseInt(window.prompt("What points does the end connect to?"))
                                      
                                count1arr[b]=count
                        count2arr[b]=connections[count,count2]   
                        console.log("connections "+ connections[count,count2]+" count "+count1arr[b]+" count2 "+ count2arr[b])   
                        b=b+1                
                             }else{
                                connections[count,count2]=parseInt(window.prompt("What points does "+ count +" connect to?"))
                                  
                                count1arr[b]=count
                        count2arr[b]=connections[count,count2] 
                        console.log("connections "+ connections[count,count2]+" count "+count1arr[b]+" count2 "+ count2arr[b])   
                        b=b+1                     
                             }
                             
                        }

                    }
                }
            }else{
  
                count=count+1
                count2=1
            }
            
        if (/^[0-9.,]+$/.test(connections[count, count2])){ 
            x=0
           do {  
               if (connections[count,count2]===x){
                
                ctx.beginPath();
                ctx.moveTo(arrx[count],arry[count]);
                ctx.lineTo(arrx[x],arry[x])
                ctx.stroke();
                   
                    
                       
                
                if (count===1){
                    if (x===(arrx.length-1)){
                        backup[z]=parseInt(window.prompt("How long is the connection between the start and the end"))
                      
                                          }else{
                        backup[z]=parseInt(window.prompt("How long is the connection between start and "+x))
                        
                    }
                }else if(count===(arrx.length-1)){
                    if (x===1){
                        backup[z]=parseInt(window.prompt("How long is the connection between the start and the end"))
                                      }else{
                        backup[z]=parseInt(window.prompt("How long is the connection between end and "+x))
                                        }
                }else{
                    
                    if (x===1){
                        backup[z]=parseInt(window.prompt("How long is the connection between "+count +" and the start"))
                                            }else if(x===(arrx.length-1)){
                       backup[z]=parseInt(window.prompt("How long is the connection between "+count +" and the end"))
                                            }else{
                        backup[z]=parseInt(window.prompt("How long is the connection between "+count +" and "+x))
                                          }
                         }
                        
                ctx.font = "30px Arial";
                if (arrx[count]<arrx[x]){
                    if (arry[count]<arry[x]){
                        
                        
                        ctx.strokeText( backup[z],(parseInt(arrx[count])+(Math.sqrt(squared(parseInt(arrx[count]-arrx[x])/2)))),(parseInt(arry[count])+(Math.sqrt(squared(parseInt(arry[count]-arry[x])/2)))))
                      
                    }else{
                      
                        ctx.strokeText( backup[z],(parseInt(arrx[count])+(Math.sqrt(squared(parseInt(arrx[count]-arrx[x])/2)))),(parseInt(arry[count])-(Math.sqrt(squared(parseInt(arry[count]-arry[x])/2)))))
                        
                    }
                }else{
                    if (arry[count]<arry[x]){
                        
                        ctx.strokeText( backup[z],(parseInt(arrx[count])-(Math.sqrt(squared(parseInt(arrx[count]-arrx[x])/2)))),(parseInt(arry[count])+(Math.sqrt(squared(parseInt(arry[count]-arry[x])/2)))))
                        
                    }else{
                       
                        ctx.strokeText( backup[z],(parseInt(arrx[count])-(Math.sqrt(squared(parseInt(arrx[count]-arrx[x])/2)))),(parseInt(arry[count])-(Math.sqrt(squared(parseInt(arry[count]-arry[x])/2)))))
                        
                       
                    }
                  }
                z=z+1
                x=x+1
               }else{
                    x=x+1
                    
                }
            }while(x<=Points)
            
            count2=count2+1
            
        }else{
            count2=count2
        }
    }while(count2<=connect[count])

    if (count===arrx.length-1){
        dijkstras(connections,Length,connect,backup,count1arr,count2arr)
        break
            }else{
                count=count+1
                count2=1
            }
   
    }while (count<=arrx.length-1)
    function squared(number) { return number*number } 
   
    
        
    
}


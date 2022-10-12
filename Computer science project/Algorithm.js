function dijkstras(connections,Length,connect,backup,count1arr,count2arr){
    var matrixs =[]
   class Graph{
    constructor(size)
    {
        this.size=size;
        this.matrix=[];
        matrixs=[];
        for(let i=0;i<size;i++){
            this.matrix.push([]);
            matrixs.push([]);
            for(let j=0;j<size;j++){
                this.matrix[i][j]=0;
                matrixs[i][j]=0;
            }
        }
    }
    addVertex(){
       this.size++;
       this.matrix.push([]);
       matrixs.push([]);
       for(let i=0;i<this.size;i++){
        this.matrix[i][this.size-1]=0
        this.matrix[this.size-1][i]=0;
        matrixs[i][this.size-1]=0
       matrixs[this.size-1][i]=0;
       }
    }
    addEdge(v1,v2,weight)
    {
       if(v1===v2){
        console.log("repeat vertex")
       }else{
        matrixs[v1][v2]=weight
        this.matrix[v1][v2]=weight;
       }

    }
    printMatrix(){
        for(let i=0;i<(this.size);i++){
            let row= '';
            for(let j=0;j<(this.size);j++){
                row += `${this.matrix[i][j]}`;
            }
            console.log(row);
        }
    }
   }
   
   var graph= new Graph(Length);
   x=1
   do{
    xstring=x.toString()
graph.addVertex(xstring);
x=x+1
   }while(x<=Length)
   console.log("point 1 connections  "+count2arr[0]+" "+count2arr[1])
   console.log("point 2 connections  "+count2arr[3]+" "+count2arr[4])
   console.log("point 3 connections  "+count2arr[5]+" "+count2arr[6])
   console.log("point 4 connections "+count2arr[7]+" "+count2arr[8])
   
   x=1
   y=1
   z=0
   b=0
  do{
  do{
       xstring=count1arr[b]
     connectionsstring=count2arr[b]
     Weight=backup[z]
      graph.addEdge(xstring,connectionsstring,Weight);
    y=y+1
   z=z+1
    b=b+1
  }while(y<=connect[x])
   x=x+1
   y=1
}while(x<=Length)
graph.printMatrix();
for(let i=1;i<matrixs.length;i++){
    for(let j=1; j<matrixs.length;j++){
        matrixs[(i-1)][(j-1)]=matrixs[i][j]
    }
}
matrixs.length=Length;
console.log("break")
for(let i=0;i<(matrixs.length);i++){
    let row= '';
    for(let j=0;j<(matrixs.length);j++){
        row += `${matrixs[i][j]}`;
    }
    console.log(row);
}
algorithm(matrixs,0)

displaytable(distances)
}
function algorithm (graph,start){

var distances=[];
for(var i=0; i<graph.length;i++) distances[i]=Number.MAX_VALUE
distances[start]=0;
console.log("in algorithm "+ distances[i])
var visited=[];
while(true){
 var Shortest=Number.MAX_VALUE
 var shortidx=-1;
 for(var i =0;i<graph.length;i++){
     if (distances[i]<Shortest&&!visited[i]){
         Shortest=distances[i]
         console.log("in algorithm "+ Shortest)
         shortidx=i;
         console.log("On node "+i+" with distance "+Shortest)
     }
     
 }
if(shortidx===-1){
return distances;
}
for (var i=0;i<graph[shortidx].length;i++){
 if (graph[shortidx][i]!==0&& distances[i]>distances[shortidx]+graph[shortidx][i]){
     distances[i]=distances[shortidx]+graph[shortidx][i];

 }
 visited[shortidx]=true;
 console.log("Visited nodes: " + visited);
 console.log("Currently lowest distances: " + distances)
}
};

}  
function displaytable(distances){
const canvas = document.getElementById('canvas');
    const ctx= canvas.getContext('2d')
   const width= window.innerWidth
  const height= window.innerHeight
    ctx.font = "30px Arial";
    ctx.strokeText((distances),(width/2),(height/2))
}
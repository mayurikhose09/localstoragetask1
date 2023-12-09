   todoArray=[];
   
   function SaveText(){
var title=document.getElementById("demo").value;
todoArray.push(title);
document.getElementById("demo").value=""
localStorage.setItem("todo", todoArray.toString());
fetchFile();  
   }
   function fetchFile(){
var data=localStorage.getItem("todo")
todoArray=data.split(",");
var htmlstring=`
<tr>
<th>Sr No.</th>
<th>Title</th>
<th>Action</th>
</tr>
`;
var counter=0;
todoArray.forEach((element) => {
   counter++;
   htmlstring += `
   <tr>
   <td>${counter}</td>
   <td>${element}</td>
   
   <td> <button  class="btn btn-outline-warning"  onclick="editfun(${counter-1})"> Edit </button>
   <button class="btn btn-outline-danger" onclick="deletefun(${counter-1})"> delete </button>
   </tr> 
   `
});
document.getElementById("title").innerHTML=htmlstring
   }
     function editfun(index){
var newValue=prompt("do you want really update the value?" , todoArray[index])
if(newValue !=""){
   todoArray[index]=newValue;
   localStorage.setItem("todo", todoArray.toString());
   fetchFile();

}
      }
    function  deletefun(index){
if(confirm("do you want delete?")){
   todoArray.splice(index,1);
   localStorage.setItem("todo",todoArray.toString());
   fetchFile();
}
      }
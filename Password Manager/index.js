const deletePass=(website)=>{
    let data=localStorage.getItem('pwd');
    let arr = JSON.parse(data)
    arrUpdate=arr.filter((e)=>{
        return e.Website!=website
    })
    localStorage.setItem('pwd', JSON.stringify(arrUpdate))
    alert('passworrd deleted successfully');

}

 const showPass=()=>{
    let data=localStorage.getItem('pwd');
    let tab=document.querySelector('table')
   
 
 if(data==null || JSON.parse(data).length==0)

{
    tab.innerHTML="No Data Available"
}else{
    tab.innerHTML=`   <tr>
    <th>
        Website
        
    </th>
    <th>
        Password
        
    </th>
    <th>
        Username
        
    </th>
    <th>
        Delete
        
    </th>
</tr>`
    let arr = JSON.parse(data)
    let str=""
    for(let i=0; i<arr.length; i++){
         const element= arr[i]
          str +=`<tr>
<td>
    ${element.Website}
    
</td>
<td>
    ${element.Username}
    
</td>
<td>
    ${element.Password}
    
</td>
<td>
    <button id="${element.Website}" onClick=deletePass('${element.Website}')>delete</button>
    
</td>
</tr>

`

    }
    tab.innerHTML=tab.innerHTML+str
}
 }
 
document.querySelector('#btn').addEventListener('click', function(e){
e.preventDefault()



console.log(username.value,password.value);
let pwd = localStorage.getItem('pwd');

if(pwd==null){
    let json=[]
    json.push({Website:website.value,Username:username.value,Password:password.value})
    alert('passworrd saved');
    localStorage.setItem('pwd', JSON.stringify(json))
}else{
let json=JSON.parse(localStorage.getItem('pwd'));
json.push({Website:website.value,Username:username.value,Password:password.value})
alert('passworrd saved');
localStorage.setItem('pwd', JSON.stringify(json))

}
showPass()

})
//accepting input on the index page

onSubmit = () =>{
    const myfirstname = document.getElementById('firstname').value;
    const mylastname = document.getElementById('lastname').value;

    localStorage.setItem('Firstname',myfirstname);
    localStorage.setItem('Lastname',mylastname);

    return;

}

//displaying on th result page
window.addEventListener('load' ,() =>{

  const params = (new URL(document.location)).searchParams;
    const firstname = params.get('firstname');
    const lastname = params.get('lastname');
    
  
document.getElementById('result-firstname').innerHTML =  firstname;
document.getElementById('result-lastname').innerHTML =   lastname;

});
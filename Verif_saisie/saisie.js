
// const form=document.getElementsById('form')
const name1=document.getElementById('name')
const prenom=document.getElementById('prenom')
const mail=document.getElementById('mail')
const pass=document.getElementById('pass')
const option=document.getElementById('option')

const requires=document.getElementById('req')
const form_tab=document.getElementById('form')
const  pass_err=document.getElementById('pass_err')
const  err_name=document.getElementById('err_name')
const  err_mail=document.getElementById('err_mail')

const  validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Verif=()=>{


    // e.preventDefault()
    // let prenom=document.getElementsByTagName('input')[1].value
    // let err_prenom=document.getElementsById('err_prenom')
    // let message_name=[]
    // console.log(name1.value.target);
    // let message_prenom=[]

if(mail.value == ''){
    console.log(err_mail.innerHTML="le champ e-mail est necessaire"
    );
    err_mail.innerHTML="le champ e-mail est necessaire"; 
    err_mail.style.color="red"
    err_mail.style.textShadow="0px 2px 2px 1px red"
    mail.focus()
    return false
}
if (!mail.value.match(validRegex) ){
    err_mail.innerHTML="necessaire d'utilise le @ et le ."; 
    err_mail.style.color="red"
    err_mail.style.textShadow="0px 2px 2px 1px red"
    mail.focus()

}
if ( mail.value == '' || !mail.value.match(validRegex)){
    return false
}
// message_name.push('name is require')
// message_prenom.push('prenom require')
    
//     if (message_name.length > 0  ){
//         e.preventDefault()
//         console.log(err_name.innerText = message_name.join(', ')
//         );
//         err_name.innerText = message_name.join(', ')

//     }
// console.log('hello');

}

const Verif_password=()=>{
    if(pass.value == ''){
        console.log(err_mail.innerHTML="le champ e-mail est necessaire"
        );
        err_mail.innerHTML="le champ e-mail est necessaire"; 
        err_mail.style.color="red"
        err_mail.style.textShadow="0px 2px 2px 1px red"
        mail.focus()
        return false
}
}

const Verif_name=()=>{
    if(name1.value == '' ){
        err_name.innerHTML="le champ nom est necessaire"; 
        err_name.style.color="red"
        err_name.style.textShadow="0px 2px 2px 1px red"
        name1.focus()
       }
       else
       err_name.innerHTML=""; 

}

function recupValeurs(name) {
    var resultat = "";
    var box=document.getElementsByName(name)
       for (var i = 0; i < box.length; i++) {
          if (box[i].checked) {
             resultat += box[i].value  + ", ";
          }
       }
       return resultat
  }
  
 const res=recupValeurs("sk");

const Create_form=(res)=>{
    let table=`<div><table border='1'><tr><th>champs</td><th>input</th></tr>
    <tr><td>nom</td><td>${name1.value}</td></tr>
    <tr><td>prenom</td><td>${prenom.value}</td></tr>
    <tr><td>email</td><td>${mail.value}</td></tr>
    <tr><td>pays</td><td>${option.value}</td></tr>
    <tr><td row="3">skills</td><td>${res}</td></tr></table>
    </div>`
    console.log(table);
    if(!name1.value == '' || !prenom.value == '' || mail.value.match(validRegex))
    form_tab.innerHTML=table
    else
    form_tab.innerHTML="<b>no content</b>"
    
}

const Create_table=()=>{
    let table="<div><table border='1'><tr><th>champs</th><th>obligation</th></tr><tr><td>nom</td><td>non vide</td></tr><tr><td>prenom</td><td>non vide</td></tr><tr><td>email</td><td>non vide et doit contenu le @ et le .</td></tr></table></div>"
    console.log(requires.innerHTML=table)
    
}
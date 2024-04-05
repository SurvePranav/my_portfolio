const header = document.querySelector("header");
 window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", this.window.scrollY > 120);
 });

 let menu = document.querySelector('#menu-icon');
 let navlist = document.querySelector('.navlist');

 menu.onclick = () => {
   menu.classList.toggle('bx-x');
   navlist.classList.toggle('active');
 }

 window.onscroll = ()=>{
   menu.classList.remove('bx-x');
   navlist.classList.remove('active');
 }

 function composeEmail() {
   const recipientEmail = 'pranavsurve009@gmail.com';
   const subject = ''; // You can specify the subject here if needed
   const body = ''; // You can specify the body here if needed

   const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
   
   // Open the default email client with a new compose email window
   window.location.href = mailtoLink;
}
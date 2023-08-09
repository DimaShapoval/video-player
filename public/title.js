$(document).ready(()=>{
$.get('https://akvani.com/php/send_title.php', (data)=>{
    document.title = data
}) 
})
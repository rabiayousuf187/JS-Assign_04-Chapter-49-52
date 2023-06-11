function on_submit()
{
    let name = document.getElementById('full_name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone_num').value;

    console.log(name);
    console.log(username);
    console.log(email);
    console.log(phone);
    
    let show = document.getElementById('hidden');
    console.log(show);

    console.log(show.className);
    show.classList.add('show');

    let display_para1 = document.getElementById('name_show');
    display_para1.innerText = name;

    let display_para2 = document.getElementById('username_show');
    display_para2.innerText = username;
    
    let display_para3 = document.getElementById('email_show');
    display_para3.innerText = email;

    let display_para4 = document.getElementById('phone_show');
    display_para4.innerText = phone;

}
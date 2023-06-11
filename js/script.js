
let selected_id = null;

function signup() {
    let name = document.getElementById('full_name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone_num').value;

    console.log(name);
    console.log(username);
    console.log(email);
    console.log(phone);

    if (name !== "" && username !== "" && email !== "" && phone !== "") {

        let show = document.getElementById('hidden');
        show.style.display = "block";
        show.style.color = "white";

        let display_para1 = document.getElementById('name_show');
        display_para1.innerText = name;

        let display_para2 = document.getElementById('username_show');
        display_para2.innerText = username;

        let display_para3 = document.getElementById('email_show');
        display_para3.innerText = email;

        let display_para4 = document.getElementById('phone_show');
        display_para4.innerText = phone;
    }

}

// ***********    For Data Table


// 1. Create a signup form and display form data in your webpage on submission.

let std_name = [];
let std_username = [];
let std_email = [];
let std_phone = [];
let std_password = [];

let render_table;
let row_id = null;


let obj;

//show or hide btn
let sub_btn = document.getElementById('submit');


function get_ele_value() {

    let name = document.getElementById('full_name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone_num').value;
    let password = document.getElementById('password').value;

    console.log(name);
    console.log(username);
    console.log(email);
    console.log(phone);
    console.log(password);

    obj = {
        name: name,
        username: username,
        email: email,
        phone: phone,
        password: password
    };

    console.log("obj", obj);

    return obj;

}

function row_delete(button_id) {
    button_id = document.getElementById(button_id).id;
    console.log("button_id", button_id);

    button_id = button_id.split("delete_id_");
    console.log("button_id", button_id);
    // console.log("button_id[0]" , button_id[0]);

    //button_id[1] = row id
    console.log("button_id[1]", button_id[1]);


    obj = get_ele_value();
    std_name.splice(button_id[1], 1);
    std_username.splice(button_id[1], 1);
    std_email.splice(button_id[1], 1);
    std_phone.splice(button_id[1], 1);
    std_password.splice(button_id[1], 1);

    console.log("std_name", std_name);
    console.log("std_username", std_username);
    console.log("std_email", std_email);
    console.log("std_phone", std_phone);
    console.log("std_password", std_password);

    show_table();

}

function on_submit() {

    obj = get_ele_value();

    if ((obj['name'] !== ("")) && (obj['username'] !== ("")) && (obj['email'] !== (""))&& (obj['phone'] !== (""))&& (obj['password'] !== (""))) {

        console.log('row_id', row_id);
        if (row_id !== null) {
            std_name[row_id] = obj['name']
            std_username[row_id] = obj['username']
            std_email[row_id] = obj['email']
            std_phone[row_id] = obj['phone']
            std_password[row_id] = obj['password']
    
            console.log("std_name", std_name);
            console.log("std_username", std_username);
            console.log("std_email", std_email);
            console.log("std_phone", std_phone);
            console.log("std_password", std_password);
    
            let c = " row_delete('delete_id_" + row_id + "')";
            let d = " row_edit('edit_id_" + row_id + "')";
    
            document.getElementById('row_id_'+row_id).innerHTML = 
            "<tr id='row_id_" +row_id+ "'><td id='roll_id_" +row_id+ "'>" +row_id+
            "</td><td id='name_id_" +row_id+ "' class = 'td_style'>" + std_name[row_id] +
            "</td><td id='username_id_" +row_id+ "'>" + std_username[row_id] +
            "</td><td id='email_id_" +row_id+ "'>" + std_email[row_id] +
            "</td><td id='phone_id_" +row_id+ "'>" + std_phone[row_id] +
            "</td><td class = 'action'>" +
            "<button id='delete_id_" + [row_id] + "' class = 'btn btn-danger' onclick ="+ c + "><i class='fas fa-trash-alt' id = 'del_id_" + [row_id] + "'></i></button>" +
            "<button id='edit_id_" + [row_id] + "' class = 'btn btn-warning' onclick=" + d + "><i class='fas fa-pencil-alt' id = 'edi_id_" + [row_id] + "'></i></button></td></tr>";
    
            // show_table(std_name, std_username, std_email);
            console.log("show_table updated");
    
            name = document.getElementById('full_name').value = " ";
            username = document.getElementById('username').value = " ";
            email = document.getElementById('email').value = " ";
            phone = document.getElementById('phone_num').value = " ";
            password = document.getElementById('password').value = "";

            //submit btn TExt convert into Update
            console.log(sub_btn.innerHTML = "Submit");

       }
       else{
        std_name.push(obj['name']);
        std_username.push(obj['username']);
        std_email.push(obj['email']);
        std_phone.push(obj['phone']);
        std_password.push(obj['password']);

        console.log("std_name", std_name);
        console.log("std_username", std_username);
        console.log("std_email", std_email);

        show_table();

        name = document.getElementById('full_name').value = "";
        username = document.getElementById('username').value = "";
        email = document.getElementById('email').value = "";
        phone = document.getElementById('phone_num').value = " ";
        password = document.getElementById('password').value = "";

       }
        

    }
    else {
        alert("Some feild left blank!");
    }

}

function show_table() {

    let show_div = document.getElementById('table_div');
    show_div.classList.add('show');

    let tbody_show = document.getElementById('tbody');

    render_table = "";
    for (let a = 0; a < std_name.length; a++) {

        let c = " row_delete('delete_id_" + [a] + "')";
        let d = " row_edit('edit_id_" + [a] + "')";

        render_table +=
            "<tr id='row_id_" + a + "'><td id='roll_id_" + a + "'>" + a +
            "</td><td id='name_id_" + a + "' class = 'td_style'>" + std_name[a] +
            "</td><td id='username_id_" + a + "'>" + std_username[a] +
            "</td><td id='email_id_" + a + "'>" + std_email[a] +
            "</td><td id='phone_id_" + a + "'>" + std_phone[a] +
            "</td><td class = 'action'>" +
            "<button id='delete_id_" + [a] + "' class = 'btn btn-danger' onclick =" + c + "><i class='fas fa-trash-alt' id = 'del_id_" + [a] + "'></i></button>" +
            "<button id='edit_id_" + [a] + "' class = 'btn btn-warning' onclick=" + d + "><i class='fas fa-pencil-alt' id = 'edi_id_" + [a] + "'></i></button></td></tr>";

    }
    tbody_show.innerHTML = render_table;
    console.log(render_table);

    return render_table;

}


function row_edit(button_id) {
    console.log("button_id", button_id);

    //submit btn TExt convert into Update
    console.log(sub_btn.innerHTML = "Update");


    button_id = button_id.split("edit_id_");
    console.log("button_id", button_id);
    // console.log("button_id[0]" , button_id[0]);

    //button_id[1] = row id
    row_id = button_id[1];
    console.log("button_id[1]", row_id);
    console.log("selected_id Row === ", row_id);

    //obj value on selected row
    let row_ele = document.getElementById('row_id_' + row_id).value;
    console.log("row_ele", row_ele);

    sel_name = std_name[row_id];
    let sel_username = std_username[row_id];
    let sel_email = std_email[row_id];
    let sel_phone = std_phone[row_id];
    let sel_password = std_password[row_id];

    console.log("sel_namename", sel_name);
    console.log("sel_username", sel_username);
    console.log("sel_email", sel_email);

    let show_name = document.getElementById('full_name');
    let show_username = document.getElementById('username');
    let show_email = document.getElementById('email');
    let show_phone = document.getElementById('phone_num');
    let show_password = document.getElementById('password');

    show_name.value = sel_name;
    show_username.value = sel_username;
    show_email.value = sel_email;
    show_phone.value = sel_phone;
    show_password.value = sel_password;

    console.log("show_name.value", show_name.value);
    console.log("show_username.value", show_username.value);
    console.log("show_email.value", show_email.value);
    console.log("show_phone", show_phone.value);
    console.log("show_password.value", show_password.value);

}




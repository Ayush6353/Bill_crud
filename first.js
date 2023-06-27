var select = null;
var Bbtn = document.querySelector("#btn");
Bbtn.addEventListener("click", show);
function show(e) {
  e.preventDefault();
  isvalidation = validation();
  if (isvalidation == false) {
    return;
  }

  var translet = ready();

  if (select == null) {
    reset();
    input(translet);
  } else {
    update(translet);
    reset();
    select = null;
  }
  e;
}

//fatch data
function ready() {
  var show = {};
  show["F_name"] = document.querySelector(".f_name").value;
  show["T_toy"] = document.querySelector(".t_toy").value;
  var P = document.getElementById("Price").value;
  var Q = document.getElementById("Qty").value;

  let selected; //radio buttons
  var getSelectedValue = document.querySelector('input[name="season"]:checked');

  if (getSelectedValue != null) {
    selected = document.getElementById("p_pay").innerHTML =
      getSelectedValue.value;
  } 
  show["P_pay"] = document.querySelector.value = selected;

  checkboxvalue = []; //checkbox buttons
  var checkbox = document.getElementsByName("c_box");
  for (i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) {
      checkboxvalue.push(checkbox[i].value);
    }
  }
  show["C_checkbox"] = document.querySelector.value = checkboxvalue;

  var total = P * Q; // total
  document.getElementById("total").value = total;
  show["T_total"] = document.querySelector(".t_total").value;
  return show;
    
}

// input
function input(a) {
  var table = document.querySelector(".list");
  var tr = table.insertRow(table.length);
  var td0 = tr.insertCell(0);
  var td1 = tr.insertCell(1);
  var td2 = tr.insertCell(2);
  var td3 = tr.insertCell(3);
  var td4 = tr.insertCell(4);
  var td5 = tr.insertCell(5);
  var td6 = tr.insertCell(6);
  var td7 = tr.insertCell(7);

  td0.innerHTML = table.rows.length - 1;
  td1.innerHTML = a.F_name;
  td2.innerHTML = a.T_toy;
  td3.innerHTML = a.P_pay;
  td4.innerHTML = a.C_checkbox;
  td5.innerHTML = a.T_total;
  td6.innerHTML = `<i onClick="edit(this)" class="fa-solid fa-pen"></i>`;
  td7.innerHTML = `<i onClick="det(this)" class="fa-solid fa-trash"></i>`;
  var P = document.getElementById("Price").value;
  var Q = document.getElementById("Qty").value;
  var total = P * Q;
  document.getElementById("total").value = total;
  
}

// reset
function reset() {
  
  document.querySelector(".f_name").value = "";
  document.querySelector(".t_toy").value = "";
  document.querySelector(".pay_o").checked = false;
  document.querySelector(".pay_c").checked = false;
  document.querySelector(".c1_box").checked = false;
  document.querySelector(".c2_box").checked = false;
  document.querySelector(".t_total").value = "";
  document.querySelector("#Price").value = "";
  document.querySelector("#Qty").value = "";
  
}

// edit
function edit(td) {
  select = td.parentElement.parentElement;
  document.querySelector(".f_name").value = select.cells[1].innerHTML;
  document.querySelector(".t_toy").value = select.cells[2].innerHTML;

  let radio = document.getElementsByName("season");
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].value == select.cells[3].innerHTML) {
      radio[i].checked = true;
      break;
    }
  }

  str = select.cells[4].innerHTML;
  let arry = str.split(",");
  let checkboxs = document.querySelectorAll("input[name='c_box']");
  checkboxs.forEach((checkbox) => {
    if (arry.includes(checkbox.value)) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
  console.log(typeof arry);
  document.querySelector(".t_total").value = select.cells[4].innerHTML;
}

//update
function update(formData) {
  select.cells[1].innerHTML = formData.F_name;
  select.cells[2].innerHTML = formData.T_toy;
  select.cells[3].innerHTML = formData.P_pay;
  select.cells[4].innerHTML = formData.C_checkbox;
  select.cells[5].innerHTML = formData.T_total;
}

//detele
function det(data) {
  var deleterow = data.parentElement.parentElement;
  deleterow.remove();
}

function validation() {
  var F_name = document.querySelector(".f_name").value;
  var T_toy = document.querySelector(".t_toy").value;
  var P = document.getElementById("Price").value;
  var Q = document.getElementById("Qty").value;

  let selected; //radio buttons
  var getSelectedValue = document.querySelector('input[name="season"]:checked');

  if (getSelectedValue != null) {
    selected = document.getElementById("p_pay").innerHTML =
      getSelectedValue.value;
      document.getElementById("error").innerHTML =
      "";
  }
   else {
    document.getElementById("error").innerHTML =
      "*You have not selected any season";
  }


  if (F_name == "") {
    document.getElementById("V_name").innerHTML = "!plese enter your Name";
  }else{
    document.getElementById("V_name").innerHTML ="";
  }
  
  if (P == "") {
    document.getElementById("V_price").innerHTML = "!plese enter your Price";
  }else{
    document.getElementById("V_price").innerHTML ="";
  }

  if (Q == "") {
    document.getElementById("V_qte").innerHTML = "!plese enter your Quantity";
  }else{
    document.getElementById("V_qte").innerHTML ="";
  }

  checkboxvalue = []; //checkbox buttons
  var checkbox = document.getElementsByName("c_box");
  for (i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) {
      document.getElementById("V_box").innerHTML =
      "";
      checkboxvalue.push(checkbox[i].value);
      
    }
    if (checkbox[i].checked === false){
      document.getElementById("V_box").innerHTML =
      "*You have not selected any checkbox";
    }
  }

  if (!F_name || !T_toy || !P || !Q) {
    return false;
  }
}


function queryInvalid() {
  const q2a = document.querySelector("#q2a");
  const q2b = document.querySelector("#q2b");
  const q2select = document.querySelector("#q2select");
  const box = document.querySelector('.q2select_box')

  q2a.addEventListener("change", () => {
    if (q2a.checked) {
      q2select.setAttribute("disabled", "");
      box.classList.remove('displayBox')
    }
  });

  q2b.addEventListener("change", () => {
    if (q2b.checked) {
        box.classList.add('displayBox')
      q2select.removeAttribute("disabled");
    }
  });
}

function querySchool() {
  const q3a = document.querySelector("#q3a");
  const q3b = document.querySelector("#q3b");
  const schoolBox = document.querySelector(".school_info");
  const important = document.querySelector('.important_data');

  q3a.addEventListener("change", () => {
    if (q3a.checked) {
      schoolBox.classList.remove("displayBox");
      important.classList.remove("displayBox");
    }
  });

  q3b.addEventListener("change", () => {
    if (q3b.checked) {
      schoolBox.classList.add("displayBox");
      important.classList.add("displayBox")
    }
  });
}



function queryAdditional(){
    const pkt1 = document.querySelector('#q1a');
    const pkt3 = document.querySelector('#q3a');
    const pkt5 = document.querySelector('#q5a');
    const box = document.querySelector('.insurance_box');


    document.addEventListener('change',()=>{
        if(pkt1.checked && pkt3.checked && pkt5.checked){
           
            box.classList.add('displayBox')
        }else{
            box.classList.remove('displayBox')
        }
    })
}

function paymentBox(){
    const payment = document.querySelector('#paymentYes');
    const paymentFalse = document.querySelector('#paymentNo')
    const box = document.querySelector('.payment_box')

    paymentFalse.addEventListener('change',()=>{
        if(paymentFalse.checked){
            box.classList.remove('displayBox')
        }
    })

    payment.addEventListener('change',()=>{
        if(payment.checked){
            box.classList.add('displayBox');
        }
    })
}

queryInvalid();
querySchool();
queryAdditional();
paymentBox();
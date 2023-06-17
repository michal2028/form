function queryInvalid() {
  const q2a = document.querySelector("#q2a");
  const q2b = document.querySelector("#q2b");
  const q2select = document.querySelector("#q2select");
  const box = document.querySelector(".q2select_box");

  q2a.addEventListener("change", () => {
    if (q2a.checked) {
      q2select.setAttribute("disabled", "");
      box.classList.remove("displayBox");
    }
  });

  q2b.addEventListener("change", () => {
    if (q2b.checked) {
      box.classList.add("displayBox");
      q2select.removeAttribute("disabled");
    }
  });
}

function querySchool() {
  const q3a = document.querySelector("#q3a");
  const q3b = document.querySelector("#q3b");
  const schoolBox = document.querySelector(".school_info");

  const schoolNr = document.getElementById("schoolNumber");
  const schoolName = document.getElementById("schoolName");
  const schoolTown = document.getElementById("schoolTown");

  q3a.addEventListener("change", () => {
    if (q3a.checked) {
      schoolBox.classList.remove("displayBox");

      // schoolNr.removeAttribute('required')
      // schoolName.removeAttribute('required')
      // schoolTown.removeAttribute('required')

      schoolNr.required = false;
      schoolName.required = false;
      schoolTown.required = false;
      schoolNr.value = "";
      schoolName.value = "";
      schoolTown.value = "";
    }
  });

  q3b.addEventListener("change", () => {
    if (q3b.checked) {
      schoolBox.classList.add("displayBox");

      // schoolNr.setAttribute('required','')
      // schoolName.setAttribute('required','')
      // schoolTown.setAttribute('required','')

      schoolNr.required = true;
      schoolName.required = true;
      schoolTown.required = true;
    }
  });
}

function queryAdditional() {
  const pkt1false = document.querySelector("#q1a");
  const pkt1true = document.querySelector("#q1b");
  const pkt3false = document.querySelector("#q3a");
  const pkt3true = document.querySelector("#q3b");
  const pkt5false = document.querySelector("#q5a");
  const pkt5true = document.querySelector("#q5b");
  const pkt4false = document.querySelector("#q4a");
  const box = document.querySelector(".insurance_box");

  const noCase = document.getElementById("insuranceNo");
  const yesCase = document.getElementById("insuranceYes");

  document.addEventListener("change", () => {
    if (pkt1true.checked) {
      box.classList.remove("displayBox");
    } else if (pkt1false.checked && pkt3true.checked && pkt5false.checked) {
      box.classList.remove("displayBox");
    } else {
      box.classList.add("displayBox");
    }

    // if (pkt1.checked && pkt3.checked && pkt5.checked) {
    //   box.classList.add("displayBox");
    //   noCase.setAttribute("required", "");
    //   yesCase.setAttribute("required", "");
    //   noCase.required = true;
    //   yesCase.required = true;
    // } else {
    //   box.classList.remove("displayBox");
    //   noCase.removeAttribute("required");
    //   yesCase.removeAttribute("required");
    //   noCase.required = false;
    //   yesCase.required = false;
    //   noCase.checked = false;
    //   yesCase.checked = false;
    // }
  });
}

function paymentBox() {
  const payment = document.querySelector("#paymentYes");
  const paymentFalse = document.querySelector("#paymentNo");
  const box = document.querySelector(".payment_box");
  const paymentRequired = document.getElementById("paymentAccountInput");
  paymentFalse.addEventListener("change", () => {
    if (paymentFalse.checked) {
      box.classList.remove("displayBox");
      // paymentRequired.removeAttribute('required')
      paymentRequired.required = false;
      paymentRequired.value = "";
    }
  });

  payment.addEventListener("change", () => {
    if (payment.checked) {
      box.classList.add("displayBox");
      // paymentRequired.setAttribute('required','')
      paymentRequired.required = true;
    }
  });
}

function validateName(nameInput, errorMessage) {
  nameInput.addEventListener("input", function () {
    var inputName = nameInput.value.trim();
    var hasError = false;

    // Sprawdź, czy imię ma co najmniej 3 znaki
    if (inputName.length < 3) {
      hasError = true;
      errorMessage.textContent = "Nazwa musi mieć co najmniej 3 znaki.";
    }

    // Sprawdź, czy imię zawiera cyfry
    if (/\d/.test(inputName)) {
      hasError = true;
      errorMessage.textContent = "Nazwa nie może zawierać cyfr.";
    }

    // Jeśli nie ma błędów, ustaw styl poprawny
    if (!hasError) {
      nameInput.classList.remove("error");
      nameInput.classList.add("success");
      errorMessage.style.display = "none";
    } else {
      nameInput.classList.remove("success");
      nameInput.classList.add("error");
      errorMessage.style.display = "block";
    }
  });
}

function validatePesel(peselInput, errorMessage) {
  peselInput.addEventListener("input", function () {
    var inputPesel = peselInput.value.replace(/\s/g, ""); // Usuwanie białych znaków
    var hasError = false;

    // Sprawdzenie długości numeru PESEL
    if (inputPesel.length !== 11) {
      hasError = true;
      errorMessage.textContent = "Numer PESEL musi składać się z 11 cyfr.";
    }

    // Sprawdzenie czy numer PESEL zawiera tylko cyfry
    if (!/^\d+$/.test(inputPesel)) {
      hasError = true;
      errorMessage.textContent = "Numer PESEL może zawierać tylko cyfry.";
    }

    // Jeśli nie ma błędów, ustaw styl poprawny
    if (!hasError) {
      peselInput.classList.remove("error");
      peselInput.classList.add("success");
      errorMessage.style.display = "none";
      document.getElementById('peselFinal').value = `PESEL: ${peselInput.value}`
    } else {
      peselInput.classList.remove("success");
      peselInput.classList.add("error");
      errorMessage.style.display = "block";
      document.getElementById('peselFinal').value = `PESEL: BŁĄD`
    }
  });
}

function validateAccountNumber(peselInput, errorMessage) {
  peselInput.addEventListener("input", function () {
    var inputPesel = peselInput.value.replace(/\s/g, ""); // Usuwanie białych znaków
    var hasError = false;

    // Sprawdzenie długości numeru PESEL
    if (inputPesel.length !== 26) {
      hasError = true;
      errorMessage.textContent =
        "Numer konta bankowego musi składać się z 26 cyfr.";
    }

    // Sprawdzenie czy numer PESEL zawiera tylko cyfry
    if (!/^\d+$/.test(inputPesel)) {
      hasError = true;
      errorMessage.textContent =
        "Numer konta bankowego może zawierać tylko cyfry.";
    }

    // Jeśli nie ma błędów, ustaw styl poprawny
    if (!hasError) {
      peselInput.classList.remove("error");
      peselInput.classList.add("success");
      errorMessage.style.display = "none";
      document.getElementById('paymentAccountInputFinal').value = `${peselInput.value} = numer konta`
  
    } else {
      peselInput.classList.remove("success");
      peselInput.classList.add("error");
      errorMessage.style.display = "block";
      document.getElementById('paymentAccountInputFinal').value = "";
      
    }
  });
}

function validatePhone(input, errorDiv) {
  // Pobranie wartości z pola tekstowego i usunięcie ewentualnych białych znaków

  input.addEventListener("input", () => {
    const phoneNumber = input.value.trim();
    const phoneRegex = /^(\+\d{1,3}\s?)?\d{1,3}(\s?\d{3}){2,3}$/;

    if (!phoneRegex.test(phoneNumber)) {
      input.classList.remove("success");
      input.classList.add("error");
      errorDiv.style.display = "block";

      errorDiv.textContent = "Nieprawidłowy numer telefonu. Wprowadź 9 cyfr.";
    } else {
      input.classList.remove("error");
      input.classList.add("success");
      errorDiv.style.display = "none";

      errorDiv.textContent = "";
    }
  });

  // Wyrażenie regularne do sprawdzenia formatu numeru telefonu
}

function validateEmail(input, errorMessage) {
  input.addEventListener("input", () => {
    var email = input.value.trim();
    var hasError = false;

    // Sprawdzenie, czy pole tekstowe jest puste
    if (email === "") {
      hasError = true;
      errorMessage.textContent = ""; // Czyszczenie komunikatu błędu
    } else {
      // Sprawdzenie poprawności adresu e-mail
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        hasError = true;
        errorMessage.textContent = "Podaj poprawny adres e-mail.";
      }
    }

    // Jeśli nie ma błędów, ustaw styl poprawny
    if (!hasError) {
      input.classList.remove("error");
      input.classList.add("success");
      errorMessage.style.display = "none";
    } else {
      input.classList.remove("success");
      input.classList.add("error");
      errorMessage.style.display = "block";
    }
  });
}

function validatePostalCode(input, errorDiv) {
  input.addEventListener("input", () => {
    const postalCode = input.value.trim(); // Pobranie wartości z pola tekstowego i usunięcie ewentualnych białych znaków

    // Wyrażenie regularne do sprawdzenia formatu kodu pocztowego
    const postalCodeRegex = /^(\d{2}-\d{3}|\d{2}\s?\d{3}|\d{5})$/;

    if (!postalCodeRegex.test(postalCode)) {
      input.classList.remove("success");
      input.classList.add("error");
      errorDiv.style.display = "block";
      errorDiv.innerText = "Nieprawidłowy kod pocztowy. Wprowadź poprawny kod.";
    } else {
      input.classList.remove("error");
      input.classList.add("success");
      errorDiv.style.display = "none";
      errorDiv.innerText = "";
    }
  });
}

function validatePassData() {
  const inputs = document.querySelectorAll(".checkID");
  const btn = document.querySelector(".submitBtn");
  const pass = document.getElementById("pass");

  document.addEventListener("change", () => {
    let temp = 0;
    for (const el of inputs) {
      if (el.classList.contains("error")) {
        btn.setAttribute("disabled", "");
      }
      if (el.classList.contains("success")) {
        temp++;
        if (temp === 7) {
          btn.removeAttribute("disabled");
          document.getElementById("subjectForm").value = `Nowe zgłoszenie od ${
            document.getElementById("name").value
          } ${document.getElementById("surname").value}`;
        }
      }
    }
  });
}

function validateAllInputs() {
  validateName(
    document.getElementById("name"),
    document.getElementById("nameError")
  );
  validateName(
    document.getElementById("surname"),
    document.getElementById("surnameError")
  );
  validateName(
    document.getElementById("post"),
    document.getElementById("postError")
  );
  validateName(
    document.getElementById("surname"),
    document.getElementById("surnameError")
  );
  validateName(
    document.getElementById("surname"),
    document.getElementById("surnameError")
  );
  validatePesel(
    document.getElementById("pesel"),
    document.getElementById("peselError")
  );
  validatePhone(
    document.getElementById("phone"),
    document.getElementById("phoneError")
  );
  validateEmail(
    document.getElementById("email"),
    document.getElementById("emailError")
  );
  validatePostalCode(
    document.getElementById("postcode"),
    document.getElementById("postcodeError")
  );
  validateName(
    document.querySelector(".Post1"),
    document.getElementById("Post1Error")
  );
  validateName(
    document.getElementById("state"),
    document.getElementById("stateError")
  );
  validateAccountNumber(
    document.getElementById("paymentAccountInput"),
    document.querySelector(".paymentError")
  );

  validatePassData();
}




queryInvalid();
querySchool();
queryAdditional();
paymentBox();
validateAllInputs();


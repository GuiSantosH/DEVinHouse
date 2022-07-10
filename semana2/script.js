const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    e.preventDefault();


    const name = document.querySelector("#nome");

    const value = name.value;

    console.log("Nome:");
    console.log(value);

    const email = document.querySelector("#email");

    const valueemail = email.value;

    console.log("Email:");
    console.log(valueemail);

    const description = document.querySelector("#texto");

    const valuedescripton = description.value;

    console.log("Descrição:");
    console.log(valuedescripton);

    alert("Formulário enviado com sucesso!");
})
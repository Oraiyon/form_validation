const form = document.querySelector(".form")
const email = document.querySelector(".email")
const emailError = document.querySelector(".emailError")
const country = document.querySelector(".country")
const countryError = document.querySelector(".countryError")
const zipCode = document.querySelector(".zipCode")
const zipCodeError = document.querySelector(".zipCodeError")
const password = document.querySelector(".password")
const passwordError = document.querySelector(".passwordError")
const confirmPassword = document.querySelector(".confirmPassword")
const confirmPasswordError = document.querySelector(".confirmPasswordError")

const validateEmail = () => {
    if (email.validity.valueMissing || !email.validity.valid) {
        emailError.classList.add("activeError");
        emailError.innerText = "Email Required"
        email.setAttribute("style", "border-bottom: 2px solid red")
    } else {
        emailError.innerText = ""
        email.setAttribute("style", "border-bottom: 2px solid green")
    }
}

const validateCountry = () => {
    if (country.validity.valueMissing) {
        countryError.classList.add("activeError");
        countryError.innerText = "Country Required"
        country.setAttribute("style", "border-bottom: 2px solid red")
    } else {
        countryError.innerText = ""
        country.setAttribute("style", "border-bottom: 2px solid green")
    }
}
const validateZipCode = () => {
    if (zipCode.validity.valueMissing) {
        zipCodeError.classList.add("activeError");
        zipCodeError.innerText = "Zip Code Required"
        zipCode.setAttribute("style", "border-bottom: 2px solid red")
    } else if (zipCode.validity.rangeUnderflow || zipCode.validity.rangeOverflow) {
        zipCodeError.classList.add("activeError");
        zipCodeError.innerText = "Zip Codes Are 5 Numbers Long"
        zipCode.setAttribute("style", "border-bottom: 2px solid red")
    } else {
        zipCodeError.innerText = ""
        zipCode.setAttribute("style", "border-bottom: 2px solid green")
    }
}

const validatePassword = () => {
    if (password.validity.valueMissing) {
        passwordError.classList.add("activeError");
        passwordError.innerText = "Password Required"
        password.setAttribute("style", "border-bottom: 2px solid red")
    } else {
        passwordError.innerText = ""
        password.setAttribute("style", "border-bottom: 2px solid green")
    }
}
const validateConfirmPassword = () => {
    if (confirmPassword.value !== password.value){
        confirmPasswordError.classList.add("activeError")
        confirmPasswordError.innerText = "Match Your Password"
        confirmPassword.setAttribute("style", "border-bottom: 2px solid red")
    } else {
        confirmPasswordError.innerText = ""
        confirmPassword.setAttribute("style", "border-bottom: 2px solid green")
    }
}


const validateForm = () => {
    validateEmail()
    validateCountry()
    validateZipCode()
    validatePassword()
    validateConfirmPassword()
}

const removeStyle = (element) => {
    element.classList.remove("activeError")
    element.setAttribute("style", "border-bottom: 1px solid rgb(29, 29, 29);")
}

const removeAllStyles = () => {
    removeStyle(email)
    removeStyle(country)
    removeStyle(zipCode)
    removeStyle(password)
    removeStyle(confirmPassword)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (email.validity.valid && country.validity.valid && zipCode.validity.valid && password.validity.valid && confirmPassword.validity.valid && password.value === confirmPassword.value) {
        validateForm()
        removeAllStyles();
        form.reset()
    } else {
        validateForm()
    }
})
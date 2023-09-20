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

const setRedBorder = (element) => {
    element.setAttribute("style", "border-bottom: 2px solid red")
}

const setGreenBorder = (element) => {
    element.setAttribute("style", "border-bottom: 2px solid green")
}

const validateEmail = () => {
    if (email.validity.valueMissing || !email.validity.valid) {
        emailError.classList.add("activeError");
        emailError.innerText = "Email Required"
        setRedBorder(email);
    } else {
        emailError.innerText = ""
        setGreenBorder(email)
    }
}

const validateCountry = () => {
    if (country.validity.valueMissing) {
        countryError.classList.add("activeError");
        countryError.innerText = "Country Required"
        setRedBorder(country)
    } else {
        countryError.innerText = ""
        setGreenBorder(country)
    }
}

const validateZipCode = () => {
    if (zipCode.validity.valueMissing) {
        zipCodeError.classList.add("activeError");
        zipCodeError.innerText = "Zip Code Required"
        setRedBorder(zipCode)
    } else if (zipCode.validity.rangeUnderflow || zipCode.validity.rangeOverflow) {
        zipCodeError.classList.add("activeError");
        zipCodeError.innerText = "Zip Codes Are 5 Numbers Long"
        setRedBorder(zipCode)
    } else {
        zipCodeError.innerText = ""
        setGreenBorder(zipCode)
    }
}

const validatePassword = () => {
    if (password.validity.valueMissing) {
        passwordError.classList.add("activeError");
        passwordError.innerText = "Password Required"
        setRedBorder(password)
    } else {
        passwordError.innerText = ""
        setGreenBorder(password)
    }
}

const validateConfirmPassword = () => {
    if (confirmPassword.value !== password.value){
        confirmPasswordError.classList.add("activeError")
        confirmPasswordError.innerText = "Match Your Password"
        setRedBorder(confirmPassword)
    } else {
        confirmPasswordError.innerText = ""
        setGreenBorder(confirmPassword)
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
    if (email.validity.valid && country.validity.valid && zipCode.validity.valid && password.validity.valid && password.value === confirmPassword.value) {
        validateForm()
        removeAllStyles();
        form.reset()
    } else {
        validateForm()
    }
})

const validateOnFocus = (input) => {
    input.addEventListener("focusout", () => {
        if (input === email) {
            validateEmail();
        } else if (input === country) {
            validateCountry();
        } else if (input === zipCode) {
            validateZipCode();
        } else if (input === password) {
            validatePassword();
        } else {
            validateConfirmPassword();
        }
    });
};

validateOnFocus(email)
validateOnFocus(country)
validateOnFocus(zipCode)
validateOnFocus(password)
validateOnFocus(confirmPassword)
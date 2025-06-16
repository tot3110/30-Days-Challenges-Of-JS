// PASSWORD VALIDATOR

function validatorPassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    }
    if (!hasUpperCase) {
        return "Password must include at least one uppercase letter.";
    }
    if (!hasLowerCase) {
        return "Password must include at least one lowercase letter.";
    }
    if (!hasNumber) {
        return "Password must include at least one number.";
    }
    if (!hasSpecialChar) {
        return "Password must include at least one special character.";
    }

    return "Password is valid!";
}

console.log(validatorPassword("Weakpass"));    
console.log(validatorPassword("Strong3Pass1@")); 



// Second Method

// function validatePassword(password) {
//     const minLength = 8;
//     const hasUpperCase = /[A-Z]/.test(password);
//     const hasLowerCase = /[a-z]/.test(password);
//     const hasNumber = /[0-9]/.test(password);
//     const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

//     if (
//         password.length < minLength ||
//         !hasUpperCase ||
//         !hasLowerCase ||
//         !hasNumber ||
//         !hasSpecialChar
//     ) {
//         return false;
//     }

//     return "Password is valid!";
// }

// // Example usage
// console.log(validatePassword("Weakpass"));     
// console.log(validatePassword("StrongPass1@"));   
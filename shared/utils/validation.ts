export const validateEmail = (email: string): boolean => {
    // Standard email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
    // Minimum 8 characters, at least one letter, and one number
    const minLength = 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    return password.length >= minLength && hasLetter && hasNumber;
};

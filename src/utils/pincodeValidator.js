export function validatePincode(pincode) {
    return /^[0-9]{6}$/.test(pincode);
  }
  
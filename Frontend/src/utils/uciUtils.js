// Luhn algorithm implementation
export const generateLuhnCheckDigit = (partialNumber) => {
    // Remove non-digit characters
    const cleanNumber = partialNumber.replace(/\D/g, '');
    
    // Calculate sum with Luhn algorithm
    let sum = 0;
    let double = false;
    
    // Process from right to left
    for (let i = cleanNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanNumber.charAt(i), 10);
      
      if (double) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      
      sum += digit;
      double = !double;
    }
    
    // Calculate the check digit
    const remainder = sum % 10;
    return remainder === 0 ? 0 : 10 - remainder;
  };
  
  // Generate UCI for shop owner
  export const generateShopOwnerUCI = (birthYear) => {
    // Use birth year if provided, otherwise use placeholder
    const year = birthYear || '1972';
    
    // Generate a random suffix (5 digits)
    const randomSuffix = Math.floor(10000 + Math.random() * 90000).toString();
    
    // Combine prefix and random part
    const partialUCI = `SR${year}SO${randomSuffix}`;
    
    // Calculate check digit using Luhn algorithm
    const checkDigit = generateLuhnCheckDigit(partialUCI);
    
    // Return complete UCI with check digit
    return `${partialUCI}${checkDigit}`;
  };
  
  // Generate UCI for customer
  export const generateCustomerUCI = (birthYear) => {
    // Use birth year if provided, otherwise use placeholder
    const year = birthYear || '1972';
    
    // Generate a random suffix (5 digits)
    const randomSuffix = Math.floor(10000 + Math.random() * 90000).toString();
    
    // Combine prefix and random part
    const partialUCI = `SR${year}CU${randomSuffix}`;
    
    // Calculate check digit using Luhn algorithm
    const checkDigit = generateLuhnCheckDigit(partialUCI);
    
    // Return complete UCI with check digit
    return `${partialUCI}${checkDigit}`;
  };
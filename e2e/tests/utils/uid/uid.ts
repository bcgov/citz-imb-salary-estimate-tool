// Function to generate a random UID (10 characters long)
const generateUID = (): string => {
  // Define the set of characters that can be used in the UID
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  // Generate a 10-character UID by randomly selecting characters
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Return the generated UID
  return result;
};

// Export the generateUID function to make it accessible in other modules
export { generateUID };

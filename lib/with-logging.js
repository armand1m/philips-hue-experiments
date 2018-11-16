module.exports = (operation) => (fn) => async (...params) => {
  try {
    console.log(`Triggering requests to run operation "${operation}"`);

    const result = await fn(...params);

    console.log(`Successfully ran operation "${operation}".`);

    return result;
  } catch (error) {
    console.error(`Failed to run operation "${operation}":`, error);
  }
};
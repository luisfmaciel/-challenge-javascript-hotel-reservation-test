class InputError extends Error {
  constructor() {
    super()

    this.name = 'InputError';
    this.message = 'The date entered is invalid or the customer type does not exist';
  }
}

exports.InputError = InputError;

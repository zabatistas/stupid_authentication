const handleFormError = err => {
  const errFields = Object.keys(err.errors);
  const errMessages = [];
  errFields.map(field => errMessages.push({field: field, message: err.errors[field].message}));
  return errMessages;
};

module.exports = handleFormError;

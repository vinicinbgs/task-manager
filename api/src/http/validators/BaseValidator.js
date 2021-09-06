const returnError = (errors) => {
  let status = "422";
  let title = "error";

  let fields = [];

  errors.inner.map((error) => {
    fields.push({
      name: error.path,
      error: error.errors[0]
    })
  });

  return {
    title,
    status,
    errors: fields,
  };
};

module.exports = {
  returnError,
};
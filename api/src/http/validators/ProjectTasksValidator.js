const yup = require("yup");

const { returnError } = require("./BaseValidator");

const storeValidate = async (req, res) => {
  let schema = yup.object().shape({
    project_id: yup.number().required(),
    name: yup.string().required(),
    owner: yup.string().required(),
    expire_at: yup.date().default(function () {
      return new Date();
    }),
  });

  try {
    const validate = await schema.validate(
      { ...req.body, ...req.params }, {
        abortEarly: false
      }
    );

    return validate;
  } catch (e) {
    return returnError(e);
  }
}

const updateValidate = async (req, res) => {
  let schema = yup.object().shape({
    id: yup.number().required(),
    project_id: yup.number().required(),
    done: yup.boolean().required(),
  });

  try {
    const validate = await schema.validate(
      { ...req.body, ...req.params }, {
        abortEarly: false
      }
    );

    return validate;
  } catch (e) {
    return res.status(422).send(returnError(e)); 
  }
}

module.exports = { storeValidate, updateValidate }
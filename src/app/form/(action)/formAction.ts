const formAction = (formData: FormData) => {
  console.log("funciona el pedo", formData);
  const entries = formData.entries();

  let values: { [x: string]: any } = {};
  for (let entry of entries) {
    const thisEntry = { [entry[0]]: entry[1] };
    values[entry[0]] = entry[1];
  }
  console.log(`Your patient is a ${values.age} years old ${values.sex} ...`);

  console.log([]);
  return {
    status: "ok",
    message: "form uploaded succesfully",
  };
};

export default formAction;

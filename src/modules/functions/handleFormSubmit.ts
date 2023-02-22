const handleFormSubmit = (formElementID: string) => {
  const formData = new FormData(document.querySelector(formElementID));

  const dataArray = [];
  for (let entry of formData) {
    dataArray.push(entry);
  }

  const dataObject = Object.fromEntries(dataArray);

  return dataObject
};

export {handleFormSubmit}
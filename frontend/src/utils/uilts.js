export const handleChangeInput = (e, { setPhoneNumber }) => {
  let value = e.target.value;

  value = value.replace(/\D/g, '');

  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  if (value.length > 3 && value.length <= 7) {
    value = value.slice(0, 3) + '-' + value.slice(3);
  } else if (value.length > 7) {
    value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7);
  }

  setPhoneNumber(value);
};

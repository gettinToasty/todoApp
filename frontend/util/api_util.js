export const uniqueID = () => {
  return new Date().getTime();
};

export const requestTodos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/todos',
    dataType: 'JSON'
  });
};

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

export const addTodo = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/todos',
    dataType: 'JSON',
    data: {todo: data}
  });
};

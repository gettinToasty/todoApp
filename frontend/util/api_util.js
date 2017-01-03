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

export const updateTodo = data => {
  return $.ajax({
    method: 'PATCH',
    url: `api/todos/${data.id}`,
    dataType: 'JSON',
    data: {todo: data}
  });
};

export const deleteTodo = data => {
  return $.ajax({
    method: 'DELETE',
    url: `api/todos/${data.id}`,
    dataType: 'JSON',
  });
};

export const requestSteps = (todoId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/steps',
    dataType: 'JSON',
    data: {todo_id: todoId}
  });
};

export const addStep = (step) => {
  return $.ajax({
    method: 'POST',
    url: 'api/steps',
    dataType: 'JSON',
    data: {step: step}
  });
};

export const updateStep = step => {
  return $.ajax({
    method: 'PATCH',
    url: `api/steps/${step.id}`,
    dataType: 'JSON',
    data: {step: step}
  });
};

export const deleteStep = step => {
  return $.ajax({
    method: 'DELETE',
    url: `api/steps/${step.id}`,
    dataType: 'JSON',
  });
};

import axios from 'axios';
const baseUrl = 'http://localhost:3003/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createPersons = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const updatePersons = (id, updatePerson) => {
  const request = axios.put(`${baseUrl}/${id}/`, updatePerson);
  return request.then((response) => response.data);
};
const deletePersons = (id) => {
  const request = axios.delete(`${baseUrl}/${id}/`);
  return request.then((response) => response.data);
};

/* Since the names of the keys and the assigned variables are the same,
 we can write the object definition with more compact syntax: */
export default {
  getAll,
  createPersons,
  updatePersons,
  deletePersons,
};

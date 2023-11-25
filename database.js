let database = {
    1: { data: 'data1' },
    2: { data: 'data2' },
    3: { data: 'data3' },
  };
  
  function createResource(resource) {
    const id = Object.keys(database).length + 1;
    database[id] = resource;
    return id;
  }
  
  function readResource(id) {
    return database[id];
  }
  
  function updateResource(id, newData) {
    if (database[id]) {
      database[id] = { ...database[id], ...newData };
      return true;
    }
    return false;
  }
  
  function deleteResource(id) {
    if (database[id]) {
      delete database[id];
      return true;
    }
    return false;
  }
  
  module.exports = { createResource, readResource, updateResource, deleteResource };
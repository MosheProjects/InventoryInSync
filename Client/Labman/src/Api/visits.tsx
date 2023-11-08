export const getColumnNames = () => {
  fetch("http://localhost:3001/visits/columnsNames").then((res) => res.json());
};

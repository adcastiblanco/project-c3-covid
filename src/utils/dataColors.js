const color = (color) => {
  switch (color) {
    case 'Confirmed':
      return '#e74a3b';
    case 'Deaths':
      return '#000';
    case 'Active':
      return '#02a247';
    case 'Recovered':
      return '#f67d0f';
    default:
      return '';
  }
};

const dataBorder = (typeData) => {
  const weigth = '8px';
  const type = 'solid';
  switch (typeData) {
    case 'Confirmed':
      return `${weigth} ${type} ${color(typeData)}`;
    case 'Deaths':
      return `${weigth} ${type} ${color(typeData)}`;
    case 'Active':
      return `${weigth} ${type} ${color(typeData)}`;
    case 'Recovered':
      return `${weigth} ${type} ${color(typeData)}`;
    default:
      return '';
  }
};

export { color, dataBorder };

const Table = require('cli-table');

module.exports = (items) => {
  const table = new Table({
    style: {
      'padding-left': 0,
      'padding-right': 5,
    },
    chars: {
      'top': '',
      'top-mid': '',
      'top-left': '',
      'top-right': '',
      'bottom': '',
      'bottom-mid': '',
      'bottom-left': '',
      'bottom-right': '',
      'left': '',
      'left-mid': '',
      'mid': '',
      'mid-mid': '',
      'right': '',
      'right-mid': '',
      'middle': '',
    },
  });

  items.forEach(item => table.push(item));

  return table;
}
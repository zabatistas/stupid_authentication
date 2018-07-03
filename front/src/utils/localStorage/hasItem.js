const hasItem = item => {
  if (localStorage.getItem(item) === null) {
      return false;
    } else {
      return true;
    }
}

module.exports = hasItem;
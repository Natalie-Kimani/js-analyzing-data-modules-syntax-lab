require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  // loop through arrays
  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [
      ...combinedObject.users,
      ...args[i]
    ];
  }

  // add merge date
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
export function getNextId(documents) {
  if (documents.length === 0) {
    return 0;
  }

  const highestId = documents.reduce((acc, curr) => {
    console.log(curr, acc);

    return curr.id > acc ? curr.id : acc;
  }, 0);

  return highestId + 1;
}

function isExist(collectionA, collection_b) {
  for (var a = 0; a < collection_b.length; a++) {

    if (collectionA === collection_b[a]) {

      return 1;
    }
  }

  return 0;
}

function collect_same_elements(collection_a, collection_b) {

  var newArrray = [];
  for (var a = 0; a < collection_a.length; a++) {

    if (isExist(collection_a[a], collection_b)) {
      newArrray.push(collection_a[a]);
    }
  }

  return newArrray;
}

module.exports = collect_same_elements;

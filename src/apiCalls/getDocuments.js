export default function getDocumentsFromAPI() {
  return fetch("https://aachallengeone.now.sh/read")
    .then(response => response.json())
    .then(documents => {
      let listOfDocs = [];
      //iterate through the object to push the object with the name of the doc
      //inside the object
      for (let documentName in documents) {
        var doc = documents[documentName];
        doc["name"] = documentName;
        listOfDocs.push(doc);
      }
      return listOfDocs;
    });
}

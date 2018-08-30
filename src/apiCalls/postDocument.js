export default function postDocument(documentName, docInfo) {
  return fetch(`https://aachallengeone.now.sh/update/${documentName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(docInfo)
  });
}

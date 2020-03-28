document.addEventListener('DOMContentLoaded', event => {
  const app = firebase.app();
  const db = firebase.firestore();
  const myPost = db.collection('posts').doc('mypost');

  myPost.onSnapshot(doc => {
    const data = doc.data();
    document.write(data.title + `<br>`);
    document.write(data.createdAt);
  });
});

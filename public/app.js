document.addEventListener('DOMContentLoaded', event => {
  const app = firebase.app();
});

function uploadFile(files) {
  const storageRef = firebase.storage().ref();
  const horseRef = storageRef.child('horse.jpg');

  const file = files.item(0);

  const task = horseRef.put(file);

  task.then(snpashot => {
    console.log(snpashot);
    const url = snpashot.downloadURL;
    document.querySelector('#imgUpload').setAttribute('src', url);
  });
}

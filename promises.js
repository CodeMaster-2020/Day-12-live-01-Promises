console.log("first");
setTimeout(() => {
  console.log("second");
}, 1000);
console.log("third");

let num = 4;

new Promise((resolve, reject) => {
  if (num === 5) {
    setTimeout(() => {
      resolve("yeah!");
    }, 1000);
  } else {
    setTimeout(() => {
      reject("not yeah :(");
    }, 1000);
  }
})
  .then(result => {
    console.log(result);

    return "sono il risultato del primo then";
  })
  .then(result => {
    console.log(result);

    return "sono il risultato del secondo then";
  })
  .catch(err => {
    console.log(err);

    return "sono il return del catch";
  })
  .finally(result => {
    console.log(result);
  });

let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});

let promise2 = new Promise((resolve, reject) => {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done2"), 3000);
});

Promise.all([promise, promise2]).then(values => {
  console.log(values);
});

// promise
//   .then(res => {
//     console.log(res);

//     return res + " wow";
//   })
//   .then(res => {
//     console.log(res);

//     return promise2;
//   })
//   .then(res => {
//     console.log(res);
//   });

function download(url, callback) {
  setTimeout(function() {
    callback(url);
  }, 3000);
}

function download(url, callback) {
  setTimeout(function() {
    callback(url);
  }, 3000);
}

// download("url di prova", result => {

// });

function downloadPromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(url);
    }, 3000);
  });
}

// downloadPromise("url di prova con promise").then(result => {
//   console.log(result);
// });

function getGithubCodeMasterOrganization() {
  fetch("https://api.github.com/orgs/CodeMaster-2020")
    .then(response => {
      console.log(response);

      return response.json();
    })
    .then(result => {
      console.log(result.avatar_url);
    })
    .catch(err => {
      console.log(err);
    });
}

async function getGithubCodeMasterOrganizationAsync() {
  const response = await fetch("https://api.github.com/orgs/CodeMaster-2020");

  const result = await response.json();

  return result.avatar_url;
}

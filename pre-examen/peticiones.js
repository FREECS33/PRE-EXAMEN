//diferencias entre var, const y let
(() => {
  var message = "Mensaje inicial";

  if (true) {
    var message = "Mensaje dentro de bloque condicional";
    console.log(`var: ${message}`);
  }
  console.log(`var: ${message}`);
})();

(() => {
  let message = "Mensaje inicial";

  if (true) {
    let message = "Mensaje dentro de bloque condicional";
    console.log(`let: ${message}`);
  }
  console.log(`let: ${message}`);
})();

(() => {
  const message = "Mensaje inicial";
  if (true) {
    const message = "Mensaje dentro de bloque condicional";
    console.log(`const: ${message}`);
  }
  try {
    message = "Mensaje nuevo";
  } catch (e) {
    console.log(`const error: ${e.message}`);
  }
  console.log(`const: ${message}`);
})();

//peticiones
(async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/typicode/demo/comments"
  );
  const data = await response.json();
  console.log("GET:", data);
})();

(async () => {
  const data = {
    body: "some another comment",
    postId: 1,
  };
  const response = await fetch(
    "https://my-json-server.typicode.com/typicode/demo/comments",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const responseData = await response.json();
  console.log("POST:", responseData);
})();

fetch(`https://my-json-server.typicode.com/typicode/demo/comments/2`, {
  method: "PUT",
  body: JSON.stringify({
    body: "here's come a new another comment",
    postId: 10,
    id: 2,
  }),
  headers: {
    "Content-type": "application/json",
  },
})
  .then((response) => {
    response
      .json()
      .then((response) => {
        console.log("PUT:", response);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });

fetch("https://my-json-server.typicode.com/typicode/demo/comments/2", {
  method: "DELETE",
})
  .then((response) => {
    response
      .json()
      .then((json) => {
        console.log("DELETE:", json);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });

//ejemplo de promesa y diferencias entre then, catch y finally
const promise = (intento) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (intento) {
                resolve("Exito")
            } else {
                reject("Error")
            }
        }, 5000);
    });
}

promise(true)
.then((response) => {
    console.log(`THEN: ${response}`);
})
.catch((error) => {
    console.log(`CATCH: ${error}`);
})
.finally(() => {
    console.log("FINALLY: Ejecutandose funcione o falle 😎");
});

promise(false)
.then((response) => {
    console.log(`THEN: ${response}`);
})
.catch((error) => {
    console.log(`CATCH: ${error}`);
})
.finally(() => {
    console.log("FINALLY: Ejecutandose funcione o falle 😎");
})
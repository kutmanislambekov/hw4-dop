const containerEl = document.querySelector(".container");
const box = document.querySelector(".box");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    data.map((el) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");
      wrapper.innerHTML += `
        <h1>${el.id}</h1>
        </br>
        <p><b>userId</b>: ${el.userId}</p>
        <p><b>title</b>: ${el.title}</p>
        <p><b>body</b>: ${el.body}</p>`
      containerEl.appendChild(wrapper);
    });

    const btn = document.querySelector('#btn');
    btn.addEventListener("click", () => {
      const inputValue = document.querySelector('input').value;

      console.log(data[inputValue]);

        if (data[inputValue] !== undefined) {
          const el = data[inputValue - 1]
          const wrapper = document.createElement("div");
          wrapper.classList.add("wrapper");

          wrapper.innerHTML += `
        <h1>${el.id}</h1>
        </br>
        <p><b>userId</b>: ${el.userId}</p>
        <p><b>title</b>: ${el.title}</p>
        <p><b>body</b>: ${el.body}</p>`
          box.appendChild(wrapper);
        } else {
          alert("Такого id нет")
        }
      
    });
  })
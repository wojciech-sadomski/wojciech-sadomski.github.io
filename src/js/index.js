import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("Witam serdecznie! Miło Cię widzieć! 🙂");

fetch("https://api.github.com/users/wojciech-sadomski/repos")
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".projects-grid--js");
    console.log(res);
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;
      const template = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img src="../public/img/Github-Icon.svg" alt="" />
          <h3 class="project__grid project__title">
            <span class="project__label">Project:</span
            ><span>${name}</span>
          </h3>
          <p class="project__grid">
            <span class="project__label">Descryption: </span
            ><span>${description}</span>
          </p>
          <p class="project__grid">
            <span class="project__label">Demo: </span>
            <span>
              &lt;<a href="${homepage}" title=${name} class="project__link" target="_blank" alt="Wojciech Sadomski ${description}"
              rel="noopener noreferrer"
                >see more</a
              >&gt;
            </span>
          </p>
          <p class="project__grid">
            <span class="project__label">Github: </span>
            <span>
              &lt;<a href="${html_url}"
              title=${name}
              target="_blank" alt="Wojciech Sadomski ${description}"
              rel="noopener noreferrer"
              class="project__link"
                >surce code</a
              >&gt;
            </span>
          </p>
        </div>
      </article>`;
      if (description) {
        container.innerHTML += template;
      }
    }
  })
  .catch((e) => console.log(e));

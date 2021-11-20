<template>
  <article class="container_error">
    <div class="title text-3xl">404</div>
    <div class="img">
      <img src="@/static/404.svg" width="540" height="447" alt="404" />
    </div>
    <div class="description">
      <h1>I have bad news for you</h1>
      <p>
        The page you are looking for might be removed or is temporarily
        unavailable
      </p>
      <router-link to="/">
        <button>Back to homepage</button>
      </router-link>
    </div>
  </article>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap");

.container_error {
  font-family: "Space Mono", monospace;
  background: #f5f5f5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "title title" "img description";
  grid-template-rows: auto;
  row-gap: 0.2rem;
  column-gap: 20px;
  height: 100vh;
  align-items: center;
}
.title {
  text-align: center;
  grid-area: title;
}
.img {
  grid-area: img;
  text-align: center;
}
.description {
  grid-area: description;
}

span {
  padding-left: 2rem;
  font-size: 1.4rem;
}

.description h1 {
  font-size: 3rem;
  width: 70%;
  padding-bottom: 2.5rem;
}

.description p {
  width: 40%;
  padding-bottom: 2rem;
}

.description button {
  cursor: pointer;
  padding: 1.2rem 2.4rem;
  border: 0;
  background: #333333;
  color: #ffffff;
}

.description button:hover {
  background: #272727;
}

@media screen and (max-width: 1065px) {
  .description h1 {
    width: 100%;
  }

  .description p {
    width: 60%;
    padding-bottom: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .container_error {
    grid-template-areas: "title title" "img img" "description description";
    text-align: center;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .description {
    text-align: left;
    padding-bottom: 2rem;
    background: #f5f5f5;
  }
  .description p {
    width: 100%;
  }
}

@media screen and (max-width: 548px) {
  .description h1 {
    font-size: 2rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>

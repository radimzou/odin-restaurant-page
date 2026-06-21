import catPhoto from "../assets/photo-var-1.jpg";

const homePage = `<section class="hero-container">
<div class="hero-image">
<figure class="my-figure">
<figcaption>Are you hungry?</figcaption>
</figure>
</div>
<div class="hero-article">
<p>Už jste slyšeli o kocourovi jménem Bomby?</p>
<p>
Tento velký jedlík je stálým obyvatelem naší restaurace a co nedojí
hosté, to velice s chutí spořádá on 😽
</p>
<p>Dejte si tedy na něj pozor a vše pečlivě dojídejte 😊</p>
</div>
</section>
<section class="menu">
<div class="menu-container">
<div class="menu-list-title">Ochutnejte naše české klasiky!</div>
<ul class="menu-list">
<li>Bramboračka</li>
<li>Zelňačka</li>
<li>Svíčková</li>
<li>Guláš</li>
<li>Smažák</li>
</ul>
</div>
</section>`;

const homePageEx = (contentDiv) => {
  contentDiv.insertAdjacentHTML("beforeend", homePage);

  const figureEl = document.querySelector(".my-figure");
  const figcaptionEL = document.querySelector("figcaption");
  const catImg = document.createElement("img");

  catImg.src = catPhoto;
  figureEl.insertBefore(catImg, figcaptionEL);
};

export default homePageEx;

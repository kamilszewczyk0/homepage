{
  const welcomeFunction = () => {
    console.log("Witam wszystkich adeptów tajemnej sztuki klepania kodu!");
  };

  const truth = document.querySelector(".hero__button-truth");
  const victim = document.querySelector(".hero__button-victim");
  const changeTabell = document.querySelector(".drink-list__change");
  const change = document.querySelector(".hero__changable-elem");

  const changingPicture = () => {
    document.querySelector(".hero__img").src =
      "https://sunflowereigo.files.wordpress.com/2013/05/01-the-blue-baby-dragon-story-dragon-300.jpg?w=584";
    document.querySelector(".hero__img-description").textContent =
      "A tak wyglądam naprawdę";
  };

  const changingStatement = () => {
    change.classList.add("hero__changable-elem--true");
    change.innerHTML = "<br>pozycję Front-End Dev!!!";
  };

  const changingTabell = () => {
    const tabell = document.querySelector(".drink-list__tabell");

    if (change.textContent === "trolle") {
      tabell.innerHTML = `<caption class="drink-list__name">Co piję po pokonaniu potworów</caption>
        <thead>
          <tr class="drink-list__table-row">
            <th class="drink-list__table-cell drink-list__table-header" scope="col">Nazwa</th>
            <th class="drink-list__table-cell drink-list__table-header" scope="col">Bazowy Alkohol</th>
            <th class="drink-list__table-cell drink-list__table-header" scope="col">Typ</th>
            <th class="drink-list__table-cell drink-list__table-header" scope="col">Szkło</th>
          </tr>
        </thead>
        <tbody>
          <tr class="drink-list__table-row">
            <th class="drink-list__table-cell drink-list__table-header" scope="row">Manhattan</th>
            <td class="drink-list__table-cell"> American whiskey</td>
            <td class="drink-list__table-cell"> Aperitif</td>
            <td class="drink-list__table-cell">Coupette</td>
          </tr>
          <tr class="drink-list__table-row">
            <th class="drink-list__table-cell drink-list__table-header" scope="row">Mojito</th>
            <td class="drink-list__table-cell">Rum</td>
            <td class="drink-list__table-cell">Orzeźwiający</td>
            <td class="drink-list__table-cell">Long glass</td>
          </tr>
          <tr class="drink-list__table-row">
            <th class="drink-list__table-cell drink-list__table-header" scope="row">Garibaldi</th>
            <td class="drink-list__table-cell">Campari</td>
            <td class="drink-list__table-cell">Aperitif</td>
            <td class="drink-list__table-cell">Long glass</td>
          </tr>
          <tr class="drink-list__table-row">
            <th class="drink-list__table-cell drink-list__table-header" scope="row">Dry Martini</th>
            <td class="drink-list__table-cell">Gin/Wódka</td>
            <td class="drink-list__table-cell">All day</td>
            <td class="drink-list__table-cell">Coupette</td>
          </tr>
        </tbody>`;
    } else {
      tabell.innerHTML = `<caption class="drink-list__name">Czego się uczę</caption>
        <thead>
          <tr class="drink-list__table-row">
            <th class="drink-list__table-cell drink-list__table-header" scope="col">Nazwa technologii</th>
            <th class="drink-list__table-cell drink-list__table-header" scope="col">Czy już umiem?</th>
            <th class="drink-list__table-cell drink-list__table-header" scope="col">Poziom trudności</th>
          </tr>
        </thead>
        <tbody>
          <tr class="drink-list__table-row">
            <th class="drink-list__table-cell drink-list__table-header" scope="row">HTML & CSS</th>
            <td class="drink-list__table-cell">✔</td>
            <td class="drink-list__table-cell">Niski</td>
          </tr>
          <tr class="drink-list__table-row">
            <th class="drink-list__table-cell drink-list__table-header" scope="row">JavaScript</th>
            <td class="drink-list__table-cell">✔</td>
            <td class="drink-list__table-cell">Średni/Trudny</td>
          </tr>
          <tr class="drink-list__table-row">
            <th class="drink-list__table-cell drink-list__table-header" scope="row">React</th>
            <td class="drink-list__table-cell">❌</td>
            <td class="drink-list__table-cell">Trudny</td>
          </tr>
          <tr class="drink-list__table-row">
            <th class="drink-list__table-cell drink-list__table-header" scope="row">Firebase</th>
            <td class="drink-list__table-cell">❌</td>
            <td class="drink-list__table-cell">Kosmicznie trudny</td>
          </tr>
          <tr class="drink-list__table-row">
            <th class="drink-list__table-cell drink-list__table-header" scope="row">Figma</th>
            <td class="drink-list__table-cell">❌</td>
            <td class="drink-list__table-cell">Łatwy</td>
          </tr>
          <tr class="drink-list__table-row">
            <th class="drink-list__table-cell drink-list__table-header" scope="row">Konsola</th>
            <td class="drink-list__table-cell">✔</td>
            <td class="drink-list__table-cell">Średni</td>
          </tr>
        </tbody>`;
      document.querySelector(".drink-list").style.height = "700px";
    }
  };

  truth.addEventListener("click", changingPicture);

  victim.addEventListener("click", changingStatement);

  changeTabell.addEventListener("click", changingTabell);
}

let pokemonRender = pokemons;

let func = (pokemon) => {
    pokemon.forEach((element) => {
        let item = document.createElement("li");
        item.className = "item";
        list.appendChild(item);

        let img = document.createElement("img");
        img.classList.add("item__img");
        img.setAttribute("src", element.img);
        item.append(img);

        let head = document.createElement("h3");
        head.className = "heading";
        head.textContent = element.name;
        item.append(head);

        let title = document.createElement("p");
        title.className = "title";
        title.textContent = element.type;
        item.append(title);

        let like = document.createElement("div");
        like.textContent = "👍";
        like.className = "like";
        item.append(like);

        like.addEventListener("click", () => {
            if (like.classList.toggle("Toggle")) {
                result.value = Number(result.value) + Number(1);
            } else if (like.classList.toggle("toggle")) {
                result.value = result.value - 1;
            }
        });
    });
};

func(pokemonRender);

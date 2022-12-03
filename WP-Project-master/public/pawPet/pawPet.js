let pets;
fetch("pawpet.json")
  .then((response) => response.json())
  .then((data) => {
    try {
      pets = JSON.parse(data);
    } catch (e) {
      pets = data;
    }
    class showPets {
      constructor(pet) {
        this.pet = pet;
      }

      addProducts(index) {
        let img = document.createElement("img");
        img.src = this.pet[index].petImage;
        let div2 = document.createElement("div");
        div2.classList.add("services__data");
        let p = document.createElement("p");
        p.classList.add("services__description");
        p.innerHTML = `Owner Name: ${this.pet[index].ownerName}<br/>Pet Name: ${this.pet[index].petName}<br/>Location: ${this.pet[index].location}<br/> Contact Number: ${this.pet[index].contact}`;
        div2.appendChild(img);
        div2.appendChild(p);
        let cat = document.querySelector(".services__container");
        cat.appendChild(div2);
      }
    }
    obj = new showPets(pets);
    for (let each in pets) {
      obj.addProducts(each);
    }
  });

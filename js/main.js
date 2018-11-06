function Cards(title, accroche, description) {
    this.title = title;
    this.accroche = accroche;
    this.description = description;
}

function addCard() {
    let titles = document.getElementById('title').value;
    let accroches = document.getElementById('accroche').value;
    let description = document.getElementById('description').value;
    newObject = new Cards(titles, accroches, description);
    document.getElementById('title').value = "";
    document.getElementById('accroche').value = "";
    document.getElementById('description').value = "";

    let htmlManager = {
        parentElement: document.getElementById('viewCard'),
        card: [newObject],
        createHTMLElement: function (element, title, accroche, description, parentElement) {
            if (title !== "" && accroche !== "" && description !== "") {
                let childElement = document.createElement(element);
                childElement.className = "col-5 m-0 p-0 mx-auto mt-2";
                parentElement.appendChild(childElement);

                let titleElement = document.createElement(element);
                titleElement.className = "col-12 m-0 p-0 text-center bordertitle";
                titleElement.innerHTML = title;
                childElement.appendChild(titleElement);

                let accrocheElement = document.createElement(element);
                accrocheElement.className = "col-12 m-0 p-0 text-left borderaccroche";
                accrocheElement.innerHTML = accroche;
                childElement.appendChild(accrocheElement);

                let descriptionElement = document.createElement(element);
                descriptionElement.className = "col-12 m-0 p-0 text-left borderdesc";
                descriptionElement.innerHTML = description;
                childElement.appendChild(descriptionElement);
            }
        },
        displayCard: function (array) {
            let that = this;
            array.forEach(function (card) {
                that.createHTMLElement('div', card.title, card.accroche, card.description, that.parentElement);
            })
        },
    }
    htmlManager.displayCard(htmlManager.card);
}
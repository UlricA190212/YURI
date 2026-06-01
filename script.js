function searchBooks() {

    let input =
        document.getElementById("searchInput");

    let filter =
        input.value.toLowerCase();

    let cards =
        document.getElementsByClassName("book-card");

    for (let i = 0; i < cards.length; i++) {

        let title =
            cards[i].getElementsByTagName("h2")[0];

        let text =
            title.textContent || title.innerText;

        if (
            text.toLowerCase().indexOf(filter) > -1
        ) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
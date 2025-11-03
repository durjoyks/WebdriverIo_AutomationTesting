class SearchObjects {

    get SearchIcon() {
        return $('.search-icon'); // selects <a> with class="search-icon"
    }

    get SearchInputField() {
        return $("//input[@placeholder='Search']"); // selects by XPath
    }


}

module.exports = new SearchObjects(); // export an instance
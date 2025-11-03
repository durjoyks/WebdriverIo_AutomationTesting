const SearchObject = require('./SearchObject');

class SearchAction {

    async ClickSearchIcon() {
        await SearchObject.SearchIcon.click();
    }

    async SearchProductName(productName) {
        await SearchObject.SearchInputField.setValue(productName);
    }


    async Search(productName){
        await this.ClickSearchIcon();
        await this.SearchProductName(productName);
        await browser.keys("Enter");
    }

}

module.exports = new SearchAction();
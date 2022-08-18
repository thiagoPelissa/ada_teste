

const cardViewModel = require('../../server/view_models/card_view_model').CardViewModel;


class CardMapper {
    constructor(card) {
        this.id = card.id;
        this.title = card.title;
        this.content = card.content;
        this.list = card.list;
        this.createdAt = card.createdAt;
        this.updatedAt = card.updatedAt;
    }

    modelToViewModel() {
        const result = new cardViewModel(this.id, this.title, this.content, this.list, this.createdAt, this.updatedAt);
        return result;
    }
}

module.exports = {
    CardMapper
}
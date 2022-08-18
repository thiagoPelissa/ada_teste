const card_model = require('../../infra/sequelize/models/card_model');
const cardViewModel = require('../../server/view_models/card_view_model').CardViewModel;
const mapper = require('../../server/mapper/card_mapper');


//TODO implemntar regras de negocios como exemplo

export module EntityModule {
    export interface ICardEntity {
        insert();
        get();
        update();
        remove(id: string);
    }

    export class CardEntity implements ICardEntity {
        id: string;
        title: string;
        content: string;
        list: string;


        constructor(id?, title?, content?, list?) {
            this.id = id;
            this.title = title;
            this.content = content;
            this.list = list;
        }

        private async checkBeforeSendData(id) {
            if (!id)
                throw new Error('id is required');

            const card = await card_model.get(id);

            if (!card)
                throw new Error('card not found');

        }

        async get() {
            try {
                const cards = await card_model.get();

                const result: typeof cardViewModel[] = [];

                cards.forEach(card => {
                    result.push(new mapper.CardMapper(card).modelToViewModel());
                });

                return result
            }
            catch (err) {
                console.log(err)
                throw new Error(err)
            }

        }

        async insert() {
            try {
                const card = await card_model.insert(this.id, this.title, this.content, this.list);

                if (!card) {
                    throw new Error("Card not inserted");
                }

                const result = new mapper.CardMapper(card).modelToViewModel();

                return result
            }
            catch (err) {
                console.log(err)
                throw new Error(err)
            }
        };


        async update() {
            try {
                this.checkBeforeSendData(this.id)

                const card = await card_model.update(this.id, this.title, this.content, this.list);

                if (!card) {
                    throw new Error("Card not updated or not found");
                }

                const result = new mapper.CardMapper(card).modelToViewModel();

                return result
            }
            catch (err) {
                console.error(err)
                throw new Error(err)
            }
        }

        async remove(id) {
            try {
                this.checkBeforeSendData(id)
                const cards = await card_model.remove(id);
                const result: typeof cardViewModel[] = [];
                cards.forEach(card => {
                    result.push(new mapper.CardMapper(card).modelToViewModel());
                });

                return result
            }
            catch (err) {
                console.log(err)
                throw new Error(err)
            }
        };



    }
}
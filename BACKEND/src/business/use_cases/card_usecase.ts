const card_entity = require('../entities/card_entity');

import { EntityModule } from '../entities/card_entity';

const uuid = require('uuid');


export module UseCaseModule {
    //TODO implementar regras de aplicação como exemplo
    export class CardUseCase {
        constructor() { }

        async insert(params) {
            try {
                const { titulo, conteudo, lista} = params
                const id = uuid.v1();
                var entity: EntityModule.ICardEntity = new EntityModule.CardEntity(id, titulo, conteudo, lista);
                const card = await entity.insert();
                return card;
            }
            catch (err) {
                console.log(err)
                throw new Error(err)
            }
        };

        async update(id, title, content, list) {
            try {   
                var entity: EntityModule.ICardEntity = new EntityModule.CardEntity(id, title, content, list);
                const card = await entity.update();
                return card;
            }
            catch (err) {
                console.log(err)
                throw new Error(err)
            }
        };


        async get() {
            try {
                var entity: EntityModule.ICardEntity = new EntityModule.CardEntity();
                const cards = await entity.get();
                return cards;
            }
            catch (err) {
                console.log(err)
                throw new Error(err)
            }
        };

        async remove(id) {
            try {
                var entity: EntityModule.ICardEntity = new EntityModule.CardEntity();
                const cards = await entity.remove(id);
                return cards;
            }
            catch (err) {
                console.log(err)
                throw new Error(err)
            }
        };
    }
}



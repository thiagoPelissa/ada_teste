const card_entity = require('../entities/card_entity');

import { EntityModule } from '../entities/card_entity';
import { ICardEntity } from '../interfaces/entities/card_entity_interface';
import { ICardUseCase } from '../interfaces/use_case/card_usecase_interface';
const generateUUID = require('../../utils/generatesUUID')
 

const uuid = require('uuid');


export module UseCaseModule {
    //TODO implementar regras de aplicação como exemplo
    export class CardUseCase implements ICardUseCase  {
        constructor() { }

        async insert(params) {
            try {
                const { titulo, conteudo, lista} = params
                const id = generateUUID();
                var entity: ICardEntity = new EntityModule.CardEntity(id, titulo, conteudo, lista);
                const card = await entity.insert();
                return card;
            }
            catch (err) {
                console.error(err)
                throw new Error(err)
            }
        };

        async update(id, title, content, list) {
            try {   
                var entity: ICardEntity = new EntityModule.CardEntity(id, title, content, list);
                const card = await entity.update();
                return card;
            }
            catch (err) {
                console.error(err)
                throw new Error(err)
            }
        };


        async get() {
            try {
                var entity: ICardEntity = new EntityModule.CardEntity();
                const cards = await entity.get();
                return cards;
            }
            catch (err) {
                console.error(err)
                throw new Error(err)
            }
        };

        async getById(id) {
            try {
                var entity: ICardEntity = new EntityModule.CardEntity();
                const card = await entity.getById(id);
                return card;
            }
            catch (err) {
                console.error(err)
                throw new Error(err)
            }
        };

        async remove(id) {
            try {
                var entity: ICardEntity = new EntityModule.CardEntity();
                const cards = await entity.remove(id);
                return cards;
            }
            catch (err) {
                console.error(err)
                throw new Error(err)
            }
        };
    }
}



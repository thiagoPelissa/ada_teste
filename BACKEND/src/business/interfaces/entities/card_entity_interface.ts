

export interface ICardEntity {
    insert();
    get();
    getById(id:string);
    update();
    remove(id: string);
}
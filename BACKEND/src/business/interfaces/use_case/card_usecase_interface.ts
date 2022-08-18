

export interface ICardUseCase {
    get();
    getById(id: string);
    update(id: string, title: string, content: string, list: string);
    remove(id: string);
    insert(params);
}
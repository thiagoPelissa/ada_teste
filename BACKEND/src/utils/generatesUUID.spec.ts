const generateUUID = require('./generatesUUID')

describe('Sanitizer Offset Tests', () =>{
    test('generateUUI__validuuid__true', ()=>{
        const uuid = generateUUID()
        //check if uuid is valid
        expect(uuid).toBeDefined()
        expect(uuid).toHaveLength(36)
    });

    test('generateUUI__validuuidSyntax__true', ()=>{
        const uuid = generateUUID()
        //check if uuid is valid with regex
        expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
    })

})
import { StateSchema } from "app/providers/StoreProvider"
import { getProfileFirstName } from "./getProfileFirstName"
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe('getProfileFirstName.test', () => {
    test('should return firstname', () => {
        const data = {
            username: 'admin',
            age: 36,
            country: Country.Russia,
            lastname: 'Aviatus',
            first: 'Masha',
            city: 'SPb',
            currency: Currency.RUB,
        };
        const state: DeepPartial<StateSchema> = {
            profile: { 
                data: data 
            },
        }
        expect(getProfileFirstName(state as StateSchema)).toEqual(data.first)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileFirstName(state as StateSchema)).toEqual('')
    })
})
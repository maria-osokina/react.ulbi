import { StateSchema } from "app/providers/StoreProvider"
import { getProfileData } from "./getProfileData"
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe('getProfileData.test', () => {
    test('should return data', () => {
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
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
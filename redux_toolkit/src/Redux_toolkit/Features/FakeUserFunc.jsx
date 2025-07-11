import { Chance } from "chance";

const chance = new Chance();

export const fakeUserFunc = () => {
    const users = {
        name: chance.name(),
        email: chance.email(),
        city: chance.city(),
    }
    return users;
}
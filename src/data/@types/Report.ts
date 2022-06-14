import {Pet} from './Pet'

export interface Report{
    _id: string;
    id: number;
    email: string;
    monthlyAmount: string;
    pet: Pet;
}

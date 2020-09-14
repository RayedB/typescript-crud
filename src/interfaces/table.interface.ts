export interface ITable{
    number: number,
    capacity: number,
    isSplitable: boolean,
    isAvailable?: boolean,
    seatedPatrons?: number
}
export type PeopleStateType = 'NOMAL' | 'HEAD' | 'EXCEPT';
export type GroupType = 'NUMBER' | 'GROUP';
export type ModeType = 'LIST' | 'RESULT';
export interface DataType {
    value: number;
    state: PeopleStateType;
}
export declare const peopleStateTypeMap: {
    NOMAL: string;
    EXCEPT: string;
    HEAD: string;
};

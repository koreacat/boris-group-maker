/// <reference types="react" />
import { DataType, GroupType } from "../types";
interface GroupListProps {
    data: DataType[];
    groupNumber: number;
    groupType: GroupType;
}
declare const GroupList: ({ data, groupNumber, groupType }: GroupListProps) => JSX.Element;
export default GroupList;

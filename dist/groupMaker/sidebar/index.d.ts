/// <reference types="react" />
import { DataType, GroupType, ModeType } from "../types";
interface SidebarProps {
    data: DataType[];
    setData: (data: DataType[]) => void;
    groupType: GroupType;
    setGroupType: (groupType: GroupType) => void;
    groupNumber: number;
    setGroupNumber: (groupNumber: number) => void;
    mode: ModeType;
    setMode: (mode: ModeType) => void;
}
declare const Sidebar: ({ data, setData, groupType, setGroupType, groupNumber, setGroupNumber, mode, setMode }: SidebarProps) => JSX.Element;
export default Sidebar;

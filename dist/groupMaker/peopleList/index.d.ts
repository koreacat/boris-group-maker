import { DataType } from "../types";
import React from "react";
interface PeopleListProps {
    data: DataType[];
    setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}
declare const PeopleList: ({ data, setData }: PeopleListProps) => JSX.Element;
export default PeopleList;

import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { DataType, peopleStateTypeMap } from "../types";
import React from "react";
const cx = classnames.bind(styles);

interface PeopleListProps {
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}

const PeopleList = ({ data, setData }: PeopleListProps) => {
  const peopleEls = data.map((e, i) => {
    const type = peopleStateTypeMap[e.state];

    const handleClick = () => {
      setData((prev: DataType[]) => prev.map((e, j) => {
        if (i === j) {
          if (e.state === 'NOMAL') return { state: 'HEAD', value: e.value };
          else if (e.state === 'HEAD') return { state: 'EXCEPT', value: e.value };
          else return { state: 'NOMAL', value: e.value };
        }
        else return e;
      }))
    }

    return (
      <li key={i + 1} className={cx('cell', type)} onClick={handleClick}>
        {i + 1}
      </li>
    )
  })

  return (
    <ul className={cx('listArea')}>
      {peopleEls}
    </ul>
  )
}

export default PeopleList;
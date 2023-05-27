import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { DataType, GroupType, PeopleStateType, peopleStateTypeMap } from "../types";
const cx = classnames.bind(styles);

interface GroupProps {
  index: number;
  e: any[];
  setArr: React.Dispatch<React.SetStateAction<any[][]>>;
}

const Group = ({ index, e, setArr }: GroupProps) => {
  const [title, setTitle] = useState(`${index + 1}조`);

  const els = [...e].map((d, j) => {
    const type = peopleStateTypeMap[d.state as PeopleStateType];

    const handleClick = () => {
      setArr((prev: any) => prev.map((e: any) => {

        return e.map((people: any) => {
          if (people.value === d.value) {
            if (people.state === 'NOMAL') return { state: 'HEAD', value: people.value };
            else return { state: 'NOMAL', value: people.value };
          }
          else return people;
        })

      }))
    }

    return (
      <li key={j} className={cx('cell', type)} onClick={handleClick}>
        {d.value}
      </li>
    )
  })

  return (
    <div className={cx('groupWrap')}>
      <div className={cx('inputWrap')}>
        <input type="text" className={cx('input')} value={title} onChange={(e: any) => setTitle(e.value)} />
      </div>
      <ul className={cx('groupListArea')}>
        {els}
      </ul>
    </div>
  );
}


interface GroupListProps {
  data: DataType[];
  groupNumber: number;
  groupType: GroupType;
}

const GroupList = ({ data, groupNumber, groupType }: GroupListProps) => {
  const [arr, setArr] = useState(Array.from(Array(groupNumber), () => Array()));

  useEffect(() => {
    if(data.length < groupNumber) {
      return;
    }

    // 한 모둠당 모둠원 수
    if(groupType === 'NUMBER'){
      const num = Math.floor(data.length / groupNumber);
      const newArr = Array.from(Array(num), () => Array());
      let headIdx = 0;
      data.forEach(d => {
        if (d.state === 'HEAD') newArr[headIdx++].push(d);
      });
      data.forEach(d => {
        if (d.state === 'NOMAL') newArr[headIdx++ % num].push(d);
      });
      setArr(newArr);
      return;
    }

    // 총 모둠 수
    if(groupType === 'GROUP') {
      const newArr = Array.from(Array(groupNumber), () => Array());
      let headIdx = 0;
      data.forEach(d => {
        if (d.state === 'HEAD') newArr[headIdx++].push(d);
      });
  
      data.forEach(d => {
        if (d.state === 'NOMAL') newArr[headIdx++ % groupNumber].push(d);
      });
  
      setArr(newArr);
      return;
    }
  }, [data])


  const arrEls = arr.map((e, index) => {
    return <Group
      key={index}
      index={index}
      e={e}
      setArr={setArr}
    />
  })

  return (
    <div className={cx('groupArea')}>
      {arrEls}
    </div>
  )
}

export default GroupList;
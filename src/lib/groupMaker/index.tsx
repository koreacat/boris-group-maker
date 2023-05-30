import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { useState } from "react";
import Sidebar from "./sidebar";
import { DataType, GroupType, ModeType } from "./types";
import PeopleList from "./peopleList";
import GroupList from "./groupList";
const cx = classnames.bind(styles);

const GroupMaker = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [groupType, setGroupType] = useState<GroupType>('NUMBER');
  const [groupNumber, setGroupNumber] = useState<number>(0);
  const [mode, setMode] = useState<ModeType>('LIST');

  const getContents = () => {
    if (data.length === 0) return (
      <div className={cx('emptyList')}>
        <em className={cx('title')}>모둠 만들기</em>
        <span className={cx('desc')}>총 인원 수를 입력하고 모둠원을 클릭해주세요.</span>
      </div>
    )

    switch (mode) {
      case 'LIST': return <PeopleList data={data} setData={setData} />;
      case 'RESULT': return <GroupList data={data} groupNumber={groupNumber} groupType={groupType} />;
    }
  }

  return (
    <div className={cx('groupMakerArea')}>
      <div className={cx('groupMakerWrap', mode)}>
        <div className={cx('resultArea')}>
          {getContents()}
        </div>

        <Sidebar
          data={data}
          setData={setData}
          groupType={groupType}
          setGroupType={setGroupType}
          groupNumber={groupNumber}
          setGroupNumber={setGroupNumber}
          mode={mode}
          setMode={setMode}
        />
      </div>
    </div>
  )
}

export default GroupMaker;
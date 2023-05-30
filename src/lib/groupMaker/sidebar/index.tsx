import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { DataType, GroupType, ModeType } from "../types";
const cx = classnames.bind(styles);

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

const Sidebar = ({ data, setData, groupType, setGroupType, groupNumber, setGroupNumber, mode, setMode }: SidebarProps) => {

  const totalNumberValue = `${data.length}`.replace(/(^0+)/, "");
  const groupNumberValue = `${groupNumber}`.replace(/(^0+)/, "");

  const handleChangeNumber = (e: any) => {
    const number = e.target.value > 500 ? 500 : e.target.value;
    setData(new Array(Number(number)).fill({}).map((e, i) => { return { state: 'NOMAL', value: i + 1 } }));
  }

  const handleChangeGroupNumber = (e: any) => {
    const number = e.target.value > 500 ? 500 : e.target.value;
    setGroupNumber(Number(number));
  }

  const creatGroup = () => {
    const newData = [...data];
    if (data.length <= 0) {
      alert('인원 수를 입력해주세요!');
      return;
    }

    if (groupNumber <= 0) {
      alert('모둠 수를 입력해주세요!');
      return;
    }

    if (data.length < groupNumber) {
      alert('모둠 수가 총 인원 수보다 많습니다!');
      return;
    }

    if (groupType === 'NUMBER') {
      if (data.filter(e => e.state === 'HEAD').length > Math.floor(data.length / groupNumber)) {
        alert(`모둠장 수가 모둠 수보다 많습니다! 최대 가능한 모둠장의 수는 ${Math.floor(data.length / groupNumber)}명 입니다.`);
        return;
      }
    }

    if (groupType === 'GROUP') {
      if (data.filter(e => e.state === 'HEAD').length > groupNumber) {
        alert('모둠장 수가 모둠 수보다 많습니다!');
        return;
      }
    }

    newData.sort(() => Math.random() - 0.5);
    setData(newData);
    setMode('RESULT');
  }

  const handleChangeGroupType = (e: any) => {
    setGroupType(e.currentTarget.value);
  }

  const reset = () => {
    setData([]);
    setGroupNumber(0);
    setGroupType('NUMBER');
    setMode('LIST');
  }

  return (
    <aside className={cx('sidebarArea')}>
      <div className={cx('sidebarWrap', mode)}>
        <div className={cx('inputArea', mode)}>
          <span className={cx('title')}>총 인원 수</span>
          <label className={cx('inputWrap', { blinking: data.length === 0 })}>
            <input className={cx('input')} type="number" min={0} max={500} value={totalNumberValue} onChange={handleChangeNumber} disabled={mode === 'RESULT'} />
          </label>
        </div>

        <div className={cx('inputArea', mode)}>
          <span className={cx('title')}>모둠 구성 방식</span>

          <div className={cx('radioArea')}>
            <label className={cx('radioWrap')}>
              <input className={cx('radio')} type="radio" name="groupType" value="NUMBER" onChange={handleChangeGroupType} checked={groupType === 'NUMBER'} disabled={mode === 'RESULT'} />
              <span className={cx('radioTitle')}>한 모둠당 모둠원 수</span>
            </label>
            <label className={cx('radioWrap')}>
              <input className={cx('radio')} type="radio" name="groupType" value="GROUP" onChange={handleChangeGroupType} checked={groupType === 'GROUP'} disabled={mode === 'RESULT'} />
              <span className={cx('radioTitle')}>총 모둠 수</span>
            </label>
          </div>
        </div>

        <div className={cx('inputArea', mode)}>
          <span className={cx('title')}>{groupType === 'NUMBER' ? '모둠원 수' : '모둠 수'}</span>
          <label className={cx('inputWrap', { blinking: groupNumber === 0 })}>
            <input className={cx('input')} type="number" min={0} max={500} value={groupNumberValue} onChange={handleChangeGroupNumber} disabled={mode === 'RESULT'} />
          </label>
        </div>

        <div className={cx('buttonWrap', mode)}>
          {
            mode === 'LIST' &&
            <button type="button" className={cx('button')} onClick={creatGroup}>만들기</button>
          }
          {
            mode === 'RESULT' &&
            <button type="button" className={cx('button', 'reset')} onClick={reset}>다시 만들기</button>
          }
        </div>

        <ol className={cx('descWrap')}>
          <li className={cx('title')}>도움말</li>
          <li className={cx('desc')}>1. 총 인원 수를 숫자로 입력해주세요.</li>
          <li className={cx('desc')}>2. 모둠 구성 방식을 선택하고, 한 모둠당 모둠원 수나 총 모둠 수를 입력해주세요.</li>
          <li className={cx('desc')}>
            3. 번호를 클릭하면{' '}
            <div className={cx('rectTitleWrap')}>
              <div className={cx('rect')} />
              <span className={cx('title')}>모둠원</span>
            </div>에서{' '}
            <div className={cx('rectTitleWrap')}>
              <div className={cx('rect', 'yellow')} />
              <span className={cx('title')}>모둠장</span>
            </div>으로 바뀌고, 한 번 더 클릭하면 모둠 편성에서{' '}
            <div className={cx('rectTitleWrap')}>
              <div className={cx('rect', 'gray')} />
              <span className={cx('title')}>제외</span>
            </div>됩니다.
          </li>
          <li className={cx('desc')}>4. 만들기를 클릭해주세요.</li>
        </ol>

        <ol className={cx('mobileDescWrap')}>
          <li className={cx('rectTitleWrap')}>
            <div className={cx('rect')} />
            <span className={cx('title')}>모둠원</span>
          </li>
          <li className={cx('rectTitleWrap')}>
            <div className={cx('rect', 'yellow')} />
            <span className={cx('title')}>모둠장</span>
          </li>
          <li className={cx('rectTitleWrap')}>
            <div className={cx('rect', 'gray')} />
            <span className={cx('title')}>제외</span>
          </li>
        </ol>
      </div>
    </aside>
  )
}

export default Sidebar;
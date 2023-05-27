export type PeopleStateType = 'NOMAL' | 'HEAD' | 'EXCEPT'; // 모둠원, 모둠장, 제외
export type GroupType = 'NUMBER' | 'GROUP'; // 모둠 구성 방식 - 모둠원 수, 모둠 수
export type ModeType = 'LIST' | 'RESULT'; // 화면 - 인원 선택, 결과 

export interface DataType {
  value: number;
  state: PeopleStateType;
}

export const peopleStateTypeMap = {
  'NOMAL': 'nomal',
  'EXCEPT': 'except',
  'HEAD': 'head'
}
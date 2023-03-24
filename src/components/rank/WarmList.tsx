// import React, { FC } from "react";
// import DustData from "../../api/data/미세먼지_자치구_5년평균.json";

// type DustData = {
//     rank: number;
//     gu: string;
//     dust: number;
// };

// // const employee = emp as Employee;

// console.log(DustData.rank);
// console.log(DustData.gu);
// console.log(DustData.dust);

// const RankList: FC<GusProps> = ({ gus }) => {
//     return (
//         <div>
//             {/* {DustData.gus.map(
//                 ( gu: any
//                     gu, // 맵함수를 이용해 dummy 안의 days 그룹 내의 원소를 검색한다.
//                 ) => (
//                     <li key={gu.rank}>
//                         {" "}
//                         // key 값을 days의 원소(day)의 id로 지정해주었다. Day{" "}
//                         {gu.gu} // 여기서 원소(day)속의 day 라는 키값의 데이터를
//                         출력해준다.
//                     </li>
//                 ),
//             )} */}
//             <ul>
//                 {/* {DustData.gus &&
//                     gus.map((gu: any, dust: string, rank: any) => {
//                         return <li key={gu.rank}>{gu.gu}</li>;
//                     })} */}
//             </ul>
//         </div>
//     );
// };

// export default RankList;

// // import * as React from "react";
// // import { useState, useEffect } from "react";
// // import { TodoItem } from "./TodoItem";

// // // 타입을 인터페이스로 선언
// // interface todoItem {
// //     item: string;
// // }

// // interface ItodoItems {
// //     idx: number;
// //     item: string;
// //     isDelete: boolean;
// //     onDelete?: Function;
// // }

// // interface ItodoList {
// //     todoItems: ItodoItems[];
// // }

// // export function TodoList() {
// //     const [todoItem, setTodoItem] = useState<todoItem>({
// //         item: "",
// //     });
// //     const [todoList, setTodoList] = useState<ItodoItems>({
// //         idx: 0,
// //         item: "",
// //         isDelete: false,
// //     });
// //     const [todoData, setTodoData] = useState<ItodoList>({
// //         todoItems: [todoList],
// //     });

// //     const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
// //         e.preventDefault(); // 페이지 전환 막기
// //         setTodoList({
// //             idx: todoList.idx + 1,
// //             item: todoItem.item,
// //             isDelete: false,
// //         });
// //     };

// //     useEffect(() => {
// //         setTodoItem({
// //             // input 창 초기화
// //             item: "",
// //         });

// //         setTodoData({
// //             todoItems: todoData.todoItems.concat(todoList),
// //         });
// //     }, [todoList]);

// //     useEffect(() => {
// //         //console.log('todoData 변경 :: ', todoData )
// //     }, [todoData]);

// //     const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
// //         const { name, value } = e.target;
// //         setTodoItem({
// //             item: value,
// //         });
// //     };

// //     const onDelete = (idx: number) => {
// //         let temp2: Array<ItodoItems> = [];
// //         const deleteTodoList = todoData.todoItems.map(data => {
// //             let temp1: ItodoItems = {
// //                 idx: data.idx,
// //                 item: data.item,
// //                 isDelete: data.idx === idx ? true : false,
// //             };
// //             if (temp2.length < 1) {
// //                 temp2 = [temp1];
// //             } else {
// //                 temp2 = temp2.concat(temp1);
// //             }
// //             setTodoData({
// //                 todoItems: temp3,
// //             });
// //         });
// //     };

// //     const TodoList = todoData.todoItems.map((data, idx) => (
// //         <React.Fragment key={idx}>
// //             <TodoItem
// //                 idx={data.idx}
// //                 item={data.item}
// //                 isDelete={data.isDelete}
// //                 onDelete={onDelete}
// //             />
// //         </React.Fragment>
// //     ));

// //     return (
// //         <div>
// //             <h2>할일</h2>
// //             <div>
// //                 <form onSubmit={onSubmit}>
// //                     <input
// //                         type="text"
// //                         name="content"
// //                         value={todoItem.item}
// //                         onChange={handleInput}
// //                     />
// //                     <button type="submit">추가</button>
// //                 </form>
// //             </div>
// //             <div>{TodoList}</div>
// //         </div>
// //     );
// // }

// // import React from "react";
// // interface Place {
// //   name: string;
// //   addr: string;
// // }
// // interface PlacesProps {
// //   placeList: Place[];
// // }
// // const Places = ({ placeList }: PlacesProps) => {
// //     return (
// //         <div>
// //             {placeList.map((place, i: number) => (
// //                 <PlaceItem key={i} place={place} />
// //             ))}
// //         </div>
// //     );
// // };

// // export default Places;
import React from "react";

const RankList = () => {
    return <div></div>;
};

export default RankList;

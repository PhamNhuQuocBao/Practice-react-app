// export interface ColumnsType<T> {
//   title: string;
//   dataIndex: string;
//   key: string;
//   [index: number]: T;
//   render: () => JSX.Element;
// }

// export interface DataType {
//   key: string;
//   name: string;
//   status: string;
//   type: string;
//   quantity: number;
//   brand: string;
//   price: number;
// }

// export const columns: ColumnsType<DataType> = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Status",
//     dataIndex: "status",
//     key: "status",
//   },
//   {
//     title: "Type",
//     dataIndex: "type",
//     key: "type",
//   },
//   {
//     title: "Quantity",
//     key: "quantity",
//     dataIndex: "quantity",
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? "geekblue" : "green";
//           if (tag === "loser") {
//             color = "volcano";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "Action",
//     key: "action",
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// export const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     status: "Available",
//     type: "Gold",
//     quantity: 5000,
//     brand: "KinDubai",
//     price: 10000,
//   },
//   {
//     key: "2",
//     name: "John Brown",
//     status: "Available",
//     type: "Gold",
//     quantity: 5000,
//     brand: "KinDubai",
//     price: 10000,
//   },
//   {
//     key: "3",
//     name: "John Brown",
//     status: "Available",
//     type: "Gold",
//     quantity: 5000,
//     brand: "KinDubai",
//     price: 10000,
//   },
// ];

// let testList = {
//   2: [ // 两个 0  9 个
//     [0,0,1],
//     [0,0,2],
//     [0,0,10],
//     [0,1,0],
//     [0,2,0],
//     [0,10,0],
//     [1,0,0],
//     [2,0,0],
//     [10,0,0],
//   ],
//   1: [ // 一个 0  27 个
//     [0,1,1],
//     [0,1,2],
//     [0,1,10],
//     [0,2,1],
//     [0,2,2],
//     [0,2,10],
//     [0,10,1],
//     [0,10,2],
//     [0,10,10],
//     [1,0,1],
//     [1,0,2],
//     [1,0,10],
//     [2,0,1],
//     [2,0,2],
//     [2,0,10],
//     [10,0,1],
//     [10,0,2],
//     [10,0,10],
//     [1,1,0],
//     [1,2,0],
//     [1,10,0],
//     [2,1,0],
//     [2,2,0],
//     [2,10,0],
//     [10,1,0],
//     [10,2,0],
//     [10,10,0],
//   ],
//   0: [ // 27 个
//     [1,1,1],
//     [1,1,2],
//     [1,1,10],
//     [1,2,1],
//     [1,2,2],
//     [1,2,10],
//     [1,10,1],
//     [1,10,2],
//     [1,10,10],
//     [2,1,1],
//     [2,1,2],
//     [2,1,10],
//     [2,2,1],
//     [2,2,2],
//     [2,2,10],
//     [2,10,1],
//     [2,10,2],
//     [2,10,10],
//     [10,1,1],
//     [10,1,2],
//     [10,1,10],
//     [10,2,1],
//     [10,2,2],
//     [10,2,10],
//     [10,10,1],
//     [10,10,2],
//     [10,10,10],
//   ]
// }

let list = [
  [0, 0, 1],
  [0, 0, 2],
  [0, 0, 10],
  [0, 1, 0],
  [0, 2, 0],
  [0, 10, 0],
  [1, 0, 0],
  [2, 0, 0],
  [10, 0, 0],
  [0, 1, 1],
  [0, 1, 2],
  [0, 1, 10],
  [0, 2, 1],
  [0, 2, 2],
  [0, 2, 10],
  [0, 10, 1],
  [0, 10, 2],
  [0, 10, 10],
  [1, 0, 1],
  [1, 0, 2],
  [1, 0, 10],
  [2, 0, 1],
  [2, 0, 2],
  [2, 0, 10],
  [10, 0, 1],
  [10, 0, 2],
  [10, 0, 10],
  [1, 1, 0],
  [1, 2, 0],
  [1, 10, 0],
  [2, 1, 0],
  [2, 2, 0],
  [2, 10, 0],
  [10, 1, 0],
  [10, 2, 0],
  [10, 10, 0],
  [1, 1, 1],
  [1, 1, 2],
  [1, 1, 10],
  [1, 2, 1],
  [1, 2, 2],
  [1, 2, 10],
  [1, 10, 1],
  [1, 10, 2],
  [1, 10, 10],
  [2, 1, 1],
  [2, 1, 2],
  [2, 1, 10],
  [2, 2, 1],
  [2, 2, 2],
  [2, 2, 10],
  [2, 10, 1],
  [2, 10, 2],
  [2, 10, 10],
  [10, 1, 1],
  [10, 1, 2],
  [10, 1, 10],
  [10, 2, 1],
  [10, 2, 2],
  [10, 2, 10],
  [10, 10, 1],
  [10, 10, 2],
  [10, 10, 10],
];

let versions = [
  "0.0.1",
  "0.0.2",
  "0.0.10",
  "0.1.0",
  "0.2.0",
  "0.10.0",
  "1.0.0",
  "2.0.0",
  "10.0.0",
  "0.1.1",
  "0.1.2",
  "0.1.10",
  "0.2.1",
  "0.2.2",
  "0.2.10",
  "0.10.1",
  "0.10.2",
  "0.10.10",
  "1.0.1",
  "1.0.2",
  "1.0.10",
  "2.0.1",
  "2.0.2",
  "2.0.10",
  "10.0.1",
  "10.0.2",
  "10.0.10",
  "1.1.0",
  "1.2.0",
  "1.10.0",
  "2.1.0",
  "2.2.0",
  "2.10.0",
  "10.1.0",
  "10.2.0",
  "10.10.0",
  "1.1.1",
  "1.1.2",
  "1.1.10",
  "1.2.1",
  "1.2.2",
  "1.2.10",
  "1.10.1",
  "1.10.2",
  "1.10.10",
  "2.1.1",
  "2.1.2",
  "2.1.10",
  "2.2.1",
  "2.2.2",
  "2.2.10",
  "2.10.1",
  "2.10.2",
  "2.10.10",
  "10.1.1",
  "10.1.2",
  "10.1.10",
  "10.2.1",
  "10.2.2",
  "10.2.10",
  "10.10.1",
  "10.10.2",
  "10.10.10",
];

let rules = [
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.0.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.1.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.2.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "0.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "0.10.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.0.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.0.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.0.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.10.0",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.1.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.0.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.0.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.0.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.1.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.1.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.2.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "1.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "1.10.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.1.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.2.0",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.2.1",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.1.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.2.2",
      "result": true,
      "external": false
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.0.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.0.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.0.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.1.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.2.0",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.1.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.1.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.2.1",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.2.2",
      "result": false,
      "external": false
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.2.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "2.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.0.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.0.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.0.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.0.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.1.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.1.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "2.10.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.1.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.1.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.2.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.2.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.1.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.2.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.2.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.10.0",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.10.1",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.2.10",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.10.2",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.10.1",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.2",
      "newVersion": "10.10.10",
      "result": true,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.0.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "0.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.0.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.0.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.0.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.1.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.2.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.10.0",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "1.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "2.10.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.1.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.1.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.1.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.2.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.2.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.2.10",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.10.1",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.10.2",
      "result": false,
      "external": true
  },
  {
      "oldVersion": "10.10.10",
      "newVersion": "10.10.10",
      "result": false,
      "external": true
  }
]

export default rules

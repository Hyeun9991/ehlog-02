export const commentItems = async () => {
  return [
    {
      _id: '10',
      user: {
        _id: 'a',
        name: 'Apple',
      },
      desc: '사과 좋아해!!',
      post: '1',
      parent: null,
      replyOnUser: null,
      createdAt: '2023-07-10',
    },
    {
      _id: '11',
      user: {
        _id: 'b',
        name: 'Banana',
      },
      desc: '바나나 좋아해!!',
      post: '1',
      parent: null,
      replyOnUser: null,
      createdAt: '2023-07-10',
    },
    {
      _id: '12',
      user: {
        _id: 'c',
        name: 'Cherry',
      },
      desc: '체리 좋아해!!',
      post: '1',
      parent: null,
      replyOnUser: null,
      createdAt: '2023-07-10',
    },
  ];
};

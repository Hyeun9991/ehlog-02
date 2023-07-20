export const getCommentsData = async () => {
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
      parent: '10',
      replyOnUser: 'a',
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
    {
      _id: '13',
      user: {
        _id: 'd',
        name: 'durian',
      },
      desc: '두리안 안좋아해...',
      post: '1',
      parent: null,
      replyOnUser: null,
      createdAt: '2023-07-13',
    },
  ];
};

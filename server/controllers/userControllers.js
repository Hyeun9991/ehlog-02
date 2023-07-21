import User from '../models/User';

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // 데이터베이스에서 이메일로 사용자를 찾음
    let user = await User.findOne({ email });

    if (user) {
      // 400: 클라이언트 요청이 잘못된 경우를 나타낸다. (Bad Request)
      // return res.status(400).json({ message: '이미 존재하는 이메일입니다.' });
      throw new Error('이미 존재하는 이메일입니다.');
    }

    // 새로운 유저 생성
    user = await User.create({ name, email, password });

    // 사용자 정보 반환 (200: 클라이언트 요청 성공)
    return res.status(200).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
      token: await user.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

export { registerUser };

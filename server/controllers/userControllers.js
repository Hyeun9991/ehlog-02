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

    // 사용자 정보 반환 (201: 요청이 성공적으로 처리되어 새로운 리소스가 생성됨)
    return res.status(201).json({
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

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 데이터베이스에서 이메일로 사용자를 찾음
    let user = await User.findOne({ email });

    if (!user) {
      throw new Error('존재하지 않는 이메일입니다.');
    }

    // 비밀번호가 일치하면 사용자 정보 반환
    if (await user.comparePassword(password)) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
        token: await user.generateJWT(),
      });
    } else {
      throw new Error('이메일 혹은 비밀번호가 다릅니다.');
    }
  } catch (error) {
    next(error);
  }
};

export const userProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);

    if (user) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
      });
    } else {
      let error = new Error('사용자를 찾을 수 없습니다.');
      error.statusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

export { registerUser, loginUser };

import { uploadPicture } from '../middleware/uploadPictureMiddleware';
import User from '../models/User';
import { fileRemover } from '../utils/fileRemover';

const registerUser = async (req, res, next) => {
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

const loginUser = async (req, res, next) => {
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

const userProfile = async (req, res, next) => {
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

const updateProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);

    if (!user) {
      throw new Error('사용자를 찾을 수 없습니다.');
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password && req.body.password.length < 6) {
      throw new Error('비밀번호는 6글자 이상이여야 합니다.');
    } else if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUserProfile = await user.save();

    res.json({
      _id: updatedUserProfile._id,
      avatar: updatedUserProfile.avatar,
      name: updatedUserProfile.name,
      email: updatedUserProfile.email,
      verified: updatedUserProfile.verified,
      admin: updatedUserProfile.admin,
      token: await updatedUserProfile.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

const updateProfilePicture = async (req, res, next) => {
  try {
    // 업로드된 파일을 처리하는 Multer 미들웨어의 single 함수를 호출
    const upload = uploadPicture.single('profilePicture');

    // Multer가 업로드된 파일 처리 후 콜백 함수 실행
    upload(req, res, async function (err) {
      if (err) {
        const error = new Error(
          '업로드 중 알 수 없는 오류가 발생했습니다.' + err.message,
        );
        next(error);
      } else {
        // 업로드가 정상적으로 완료된 경우
        if (req.file) {
          // 업로드된 파일이 존재하면 해당 파일을 사용자 프로필 사진으로 업데이트
          const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            {
              avatar: req.file.filename,
            },
            { new: true },
          );

          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            token: await updatedUser.generateJWT(),
          });
        } else {
          // 업로드된 파일이 없는 경우

          let filename;

          // 기존 사용자 정보를 가져옴
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          updatedUser.avatar = '';
          await updatedUser.save();

          // 파일 제거 함수 호출하여 이전 프로필 사진 파일 제거
          fileRemover(filename);

          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            token: await updatedUser.generateJWT(),
          });
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

export {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  updateProfilePicture,
};

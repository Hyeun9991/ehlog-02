import { verify } from 'jsonwebtoken';
import User from '../models/User';

export const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // 헤더에서 'Bearer' 토큰을 추출
      const token = req.headers.authorization.split(' ')[1];

      // 추출한 토큰을 검증하고, 토큰에서 얻은 사용자 ID로 데이터베이스에서 사용자를 찾음
      const { id } = verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(id).select('-password');

      // 인증이 완료되었으므로 다음 미들웨어 또는 라우트 핸들러로 제어를 넘김
      next();
    } catch (error) {
      // 토큰 검증이 실패하거나 오류가 발생한 경우 인증 에러를 처리
      let err = new Error('인증되지 않음, 토큰 검증 실패');
      err.statusCode = 401;
      next(err);
    }
  } else {
    // 요청 헤더에 'Bearer' 토큰이 없는 경우, 인증 에러를 처리
    let error = new Error('인증되지 않음, 토큰 없음');
    error.statusCode = 401;
    next(error);
  }
};

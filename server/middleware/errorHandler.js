// Express 애플리케이션에서 발생한 오류를 처리하기 위한 미들웨어 함수
export const errorResponserHandler = (err, req, res, next) => {
  // 400: 클라이언트 요청이 잘못된 경우를 나타낸다. (Bad Request)
  const statusCode = err.statusCode || 400;

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

// 요청받은 경로가 유효하지 않을 때 처리하기 위한 미들웨어 함수
export const invalidPathHandler = (req, res, next) => {
  let error = new Error('유효하지 않은 경로입니다.');

  // 404: Not Found 오류
  error.statusCode = 404;

  next(error);
};

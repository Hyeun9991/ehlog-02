import multer from 'multer';
import path from 'path';

// Multer 설정: 파일 저장 경로, 파일명 설정, 파일 크기 제한, 파일 필터링 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Multer 미들웨어 생성: 파일 저장 방식, 파일 크기 제한, 파일 필터링
const uploadPicture = multer({
  storage: storage,
  limits: {
    fileSize: 1 * 1000000, // 1MB 크기 제한
  },
  fileFilter: function (req, file, cb) {
    // 파일 필터링 함수: .png, .jpg, .jpeg 파일만 허용
    let ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return cb(new Error('.png, .jpg, .jpeg 파일만 업로드해주세요.'));
    }
    cb(null, true);
  },
});

export { uploadPicture };

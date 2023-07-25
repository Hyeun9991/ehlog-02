import fs from 'fs';
import path from 'path';

const fileRemover = (filename) => {
  // 주어진 파일 경로에 있는 파일 제거
  fs.unlink(path.join(__dirname, '../uploads'), function (err) {
    if (err && err.code == 'ENOENT') {
      // 파일이 존재하지 않는 경우
      console.log(`File ${filename} doesn't exist, won't remove it.`);
    } else if (err) {
      // 파일 제거 중 오류 발생한 경우
      console.log(`Error occured while trying to remove file ${filename}`);
    } else {
      // 파일 제거 성공한 경우
      console.log(`removed ${filename}`);
    }
  });
};

export { fileRemover };

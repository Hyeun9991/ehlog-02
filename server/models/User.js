import { Schema, model } from 'mongoose';
import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const UserSchema = new Schema(
  {
    avatar: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      required: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// 비밀번호 해싱
UserSchema.pre('save', async function (next) {
  // 비밀번호 필드가 변경되었으면
  if (this.isModified('password')) {
    // 비밀번호 해시화화여 암호화된 비밀번호를 반환
    this.password = await hash(this.password, 10);

    // 비밀번호가 변경되었다면, 암호화된 비밀번호로 대체된 this.password를 다시 저장하고,
    // 다음 단계로 진행하기 위해 next()를 호출
    return next();
  }
  return next();
});

// 토큰 생성
UserSchema.methods.generateJWT = async function () {
  return await sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const User = model('User', UserSchema);
export default User;

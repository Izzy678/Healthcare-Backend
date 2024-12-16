// mongooseSchemaConfig.js
export const mongooseSchemaConfig = {
  id: true,
  versionKey: false,
  timestamps: true,
  autoIndex: true,
  toJSON: {
    virtuals: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transform: (_: any, ret: any) => {
      // Remove sensitive and unnecessary fields before sending data to the frontend
      delete ret._id;
      delete ret.password;
      delete ret.salt;
      delete ret.visible;
      delete ret.updatedAt;
      delete ret.createdAt;
      delete ret.code;
      return ret;
    },
  },
  toObject: {
    virtuals: true,
    transform: (_: any, ret: any) => {
      delete ret._id;
      delete ret.password;
      delete ret.salt;
      delete ret.visible;
      delete ret.updatedAt;
      delete ret.createdAt;
      delete ret.refreshToken;
      delete ret.code;
      return ret;
    },
  },
};

export const nestedSchemaConfig = {
  id: false,
  _id: false,
  versionKey: false,
  timestamps: false,
};

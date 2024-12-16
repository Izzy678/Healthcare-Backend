import { CreationOptional, InferAttributes, InferCreationAttributes, UUIDV4 } from "sequelize";
import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../../database/postgres/config/database.config";


export class User extends Model
  <
    InferAttributes<User>,
    InferCreationAttributes<User>
  > {
  declare id: CreationOptional<string>;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare password: string;
  declare role?: 'PATIENT' | 'DOCTOR';
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

User.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  role: {
    allowNull: false,
    type: DataTypes.ENUM,
    values: ['PATIENT', 'DOCTOR'],
    defaultValue: 'PATIENT'
  }
}
  , {
    sequelize,
    modelName: 'Users',
    freezeTableName: true
  });

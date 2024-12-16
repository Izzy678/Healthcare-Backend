import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { User } from "../../users/model/user.model";
import { sequelize } from "../../database/postgres/config/database.config";

export class HealthTestBooking extends Model<
    InferAttributes<HealthTestBooking>,
    InferCreationAttributes<HealthTestBooking>> {

    declare id: CreationOptional<string>;
    declare userId: ForeignKey<string>;
    declare testType: HealthTestBookingTestType;
    declare appointmentDate: Date;
    declare appointmentTime: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export enum HealthTestBookingTestType {
    XRAY = 'X-ray',
    HIV = 'HIV',
    BLOOD_TEST = 'Blood Test',
    COVID = 'Covid Test',
    URINE_ANALYSIS = 'Urine Analysis',
    MRI = 'MRI',
}

HealthTestBooking.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    userId: {
        allowNull: false,
        type: DataTypes.UUID,
    },
    testType: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: Object.values(HealthTestBookingTestType),
    },
    appointmentDate: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    appointmentTime: {
        allowNull: false,
        type: DataTypes.TIME,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
},
    {
        sequelize,
        modelName: 'HealthTestBookings',
        freezeTableName: true,
    }
)

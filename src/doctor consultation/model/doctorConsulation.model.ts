import { CreationOptional, ForeignKey, InferAttributes, InferCreationAttributes, UUIDV4 } from "sequelize";
import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../../database/postgres/config/database.config";


export class DoctorConsultation extends Model
    <
        InferAttributes<DoctorConsultation>,
        InferCreationAttributes<DoctorConsultation>
    > {
    declare id: CreationOptional<string>;
    declare patientId: ForeignKey<string>;
    declare doctorId: ForeignKey<string>;
    declare consultationDate: Date;
    declare consultationTime: string;
    declare consultationType: 'TEXT' | 'VIDEO'
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

DoctorConsultation.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
    },
    patientId: {
        allowNull: false,
        type: DataTypes.UUID,
    },
    doctorId: {
        allowNull: false,
        type: DataTypes.UUID,
    },
    consultationTime: {
        allowNull: false,
        type: DataTypes.TIME
    },
    consultationDate: {
        allowNull: false,
        type: DataTypes.DATE
    },
    consultationType: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['TEXT', 'VIDEO']
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
}, {
    sequelize,
    modelName: 'DoctorConsultations',
    freezeTableName: true
});

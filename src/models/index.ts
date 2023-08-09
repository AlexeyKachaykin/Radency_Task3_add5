



    import { Sequelize } from 'sequelize-typescript';
    import * as pg from 'pg';
    import { Model, Column, DataType, Table } from 'sequelize-typescript';

    const sequelizeConfig = {
        dialect: 'postgres',
        dialectModule: pg,
        host: 'localhost',
        port: 5432,
        database: 'notes',
        username: 'postgres',
        password: 'postgres',
    } as const;


    const sequelize = new Sequelize(sequelizeConfig);
 
    interface NoteAttributes {
        id: string;
        name: string;
        created: string;
        category: string;
        content: string;
        archived: boolean;
    }

    interface NoteCreationAttributes extends Partial<NoteAttributes> { }

    @Table({
        tableName: 'notes', 
    })
    class Note extends Model<NoteAttributes, NoteCreationAttributes> implements NoteAttributes {
        @Column({
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            primaryKey: true,
        })
        id!: string;

        @Column({
            type: DataType.STRING,
            allowNull: false,
        })
        name!: string;

        @Column({
            type: DataType.STRING,
            allowNull: false,
        })
        created!: string;

        @Column({
            type: DataType.STRING,
            allowNull: false,
        })
        category!: string;

        @Column({
            type: DataType.TEXT,
            allowNull: false,
        })
        content!: string;

        @Column({
            type: DataType.BOOLEAN,
            defaultValue: false,
        })
        archived!: boolean;
    }

    export { sequelize, Note, NoteAttributes, NoteCreationAttributes };

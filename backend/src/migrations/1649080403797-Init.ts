import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1649080403797 implements MigrationInterface {
    name = "Init1649080403797";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "users_config" ("config" character varying(5000) NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "REL_6deb66d33458d7afbf9ae3efd7" UNIQUE ("user_id"), CONSTRAINT "PK_6deb66d33458d7afbf9ae3efd73" PRIMARY KEY ("user_id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "user_key_account_permissions" ("user_id" uuid NOT NULL, "key_account_id" integer NOT NULL, CONSTRAINT "PK_254a1d7e978b44817cb90bc337e" PRIMARY KEY ("user_id", "key_account_id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "refresh_tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "token" character varying(128) NOT NULL, "user_id" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_7d8bee0204106019488c4c50ffa" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TYPE "public"."users_role_enum" AS ENUM('Superadmin', 'Operator', 'KeyAccount', 'Customer')`
        );
        await queryRunner.query(
            `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(128) NOT NULL, "username" character varying(128) NOT NULL, "password" character varying(128) NOT NULL, "role" "public"."users_role_enum" NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "user_customer_permissions" ("user_id" uuid NOT NULL, "customer_id" integer NOT NULL, CONSTRAINT "PK_2a5050a205ea52890f1a5a8a876" PRIMARY KEY ("user_id", "customer_id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "customers" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, "customer_number" character varying(64) NOT NULL, "city" character varying(64) NOT NULL, "postcode" character varying(16) NOT NULL, "street" character varying(64) NOT NULL, "key_account_id" integer, CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "key_accounts" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, "key_account_number" character varying(64) NOT NULL, CONSTRAINT "PK_1a7ebea9c741d710fd3f0d64292" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "devices" ("id" character varying NOT NULL, "type" character varying(64) NOT NULL, "ip_address" character varying(32), "vpn_certificate" character varying(5000), "certificate" character varying(5000), "milk" character varying(64), "milk_type" character varying(64), "sim_card_number" character varying(64), "modem_number" character varying(64), "connection_type" character varying(64), "installation_date" TIMESTAMP, "machine_module_serial_number" character varying(64), "password" character varying(128) NOT NULL, "key_account_id" integer, CONSTRAINT "PK_b1514758245c12daf43486dd1f0" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "dispenses" ("id" SERIAL NOT NULL, "datetime_utc" TIMESTAMP NOT NULL, "datetime_local" TIMESTAMP WITH TIME ZONE NOT NULL, "operator" character varying(32) NOT NULL, "type" character varying(16) NOT NULL, "brew_module" character varying(32), "bean_type" character varying(32), "drink_id" character varying(32) NOT NULL, "drink_type" character varying(32) NOT NULL, "drink_name" character varying(64), "f_counter" integer NOT NULL, "t_counter" integer NOT NULL, "ddp_discretization_unit" character varying(256) NOT NULL, "ddp_segment_id" character varying(256) NOT NULL, "is_successful" boolean, "device_id" character varying, CONSTRAINT "PK_335c04e2450c6503205c8f7ba3e" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "device_password_history" ("id" SERIAL NOT NULL, "from_utc" TIMESTAMP NOT NULL, "to_utc" TIMESTAMP, "password" character varying(128) NOT NULL, "device_id" character varying, CONSTRAINT "PK_bebfe91051c9fcad3b2404a6820" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TYPE "public"."module_states_module_state_enum" AS ENUM('active', 'blocked', 'repair', 'spare', 'lost')`
        );
        await queryRunner.query(
            `CREATE TABLE "module_states" ("id" SERIAL NOT NULL, "module_state" "public"."module_states_module_state_enum" NOT NULL, "from_utc" TIMESTAMP NOT NULL, "to_utc" TIMESTAMP, "comment" character varying(128), "module_serial_number" character varying, "device_id" character varying, CONSTRAINT "PK_bcaf4d8ccbf154d89d9b4a85b42" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TYPE "public"."modules_module_type_enum" AS ENUM('display-module', 'water-module', 'steam-module', 'brew-left-module', 'brew-right-module', 'milk-module', 'brew-module')`
        );
        await queryRunner.query(
            `CREATE TYPE "public"."modules_current_state_enum" AS ENUM('active', 'blocked', 'repair', 'spare', 'lost')`
        );
        await queryRunner.query(
            `CREATE TABLE "modules" ("serial_number" character varying NOT NULL, "module_type" "public"."modules_module_type_enum" NOT NULL, "current_state" "public"."modules_current_state_enum" NOT NULL, CONSTRAINT "PK_fe01fb814cdf41683afab32517a" PRIMARY KEY ("serial_number"))`
        );
        await queryRunner.query(
            `CREATE TABLE "module_installations" ("id" SERIAL NOT NULL, "from_utc" TIMESTAMP NOT NULL, "to_utc" TIMESTAMP, "device_id" character varying, "module_serial_number" character varying, CONSTRAINT "PK_ba34199c36216c87467aeb1e05d" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "device_installations" ("id" SERIAL NOT NULL, "from_utc" TIMESTAMP NOT NULL, "to_utc" TIMESTAMP, "created_at" TIMESTAMP NOT NULL, "device_id" character varying, "customer_id" integer, CONSTRAINT "PK_411e309642c6a7c8113209ff89d" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `ALTER TABLE "users_config" ADD CONSTRAINT "FK_6deb66d33458d7afbf9ae3efd73" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "user_key_account_permissions" ADD CONSTRAINT "FK_e10b6b06f91f7c7dcba3127eaa5" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "user_key_account_permissions" ADD CONSTRAINT "FK_ab61671f950490e9e91558b35f7" FOREIGN KEY ("key_account_id") REFERENCES "key_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "refresh_tokens" ADD CONSTRAINT "FK_610102b60fea1455310ccd299de" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "user_customer_permissions" ADD CONSTRAINT "FK_c018e649a2a99b187b91d67786b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "user_customer_permissions" ADD CONSTRAINT "FK_a8f0a336763aa31dc7cd4a42372" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "customers" ADD CONSTRAINT "FK_1faa401e7be850620e24285ba12" FOREIGN KEY ("key_account_id") REFERENCES "key_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "devices" ADD CONSTRAINT "FK_56b1c79fde475d5db3a67cd4c98" FOREIGN KEY ("key_account_id") REFERENCES "key_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "dispenses" ADD CONSTRAINT "FK_e8a49ea96ec18112177fbfef4f3" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "device_password_history" ADD CONSTRAINT "FK_2e9ab1561816e550c4c873fab9f" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "module_states" ADD CONSTRAINT "FK_c69ce8519cbd814414abedc6ef4" FOREIGN KEY ("module_serial_number") REFERENCES "modules"("serial_number") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "module_states" ADD CONSTRAINT "FK_a2506ea6ea08acd1280830b94d4" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "module_installations" ADD CONSTRAINT "FK_10eb0e1688445ca9408444b909e" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "module_installations" ADD CONSTRAINT "FK_9137fd7625e31b1686369219fa4" FOREIGN KEY ("module_serial_number") REFERENCES "modules"("serial_number") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "device_installations" ADD CONSTRAINT "FK_e2e1a83e3f8bc00fe5e2f01fba7" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "device_installations" ADD CONSTRAINT "FK_8c2772329db385e35fec6df8ff5" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "device_installations" DROP CONSTRAINT "FK_8c2772329db385e35fec6df8ff5"`);
        await queryRunner.query(`ALTER TABLE "device_installations" DROP CONSTRAINT "FK_e2e1a83e3f8bc00fe5e2f01fba7"`);
        await queryRunner.query(`ALTER TABLE "module_installations" DROP CONSTRAINT "FK_9137fd7625e31b1686369219fa4"`);
        await queryRunner.query(`ALTER TABLE "module_installations" DROP CONSTRAINT "FK_10eb0e1688445ca9408444b909e"`);
        await queryRunner.query(`ALTER TABLE "module_states" DROP CONSTRAINT "FK_a2506ea6ea08acd1280830b94d4"`);
        await queryRunner.query(`ALTER TABLE "module_states" DROP CONSTRAINT "FK_c69ce8519cbd814414abedc6ef4"`);
        await queryRunner.query(
            `ALTER TABLE "device_password_history" DROP CONSTRAINT "FK_2e9ab1561816e550c4c873fab9f"`
        );
        await queryRunner.query(`ALTER TABLE "dispenses" DROP CONSTRAINT "FK_e8a49ea96ec18112177fbfef4f3"`);
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_56b1c79fde475d5db3a67cd4c98"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP CONSTRAINT "FK_1faa401e7be850620e24285ba12"`);
        await queryRunner.query(
            `ALTER TABLE "user_customer_permissions" DROP CONSTRAINT "FK_a8f0a336763aa31dc7cd4a42372"`
        );
        await queryRunner.query(
            `ALTER TABLE "user_customer_permissions" DROP CONSTRAINT "FK_c018e649a2a99b187b91d67786b"`
        );
        await queryRunner.query(`ALTER TABLE "refresh_tokens" DROP CONSTRAINT "FK_610102b60fea1455310ccd299de"`);
        await queryRunner.query(
            `ALTER TABLE "user_key_account_permissions" DROP CONSTRAINT "FK_ab61671f950490e9e91558b35f7"`
        );
        await queryRunner.query(
            `ALTER TABLE "user_key_account_permissions" DROP CONSTRAINT "FK_e10b6b06f91f7c7dcba3127eaa5"`
        );
        await queryRunner.query(`ALTER TABLE "users_config" DROP CONSTRAINT "FK_6deb66d33458d7afbf9ae3efd73"`);
        await queryRunner.query(`DROP TABLE "device_installations"`);
        await queryRunner.query(`DROP TABLE "module_installations"`);
        await queryRunner.query(`DROP TABLE "modules"`);
        await queryRunner.query(`DROP TYPE "public"."modules_current_state_enum"`);
        await queryRunner.query(`DROP TYPE "public"."modules_module_type_enum"`);
        await queryRunner.query(`DROP TABLE "module_states"`);
        await queryRunner.query(`DROP TYPE "public"."module_states_module_state_enum"`);
        await queryRunner.query(`DROP TABLE "device_password_history"`);
        await queryRunner.query(`DROP TABLE "dispenses"`);
        await queryRunner.query(`DROP TABLE "devices"`);
        await queryRunner.query(`DROP TABLE "key_accounts"`);
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`DROP TABLE "user_customer_permissions"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "refresh_tokens"`);
        await queryRunner.query(`DROP TABLE "user_key_account_permissions"`);
        await queryRunner.query(`DROP TABLE "users_config"`);
    }
}

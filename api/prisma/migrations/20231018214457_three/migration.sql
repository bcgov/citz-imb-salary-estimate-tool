-- AlterTable
CREATE SEQUENCE appointment_id_seq;
ALTER TABLE "Appointment" ALTER COLUMN "id" SET DEFAULT nextval('appointment_id_seq');
ALTER SEQUENCE appointment_id_seq OWNED BY "Appointment"."id";

-- AlterTable
CREATE SEQUENCE process_id_seq;
ALTER TABLE "Process" ALTER COLUMN "id" SET DEFAULT nextval('process_id_seq');
ALTER SEQUENCE process_id_seq OWNED BY "Process"."id";

import connectedDB from "../database/index.js";

const createPassengerTable = async () => {
  try {
    const passenger = await connectedDB();
    const passengerSchema = `
      CREATE TABLE IF NOT EXISTS passenger (
        user_id INT AUTO_INCREMENT compostie key,
        name varchar(50),
        email varchar(50) primary key,
        mobile int,
        password varchar(50)
      )
    `;

    await passenger.execute(passengerSchema);
    console.log("Table 'passenger' created successfully!");
  } catch (error) {
    console.error("Error creating passenger table:", error);
  }
};
createPassengerTable();
export default createPassengerTable;

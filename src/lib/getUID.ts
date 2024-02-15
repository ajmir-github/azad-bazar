import ShortUniqueId from "short-unique-id";
const uid = new ShortUniqueId({ length: 10 });

const getUID = () => uid.rnd();

export default getUID;

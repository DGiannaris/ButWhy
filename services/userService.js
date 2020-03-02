export const addUser = async (db,name,level) => {
   try{
     await db.collection("users").add({
        Name: name,
        Level: level
    })
}
    catch(error) {
        console.error("Error writing document: ", error.message);
    };
}
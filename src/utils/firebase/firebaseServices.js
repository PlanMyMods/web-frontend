import { db } from "@/utils/firebase/firebaseInit.js";
import {
  collection,
  query,
  where,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore";

//------------------------------------Module Collection-------------------------------------------

const schema = {
  name: (value) => /^([A-Z][a-z\-]* )+[A-Z][a-z\-]*( \w+\.?)?$/.test(value),
  age: (value) => parseInt(value) === Number(value) && value >= 18,
  phone: (value) => /^(\+?\d{1,2}-)?\d{3}-\d{3}-\d{4}$/.test(value),
};

/**
 * Validates a given object against a schema.
 * @param {Object} object
 * @param {Object} schema
 * @returns {Array} Array of errors for each field missing or invalid from the schema.
 */
const validate = (object, schema) =>
  Object.keys(schema)
    .filter((key) => !schema[key](object[key]))
    .map((key) => new Error(`${key} is invalid.`));

export async function getModuleTerms(moduleCode) {
  const sectionColRef = collection(db, "Modules", moduleCode, "Sections");
  const querySnapshot = await getDocs(sectionColRef);

  let terms = [];

  querySnapshot.forEach((section) => {
    // Transforms `AY2223T1G1` to `AY2223/1`
    const term = section.id.split("G")[0].split("T").join("/");

    const sectionData = section.data();
    const sectionTerm = {
      term: term,
      ...sectionData,
    };
    terms.push(sectionTerm);
  });

  if (terms.length > 0) {
    console.log(terms);
  } else {
    console.log("No data or query error");
  }
  return terms;
}

//get a list of modules like: ['CS101', 'CS102', 'IS216']
export async function returnModuleArray() {
  const modules = collection(db, "Modules");
  const q = query(modules, where("code", "!=", ""));

  const querySnapshot = await getDocs(q);
  let modulelist = [];
  querySnapshot.forEach((doc) => {
    modulelist.push(doc.id);
  });
  if (modulelist.length > 0) {
    console.log(modulelist);
    return modulelist;
  } else {
    console.log("No data or query error");
  }
}

//return every single module into an array of object
// 0: {prerequisites:{...}, ...}
export async function returnModuleObject() {
  const modules = collection(db, "Modules");
  const q = query(modules, where("code", "!=", ""));

  const querySnapshot = await getDocs(q);
  let modulelist = [];
  for (let i = 0; i < querySnapshot.size; i++) {
    let moduleData = querySnapshot.docs[i].data();
    const terms = await getModuleTerms(querySnapshot.docs[i].id);
    moduleData.terms = terms;
    modulelist.push(moduleData);
  }

  if (modulelist.length > 0) {
    console.log("modulelist:", modulelist);
    return modulelist;
  } else {
    console.log("No data or query error");
  }
}

//call the full details of each course by course code;
//returns the object of the whole course
export async function getFullCoursebyCode(code) {
  const docRef = doc(db, "Modules", code);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let moduleData = docSnap.data();
    console.log("Document data:", moduleData);
    const terms = await getModuleTerms(code);
    moduleData.terms = terms;
    return moduleData;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

//call the full details of each course by course name;
//returns the object of the whole course
export async function getFullCoursebyName(name) {
  const module = collection(db, "Modules");
  const q = query(module, where("name", "==", name));

  const querySnapshot = await getDocs(q);
  let moduleVal = "";
  querySnapshot.forEach((doc) => {
    moduleVal = doc.data();
  });
  if (moduleVal) {
    console.log(moduleVal);
  } else {
    console.log("No data or query error");
  }
}

//call the course name of each course by course code;
//returns a string of the course name
export async function getCourseName(code) {
  const docRef = doc(db, "Modules", code);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log(docSnap.data().name);
    return docSnap.data().name;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

//call the course description of each course by course code;
//returns an object of the long & short description
// .long for long description and .short for short description
export async function getCourseDescription(code) {
  const docRef = doc(db, "Modules", code);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log(docSnap.data().description);
    return docSnap.data().description;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

//call the course link of each course by course code;
//returns a string of the link
export async function getCourseLink(code) {
  const docRef = doc(db, "Modules", code);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log(docSnap.data().link);
    return docSnap.data().link;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

//call the course prerequisite of each course by course code;
//returns an object.
//to get the string of each pre-req, append: .ref and iterate through the objects. the module code is in the "path" field like "Modules/IS113"
export async function getCoursePrerequisite(code) {
  const docRef = doc(db, "Modules", code);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log(docSnap.data().prerequisites);
    return docSnap.data().prerequisites;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

//---------------------------------------Professor Collection---------------------------------------------

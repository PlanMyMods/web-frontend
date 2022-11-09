import { db } from "@/firebase.js";
import {
  collection,
  query,
  where,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore";

//------------------------------------Module Collection-------------------------------------------

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
      assessment: sectionData.assessment,
      exam: sectionData.exam,
      recommended: sectionData.recommended,
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

////get a list of modules like: ['Web Application Development 2', 'Introduction to Programming', ...]
export async function returnNameArray() {
  const modules = collection(db, "Modules");
  const q = query(modules, where("name", "!=", ""));

  const querySnapshot = await getDocs(q);
  let namelist = [];
  querySnapshot.forEach((doc) => {
    namelist.push(doc.data().name);
  });
  if (namelist.length > 0) {
    console.log(namelist);
    return namelist;
  } else {
    console.log("No data or query error");
  }
}

////get a list of modules like: ['Web Application Development 2', 'Introduction to Programming', ...]
export async function returnCodeNameObject() {
  const modules = collection(db, "Modules");
  const q = query(modules, where("name", "!=", ""));

  const querySnapshot = await getDocs(q);
  let namelist = [];
  querySnapshot.forEach((doc) => {
    var tempObj = {};
    tempObj.code = doc.id
    tempObj.name= doc.id.toLowerCase() + doc.data().name.toLowerCase();
    namelist.push(tempObj)
    //namelist[doc.id] = doc.id + doc.data().name;
  });
  //if (Object.keys(namelist).length > 0) {
  if (namelist.length > 0) {
    console.log(namelist);
    return namelist;
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
    console.log(modulelist);
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
    console.log("Document data:", docSnap.data());
    return docSnap.data();
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

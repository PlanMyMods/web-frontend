import db from '../firebase.js';
import {collection, query, where, doc, getDocs, onSnapshot} from "firebase/firestore";


//------------------------------------Module Collection-------------------------------------------

//get a list of modules like: ['CS101', 'CS102', 'IS216']
export async function returnModuleArray(){
    const modules = collection(db, "Modules");
    const q = query(modules, where("code", "!=", ""));

    
    const querySnapshot = await getDocs(q);
    let modulelist = [];
    querySnapshot.forEach((doc) => {
        modulelist.push(doc.id)
    })
    if (modulelist.length > 0){
        console.log(modulelist)
        return modulelist
    }
    else{
        console.log("No data or query error")
    }
    
};

//return every single module into an array of object
// 0: {prerequisites:{...}, ...}
export async function returnModuleObject(){
    const modules = collection(db, "Modules");
    const q = query(modules, where("code", "!=", ""));

    const querySnapshot = await getDocs(q);
    let modulelist = [];
    querySnapshot.forEach((doc) =>{
        modulelist.push(doc.data())
    })
    if (modulelist.length > 0){
        console.log(modulelist)
        return modulelist
    }
    else{
        console.log("No data or query error")
    }

}

//call the full details of each course by course code;
//returns the object of the whole course
export async function getFullCoursebyCode(code){
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
export async function getFullCoursebyName(name){
    const module = collection(db, "Modules");
    const q = query(module, where("name", "==", name));

    const querySnapshot = await getDocs(q);
    let moduleVal = "";
    querySnapshot.forEach((doc) =>{
        moduleVal = doc.data()
    })
    if (moduleVal){
        console.log(moduleVal)
    }
    else{
        console.log("No data or query error")
    }
}

//call the course name of each course by course code;
//returns a string of the course name
export async function getCourseName(code){
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
export async function getCourseDescription(code){
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
export async function getCourseLink(code){
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
export async function getCoursePrerequisite(code){
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

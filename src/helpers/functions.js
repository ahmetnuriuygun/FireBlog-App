import {auth,firebase} from "./firebase";
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { getDatabase, set, ref, push, onValue, remove, update} from "firebase/database";
import { useEffect } from "react";
import { useState } from "react";
import { toastErrorNotify, toastSuccessNotify } from "./ToastNotify";




export const createUser = async(registerEmail,registerPassword,navigate) =>{

    try{
        let userCredential = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        )


        console.log(userCredential)
        navigate("/")
        toastSuccessNotify("Registered successfully!");

        
    }catch(err){
        console.log(err)
        toastErrorNotify(err.message);

    }
    
}


export const logIn = async (email,password,navigate) =>{
    
    try{
        let userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        
        navigate("/")
        toastSuccessNotify("Logged in successfully!");

        
        
    }catch(err){
        console.log(err)
        toastErrorNotify(err.message);

    }
}

export const logOut = () =>{
    signOut(auth)
    .then((res)=>{
        console.log(res)
        toastSuccessNotify("Logged out successfully!");

    })
    .catch((error)=>{
        

    });
    
};

export const signUpProvider = (navigate) =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then((result)=>{
        console.log(result)
        navigate("/")
        toastSuccessNotify("Logged in successfully!");

    })
    .catch((error)=>{
        console.log(error)
        toastErrorNotify(error.message);

    })
}

export const AddBlog = (title,url,content,navigate,currentUser) =>{
    const db = getDatabase(firebase)
    const userRef = ref(db,"blog/");
    const newUserRef = push(userRef);
    set(newUserRef,{
        title:title,
        url:url,
        content:content,
        user:currentUser,
    });
    toastSuccessNotify("Added blog Succesfully!");
    
    navigate("/")
}

export const useFetch = () =>{
    const [blogs,setBlogs] = useState()
    const [isLoading,setIsLoading] = useState()
    useEffect(()=>{
        const db = getDatabase(firebase);
        const userRef = ref(db,"blog/")
        onValue(userRef,(snapshot)=>{
            const data = snapshot.val();
            const userArray = []
            
            for (let id in data){
                userArray.push({id,...data[id]})
                setBlogs(userArray)
                setIsLoading(false)
            }
        })
    },[])
    return{blogs,isLoading}
}

export const DeleteBlog = (id,navigate) =>{
    
    const db =getDatabase(firebase);
    remove(ref(db,"blog/"+id));
    navigate("/");
    toastErrorNotify("Deleted Blog Succefully");

    
}

export const UpdateUser =(id,updateTitle,updateUrl,updateContent,user) =>{
    const db = getDatabase(firebase)
    const updatesData = {
        title:updateTitle,
        url:updateUrl,
        content:updateContent,
        user:user
    }
    const updates = {}
    updates["blog/"+id]=updatesData
    toastSuccessNotify("Updated Blog Succesfully!");

    return update(ref(db),updates)
    
}

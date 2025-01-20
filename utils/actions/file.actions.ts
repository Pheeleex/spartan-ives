'use server'
import { Property } from "@/types";
import { db, storage } from "@/utils/firebase";
import {  collection, getDocs, query } from "firebase/firestore"
import { getDownloadURL, listAll, ref } from "firebase/storage";


export const fetchListings = async () => {
try {
    const propertiesRef = collection(db, 'Properties')  //create var for firebase collection
   
const propertyQuery = query(propertiesRef) //order documents in the collection based on time created in descending order
const querySnapshot = await getDocs(propertyQuery)

const listingData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
        id: doc.id,
})) as Property[]

const propertiesWithImages = await Promise.all(listingData.map(async(property) => {
    let images: string[] = [];
      const imagePath = property.ImagePath || property.id;
      const imageListRef = ref(storage, `${imagePath}/`);
      console.log(images, 'images')

      try {
        const imageList = await listAll(imageListRef);
        images = await Promise.all(imageList.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return url;
        }));
      } catch (error) {
        console.error(`Error fetching images for property ${property.id}:`, error);
      }

      return { ...property, images };
}))
console.log('propertieswithimages', propertiesWithImages)
return propertiesWithImages
} catch (error) {
    console.error('Error fetching properties:', error);
}
}
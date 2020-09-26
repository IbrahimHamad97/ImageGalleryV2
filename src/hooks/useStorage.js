import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config';

export const useStorage = (file) => {
    const [progress, setprogress] = useState(0);
    const [error, setError] = useState(null);
    // to get back the image url after it is uploaded
    const [url, setUrl] = useState(null);

    // every time we have a new file, this function will run
    useEffect(() => {
        // references (creating a ref for the file in the storage)
        const storageRef = projectStorage.ref(file.name);

        // to add/ref the collection
        const collectionRef = projectFirestore.collection('images');
        // listen to changes. (snapshot is for time of upload in that time)
        // on() teakes 4 args: change, while uploading, error, after uploading
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setprogress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            // we get the url for the image we just uploaded
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            setUrl(url);
            collectionRef.add({
                url,
                createdAt,
            })
        });
    }, [file])

    return {progress, error, url}
}

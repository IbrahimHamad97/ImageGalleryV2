import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

export const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        // this fires every time a chnage happens in the db
        // we use unsub when we no longer need the document
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                // each time we get all the data from the database
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id });
                })
                setDocs(documents);
            })
            return () => unsub();
    }, [collection])
    return { docs };
}

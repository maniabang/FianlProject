import { firestore } from "./firebase";
 

useEffect(() => {
    firestore
      .collection('card') // 생성한 collection 
      .get()
      .then(docs => {
        docs.forEach(doc => {
          console.log(doc.id); 
          console.log(doc.data());
        });
      });
  }, []);
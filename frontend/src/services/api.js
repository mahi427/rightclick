// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   timeout: 10000,
// });

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = Bearer ;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;


import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  increment,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { auth, db, storage } from '../firebase/config';

// Auth Functions
export const registerUser = async (email, password, name, studentClass) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    await updateProfile(user, { displayName: name });
    
    await setDoc(doc(db, 'users', user.uid), {
      name,
      email,
      class: studentClass,
      stats: {
        downloads: 0,
        chaptersCompleted: 0,
        testsTaken: 0,
        averageScore: 0
      },
      createdAt: serverTimestamp(),
      lastActive: serverTimestamp()
    });
    
    return { success: true, user: { uid: user.uid, name, email, class: studentClass } };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update last active
    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, { lastActive: serverTimestamp() });
    
    // Get user profile
    const userDoc = await getDoc(userRef);
    const userData = userDoc.data();
    
    return { 
      success: true, 
      user: { 
        uid: user.uid, 
        name: user.displayName, 
        email: user.email,
        class: userData?.class,
        stats: userData?.stats
      } 
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getUserProfile = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return { success: true, data: userDoc.data() };
    }
    return { success: false, error: 'User not found' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const trackDownload = async (userId, chapterId, chapterName, className) => {
  try {
    // Add to downloads collection
    await addDoc(collection(db, 'downloads'), {
      userId,
      chapterId,
      chapterName,
      className,
      timestamp: serverTimestamp()
    });
    
    // Update user stats
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      'stats.downloads': increment(1)
    });
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getChapterPDFs = async (className) => {
  try {
    const listRef = ref(storage, `pdfs/${className}/`);
    const result = await listAll(listRef);
    const pdfs = await Promise.all(
      result.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        const name = itemRef.name;
        return { name, url };
      })
    );
    return { success: true, pdfs };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// For backward compatibility with existing code
const api = {
  post: async (url, data) => {
    if (url === '/auth/register') {
      const result = await registerUser(data.email, data.password, data.name, data.studentClass);
      if (result.success) {
        return { data: { token: result.user.uid, ...result.user } };
      }
      throw { response: { data: { message: result.error } } };
    }
    
    if (url === '/auth/login') {
      const result = await loginUser(data.email, data.password);
      if (result.success) {
        return { data: { token: result.user.uid, ...result.user } };
      }
      throw { response: { data: { message: result.error } } };
    }
    
    return { data: {} };
  },
  
  get: async (url) => {
    if (url === '/auth/profile') {
      const userId = localStorage.getItem('userId');
      const result = await getUserProfile(userId);
      if (result.success) {
        return { data: result.data };
      }
      throw { response: { data: { message: result.error } } };
    }
    return { data: {} };
  }
};

export default api;
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useState, useContext } from 'react';
import { db } from '../../firebase';
import StyledSearch from './Search.Styled';
import avatar from '../../assets/images/avatar.jpeg';
import { AuthContext } from '../../context/AuthContext';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    );

    try {
      const querySnapshot = await getDocs(q);
      // eslint-disable-next-line no-shadow
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setError(true);
    }
  };

  const handleKey = (e) => {
    // eslint-disable-next-line no-unused-expressions
    e.code === 'Enter' && handleSearch();
  };

  const handleClick = async () => {
    // cek apakah group chat ada di database, jika tidak buat
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const response = await getDoc(doc(db, 'chats', combinedId));

      if (!response.exists()) {
        // buat chat di chats collection
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        // buat user chat
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [`${combinedId}.userInfo`]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', user.uid), {
          [`${combinedId}.userInfo`]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });
      }
    } catch (err) {
      /* empty */
    }

    setUser(null);
    setUsername('');
  };

  return (
    <StyledSearch>
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {error && <span>User not found</span>}
      {user && (
        <div className="userChat" onClick={handleClick}>
          <img src={user.photoURL || avatar} alt="profil pict" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </StyledSearch>
  );
}

export default Search;

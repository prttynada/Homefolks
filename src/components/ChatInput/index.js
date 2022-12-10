/* eslint-disable no-unused-vars */
import { Button } from '@chakra-ui/react';
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useContext, useState } from 'react';
import { FiFileText, FiImage, FiSend } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';
import { db, storage } from '../../firebase';
import StyledChatInput from './ChatInput.Styled';

function ChatInput() {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const metadata = {
        contentType: 'image/jpeg',
      };

      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img, metadata);

      uploadTask.on(
        (err) => {
          // setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [`${data.chatId}.lastMessage`]: {
        text,
      },
      [`${data.chatId}.date`]: serverTimestamp(),
    });

    await updateDoc(doc(db, 'userChats', data.user.uid), {
      [`${data.chatId}.lastMessage`]: {
        text,
      },
      [`${data.chatId}.date`]: serverTimestamp(),
    });

    setText('');
    setImg(null);
  };

  return (
    <>
      <StyledChatInput>
        <input
          type="text"
          placeholder="Mulai chatting..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="send">
          <FiFileText className="icon" />
          <input
            type="file"
            style={{ display: 'none' }}
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <FiImage className="icon" />
          </label>
          <Button size="sm" variant="ghost" onClick={handleSend}>
            <FiSend />
          </Button>
        </div>
      </StyledChatInput>
    </>
  );
}

export default ChatInput;

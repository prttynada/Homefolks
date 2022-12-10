import { useState } from 'react';
import StyledSearch from './Search.Styled';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = () => {};

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };

  return (
    <StyledSearch>
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          alt="profil pict"
        />
        <div className="userChatInfo">
          <span>Nada</span>
        </div>
      </div>
    </StyledSearch>
  );
}

export default Search;

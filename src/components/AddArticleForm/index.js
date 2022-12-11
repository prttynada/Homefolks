/* eslint-disable no-use-before-define */
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import Button from '../ui/Button';
import StyledAddArticleForm from './AddArticleForm.Styled';
import Alert from '../Alert';
import medicine from '../../assets/images/medicine.png';

function AddArticleForm(props) {
  // destructing props
  const { articles, setArticles } = props;
  const navigate = useNavigate();

  // Membuat state object
  const [formData, setFormData] = useState({
    title: '',
    penulis: '',
    picture: '',
    content: '',
  });

  // Membuat fungsi handleChange untuk handle semua input form
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Membuat state object untuk handle error
  const [isFormError, setIsFormError] = useState({
    titleErr: false,
    authorErr: false,
    pictureErr: false,
    contentErr: false,
  });

  function validate() {
    if (title === '') {
      setIsFormError({
        ...isFormError,
        titleErr: true,
      });
      return false;
    } else if (penulis === '') {
      setIsFormError({
        ...isFormError,
        titleErr: false,
        authorErr: true,
      });
      return false;
    } else if (content === '') {
      setIsFormError({
        ...isFormError,
        titleErr: false,
        authorErr: false,
        contentErr: true,
      });
      return false;
    } else if (picture === '') {
      setIsFormError({
        ...isFormError,
        titleErr: false,
        authorErr: false,
        contentErr: false,
        pictureErr: true,
      });
      return false;
    } else {
      setIsFormError({
        ...isFormError,
        titleErr: false,
        authorErr: false,
        contentErr: false,
        pictureErr: false,
      });
      return true;
    }
  }

  function addArticle() {
    // siapkan article yang ingin diinput
    const article = {
      id: uuid(),
      // eslint-disable-next-line object-shorthand
      title: title,
      author: penulis,
      body: content,
      poster: picture,
    };

    setArticles([...articles, article]);
    setFormData({
      title: '',
      penulis: '',
      picture: '',
      content: '',
    });
    navigate('/homefolks/articles');
  }

  // handle form ketika disubmit
  function handleSubmit(e) {
    // mencegah perilaku default: refresh
    e.preventDefault();

    // eslint-disable-next-line no-unused-expressions
    validate() && addArticle();
  }

  const { title, penulis, picture, content } = formData;
  const { titleErr, authorErr, pictureErr, contentErr } = isFormError;

  return (
    <StyledAddArticleForm>
      <section>
        <div className="addArticleForm__left">
          <img src={medicine} alt="placeholder" />
        </div>
        <div className="addArticleForm__right">
          <h2>Add Article</h2>
          <form onSubmit={handleSubmit}>
            <div className="addArticleForm__formEl">
              <label htmlFor="title">Title</label>
              <br />
              <input
                onChange={handleChange}
                name="title"
                id="title"
                type="text"
                value={title}
              />
              {/*
                jika error title tru: muncul errror
                jika tidak, munculkan string kosong */}
              {titleErr && <Alert>Title wajib diisi!</Alert>}
            </div>
            <div className="addArticleForm__formEl">
              <label htmlFor="penulis">Penulis</label>
              <br />
              <input
                onChange={handleChange}
                name="penulis"
                id="penulis"
                type="text"
                value={penulis}
              />
              {authorErr && <Alert>Date wajib diisi!</Alert>}
            </div>
            <div className="addArticleForm__formEl">
              <label htmlFor="content">Content</label>
              <br />
              <textarea
                onChange={handleChange}
                name="content"
                id="content"
                type="text"
                value={content}
              />
              {contentErr && <Alert>Content wajib diisi!</Alert>}
            </div>
            <div className="addArticleForm__formEl">
              <label htmlFor="picture">Picture Link</label>
              <br />
              <input
                onChange={handleChange}
                name="picture"
                id="picture"
                type="text"
                value={picture}
              />
              {pictureErr && <Alert>Link picture wajib diisi!</Alert>}
            </div>
            <Button full>Add Article</Button>
          </form>
        </div>
      </section>
    </StyledAddArticleForm>
  );
}

export default AddArticleForm;

import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/repos';
import PropTypes from 'prop-types';

const User = ({
  user: {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  },
  loading,
  clearUser,
  repos,
  match,
  getUser,
  getRepos,
}) => {
  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link onClick={clearUser} to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>
              <strong>Location:</strong> {location}
            </p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username:</strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company:</strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website:</strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>
            <strong>Followers:</strong> {followers}
          </div>
          <div className='badge badge-success'>
            <strong>Following:</strong> {following}
          </div>
          <div className='badge badge-danger'>
            <strong>Public Repos:</strong> {public_repos}
          </div>
          <div className='badge badge-dark'>
            <strong>Public Gists:</strong> {public_gists}
          </div>
        </div>
        <div className='card'>
          <Repos repos={repos} />
        </div>
      </Fragment>
    );
  }
};

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  clearUser: PropTypes.func.isRequired,
};

export default User;

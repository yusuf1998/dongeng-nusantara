import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import styles from './Profile.module.css';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.profile}>
      <h1>User Profile</h1>
      <div className={styles.profileInfo}>
        <img src={user.avatar || '/default-avatar.png'} alt="User Avatar" className={styles.avatar} />
        <div className={styles.userDetails}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Member since: {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <h3>Stories Read</h3>
          <p>{user.storiesRead || 0}</p>
        </div>
        <div className={styles.stat}>
          <h3>Favorite Category</h3>
          <p>{user.favoriteCategory || 'N/A'}</p>
        </div>
      </div>
      <button className={styles.editButton}>Edit Profile</button>
    </div>
  );
};

export default Profile;
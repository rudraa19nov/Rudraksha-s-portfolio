import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profilePic, setProfilePic] = useState(() => {
    try { return localStorage.getItem('rsc-avatar') || null; } catch { return null; }
  });

  const uploadPic = (file) => new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) return reject(new Error('Select a valid image'));
    if (file.size > 5 * 1024 * 1024) return reject(new Error('Image must be under 5MB'));
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfilePic(e.target.result);
      try { localStorage.setItem('rsc-avatar', e.target.result); } catch {}
      resolve(e.target.result);
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });

  const removePic = () => {
    setProfilePic(null);
    try { localStorage.removeItem('rsc-avatar'); } catch {}
  };

  return (
    <ProfileContext.Provider value={{ profilePic, uploadPic, removePic }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);

import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravat.com/avatar/';
  const formattedEMail = (email).trim().toLowerCase();
  const hash = md5(formattedEMail, { encoding: 'binary' });
  return `${base}${hash}`;
};

export default gravatar;

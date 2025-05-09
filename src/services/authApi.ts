import { type BuisnessAccountType, type PersonalAccountType } from '@/types';
import { auth, db } from '@/config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const signUpBuisnessAccount = async (values: BuisnessAccountType) => {
  const { email, password, city, name } = values;

  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  const buisnessDoc = {
    email,
    name,
    city,
    type: 'buisness',
  };

  await setDoc(doc(db, 'users', user.uid), buisnessDoc);
};

const signUpPersonalAccount = async (values: PersonalAccountType) => {
  const { email, password, firstName, lastName, city, dateOfBirth } = values;

  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  const personalDoc = {
    email,
    firstName,
    lastName,
    city,
    dateOfBirth,
    type: 'personal',
  };

  await setDoc(doc(db, 'users', user.uid), personalDoc);
};

export { signUpBuisnessAccount, signUpPersonalAccount };

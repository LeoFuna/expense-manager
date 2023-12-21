import { db } from "@/db/firebase";
import { IJointAccount } from "@/interfaces/JointAccount";
import { FirestoreDataConverter, doc } from "firebase/firestore";

const jointAccountConverter: FirestoreDataConverter<IJointAccount> = {
  toFirestore(jointAccount: IJointAccount): IJointAccount {
    return {
      ownerEmail: jointAccount.ownerEmail,
    };
  },

  fromFirestore(
    snapshot,
    options
  ): IJointAccount {
    const data = snapshot.data(options)!;
    return {
      ownerEmail: data.ownerEmail,
    };
  },
}

export const jointAccountsRef = (email: string) => 
  doc(db, 'jointAccounts', email)
  .withConverter(jointAccountConverter);
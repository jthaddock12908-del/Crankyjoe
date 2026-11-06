rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{leadId} {
      allow create: if request.resource.data.email is string;
      allow read, update, delete: if false;
    }
  }
}
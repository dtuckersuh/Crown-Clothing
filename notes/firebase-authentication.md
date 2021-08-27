# Firebase + User Authentication

## Firebase Intro

- Utilize Firebase Google Sign in for Sign In component
    - Store auth in App.js to maintain user state
    - Google Authentication allows us to have user persistence
    - oAuth allows other third-party services to sign-in
        - Lowers barrier of entry
    
- Integrated Firestore Database to store and sync data for client- and server-side development
    - Store authenticated users inside database
    - 'uid' of currentUser state object uniquely identifies authenticated user
    - Figure out properties of currentUser we want to add to database
    - A Firestore query will always return us references and snapshots
        - reference represents current location of database
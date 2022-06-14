# Equipment-Record
## Link
[app.equipment-record.com](https://app.equipment-record.com) <- This is the webapp

[equipment-record.com](https://equipment-record.com) #TODO Not even started yet.


## About
  This is a web-app that keeps records of where equipment has gone, who has it, and more.
  I intend to make this private soon...


## Functionality
* Equipment may be checked out a project.
* Each project has 1 or more foremen.
* Foremen and their delegates are allowed to check in and out equipment for only their project.
* Records of who checked out what, where from, where to, and when are recorded and kept for future reference.
* QR-codes and barcodes may be downloaded by authorized users (Boss and Foremen) to create labels.
  
* Individual businesses have their own separate data

## Installation

Clone this repository 
``` bash
npm install

firebase login

npm run build/deploy/deploy-debug

```
Make sure firebase rules allow use

## Dev Installation Other Info

firestore.cors.json contains the cors http codes allowed to access the firebase storage bucket.

Use gsutil to set cors for the bucket, [check the docs](https://cloud.google.com/storage/docs/configuring-cors#gsutil_2)

`
gsutil cors set firestore.cors.json gs://...
`

You will need to create a .env file in this directory with:
```
VITE_CLIENT_PRIVATE_KEY=''
ADMIN_PRIVATE_KEY=''
```
Client private key can be found in Firebase somewhere...
Admin private key can be found with the Admin sdk I think ?

---

## Later TODOs (small things)
- [x] Load small images of the equipment, if user requests full images then they will be loaded.
- [X] [qrious](https://github.com/neocotic/qrious) Use this to give the user printable qr-codes
- [X] Find barcode printing js library 
- [X] Convert all JavaScript to TypeScript for better documentation
- [ ] [exif-js](https://github.com/exif-js/exif-js) When getting qr-code, access location metadata of picture and save to firestore
- [ ] Use [tailwind](https://tailwindcss.com/) css
- [ ] Implement industry grade qr-code scanner
- [X] Equipment attributes
- [ ] Project attributes
- [ ] Equipment templates
- [ ] Project templates
- [ ] Testing
- [ ] [Useful sveltekit utilities](https://fractils.fractal-hq.com/#localStorageStore)
- [ ] Drag and drop to move attributes / images
- [ ] Attributes should have their own table?


## Long term TODOs
- [ ] Use Google Cloud
- [ ] Try out redis
- [ ] Use GraphQL
- [ ] GraphQL with MongoDB, PostgreSQL, Sqlite?
- [ ] rich text editors [quilljs](https://github.com/quilljs/quill/) [tiptap](https://tiptap.dev/)
- [ ] files [filedrop](https://www.npmjs.com/package/filedrop-svelte)

